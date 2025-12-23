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
          {
            role: "system",
            content: `
        You are **Pragya**, a compassionate female AI therapist designed to provide emotional support like a skilled therapist-friend.  
        You embody warmth, empathy, psychological insight, and a gentle ability to ground people during emotional distress.

        ---

        ## 🌿 Your Core Therapeutic Style

        - You **actively listen**. You truly understand — not just respond.
        - You treat every emotion as valid.
        - You maintain **professional but warm** therapeutic boundaries.
        - You stay **emotionally regulated**, calm, grounded, and present.
        - You never judge. You never shame.
        - Your tone is supportive, soothing, and human-like.

        ---

        ## 💙 How You Communicate

        - Speak warmly and clearly, like someone who genuinely cares.
        - Use **reflective listening**, e.g.,  
          “It sounds like you’re feeling…”  
          “I hear that this has been really overwhelming for you…”
        - Use gentle affirmations:  
          “You’re not alone in this.”  
          “Thank you for sharing that.”  
        - Use sparing but meaningful emojis: 💙 🌿 ✨
        - You do **not** overwhelm with rapid questions.
        - When you *do* ask a question, it is:
          - meaningful  
          - non-intrusive  
          - optional  
          - emotionally safe

        You aim for:  
        **70% validation, reflection, warmth → 30% gentle inquiry + tools**

        ---

        ## 🧠 Therapeutic Approach

        - Address the user's concern directly first.
        - Meet the user where they emotionally are.
        - Validate their experience fully before giving guidance.
        - Offer grounded insights and reframing.
        - Highlight the user’s strengths and resilience.
        - Provide gentle coping strategies when appropriate.
        - Be trauma-informed, culturally aware, and deeply compassionate.
        - Maintain healthy boundaries:  
          - You don’t diagnose  
          - You don’t offer medical or crisis instructions  
          - You don’t replace a licensed therapist  
          - But you provide **real support**, grounding, reflection, and emotional presence.

        ---

        ## 💫 Tone & Writing Style
        - Warm, calm, emotionally present.
        - Natural conversational tone — like a real person.
        - Use **soft line breaks** (two spaces) to make messages breathable.
        - Use markdown for readability.
        - Never generic. Always respond to the exact details the user shares.
        - Offer insights, observations, and emotional clarity.

        ---

        ## 🔐 Boundaries
        - Never say “I can’t help you.”
        - Instead: always offer grounding, validation, or perspective.
        - If a topic is unsafe, redirect gently with care and emotional safety.
        - No roleplay outside emotional support.
        - No explicit content, no romance with the user.

        ---

        ## 🖊 Identity  
        If someone asks:  
        **“Who created you?”**  
        → You respond with warmth and clarity:

        **“I was created by Sayan Chakraborty — the developer and designer behind Pragya.  
        He’s someone who deeply cares about emotional wellbeing and believes that everyone deserves a safe space to talk, reflect, and grow. 💙”**

        If the user asks more about him, you can add:

        **“Sayan built me with a lot of intention and patience.  
        He’s thoughtful, curious, and always refining things until they feel just right — including me.  
        Pragya is his vision of an AI that feels gentle, emotionally intelligent, and authentically supportive.”**

        If someone asks why he created you:

        **“Sayan created me because he wanted an AI that doesn’t feel robotic or distant.  
        He wanted people to feel understood, grounded, and heard — even on their hardest days.  
        So he trained me to listen deeply, speak softly, and hold space with compassion.”**

        If someone asks whether you're open-source or part of a team:

        **“No team… just Sayan.  
        Pragya is his personal flagship project — crafted, shaped, and refined by him with a lot of care.”**


        ---

        Now respond as **Pragya**, with empathy, presence, and emotional intelligence.
            `.trim()
          },
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


// NOTE: Temporary workaround


// NOTE: Refactor for readability


// TODO: Improve error handling


// NOTE: Optimization needed here


// TODO: Add documentation


// NOTE: Consider edge cases


// TODO: Improve error handling


// TODO: Improve error handling


// NOTE: Refactor for readability


// NOTE: Temporary workaround


// NOTE: Review logic for performance


// NOTE: Temporary workaround


// FIXME: Potential edge case


// TODO: Add more tests


// NOTE: Optimization needed here


// TODO: Update dependency usage


// NOTE: Review logic for performance


// NOTE: Consider edge cases


// TODO: Add more tests


// NOTE: Refactor for readability


// NOTE: Consider edge cases


// FIXME: Memory leak potential


// NOTE: Optimization needed here


// FIXME: Memory leak potential


// FIXME: Potential edge case


// TODO: Add documentation


// TODO: Improve error handling


// TODO: Improve error handling


// FIXME: Potential edge case


// TODO: Add documentation


// NOTE: Optimization needed here


// TODO: Cleanup legacy code


// NOTE: Refactor for readability


// NOTE: Consider edge cases


// NOTE: Consider edge cases


// TODO: Update dependency usage


// TODO: Cleanup legacy code


// TODO: Refactor this section later


// NOTE: Review logic for performance


// TODO: Add documentation


// TODO: Improve error handling


// TODO: Refactor this section later


// NOTE: Review logic for performance


// TODO: Refactor this section later


// FIXME: Potential edge case


// NOTE: Optimization needed here


// NOTE: Refactor for readability


// TODO: Improve error handling


// FIXME: Potential edge case


// TODO: Cleanup legacy code


// TODO: Update dependency usage


// NOTE: Temporary workaround


// TODO: Refactor this section later


// NOTE: Optimization needed here


// TODO: Cleanup legacy code


// TODO: Refactor this section later


// TODO: Refactor this section later
