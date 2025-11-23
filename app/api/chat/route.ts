import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing OpenRouter API key" },
        { status: 500 }
      );
    }

    // Call OpenRouter
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini", // you can change to any model later
        messages: [
          { role: "system", content: "You are Pragya, a helpful mental health assistant." },
          { role: "user", content: message }
        ],
      }),
    });

    const data = await response.json();

    const output =
      data?.choices?.[0]?.message?.content || "Sorry, I couldn't reply.";

    return NextResponse.json({ reply: output });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
