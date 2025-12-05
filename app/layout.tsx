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
