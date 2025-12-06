import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { supabase } from "@/lib/supabase";

// Get or create user in Supabase
async function getOrCreateUser(clerkId: string, email: string) {
    const { data: existingUser } = await supabase
        .from('users')
        .select('*')
        .eq('clerk_id', clerkId)
        .single();

    if (existingUser) return existingUser;

    const { data: newUser, error } = await supabase
        .from('users')
        .insert({ clerk_id: clerkId, email })
        .select()
        .single();

    if (error) throw error;
    return newUser;
}

// GET - Fetch all chats for the logged-in user
export async function GET() {
    try {
        const { userId, sessionClaims } = await auth();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const email = sessionClaims?.email as string || '';
        const user = await getOrCreateUser(userId, email);

        const { data: chats, error } = await supabase
            .from('chats')
            .select(`
        id,
        title,
        created_at,
        messages (
          id,
          sender,
          message,
          created_at
        )
      `)
            .eq('user_id', user.id)
            .order('created_at', { ascending: false });

        if (error) throw error;

        return NextResponse.json({ chats });
    } catch (error) {
        console.error("Error fetching chats:", error);
        return NextResponse.json({ error: "Failed to fetch chats" }, { status: 500 });
    }
}

// POST - Create a new chat
export async function POST(req: Request) {
    try {
        const { userId, sessionClaims } = await auth();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { title, messages } = await req.json();
        const email = sessionClaims?.email as string || '';
        const user = await getOrCreateUser(userId, email);

        // Create chat
        const { data: chat, error: chatError } = await supabase
            .from('chats')
            .insert({ user_id: user.id, title })
            .select()
            .single();

        if (chatError) throw chatError;

        // Create messages
        if (messages && messages.length > 0) {
            const messagesData = messages.map((msg: any) => ({
                chat_id: chat.id,
                sender: msg.sender,
                message: msg.message
            }));

            const { error: messagesError } = await supabase
                .from('messages')
                .insert(messagesData);

            if (messagesError) throw messagesError;
        }

        return NextResponse.json({ chat });
    } catch (error) {
        console.error("Error creating chat:", error);
        return NextResponse.json({ error: "Failed to create chat" }, { status: 500 });
    }
}

// DELETE - Delete a chat
export async function DELETE(req: Request) {
    try {
        const { userId } = await auth();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const chatId = searchParams.get('id');

        if (!chatId) {
            return NextResponse.json({ error: "Chat ID required" }, { status: 400 });
        }

        const { error } = await supabase
            .from('chats')
            .delete()
            .eq('id', chatId);

        if (error) throw error;

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting chat:", error);
        return NextResponse.json({ error: "Failed to delete chat" }, { status: 500 });
    }
}


// NOTE: Temporary workaround


// NOTE: Refactor for readability
