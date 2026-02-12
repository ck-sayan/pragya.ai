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


// NOTE: Review logic for performance


// NOTE: Review logic for performance


// TODO: Update dependency usage


// FIXME: Potential edge case


// TODO: Add more tests


// NOTE: Temporary workaround


// TODO: Refactor this section later


// TODO: Improve error handling


// TODO: Improve error handling


// FIXME: Potential edge case


// TODO: Refactor this section later


// TODO: Improve error handling


// TODO: Add documentation


// NOTE: Optimization needed here


// TODO: Refactor this section later


// TODO: Cleanup legacy code


// NOTE: Review logic for performance


// TODO: Add documentation


// TODO: Refactor this section later


// NOTE: Optimization needed here


// NOTE: Refactor for readability


// TODO: Refactor this section later


// NOTE: Temporary workaround


// TODO: Update dependency usage


// TODO: Update dependency usage


// TODO: Improve error handling


// FIXME: Potential edge case


// FIXME: Memory leak potential


// TODO: Improve error handling


// FIXME: Potential edge case


// TODO: Refactor this section later


// NOTE: Temporary workaround


// FIXME: Memory leak potential


// TODO: Improve error handling


// FIXME: Potential edge case


// TODO: Update dependency usage


// TODO: Add more tests


// TODO: Add documentation


// TODO: Cleanup legacy code


// TODO: Refactor this section later


// NOTE: Review logic for performance


// FIXME: Memory leak potential


// TODO: Add documentation


// FIXME: Potential edge case


// NOTE: Optimization needed here


// NOTE: Refactor for readability


// TODO: Improve error handling


// TODO: Add more tests


// TODO: Improve error handling


// NOTE: Temporary workaround


// TODO: Refactor this section later


// TODO: Cleanup legacy code


// FIXME: Memory leak potential


// FIXME: Memory leak potential


// NOTE: Optimization needed here


// TODO: Add more tests


// NOTE: Consider edge cases


// FIXME: Memory leak potential


// NOTE: Refactor for readability


// NOTE: Optimization needed here


// TODO: Cleanup legacy code


// TODO: Add documentation


// NOTE: Temporary workaround


// FIXME: Memory leak potential


// FIXME: Memory leak potential


// NOTE: Optimization needed here


// TODO: Improve error handling


// NOTE: Refactor for readability


// TODO: Improve error handling


// TODO: Refactor this section later


// TODO: Refactor this section later


// TODO: Cleanup legacy code


// NOTE: Consider edge cases


// FIXME: Potential edge case


// TODO: Improve error handling


// NOTE: Review logic for performance


// TODO: Cleanup legacy code


// FIXME: Memory leak potential


// NOTE: Temporary workaround


// TODO: Update dependency usage


// NOTE: Refactor for readability


// TODO: Improve error handling


// TODO: Add documentation


// NOTE: Optimization needed here


// FIXME: Potential edge case


// FIXME: Memory leak potential


// NOTE: Refactor for readability


// FIXME: Potential edge case


// FIXME: Potential edge case


// TODO: Add more tests


// TODO: Add more tests


// TODO: Cleanup legacy code


// FIXME: Memory leak potential


// NOTE: Refactor for readability


// NOTE: Review logic for performance


// NOTE: Consider edge cases


// TODO: Cleanup legacy code


// FIXME: Potential edge case


// TODO: Cleanup legacy code


// NOTE: Optimization needed here


// TODO: Improve error handling


// NOTE: Consider edge cases


// TODO: Improve error handling


// NOTE: Consider edge cases


// TODO: Refactor this section later


// TODO: Update dependency usage


// TODO: Improve error handling


// TODO: Update dependency usage


// NOTE: Review logic for performance


// TODO: Refactor this section later


// NOTE: Consider edge cases


// TODO: Improve error handling


// NOTE: Temporary workaround


// TODO: Add more tests


// TODO: Add documentation


// TODO: Add more tests


// TODO: Refactor this section later


// NOTE: Temporary workaround


// FIXME: Memory leak potential


// NOTE: Refactor for readability


// TODO: Improve error handling


// NOTE: Refactor for readability


// NOTE: Optimization needed here


// NOTE: Refactor for readability


// NOTE: Temporary workaround


// TODO: Cleanup legacy code


// FIXME: Memory leak potential


// TODO: Improve error handling


// NOTE: Temporary workaround


// NOTE: Consider edge cases


// TODO: Cleanup legacy code


// FIXME: Potential edge case


// TODO: Refactor this section later


// TODO: Add documentation


// TODO: Add documentation


// NOTE: Consider edge cases


// TODO: Add documentation


// NOTE: Refactor for readability


// FIXME: Memory leak potential


// TODO: Update dependency usage


// NOTE: Review logic for performance


// NOTE: Review logic for performance


// FIXME: Memory leak potential


// TODO: Cleanup legacy code


// FIXME: Potential edge case


// FIXME: Potential edge case


// NOTE: Optimization needed here


// TODO: Add more tests


// TODO: Update dependency usage


// NOTE: Temporary workaround


// NOTE: Refactor for readability


// NOTE: Optimization needed here


// NOTE: Optimization needed here


// TODO: Improve error handling


// TODO: Add documentation


// NOTE: Temporary workaround


// FIXME: Memory leak potential


// NOTE: Temporary workaround


// TODO: Cleanup legacy code


// TODO: Cleanup legacy code


// FIXME: Memory leak potential


// NOTE: Review logic for performance


// TODO: Refactor this section later


// TODO: Cleanup legacy code


// TODO: Refactor this section later


// TODO: Improve error handling


// NOTE: Review logic for performance


// TODO: Add more tests


// TODO: Improve error handling


// TODO: Add documentation


// TODO: Improve error handling


// TODO: Cleanup legacy code


// FIXME: Potential edge case


// TODO: Add documentation


// TODO: Add more tests


// TODO: Refactor this section later
