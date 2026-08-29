import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { AchievementsWrapper } from "@/components/achievements/achievements-wrapper";
import { BackToTop } from "@/components/ui/back-to-top";
import { ClarityProvider } from "@/components/ui/clarity-provider";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { MotionProvider } from "@/components/ui/motion-provider";
import { Navbar } from "@/components/ui/navbar";
import { ToasterProvider } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { personalInfo } from "@/data/portfolio-data";
import { LanguageProvider } from "@/i18n/language-context";
import { absoluteUrl, SITE_URL } from "@/lib/site";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Moisés Neto",
  jobTitle: "Engenheiro de Software",
  url: absoluteUrl("/"),
  sameAs: [personalInfo.linkedin, personalInfo.github],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Redis",
    "Segurança de aplicação",
    "Automação com IA",
    "Testes automatizados",
    "Arquitetura frontend",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manaus",
    addressCountry: "BR",
  },
};

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
  metadataBase: new URL(SITE_URL),
  title: "Moisés Neto | Engenheiro de Software (React, Next.js & Node.js)",
  description:
    "Engenheiro de Software com +5 anos em React, Next.js e TypeScript, do requisito à produção: interface, API, testes, deploy e observabilidade. Manaus, Brasil.",
  keywords: [
    "Engenheiro de Software",
    "Software Engineer",
    "Frontend Developer",
    "Full Stack",
    "Node.js",
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
    url: absoluteUrl("/"),
    title: "Moisés Neto | Engenheiro de Software (React, Next.js & Node.js)",
    description:
      "Engenheiro de Software com +5 anos em React, Next.js e TypeScript, do requisito à produção: interface, API, testes, deploy e observabilidade. Manaus, Brasil.",
    siteName: "Moisés Neto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moisés Neto | Engenheiro de Software (React, Next.js & Node.js)",
    description:
      "Engenheiro de Software com +5 anos em React, Next.js e TypeScript, do requisito à produção: interface, API, testes, deploy e observabilidade.",
    creator: "@moisesnetouou",
  },
  alternates: {
    canonical: absoluteUrl("/"),
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
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD, no user input
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <MotionProvider>
            <ClarityProvider />
            <TooltipProvider>
              <Navbar />
              {children}
              <BackToTop />
              <ToasterProvider />
              <AchievementsWrapper />
              <CookieConsent />
            </TooltipProvider>
          </MotionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
