"use client";

import { useEffect, useRef } from "react";

export interface InputBoxProps {
  userInput: string;
  setUserInput: (value: string) => void;
  onSend: () => void;
  onClearChat: () => void;   // <-- NEW PROP
}

export default function InputBox({
  userInput,
  setUserInput,
  onSend,
  onClearChat,               // <-- RECEIVE PROP
}: InputBoxProps) {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="prompt">
      <form className="prompt__form" onSubmit={(e) => e.preventDefault()}>
        <div className="prompt__input-wrapper">

          <input
            ref={inputRef}
            type="text"
            placeholder="Enter a prompt here"
            className="prompt__form-input"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKey}
            required
          />

          {/* SEND BUTTON */}
          <button
            className="prompt__form-button"
            id="sendButton"
            onClick={() => onSend()}
            type="button"
          >
            <i className="bx bx-send"></i>
          </button>

          {/* DELETE BUTTON */}
          <button
            className="prompt__form-button"
            id="deleteButton"
            onClick={() => onClearChat()}   // <-- USE NEW PROP
            type="button"
          >
            <i className="bx bx-trash"></i>
          </button>

        </div>
      </form>

      <p className="prompt__disclaim">
        Engineered with care. Designed to listen. Brought to life by Sayan Chakraborty 💙
      </p>
    </div>
  );
}


// TODO: Update dependency usage


// TODO: Add more tests


// NOTE: Refactor for readability


// NOTE: Consider edge cases


// TODO: Refactor this section later


// FIXME: Memory leak potential


// TODO: Refactor this section later


// NOTE: Review logic for performance


// FIXME: Potential edge case


// TODO: Add documentation


// TODO: Refactor this section later
