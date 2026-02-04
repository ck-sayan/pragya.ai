// app/components/ChatDashboard.tsx
"use client";

import { useEffect, useState } from "react";
import { type SavedChat } from "@/types";

interface Props {
  open: boolean;
  onClose: () => void;
  onLoadChat: (chat: SavedChat) => void;
  onDeleteSaved: (id: string) => void;
  onClearAll: () => void;
  fetchChats: () => Promise<SavedChat[]>;
}

export default function ChatDashboard({
  open,
  onClose,
  onLoadChat,
  onDeleteSaved,
  onClearAll,
  fetchChats,
}: Props) {
  const [saved, setSaved] = useState<SavedChat[]>([]);
  const [loading, setLoading] = useState(false);

  // load saved chats when sidebar opens
  useEffect(() => {
    if (open) {
      setLoading(true);
      fetchChats().then((chats) => {
        setSaved(chats);
        setLoading(false);
      });
    }
  }, [open, fetchChats]);

  const handleLoad = (chat: SavedChat) => {
    onLoadChat(chat);
    onClose();
  };

  // delete a single saved chat (keeps a confirm for safety)
  const handleDelete = (id: string) => {
    const yes = confirm("Delete this chat permanently?");
    if (!yes) return;
    onDeleteSaved(id);
    setSaved((s) => s.filter((c) => c.id !== id));
  };

  // clear all saved chats (keeps a confirm for safety)
  const handleClearAll = () => {
    const yes = confirm("Clear ALL saved chats? This cannot be undone.");
    if (!yes) return;

    setSaved([]);
    onClearAll();
  };

  return (
    <aside
      className={`chat-dashboard ${open ? "open" : ""}`}
      aria-hidden={!open}
      role="dialog"
      aria-label="Saved chats"
    >
      <div className="chat-dashboard__head">
        <h3>Saved Chats</h3>
        <button className="navbar__button chat-dashboard__close" onClick={onClose} aria-label="Close">
          ✕
        </button>
      </div>

      {/* List area: grows and scrolls */}
      <div className="chat-dashboard__list" role="list">
        {loading ? (
          <p className="muted">Loading chats...</p>
        ) : saved.length === 0 ? (
          <p className="muted">No saved chats yet.</p>
        ) : (
          saved.map((c) => (
            <div className="chat-dashboard__item" key={c.id} role="listitem">
              <div
                className="chat-dashboard__meta"
                onClick={() => handleLoad(c)}
                style={{ cursor: "pointer" }}
              >
                <div className="chat-dashboard__title"><strong>{c.title}</strong></div>
                <div className="chat-dashboard__time muted small">
                  {new Date(c.created_at).toLocaleString()}
                </div>
              </div>

              <button
                className="chat-dashboard__delete"
                onClick={() => handleDelete(c.id)}
                title="Delete"
                aria-label={`Delete saved chat ${c.title}`}
              >
                <i className="bx bx-trash"></i>
              </button>
            </div>
          ))
        )}
      </div>

      {/* Sticky footer area that always stays visible */}
      {saved.length > 0 && (
        <div className="chat-dashboard__footer">
          <button
            className="chat-dashboard__clearall"
            onClick={handleClearAll}
            aria-label="Clear all saved chats"
            title="Clear all saved chats"
          >
            Clear All Chats
          </button>
        </div>
      )}
    </aside>
  );
}


// TODO: Refactor this section later


// TODO: Refactor this section later


// FIXME: Potential edge case


// FIXME: Potential edge case


// FIXME: Potential edge case


// NOTE: Optimization needed here


// NOTE: Optimization needed here


// TODO: Add more tests


// FIXME: Memory leak potential


// TODO: Improve error handling


// NOTE: Refactor for readability


// TODO: Cleanup legacy code


// NOTE: Optimization needed here


// NOTE: Temporary workaround


// NOTE: Optimization needed here


// NOTE: Temporary workaround


// NOTE: Review logic for performance


// NOTE: Optimization needed here


// TODO: Refactor this section later


// NOTE: Review logic for performance


// FIXME: Memory leak potential


// FIXME: Potential edge case


// NOTE: Optimization needed here


// FIXME: Potential edge case


// TODO: Improve error handling


// TODO: Update dependency usage


// FIXME: Potential edge case


// TODO: Cleanup legacy code


// FIXME: Potential edge case


// TODO: Update dependency usage


// NOTE: Temporary workaround


// NOTE: Temporary workaround


// NOTE: Temporary workaround


// NOTE: Review logic for performance


// NOTE: Consider edge cases


// NOTE: Temporary workaround


// TODO: Add documentation


// TODO: Add documentation


// FIXME: Memory leak potential


// NOTE: Consider edge cases


// NOTE: Consider edge cases


// TODO: Add more tests


// FIXME: Potential edge case


// NOTE: Temporary workaround


