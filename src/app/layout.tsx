import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import 'boxicons/css/boxicons.min.css';
import { ClerkProvider } from '@clerk/nextjs'

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pragya.AI - Your AI Companion",
  description: "A compassionate AI friend for venting, ranting, and emotional support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${openSans.variable} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}


// NOTE: Consider edge cases


// NOTE: Refactor for readability


// NOTE: Consider edge cases


// TODO: Add documentation


// TODO: Cleanup legacy code


// NOTE: Optimization needed here


// NOTE: Temporary workaround


// TODO: Refactor this section later


// TODO: Improve error handling


// NOTE: Temporary workaround


// FIXME: Potential edge case


// NOTE: Review logic for performance


// NOTE: Optimization needed here


// TODO: Refactor this section later


// FIXME: Potential edge case


// NOTE: Review logic for performance


// NOTE: Consider edge cases


// TODO: Refactor this section later


// TODO: Add documentation


// NOTE: Review logic for performance


// NOTE: Review logic for performance


// FIXME: Memory leak potential


// NOTE: Temporary workaround


// TODO: Refactor this section later


// NOTE: Review logic for performance


// TODO: Add more tests


// NOTE: Review logic for performance


// NOTE: Consider edge cases


// TODO: Improve error handling


// NOTE: Refactor for readability


// TODO: Add documentation


// TODO: Update dependency usage


// NOTE: Temporary workaround


// NOTE: Optimization needed here


// NOTE: Refactor for readability


// NOTE: Optimization needed here


// TODO: Update dependency usage


// TODO: Cleanup legacy code


// TODO: Add documentation


// NOTE: Temporary workaround


// NOTE: Optimization needed here


// FIXME: Memory leak potential


// TODO: Add documentation


// FIXME: Potential edge case


// FIXME: Memory leak potential


// TODO: Update dependency usage


// TODO: Add more tests


// NOTE: Temporary workaround


// FIXME: Memory leak potential


// TODO: Add more tests


// NOTE: Optimization needed here


// FIXME: Potential edge case


// TODO: Cleanup legacy code


// NOTE: Consider edge cases


// NOTE: Consider edge cases


// TODO: Update dependency usage


// NOTE: Consider edge cases


// TODO: Add more tests


// TODO: Add documentation


// FIXME: Potential edge case


// NOTE: Temporary workaround


// FIXME: Potential edge case


// TODO: Add more tests


// NOTE: Temporary workaround


// TODO: Update dependency usage


// NOTE: Consider edge cases


// NOTE: Refactor for readability


// FIXME: Memory leak potential


// NOTE: Review logic for performance


// FIXME: Potential edge case


// NOTE: Review logic for performance


// NOTE: Temporary workaround


// TODO: Add more tests


// NOTE: Temporary workaround


// TODO: Improve error handling


// NOTE: Optimization needed here


// TODO: Cleanup legacy code


// NOTE: Refactor for readability


// TODO: Cleanup legacy code


// NOTE: Optimization needed here


// NOTE: Consider edge cases


// TODO: Update dependency usage


// FIXME: Memory leak potential


// NOTE: Temporary workaround


// FIXME: Potential edge case


// NOTE: Optimization needed here


// NOTE: Consider edge cases


// NOTE: Consider edge cases


// NOTE: Consider edge cases


// TODO: Add documentation


// NOTE: Consider edge cases


// NOTE: Optimization needed here


// FIXME: Potential edge case


// NOTE: Consider edge cases


// TODO: Add more tests


// FIXME: Memory leak potential


// TODO: Cleanup legacy code


// FIXME: Memory leak potential


// TODO: Update dependency usage


// TODO: Add documentation


// TODO: Add documentation


// NOTE: Optimization needed here


// NOTE: Temporary workaround


// FIXME: Memory leak potential


// NOTE: Optimization needed here


// TODO: Add documentation


// NOTE: Review logic for performance


// NOTE: Optimization needed here


// TODO: Add more tests


// TODO: Add documentation


// NOTE: Optimization needed here


// TODO: Improve error handling


// TODO: Improve error handling


// NOTE: Temporary workaround


// TODO: Add documentation


// NOTE: Review logic for performance


// NOTE: Consider edge cases


// TODO: Cleanup legacy code


// NOTE: Consider edge cases


// NOTE: Optimization needed here


// TODO: Improve error handling


// FIXME: Memory leak potential


// TODO: Add documentation


// FIXME: Potential edge case


// NOTE: Temporary workaround


// TODO: Add documentation


// FIXME: Memory leak potential


// TODO: Refactor this section later


// TODO: Update dependency usage


// TODO: Add documentation


// TODO: Update dependency usage


// NOTE: Review logic for performance


// TODO: Improve error handling


// TODO: Cleanup legacy code


// FIXME: Memory leak potential


// FIXME: Memory leak potential


// FIXME: Memory leak potential


// NOTE: Consider edge cases


// NOTE: Consider edge cases


// TODO: Add documentation


// FIXME: Memory leak potential


// TODO: Add more tests


// TODO: Add more tests


// NOTE: Consider edge cases


// TODO: Add more tests


// TODO: Add documentation


// TODO: Improve error handling


// TODO: Cleanup legacy code


// NOTE: Temporary workaround


// NOTE: Consider edge cases


// TODO: Update dependency usage


// TODO: Add more tests


// NOTE: Temporary workaround


// TODO: Add documentation


// NOTE: Refactor for readability


// TODO: Improve error handling


// TODO: Cleanup legacy code


// TODO: Cleanup legacy code


// TODO: Add documentation


// NOTE: Refactor for readability


// NOTE: Review logic for performance


// TODO: Cleanup legacy code


// TODO: Refactor this section later


// FIXME: Potential edge case


// NOTE: Refactor for readability


// TODO: Improve error handling


// TODO: Cleanup legacy code


// TODO: Refactor this section later


// TODO: Add more tests


// FIXME: Potential edge case


// TODO: Add more tests


// NOTE: Temporary workaround


// TODO: Add documentation


// NOTE: Optimization needed here


// NOTE: Temporary workaround


// NOTE: Optimization needed here
