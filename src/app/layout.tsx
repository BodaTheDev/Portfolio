import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Space_Grotesk } from 'next/font/google';

// Optimization: Subsetting fonts for performance
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Utility for clean tailwind class merging
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const metadata: Metadata = {
  title: "ABDELRAHMAN BODA | FULL-STACK ARCHITECT",
  description: "Senior Full-Stack Engineer & Technical Lead specializing in high-concurrency backend systems and enterprise-grade infrastructure.",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-space',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          spaceGrotesk.variable,
          "font-sans selection:bg-brand-orange/30 selection:text-brand-orange",
          "min-h-screen bg-black overflow-x-hidden"
        )}
      >
        {/* Architectural Background Grid */}
        <div className="fixed inset-0 z-0 pointer-events-none arch-grid opacity-20" />

        {/* Main Content Layer */}
        <main className="relative z-10 flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
