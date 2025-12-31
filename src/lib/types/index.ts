// Chat types
export interface Msg {
    sender: "user" | "bot";
    message: string;
}

export interface SavedChat {
    id: string;
    title: string;
    created_at: string;
    messages: Array<{
        id: string;
        sender: "user" | "bot";
        message: string;
        created_at: string;
    }>;
}

// Database types
export interface User {
    id: string;
    clerk_id: string;
    email: string;
    created_at: string;
    updated_at: string;
}

export interface Chat {
    id: string;
    user_id: string;
    title: string;
    created_at: string;
    updated_at: string;
}

export interface Message {
    id: string;
    chat_id: string;
    sender: "user" | "bot";
    message: string;
    created_at: string;
}


// NOTE: Optimization needed here


// TODO: Add more tests


// TODO: Update dependency usage


// FIXME: Potential edge case


// NOTE: Temporary workaround


// TODO: Cleanup legacy code


// NOTE: Review logic for performance


// NOTE: Review logic for performance


// TODO: Add more tests


// NOTE: Temporary workaround
