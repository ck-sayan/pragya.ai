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
