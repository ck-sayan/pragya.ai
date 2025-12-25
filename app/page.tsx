"use client";

import { useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SuggestionCard from "./components/SuggestionCard";
import ChatList from "./components/ChatList";
import InputBox from "./components/InputBox";
import ChatDashboard, { SavedChat } from "./components/ChatDashboard";
import ClearChatModal from "./components/ClearChatModal";

type Msg = { sender: "user" | "bot"; message: string };

export default function Home() {
  const { isSignedIn, isLoaded } = useUser();

  const [messages, setMessages] = useState<Msg[]>([]);
  const [userInput, setUserInput] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const [dashOpen, setDashOpen] = useState(false);
  const [currentSavedId, setCurrentSavedId] = useState<string | null>(null);
  const [showClearModal, setShowClearModal] = useState(false);

  const firstMessageSentRef = useRef(false);

  // Fetch chats from Supabase
  const fetchChats = async (): Promise<SavedChat[]> => {
    if (!isSignedIn) return [];

    try {
      const res = await fetch("/api/chats");
      const data = await res.json();
      return data.chats || [];
    } catch (error) {
      console.error("Error fetching chats:", error);
      return [];
    }
  };

  // Save chat to Supabase
  const persistChat = async (messagesToSave: Msg[], title?: string) => {
    if (!isSignedIn) return null;

    const chatTitle = title || messagesToSave[0]?.message.slice(0, 40) || "Chat";

    try {
      const res = await fetch("/api/chats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: chatTitle,
          messages: messagesToSave,
        }),
      });

      const data = await res.json();
      return data.chat?.id || null;
    } catch (error) {
      console.error("Error saving chat:", error);
      return null;
    }
  };

  // Load a saved chat
  const loadSavedChat = (chat: SavedChat) => {
    setMessages(chat.messages);
    setShowChat(true);
    firstMessageSentRef.current = true;
    setCurrentSavedId(chat.id);
  };

  // Delete a chat
  const deleteSavedById = async (id: string) => {
    if (!isSignedIn) return;

    try {
      await fetch(`/api/chats?id=${id}`, { method: "DELETE" });

      if (currentSavedId === id) {
        setMessages([]);
        setCurrentSavedId(null);
        setShowChat(false);
        firstMessageSentRef.current = false;
      }
    } catch (error) {
      console.error("Error deleting chat:", error);
    }
  };

  // Clear all chats
  const handleClearAllSaved = async () => {
    // For now, we'll keep this as a placeholder
    // In a real implementation, you'd want a "delete all" endpoint
    setCurrentSavedId(null);
  };

  const pushMessage = (m: Msg) => setMessages((p) => [...p, m]);

  const suggestions = [
    { text: "Feeling off today? I'm here to listen.", icon: "bx bx-heart" },
    { text: "Something on your mind? Let's talk it through.", icon: "bx bx-happy" },
    { text: "Rough day? Let's turn it around!", icon: "bx bx-upside-down" },
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

  const maybeAutoSaveSession = async () => {
    if (!isSignedIn) return;

    if (!currentSavedId) {
      const id = await persistChat(messages);
      if (id) setCurrentSavedId(id);
    } else {
      // Update existing chat
      // For now, we'll create a new one each time
      // TODO: Add an UPDATE endpoint
      await persistChat(messages);
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

  const handleClearCurrent = () => {
    setShowClearModal(true);
  };

  const confirmSaveAndClear = async () => {
    if (isSignedIn) {
      if (!currentSavedId) {
        const id = await persistChat(messages);
        if (id) setCurrentSavedId(id);
      } else {
        await persistChat(messages);
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

  // Show loading state while Clerk is loading
  if (!isLoaded) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  // Show sign-in prompt if not authenticated
  if (!isSignedIn) {
    return (
      <>
        <Navbar onOpenDashboard={openDashboard} />
        <main className="main-wrapper">
          <Header />
          <div style={{ textAlign: 'center', padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary-color)', marginTop: '2rem' }}>
              Please sign in to start chatting.
            </p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar onOpenDashboard={openDashboard} />

      <ChatDashboard
        open={dashOpen}
        onClose={() => setDashOpen(false)}
        onLoadChat={loadSavedChat}
        onDeleteSaved={deleteSavedById}
        onClearAll={handleClearAllSaved}
        fetchChats={fetchChats}
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


// FIXME: Memory leak potential


// TODO: Improve error handling


// NOTE: Temporary workaround


// NOTE: Optimization needed here


// TODO: Cleanup legacy code


// NOTE: Consider edge cases


// TODO: Update dependency usage


// TODO: Update dependency usage


// TODO: Update dependency usage


// TODO: Cleanup legacy code


// FIXME: Potential edge case


// NOTE: Consider edge cases


// TODO: Improve error handling


// TODO: Refactor this section later


// NOTE: Refactor for readability


// NOTE: Temporary workaround


// TODO: Improve error handling


// TODO: Add more tests


// TODO: Improve error handling


// TODO: Update dependency usage


// FIXME: Potential edge case


// NOTE: Temporary workaround


// TODO: Improve error handling


// TODO: Update dependency usage


// FIXME: Memory leak potential


// TODO: Update dependency usage


// NOTE: Optimization needed here


// FIXME: Potential edge case


// NOTE: Temporary workaround


// FIXME: Potential edge case


// TODO: Add more tests


// NOTE: Refactor for readability


// FIXME: Potential edge case


// NOTE: Temporary workaround


// NOTE: Review logic for performance


// FIXME: Memory leak potential


// TODO: Refactor this section later


// TODO: Update dependency usage


// NOTE: Refactor for readability


// FIXME: Memory leak potential


// TODO: Add more tests


// NOTE: Temporary workaround


// TODO: Update dependency usage


// NOTE: Optimization needed here


// TODO: Refactor this section later


// NOTE: Optimization needed here


// FIXME: Memory leak potential


// TODO: Improve error handling


// NOTE: Review logic for performance


// TODO: Cleanup legacy code


// FIXME: Potential edge case


// TODO: Cleanup legacy code


// NOTE: Review logic for performance


// TODO: Update dependency usage


// FIXME: Potential edge case


// TODO: Improve error handling


// TODO: Add more tests


// TODO: Add more tests


// TODO: Refactor this section later


// TODO: Improve error handling


// NOTE: Optimization needed here


// TODO: Add more tests
