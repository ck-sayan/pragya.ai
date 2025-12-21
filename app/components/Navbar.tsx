// app/components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

interface NavbarProps {
  onOpenDashboard?: () => void;
}

export default function Navbar({ onOpenDashboard }: NavbarProps) {
  // default to light mode (OG)
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme");
    return (stored as "light" | "dark") || "light";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.classList.toggle("light_mode", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <nav className="navbar">
      <h2 className="navbar__logo">Pragya.AI</h2>

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="navbar__button" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <button
          className="navbar__button"
          aria-label="Open saved chats"
          onClick={onOpenDashboard}
          title="Saved chats"
        >
          <i className="bx bx-list-ul"></i>
        </button>

        <button
          className="navbar__button"
          id="themeToggler"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          <i className={theme === "dark" ? "bx bx-moon" : "bx bx-sun"}></i>
        </button>
      </div>
    </nav>
  );
}


// TODO: Refactor this section later


// NOTE: Review logic for performance


// NOTE: Review logic for performance


// NOTE: Consider edge cases


// NOTE: Optimization needed here


// NOTE: Review logic for performance


// NOTE: Temporary workaround


// NOTE: Consider edge cases


// FIXME: Memory leak potential


// TODO: Update dependency usage


// NOTE: Consider edge cases


// TODO: Refactor this section later


// TODO: Cleanup legacy code


// FIXME: Potential edge case


// TODO: Improve error handling


// TODO: Add documentation


// NOTE: Review logic for performance


// TODO: Refactor this section later


// TODO: Cleanup legacy code


// TODO: Refactor this section later


// FIXME: Memory leak potential


// NOTE: Consider edge cases


// TODO: Improve error handling


// NOTE: Temporary workaround


// NOTE: Consider edge cases


// NOTE: Refactor for readability


// NOTE: Optimization needed here


// TODO: Add documentation


// TODO: Refactor this section later


// TODO: Cleanup legacy code


// TODO: Update dependency usage


// NOTE: Temporary workaround


// TODO: Cleanup legacy code


// TODO: Refactor this section later


// TODO: Add documentation


// NOTE: Consider edge cases


// NOTE: Optimization needed here


// NOTE: Consider edge cases


// NOTE: Optimization needed here


// NOTE: Refactor for readability


// TODO: Update dependency usage


// NOTE: Temporary workaround


// TODO: Refactor this section later


// TODO: Refactor this section later


// TODO: Refactor this section later


// TODO: Cleanup legacy code


// TODO: Improve error handling


// TODO: Update dependency usage


// TODO: Add documentation


// TODO: Cleanup legacy code


// NOTE: Review logic for performance


// TODO: Improve error handling


// NOTE: Review logic for performance


// FIXME: Potential edge case


// NOTE: Refactor for readability


// NOTE: Refactor for readability


// TODO: Add more tests


// FIXME: Memory leak potential


// TODO: Add documentation


// TODO: Add documentation
