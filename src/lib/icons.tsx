"use client";

import {
  BashPlain,
  Css3Plain,
  CypressioPlain,
  DockerPlain,
  FastifyPlain,
  FigmaPlain,
  GithubOriginal,
  GitPlain,
  Html5Plain,
  JavascriptPlain,
  JestPlain,
  JiraPlain,
  NextjsPlain,
  NodejsPlain,
  PlaywrightPlain,
  PostgresqlPlain,
  PrismaOriginal,
  PythonPlain,
  ReactOriginal,
  RedisPlain,
  ReduxOriginal,
  SwaggerPlain,
  TailwindcssOriginal,
  TypescriptPlain,
  VercelLine,
  VitejsPlain,
  JestPlain as VitestPlain,
} from "devicons-react";
import type React from "react";

const ICON_SIZE = 28;

const iconMap: Record<string, React.ReactNode> = {
  // Frontend
  React: <ReactOriginal size={ICON_SIZE} color="#00d9ff" />,
  "Next.js": <NextjsPlain size={ICON_SIZE} color="#ffffff" />,
  TypeScript: <TypescriptPlain size={ICON_SIZE} color="#3178c6" />,
  JavaScript: <JavascriptPlain size={ICON_SIZE} color="#f7df1e" />,
  "HTML/CSS": <Html5Plain size={ICON_SIZE} color="#e34f26" />,
  TailwindCSS: <TailwindcssOriginal size={ICON_SIZE} color="#06b6d4" />,
  Vite: <VitejsPlain size={ICON_SIZE} color="#646cff" />,

  // State Management
  Zustand: <ReduxOriginal size={ICON_SIZE} color="#764abc" />,
  "React Query": <ReduxOriginal size={ICON_SIZE} color="#ff4154" />,

  // Validation & UI
  Zod: <ReactOriginal size={ICON_SIZE} color="#3fb27f" />,
  "Chakra UI": <ReactOriginal size={ICON_SIZE} color="#319795" />,
  Shadcn: <ReactOriginal size={ICON_SIZE} color="#ffffff" />,
  "Radix UI": <ReactOriginal size={ICON_SIZE} color="#ffffff" />,

  // Testing
  Vitest: <VitestPlain size={ICON_SIZE} color="#ffffff" />,
  "Testing Library": <JestPlain size={ICON_SIZE} color="#c21325" />,
  Cypress: <CypressioPlain size={ICON_SIZE} color="#15B973" />,
  Playwright: <PlaywrightPlain size={ICON_SIZE} color="#2ead5f" />,
  Jest: <JestPlain size={ICON_SIZE} color="#c21325" />,
  "Testes Unitários": <JestPlain size={ICON_SIZE} color="#c21325" />,
  "Testes de Integração": <CypressioPlain size={ICON_SIZE} color="#15B973" />,
  "Testes E2E": <PlaywrightPlain size={ICON_SIZE} color="#2ead5f" />,

  // AI & Automation
  "Claude Code": <BashPlain size={ICON_SIZE} color="#D97706" />,
  OpenCode: <BashPlain size={ICON_SIZE} color="#2563EB" />,
  "Playwright MCP": <PlaywrightPlain size={ICON_SIZE} color="#2ead5f" />,
  "Sentry MCP": <JestPlain size={ICON_SIZE} color="#362d59" />,
  n8n: <BashPlain size={ICON_SIZE} color="#8B5CF6" />,
  "CLI customizado com IA": <BashPlain size={ICON_SIZE} color="#4BAAE3" />,
  "Automação de Processos": <BashPlain size={ICON_SIZE} color="#4BAAE3" />,

  // Backend
  "Node.js": <NodejsPlain size={ICON_SIZE} color="#339933" />,
  Fastify: <FastifyPlain size={ICON_SIZE} color="#ffffff" />,
  Prisma: <PrismaOriginal size={ICON_SIZE} color="#2d3748" />,
  Drizzle: <PostgresqlPlain size={ICON_SIZE} color="#ffffff" />,
  "REST API": <SwaggerPlain size={ICON_SIZE} color="#85ea2d" />,
  Python: <PythonPlain size={ICON_SIZE} color="#3776AB" />,

  // Database
  PostgreSQL: <PostgresqlPlain size={ICON_SIZE} color="#336791" />,
  Redis: <RedisPlain size={ICON_SIZE} color="#DC382D" />,

  // DevOps & Deploy
  Git: <GitPlain size={ICON_SIZE} color="#f05032" />,
  "GitHub Actions": <GithubOriginal size={ICON_SIZE} color="#ffffff" />,
  "CI/CD": <DockerPlain size={ICON_SIZE} color="#2496ed" />,
  Jira: <JiraPlain size={ICON_SIZE} color="#0052cc" />,
  Vercel: <VercelLine size={ICON_SIZE} color="#ffffff" />,
  Railway: <DockerPlain size={ICON_SIZE} color="#0b0ede" />,
  Docker: <DockerPlain size={ICON_SIZE} color="#2496ed" />,
  Deploy: <VercelLine size={ICON_SIZE} color="#ffffff" />,

  // Soft Skills
  "Liderança Técnica": <JiraPlain size={ICON_SIZE} color="#0052cc" />,
  Mentoria: <JiraPlain size={ICON_SIZE} color="#0052cc" />,
  Scrum: <JiraPlain size={ICON_SIZE} color="#0052cc" />,
  Kanban: <JiraPlain size={ICON_SIZE} color="#0052cc" />,
  "Pensamento Crítico": <JiraPlain size={ICON_SIZE} color="#0052cc" />,
  Comunicação: <JiraPlain size={ICON_SIZE} color="#0052cc" />,
  "Documentação Técnica": <JiraPlain size={ICON_SIZE} color="#0052cc" />,

  // Design
  Figma: <FigmaPlain size={ICON_SIZE} color="#f24e1e" />,
  Pencil: <FigmaPlain size={ICON_SIZE} color="#f24e1e" />,
  FigJam: <FigmaPlain size={ICON_SIZE} color="#f24e1e" />,
  Prototipagem: <FigmaPlain size={ICON_SIZE} color="#f24e1e" />,

  // CSS-in-JS
  "Styled Components": <Css3Plain size={ICON_SIZE} color="#c4b8bf" />,
  Stitches: <Css3Plain size={ICON_SIZE} color="#c4b8bf" />,

  // Bots & Chatbots
  Blip: (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Blip"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
        fill="#25D391"
      />
      <path
        d="M8 12h2v2H8v-2zm6-2h2v2h-2v-2zm-6 4h2v2H8v-2zm6 0h2v2h-2v-2zm-3-4h6v2h-6v-2z"
        fill="#fff"
      />
    </svg>
  ),
  "Criação de Fluxograma": (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Criação de Fluxograma"
    >
      <path
        d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
        fill="#25D391"
      />
      <path d="M12 8l-4 4h3v4h2v-4h3l-4-4zm-4 6h8v2H8v-2z" fill="#fff" />
    </svg>
  ),
  "Arquiteto de Bot": (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Arquiteto de Bot"
    >
      <path
        d="M12 2a2 2 0 012 2v2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v2a2 2 0 01-2 2 2 2 0 01-2-2v-2H8a2 2 0 01-2-2v-6a2 2 0 012-2h2V4a2 2 0 012-2z"
        fill="#25D391"
      />
      <circle cx="9" cy="10" r="1" fill="#fff" />
      <circle cx="15" cy="10" r="1" fill="#fff" />
      <path d="M8 14h8v2H8v-2z" fill="#fff" />
    </svg>
  ),
  "RD Conversas": (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="none"
      aria-label="RD Conversas"
    >
      <path
        d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
        fill="#25D391"
      />
      <path d="M7 9h10v2H7zm0-3h10v2H7z" fill="#fff" />
    </svg>
  ),
  ManyChat: (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="none"
      aria-label="ManyChat"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
        fill="#25D391"
      />
      <path d="M8 10h8v2H8zm0 3h5v2H8z" fill="#fff" />
    </svg>
  ),
  BotConversas: (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="none"
      aria-label="BotConversas"
    >
      <path
        d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"
        fill="#25D391"
      />
      <circle cx="9" cy="10" r="1" fill="#fff" />
      <circle cx="15" cy="10" r="1" fill="#fff" />
      <path
        d="M12 14c1.5 0 3-1 3-2.5V13c0 1-.5 2-1.5 2s-1.5-1-1.5-2v-1.5c0 1.5 1.5 2.5 3 2.5z"
        fill="#fff"
      />
    </svg>
  ),

  // CMS
  Prismic: (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Prismic"
    >
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="#F1B458"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  ),
  Hygraph: (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Hygraph"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
        fill="#8433E6"
      />
      <path d="M7 12l3 3 7-7" stroke="#fff" strokeWidth="2" fill="none" />
    </svg>
  ),
};

const fallbackIcon = <NodejsPlain size={ICON_SIZE} color="#339933" />;

export const getIcon = (name: string): React.ReactNode =>
  iconMap[name] ?? fallbackIcon;
