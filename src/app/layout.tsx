import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import SchemaData from "@/components/SchemaData";
import { ClientProviders } from '@/components/ClientProviders';



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

/**
 * 1. VIEWPORT CONFIGURATION (Next.js 15 Standard)
 * Isolated from metadata for faster browser parsing.
 */
export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/**
 * 2. CORE METADATA ENGINE
 * Using 'metadataBase' to solve the absolute URL requirement.
 */

export const metadata: Metadata = {
  metadataBase: new URL("https://almeshwady.vercel.app"),
  title: {
    default: "Abdelrahman Al-Meshwady",
    template: "%s | Abdelrahman Al-Meshwady"
  },
  description: "Backend Engineer and Technical Project Manager specializing in high-concurrency enterprise architectures, NestJS infrastructure, and scalable Node.js engines.",
  keywords: [
    "Abdelrahman Ahmed Al-Meshwady",
    "Abdelrahman Al-Meshwady",
    "Al-Meshwady",
    "BodaTheDev",
    "Systems Architect Egypt",
    "Systems Architect",
    "Senior Backend Engineer",
    "Backend Engineer",
    "Technical Project Manager",
    "Project Manager",
    "Node.js Expert",
    "Node.js Dev",
    "Node.js Developer",
    "High-Concurrency Systems",
    "Enterprise Software Architecture",
    "Senior Backend Architect Egypt",
    "Technical Project Manager Alexandria",
    "Designing Systems That Scale",
    "High-concurrency Node.js",
    "NestJS Infrastructure",
    "Financial Ledger Logic",
    "Distributed Systems Egypt"
  ],

  /**
   * 3. OPEN GRAPH (LinkedIn / Discord / WhatsApp)
   * This is the "Business Card" of the web.
   */

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://almeshwady.vercel.app",
    title: "ABDELRAHMAN AL-MESHWADY // Software Engineer",
    description: "Expert backend infrastructure engineering and technical leadership based in Alexandria, Egypt.",
    siteName: "Abdelrahman Al-Meshwady Architecture Lab",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "System Access: Abdelrahman Al-Meshwady Architecture Lab",
      },
    ],
  },

  /**
   * 4. TWITTER / X PROTOCOL
   */
  twitter: {
    card: "summary_large_image",
    title: "ABDELRAHMAN AL-MESHWADY // Software Engineer",
    description: "Engineering scalable backend architectures and leading engineering teams.",
    images: ["/og-image.png"],
  },

  /**
   * 5. SEARCH ENGINE ROBOTS
   * Explicit instructions for Google and Bing.
   */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  /**
   * 6. CANONICAL IDENTITY
   * Ensures Google doesn't penalize you for duplicate 'www' or 'non-www' URLs.
   */
  alternates: {
    canonical: "https://almeshwady.vercel.app",
  },
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
    <html lang="en" className="bg-black" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          spaceGrotesk.variable,
          "font-sans selection:bg-brand-orange/30 selection:text-brand-orange",
          "min-h-screen bg-black overflow-x-hidden"
        )}
      >
        <ClientProviders>
          <SchemaData />
          {/* Architectural Background Grid */}
          <div className="fixed inset-0 z-0 pointer-events-none arch-grid opacity-20" />

          {/* Main Content Layer */}
          <main className="relative z-10 flex flex-col min-h-screen">
            {children}
          </main>
        </ClientProviders>
      </body>
    </html>
  );
}
