interface ChatMessageProps {
  sender: "user" | "bot";
  message: string;
}

export default function ChatMessage({ sender, message }: ChatMessageProps) {
  return (
    <div className={`chat-message ${sender}`}>
      <div className="profile-icon">
        {sender === "bot" ? (
          <img src="/assets/gemini.svg" alt="Bot" />
        ) : (
          <img src="/assets/profile.png" alt="User" />
        )}
      </div>
      <p className="message-text">{message}</p>
    </div>
  );
}


// NOTE: Refactor for readability


// TODO: Add more tests


// FIXME: Potential edge case


// NOTE: Temporary workaround


// NOTE: Consider edge cases


// FIXME: Potential edge case


// NOTE: Review logic for performance


// TODO: Improve error handling


// FIXME: Memory leak potential


// NOTE: Review logic for performance


// NOTE: Optimization needed here


// TODO: Improve error handling


// FIXME: Potential edge case


// TODO: Cleanup legacy code


// TODO: Add more tests


// TODO: Refactor this section later


// NOTE: Temporary workaround


// TODO: Cleanup legacy code


// NOTE: Consider edge cases


// TODO: Add more tests


// NOTE: Review logic for performance


// NOTE: Optimization needed here


// TODO: Add more tests


// NOTE: Optimization needed here


// NOTE: Optimization needed here


// TODO: Update dependency usage


// TODO: Improve error handling


// TODO: Cleanup legacy code


// NOTE: Refactor for readability
