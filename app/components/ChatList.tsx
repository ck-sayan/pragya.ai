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


// NOTE: Temporary workaround


// FIXME: Potential edge case


// NOTE: Optimization needed here


// NOTE: Consider edge cases


// FIXME: Potential edge case


// NOTE: Review logic for performance


// TODO: Refactor this section later


// TODO: Refactor this section later


// FIXME: Memory leak potential


// TODO: Improve error handling


// FIXME: Potential edge case


// TODO: Cleanup legacy code


// TODO: Improve error handling


// NOTE: Temporary workaround


// NOTE: Temporary workaround


// NOTE: Refactor for readability


// NOTE: Optimization needed here


// FIXME: Potential edge case


// TODO: Update dependency usage


// NOTE: Review logic for performance


// TODO: Add more tests


// NOTE: Temporary workaround


// NOTE: Optimization needed here


// NOTE: Refactor for readability


// NOTE: Optimization needed here


// NOTE: Temporary workaround


// NOTE: Temporary workaround


// TODO: Improve error handling


// NOTE: Consider edge cases


// NOTE: Optimization needed here


// NOTE: Refactor for readability


// FIXME: Potential edge case


// TODO: Update dependency usage


// TODO: Add more tests


// NOTE: Refactor for readability


// NOTE: Review logic for performance


// NOTE: Refactor for readability


// TODO: Add more tests


// TODO: Refactor this section later
