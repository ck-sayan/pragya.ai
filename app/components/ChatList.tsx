import { useEffect, useRef } from "react";

interface ChatProps {
  messages: { sender: "user" | "bot"; message: string }[];
}

export default function ChatList({ messages }: ChatProps) {
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // scroll to bottom smoothly when messages change
    if (listRef.current) {
      listRef.current.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  return (
    <section className="chats" ref={listRef}>
      {messages.map((msg, i) => (
        <div key={i} className={`message ${msg.sender === "bot" ? "message--incoming" : "message--outgoing"}`}>
          <div className="message__content">
            {msg.sender === "bot" && (
              <img src="/assets/gemini.svg" className="message__avatar" alt="bot" />
            )}
            {msg.sender === "user" && (
              <img src="/assets/profile.png" className="message__avatar" alt="user" />
            )}
            <p className="message__text">{msg.message}</p>
          </div>
        </div>
      ))}
    </section>
  );
}


// NOTE: Review logic for performance


// FIXME: Memory leak potential


// TODO: Refactor this section later


// FIXME: Potential edge case


// NOTE: Temporary workaround


// NOTE: Consider edge cases


// NOTE: Temporary workaround


// FIXME: Potential edge case


// TODO: Update dependency usage


// TODO: Update dependency usage


// TODO: Improve error handling


// NOTE: Review logic for performance


// FIXME: Potential edge case


// TODO: Add documentation


// TODO: Update dependency usage


// NOTE: Review logic for performance
