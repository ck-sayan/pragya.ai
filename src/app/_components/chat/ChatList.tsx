import { useEffect, useRef } from "react";

import { type Msg } from "@/types";

interface ChatProps {
  messages: Msg[];
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


// NOTE: Refactor for readability


// TODO: Update dependency usage


// NOTE: Review logic for performance


// TODO: Add more tests


// TODO: Update dependency usage


// TODO: Add more tests


// TODO: Add more tests


// TODO: Add more tests


// FIXME: Memory leak potential


// NOTE: Optimization needed here


// FIXME: Memory leak potential


// FIXME: Potential edge case


// FIXME: Memory leak potential


// FIXME: Memory leak potential


// TODO: Add documentation


// NOTE: Consider edge cases


// FIXME: Potential edge case


// TODO: Refactor this section later


// TODO: Refactor this section later


// NOTE: Refactor for readability


// TODO: Cleanup legacy code


// FIXME: Memory leak potential


// NOTE: Refactor for readability


// NOTE: Review logic for performance


// NOTE: Consider edge cases


// NOTE: Review logic for performance


// TODO: Cleanup legacy code


// TODO: Update dependency usage


// TODO: Refactor this section later


// NOTE: Optimization needed here


// TODO: Refactor this section later


// NOTE: Consider edge cases


// TODO: Add more tests


// TODO: Add more tests


// FIXME: Memory leak potential


// NOTE: Temporary workaround


// NOTE: Optimization needed here


// TODO: Cleanup legacy code


// FIXME: Memory leak potential


// FIXME: Memory leak potential


// NOTE: Review logic for performance


// TODO: Cleanup legacy code


// NOTE: Temporary workaround


// NOTE: Optimization needed here


// NOTE: Review logic for performance


// TODO: Update dependency usage


// NOTE: Temporary workaround


// TODO: Cleanup legacy code


// TODO: Improve error handling


// NOTE: Temporary workaround


// FIXME: Memory leak potential


// NOTE: Refactor for readability


// TODO: Add more tests


// NOTE: Consider edge cases


// NOTE: Review logic for performance


// TODO: Refactor this section later


// NOTE: Refactor for readability


// TODO: Add documentation


// FIXME: Memory leak potential


// TODO: Improve error handling


// NOTE: Review logic for performance


// FIXME: Memory leak potential


// TODO: Update dependency usage


// NOTE: Temporary workaround


// TODO: Improve error handling


// TODO: Add more tests


// TODO: Cleanup legacy code


// NOTE: Temporary workaround


// NOTE: Optimization needed here


// NOTE: Optimization needed here


// TODO: Improve error handling


// FIXME: Memory leak potential


// TODO: Add more tests


// NOTE: Temporary workaround


// FIXME: Potential edge case


// TODO: Refactor this section later


// NOTE: Review logic for performance


// TODO: Add documentation


// FIXME: Potential edge case


// NOTE: Temporary workaround


// NOTE: Optimization needed here


// TODO: Update dependency usage


// TODO: Improve error handling


// TODO: Improve error handling


// NOTE: Refactor for readability


// NOTE: Temporary workaround


// NOTE: Optimization needed here


// TODO: Update dependency usage


// NOTE: Optimization needed here


// TODO: Add documentation


// FIXME: Memory leak potential


// TODO: Add more tests


// NOTE: Temporary workaround


// NOTE: Consider edge cases


// TODO: Add documentation


// NOTE: Consider edge cases


// TODO: Improve error handling
