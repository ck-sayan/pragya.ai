"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SuggestionCard from "./components/SuggestionCard";
import ChatList from "./components/ChatList";
import InputBox from "./components/InputBox";
import ChatDashboard, { SavedChat } from "./components/ChatDashboard";
import ClearChatModal from "./components/ClearChatModal";

type Msg = { sender: "user" | "bot"; message: string };

export default function Home() {

  const handleClearAllSaved = () => {
  localStorage.setItem("pragya_chats", JSON.stringify([]));
  setCurrentSavedId(null);
};

  const [messages, setMessages] = useState<Msg[]>([]);
  const [userInput, setUserInput] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const [dashOpen, setDashOpen] = useState(false);
  const [currentSavedId, setCurrentSavedId] = useState<string | null>(null);

  const [showClearModal, setShowClearModal] = useState(false);

  const firstMessageSentRef = useRef(false);

  const readSaved = (): SavedChat[] => {
    try {
      const raw = localStorage.getItem("pragya_chats");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const persistChat = (messagesToSave: Msg[], title?: string) => {
    const saved = readSaved();
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const chatTitle =
      title || messagesToSave[0]?.message.slice(0, 40) || "Chat";

    const payload: SavedChat = {
      id,
      title: chatTitle,
      messages: messagesToSave,
      createdAt: new Date().toISOString(),
    };

    saved.unshift(payload);
    localStorage.setItem("pragya_chats", JSON.stringify(saved));
    return id;
  };

  const loadSavedChat = (chat: SavedChat) => {
    setMessages(chat.messages);
    setShowChat(true);
    firstMessageSentRef.current = true;
    setCurrentSavedId(chat.id);
  };

  const deleteSavedById = (id: string) => {
    const saved = readSaved().filter((s) => s.id !== id);
    localStorage.setItem("pragya_chats", JSON.stringify(saved));

    if (currentSavedId === id) {
      setMessages([]);
      setCurrentSavedId(null);
      setShowChat(false);
      firstMessageSentRef.current = false;
    }
  };

  const pushMessage = (m: Msg) => setMessages((p) => [...p, m]);

  const suggestions = [
    { text: "Feeling off today? I'm here to listen.", icon: "bx bx-heart" },
    { text: "Something on your mind? Let's talk it through.", icon: "bx bx-happy" },
    { text: "Rough day? Let’s turn it around!", icon: "bx bx-upside-down" },
    { text: "Had a great day? Share your joy with me!", icon: "bx bx-cool" },
  ];

  useEffect(() => {
    document.body.classList.toggle("hide-header", showChat);
    return () => document.body.classList.remove("hide-header");
  }, [showChat]);

  useEffect(() => {
    const t = localStorage.getItem("theme");
    if (t === "light") document.body.classList.add("light_mode");
  }, []);

  const maybeAutoSaveSession = () => {
    if (!currentSavedId) {
      const id = persistChat(messages);
      setCurrentSavedId(id);
    } else {
      const saved = readSaved();
      const idx = saved.findIndex((s) => s.id === currentSavedId);
      if (idx !== -1) {
        saved[idx].messages = messages;
        localStorage.setItem("pragya_chats", JSON.stringify(saved));
      }
    }
  };

  const handleSuggestion = (text: string) => {
    setUserInput(text);
    if (!firstMessageSentRef.current) {
      setShowChat(true);
      firstMessageSentRef.current = true;
    }
    handleSend(text);
  };

  const handleSend = async (overrideText?: string) => {
    const content = (overrideText ?? userInput ?? "").trim();
    if (!content) return;

    if (!firstMessageSentRef.current) {
      setShowChat(true);
      firstMessageSentRef.current = true;
    }

    pushMessage({ sender: "user", message: content });
    setUserInput("");
    setIsGenerating(true);

    pushMessage({ sender: "bot", message: "Thinking..." });

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content }),
      });
      const data = await res.json();

      setMessages((prev) => {
        const copy = [...prev];
        for (let i = copy.length - 1; i >= 0; i--) {
          if (copy[i].sender === "bot") {
            copy[i] = {
              sender: "bot",
              message: data?.reply ?? "Sorry, couldn't reply.",
            };
            break;
          }
        }
        setTimeout(maybeAutoSaveSession, 250);
        return copy;
      });
    } catch (err) {
      pushMessage({
        sender: "bot",
        message: (err as Error)?.message ?? "Network error",
      });
    } finally {
      setIsGenerating(false);
      setTimeout(maybeAutoSaveSession, 500);
    }
  };

  // ▶️ Custom modal replaces confirm()
  const handleClearCurrent = () => {
    setShowClearModal(true);
  };

  const confirmSaveAndClear = () => {
    if (!currentSavedId) {
      const id = persistChat(messages);
      setCurrentSavedId(id);
    } else {
      const saved = readSaved();
      const idx = saved.findIndex((s) => s.id === currentSavedId);
      if (idx !== -1) {
        saved[idx].messages = messages;
        localStorage.setItem("pragya_chats", JSON.stringify(saved));
      }
    }

    setMessages([]);
    setShowChat(false);
    setCurrentSavedId(null);
    firstMessageSentRef.current = false;
    setShowClearModal(false);
  };

  const confirmClearOnly = () => {
    setMessages([]);
    setShowChat(false);
    setCurrentSavedId(null);
    firstMessageSentRef.current = false;
    setShowClearModal(false);
  };

  const openDashboard = () => setDashOpen(true);

  return (
    <>
      <Navbar onOpenDashboard={openDashboard} />

          <ChatDashboard
      open={dashOpen}
      onClose={() => setDashOpen(false)}
      onLoadChat={loadSavedChat}
      onDeleteSaved={deleteSavedById}
      onClearAll={handleClearAllSaved}   // <-- add this
    />


      <main className="main-wrapper">
        {!showChat && (
          <>
            <Header />
            <div className="suggests">
              {suggestions.map((s, i) => (
                <SuggestionCard
                  key={i}
                  text={s.text}
                  icon={s.icon}
                  onClick={() => handleSuggestion(s.text)}
                />
              ))}
            </div>
          </>
        )}

        <ChatList messages={messages} />
      </main>

      <InputBox
        userInput={userInput}
        setUserInput={setUserInput}
        onSend={() => handleSend()}
        onClearChat={handleClearCurrent}
      />

      <ClearChatModal
        open={showClearModal}
        onClose={() => setShowClearModal(false)}
        onSaveAndClear={confirmSaveAndClear}
        onClearOnly={confirmClearOnly}
      />
    </>
  );
}
