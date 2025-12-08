// app/components/ChatDashboard.tsx
"use client";

import { useEffect, useState } from "react";

export interface SavedChat {
  id: string;
  title: string;
  messages: { sender: "user" | "bot"; message: string }[];
  createdAt: string;
}

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
                  {new Date(c.createdAt).toLocaleString()}
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
