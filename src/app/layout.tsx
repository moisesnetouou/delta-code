import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { AchievementsWrapper } from "@/components/achievements/achievements-wrapper";
import { BackToTop } from "@/components/ui/back-to-top";
import { ClarityProvider } from "@/components/ui/clarity-provider";
import { MotionProvider } from "@/components/ui/motion-provider";
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
  metadataBase: new URL("https://delta-code-dev.vercel.app/"),
  title: "Moisés Neto | Frontend Engineer (React & Next.js) | IA & Automação",
  description:
    "Frontend Engineer com +5 anos em React, Next.js e TypeScript. Liderança técnica, automação com IA e arquitetura escalável. Manaus, Brasil.",
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
    url: "https://delta-code-dev.vercel.app/",
    title: "Moisés Neto | Frontend Engineer (React & Next.js) | IA & Automação",
    description:
      "Frontend Engineer com +5 anos em React, Next.js e TypeScript. Liderança técnica, automação com IA e arquitetura escalável. Manaus, Brasil.",
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
      "Frontend Engineer com +5 anos em React, Next.js e TypeScript. Liderança técnica, automação com IA e arquitetura escalável.",
    images: ["/og-image.png"],
    creator: "@moisesnetouou",
  },
  alternates: {
    canonical: "https://delta-code-dev.vercel.app/",
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
        <MotionProvider>
          <ClarityProvider />
          <TooltipProvider>
            <Navbar />
            {children}
            <BackToTop />
            <ToasterProvider />
            <AchievementsWrapper />
          </TooltipProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
