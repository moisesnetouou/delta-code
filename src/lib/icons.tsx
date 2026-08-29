"use client";

import { PlaywrightPlain } from "devicons-react";
import {
  Activity,
  AudioLines,
  BookOpen,
  Bot,
  Brain,
  ClipboardList,
  Compass,
  Crown,
  FileText,
  FolderGit2,
  GitMerge,
  GraduationCap,
  Highlighter,
  KanbanSquare,
  KeyRound,
  type LucideIcon,
  MessageCircle,
  MessageSquare,
  Pencil,
  Rocket,
  Search,
  Smartphone,
  Sparkles,
  StickyNote,
  Terminal,
  TestTube,
  Waypoints,
  Wind,
  Workflow,
} from "lucide-react";
import type React from "react";
import {
  SiBiome,
  SiChakraui,
  SiClaude,
  SiCypress,
  SiDocker,
  SiDrizzle,
  SiExpo,
  SiFastify,
  SiFigma,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiLinux,
  SiMarkdown,
  SiNetlify,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPm2,
  SiPostgresql,
  SiPrisma,
  SiPrismic,
  SiPython,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiRedis,
  SiSentry,
  SiShadcnui,
  SiStorybook,
  SiStyledcomponents,
  SiSwagger,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVercel,
  SiVitest,
  SiZod,
} from "react-icons/si";

const SIZE = 28;
const LUCIDE_PROPS = { size: SIZE, strokeWidth: 1.75 } as const;

function L(Icon: LucideIcon, color: string) {
  return <Icon {...LUCIDE_PROPS} color={color} />;
}

