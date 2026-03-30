import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { AchievementsWrapper } from "@/components/achievements/achievements-wrapper";
import { BackToTop } from "@/components/ui/back-to-top";
import { Navbar } from "@/components/ui/navbar";
import { ToasterProvider } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moisesneto.dev"),
  title: "Moisés Neto | Frontend Engineer (React & Next.js) | IA & Automação",
  description:
    "Frontend Developer com +5 anos de experiência em React, Next.js e TypeScript. Especializado em automação, IA e construção de chatbots. Veja meu portfólio!",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Desenvolvedor Frontend",
    "Manaus",
    "Automação",
    "IA",
    "Chatbots",
  ],
  authors: [{ name: "Moisés Neto" }],
  creator: "Moisés Neto",
  publisher: "Moisés Neto",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://moisesneto.dev",
    title: "Moisés Neto | Frontend Engineer (React & Next.js) | IA & Automação",
    description:
      "Frontend Developer com +5 anos de experiência em React, Next.js e TypeScript. Especializado em automação, IA e construção de chatbots.",
    siteName: "Moisés Neto",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moisés Neto - Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moisés Neto | Frontend Engineer (React & Next.js) | IA & Automação",
    description:
      "Frontend Developer com +5 anos de experiência em React, Next.js e TypeScript.",
    images: ["/og-image.png"],
    creator: "@moisesnetouou",
  },
  alternates: {
    canonical: "https://moisesneto.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <TooltipProvider>
          <Navbar />
          {children}
          <BackToTop />
          <ToasterProvider />
          <AchievementsWrapper />
        </TooltipProvider>
      </body>
    </html>
  );
}
