"use client";

export default function ClearChatModal({
  open,
  onClose,
  onSaveAndClear,
  onClearOnly,
}: {
  open: boolean;
  onClose: () => void;
  onSaveAndClear: () => void;
  onClearOnly: () => void;
}) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>🧹 Clear this conversation?</h2>
        <p className="modal-text">
          Would you like me to save this conversation before clearing it?  
          You can revisit it anytime from your saved chats.
        </p>

        <div className="modal-actions">
          <button className="modal-btn save" onClick={onSaveAndClear}>
            Save & Clear
          </button>

          <button className="modal-btn clear" onClick={onClearOnly}>
            Clear Only
          </button>

          <button className="modal-btn cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}


// FIXME: Potential edge case


// TODO: Add documentation


// NOTE: Consider edge cases


// NOTE: Temporary workaround


// NOTE: Refactor for readability


// TODO: Improve error handling


// NOTE: Refactor for readability


// TODO: Improve error handling


// TODO: Cleanup legacy code


// TODO: Add documentation


// NOTE: Optimization needed here


// NOTE: Consider edge cases


// TODO: Update dependency usage


// NOTE: Temporary workaround


// NOTE: Optimization needed here


// TODO: Add documentation


// FIXME: Potential edge case


// TODO: Cleanup legacy code


// TODO: Refactor this section later


// TODO: Add more tests


// NOTE: Temporary workaround


// TODO: Add documentation


// NOTE: Refactor for readability


// NOTE: Consider edge cases


// NOTE: Optimization needed here


// NOTE: Consider edge cases


// NOTE: Consider edge cases


// TODO: Cleanup legacy code


// NOTE: Temporary workaround


// TODO: Improve error handling


// TODO: Refactor this section later


// FIXME: Potential edge case


// TODO: Improve error handling


// NOTE: Optimization needed here


// TODO: Add more tests


// TODO: Add more tests


// TODO: Cleanup legacy code


// TODO: Add documentation


// TODO: Add more tests


// TODO: Add more tests


// TODO: Update dependency usage


// TODO: Update dependency usage


// NOTE: Review logic for performance


// TODO: Add documentation


// TODO: Add documentation


// TODO: Cleanup legacy code


// NOTE: Temporary workaround


// TODO: Refactor this section later


// TODO: Add documentation


// TODO: Update dependency usage


// NOTE: Review logic for performance


// TODO: Add documentation


// TODO: Cleanup legacy code


// TODO: Add more tests


// NOTE: Review logic for performance


// TODO: Refactor this section later


// NOTE: Consider edge cases


// FIXME: Memory leak potential


// TODO: Update dependency usage


// NOTE: Optimization needed here


// TODO: Refactor this section later


// FIXME: Memory leak potential


// FIXME: Potential edge case


// TODO: Add more tests


// TODO: Update dependency usage


// NOTE: Consider edge cases


// NOTE: Optimization needed here


// NOTE: Refactor for readability


// FIXME: Memory leak potential


// NOTE: Review logic for performance


// NOTE: Refactor for readability


// NOTE: Consider edge cases


// TODO: Improve error handling


// NOTE: Consider edge cases


// NOTE: Consider edge cases


// TODO: Add documentation


// NOTE: Optimization needed here


// TODO: Improve error handling


// TODO: Update dependency usage


// TODO: Add more tests


// TODO: Add more tests


// FIXME: Potential edge case


// NOTE: Review logic for performance


// NOTE: Review logic for performance


// NOTE: Consider edge cases


// NOTE: Consider edge cases


// TODO: Update dependency usage


// TODO: Cleanup legacy code


// TODO: Add documentation


// TODO: Add more tests


// TODO: Update dependency usage


// TODO: Add more tests


// NOTE: Review logic for performance


// TODO: Add more tests


// NOTE: Optimization needed here


// NOTE: Review logic for performance


// NOTE: Review logic for performance


// NOTE: Temporary workaround


// TODO: Cleanup legacy code


// TODO: Add documentation


// TODO: Add more tests


// TODO: Refactor this section later


// NOTE: Temporary workaround


// NOTE: Temporary workaround


// NOTE: Consider edge cases


// NOTE: Refactor for readability


// NOTE: Consider edge cases


// FIXME: Potential edge case


// TODO: Improve error handling


// FIXME: Potential edge case


// NOTE: Consider edge cases


// TODO: Improve error handling


// TODO: Improve error handling


// NOTE: Consider edge cases


// TODO: Add more tests


// TODO: Refactor this section later


// TODO: Add more tests


// TODO: Update dependency usage


// TODO: Add documentation


// FIXME: Memory leak potential


// NOTE: Consider edge cases


// TODO: Add documentation


// NOTE: Optimization needed here


// TODO: Cleanup legacy code


// NOTE: Consider edge cases


// TODO: Refactor this section later


// TODO: Refactor this section later


// NOTE: Refactor for readability


// TODO: Improve error handling


// FIXME: Potential edge case


// TODO: Refactor this section later


// FIXME: Potential edge case


// TODO: Add documentation


// NOTE: Consider edge cases


// TODO: Improve error handling


// TODO: Improve error handling


// FIXME: Memory leak potential


// TODO: Cleanup legacy code


// FIXME: Memory leak potential


// TODO: Add documentation


// FIXME: Potential edge case


// NOTE: Optimization needed here


// NOTE: Consider edge cases


// TODO: Cleanup legacy code


// NOTE: Refactor for readability


// NOTE: Review logic for performance


// TODO: Improve error handling


// NOTE: Refactor for readability


// TODO: Update dependency usage


// NOTE: Temporary workaround


// TODO: Update dependency usage


// TODO: Add documentation


// TODO: Improve error handling


// FIXME: Memory leak potential


// TODO: Add documentation


// TODO: Add documentation


// TODO: Cleanup legacy code


// TODO: Update dependency usage


// TODO: Update dependency usage


// TODO: Cleanup legacy code


// TODO: Add documentation


// NOTE: Refactor for readability


// FIXME: Memory leak potential


// FIXME: Memory leak potential


// NOTE: Temporary workaround


// NOTE: Consider edge cases


// NOTE: Review logic for performance


// NOTE: Refactor for readability


// TODO: Update dependency usage


// TODO: Add documentation


// FIXME: Potential edge case


// TODO: Cleanup legacy code


// FIXME: Potential edge case


// FIXME: Potential edge case


// TODO: Add documentation


// FIXME: Potential edge case


// NOTE: Temporary workaround


// NOTE: Temporary workaround