const iconMap: Record<string, React.ReactNode> = {
  React: <SiReact size={SIZE} color="#61dafb" />,
  "Next.js": <SiNextdotjs size={SIZE} color="#ffffff" />,
  TypeScript: <SiTypescript size={SIZE} color="#3178c6" />,
  JavaScript: <SiJavascript size={SIZE} color="#f7df1e" />,
  "HTML/CSS": <SiHtml5 size={SIZE} color="#e34f26" />,
  TailwindCSS: <SiTailwindcss size={SIZE} color="#06b6d4" />,
  Vite: (
    <svg
      width={SIZE}
      height={SIZE}
      viewBox="0 0 410 404"
      fill="none"
      aria-label="Vite"
    >
      <defs>
        <linearGradient
          id="vite-a"
          x1="6"
          y1="33"
          x2="235"
          y2="344"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
      <path
        d="M399.64 59.52 215.74 388.5c-3.8 6.79-13.55 6.83-17.4.07L10.43 59.55c-4.2-7.36 2.1-16.31 10.43-14.83l184.6 33c1.17.21 2.36.2 3.52-.02l180.69-33c8.3-1.52 14.62 7.4 10.97 14.81Z"
        fill="url(#vite-a)"
      />
    </svg>
  ),
  Zustand: <span style={{ fontSize: SIZE - 4 }}>🐻</span>,
  "React Query": <SiReactquery size={SIZE} color="#ff4154" />,
  Zod: <SiZod size={SIZE} color="#3068b7" />,
  "Chakra UI": <SiChakraui size={SIZE} color="#319795" />,
  Shadcn: <SiShadcnui size={SIZE} color="#ffffff" />,
  "Radix UI": <SiRadixui size={SIZE} color="#ffffff" />,
  "Styled Components": <SiStyledcomponents size={SIZE} color="#db7093" />,
  Stitches: L(Workflow, "#ec4899"),
  Storybook: <SiStorybook size={SIZE} color="#ff4785" />,

  "React Native": L(Smartphone, "#61dafb"),
  Expo: <SiExpo size={SIZE} color="#ffffff" />,
  NativeWind: L(Wind, "#38bdf8"),

  Figma: <SiFigma size={SIZE} color="#f24e1e" />,
  Prototipagem: L(Pencil, "#f472b6"),
  Pencil: L(Pencil, "#fbbf24"),
  FigJam: L(StickyNote, "#facc15"),

  Vitest: <SiVitest size={SIZE} color="#6e9f18" />,
  "Testing Library": <SiTestinglibrary size={SIZE} color="#e33332" />,
  Cypress: <SiCypress size={SIZE} color="#15B973" />,
  Playwright: <PlaywrightPlain size={SIZE} color="#2ead5f" />,
  Jest: <SiJest size={SIZE} color="#c21325" />,
  "Testes Unitários": L(TestTube, "#22c55e"),
  "Testes de Integração": L(TestTube, "#06b6d4"),
  "Testes E2E": L(TestTube, "#a855f7"),

  Claude: <SiClaude size={SIZE} color="#d97706" />,
  "Claude Design": <SiClaude size={SIZE} color="#c084fc" />,
  OpenCode: L(Terminal, "#2563eb"),
  "Playwright MCP": <PlaywrightPlain size={SIZE} color="#2ead5f" />,
  "Sentry MCP": <SiSentry size={SIZE} color="#7c2eaa" />,
  n8n: L(Workflow, "#ea4b71"),
  "CLI customizado com IA": L(Sparkles, "#06b6d4"),
  "Orquestração de Agentes": L(Workflow, "#a855f7"),
  Whisper: L(AudioLines, "#22d3ee"),
  Embeddings: L(Waypoints, "#34d399"),
  "Busca Semântica": L(Search, "#60a5fa"),
  "Automação de Processos": L(Workflow, "#8b5cf6"),

  Blip: (
    <svg
      width={SIZE}
      height={SIZE}
      viewBox="0 0 32 32"
      fill="none"
      aria-label="Blip"
    >
      <path
        d="M16 4C9.92 4 5 8.7 5 14.5c0 3.42 1.72 6.45 4.4 8.36L8 28l5.6-3.05c.78.13 1.58.2 2.4.2 6.08 0 11-4.7 11-10.5S22.08 4 16 4z"
        fill="#3F92F2"
      />
    </svg>
  ),
  "Criação de Fluxograma": L(Workflow, "#10b981"),
  "Arquiteto de Bot": L(Bot, "#06b6d4"),
  "RD Conversas": L(MessageCircle, "#f97316"),
  ManyChat: L(MessageSquare, "#3b82f6"),
  BotConversas: L(Bot, "#22c55e"),
  "Telemetria de Atendimento": L(Activity, "#38bdf8"),

  Prismic: <SiPrismic size={SIZE} color="#5163ba" />,
  Keystatic: L(FolderGit2, "#f59e0b"),
  Markdoc: <SiMarkdown size={SIZE} color="#f0f0f5" />,
  Hygraph: (
    <svg
      width={SIZE}
      height={SIZE}
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

  "Node.js": <SiNodedotjs size={SIZE} color="#339933" />,
  Python: <SiPython size={SIZE} color="#3776ab" />,
  Fastify: <SiFastify size={SIZE} color="#ffffff" />,
  Prisma: <SiPrisma size={SIZE} color="#2d3748" />,
  Drizzle: <SiDrizzle size={SIZE} color="#c5f74f" />,
  "REST API": <SiSwagger size={SIZE} color="#85ea2d" />,
  PostgreSQL: <SiPostgresql size={SIZE} color="#336791" />,
  Redis: <SiRedis size={SIZE} color="#dc382d" />,
  Swagger: <SiSwagger size={SIZE} color="#85ea2d" />,

  Git: <SiGit size={SIZE} color="#f05032" />,
  GitHub: <SiGithub size={SIZE} color="#ffffff" />,
  "GitHub Actions": <SiGithubactions size={SIZE} color="#2088ff" />,
  "CI/CD": L(GitMerge, "#22c55e"),
  Jira: <SiJira size={SIZE} color="#0052cc" />,
  Vercel: <SiVercel size={SIZE} color="#ffffff" />,
  Railway: L(Rocket, "#a855f7"),
  Netlify: <SiNetlify size={SIZE} color="#00c7b7" />,
  Docker: <SiDocker size={SIZE} color="#2496ed" />,
  Nginx: <SiNginx size={SIZE} color="#009639" />,
  PM2: <SiPm2 size={SIZE} color="#2b037a" />,
  Linux: <SiLinux size={SIZE} color="#fcc624" />,
  Deploy: L(Rocket, "#06b6d4"),
  Biome: <SiBiome size={SIZE} color="#60a5fa" />,
  Shiki: L(Highlighter, "#4d9de0"),

  "Requisitos (RF/RNF)": L(ClipboardList, "#14b8a6"),
  "Definição de Produto": L(Compass, "#2dd4bf"),
  "Controle de Acesso por Perfil": L(KeyRound, "#0d9488"),

  "Liderança Técnica": L(Crown, "#fbbf24"),
  Mentoria: L(GraduationCap, "#3b82f6"),
  Scrum: L(BookOpen, "#22c55e"),
  Kanban: L(KanbanSquare, "#a855f7"),
  "Pensamento Crítico": L(Brain, "#ec4899"),
  Comunicação: L(MessageSquare, "#06b6d4"),
  "Documentação Técnica": L(FileText, "#9ca3af"),
};

const fallbackIcon = L(Sparkles, "#9090a0");

export const getIcon = (name: string): React.ReactNode =>
  iconMap[name] ?? fallbackIcon;