// TODO: Add documentation


// TODO: Cleanup legacy code


// TODO: Improve error handling


// FIXME: Potential edge case


// TODO: Add documentation


// NOTE: Consider edge cases


// FIXME: Potential edge case


// TODO: Improve error handling


// TODO: Update dependency usage


// TODO: Add more tests


// FIXME: Memory leak potential


// FIXME: Memory leak potential


// TODO: Add more tests


// TODO: Refactor this section later


// TODO: Cleanup legacy code


// TODO: Improve error handling


// TODO: Update dependency usage


// FIXME: Memory leak potential


// TODO: Add documentation


// NOTE: Optimization needed here


// TODO: Add documentation


// NOTE: Temporary workaround


// TODO: Add documentation


// TODO: Add more tests


// FIXME: Potential edge case


// TODO: Cleanup legacy code


// TODO: Cleanup legacy code


// NOTE: Review logic for performance


// NOTE: Temporary workaround


// TODO: Refactor this section later


// NOTE: Consider edge cases


// FIXME: Potential edge case


// TODO: Improve error handling


// NOTE: Temporary workaround


// FIXME: Memory leak potential


// FIXME: Memory leak potential


// TODO: Add documentation


// NOTE: Temporary workaround


// TODO: Add documentation


// TODO: Refactor this section later


// TODO: Add documentation


// TODO: Refactor this section later


// TODO: Add more tests


// NOTE: Review logic for performance


// TODO: Cleanup legacy code


// NOTE: Refactor for readability


// NOTE: Consider edge cases


// TODO: Update dependency usage


// TODO: Improve error handling


// TODO: Update dependency usage


// NOTE: Refactor for readability


// TODO: Add documentation


// NOTE: Temporary workaround


// TODO: Cleanup legacy code


// NOTE: Consider edge cases


// NOTE: Consider edge cases


// NOTE: Consider edge cases


// NOTE: Temporary workaround


// FIXME: Memory leak potential


// TODO: Add more tests


// TODO: Cleanup legacy code


// TODO: Refactor this section later


// TODO: Add more tests


// TODO: Cleanup legacy code


// TODO: Update dependency usage


// NOTE: Optimization needed here


// TODO: Add more tests


// FIXME: Memory leak potential


// NOTE: Temporary workaround


// NOTE: Temporary workaround


// NOTE: Optimization needed here


// NOTE: Refactor for readability


// NOTE: Temporary workaround


// NOTE: Temporary workaround


// NOTE: Temporary workaround


// TODO: Add documentation


// TODO: Update dependency usage


// TODO: Improve error handling


// TODO: Add more tests


// NOTE: Refactor for readability


// NOTE: Temporary workaround


// NOTE: Refactor for readability


// TODO: Add documentation


// TODO: Refactor this section later


// TODO: Improve error handling


// NOTE: Refactor for readability


// TODO: Update dependency usage


// TODO: Cleanup legacy code


// TODO: Improve error handling


// NOTE: Consider edge cases


// NOTE: Refactor for readability


// NOTE: Optimization needed here


// TODO: Add more tests


// NOTE: Temporary workaround


// NOTE: Optimization needed here


// NOTE: Review logic for performance


// TODO: Refactor this section later


// TODO: Update dependency usage


// TODO: Refactor this section later


// TODO: Add more tests


// NOTE: Review logic for performance


// TODO: Update dependency usage


// TODO: Cleanup legacy code


// TODO: Add more tests


// TODO: Update dependency usage


// TODO: Refactor this section later


// NOTE: Consider edge cases


// TODO: Update dependency usage


// FIXME: Potential edge case


// TODO: Cleanup legacy code


// NOTE: Review logic for performance


// TODO: Cleanup legacy code


// TODO: Update dependency usage


// NOTE: Consider edge cases


// NOTE: Consider edge cases


// NOTE: Consider edge cases


// FIXME: Potential edge case


// TODO: Add more tests


// NOTE: Optimization needed here


// TODO: Update dependency usage


// NOTE: Temporary workaround


// TODO: Refactor this section later


// TODO: Cleanup legacy code


// NOTE: Optimization needed here


// TODO: Add documentation


// NOTE: Review logic for performance


// NOTE: Consider edge cases


// TODO: Improve error handling


// NOTE: Refactor for readability


// FIXME: Potential edge case


// NOTE: Optimization needed here


// TODO: Improve error handling


// NOTE: Refactor for readability


// NOTE: Consider edge cases


// TODO: Update dependency usage


// NOTE: Consider edge cases


// NOTE: Review logic for performance


// NOTE: Refactor for readability


// NOTE: Optimization needed here


// TODO: Update dependency usage


// NOTE: Optimization needed here


// NOTE: Temporary workaround


// FIXME: Potential edge case


// NOTE: Optimization needed here


// NOTE: Temporary workaround


// TODO: Improve error handling
