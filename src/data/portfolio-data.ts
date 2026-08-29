export const personalInfo = {
  name: "Moisés Neto",
  email: "moisesnetored@gmail.com",
  linkedin: "https://linkedin.com/in/moisesnetouou",
  github: "https://github.com/moisesnetouou",
};

/**
 * Structural experience data. Translatable fields (role, period, location,
 * description, details) live in the i18n dictionary keyed by `id`
 * (`src/i18n/pt.ts` -> `timeline.experiences[id]` / `timeline.details[id]`).
 */
export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  /** ISO YYYY-MM */
  startDate: string;
  /** ISO YYYY-MM, null = ongoing */
  endDate: string | null;
  technologies: string[];
  /** Order on mobile timeline (lower = earlier in list) */
  mobileOrder: number;
  /** ID of an experience this one overlapped with. Renders side-by-side on desktop, concurrent on the LEFT. */
  concurrentWith?: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Grupo Click IP",
    companyUrl: "https://imais.com.br/",
    startDate: "2021-07",
    endDate: null,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "TailwindCSS",
      "Vite",
      "Zustand",
      "React Query",
      "Zod",
      "Chakra UI",
      "Shadcn",
      "Radix UI",
      "Styled Components",
      "Stitches",
      "Storybook",
      "React Native",
      "Expo",
      "Figma",
      "Pencil",
      "FigJam",
      "Claude",
      "Claude Design",
      "OpenCode",
      "Playwright MCP",
      "Sentry MCP",
      "n8n",
      "CLI customizado com IA",
      "Orquestração de Agentes",
      "Whisper",
      "Embeddings",
      "Busca Semântica",
      "Automação de Processos",
      "Blip",
      "Criação de Fluxograma",
      "Arquiteto de Bot",
      "RD Conversas",
      "Node.js",
      "Fastify",
      "Prisma",
      "Drizzle",
      "REST API",
      "PostgreSQL",
      "Redis",
      "Swagger",
      "Vitest",
      "Testing Library",
      "Cypress",
      "Playwright",
      "Jest",
      "Testes Unitários",
      "Testes de Integração",
      "Testes E2E",
      "Proteção de Credenciais",
      "Cabeçalhos de Segurança",
      "CSP",
      "Hardening de Sessão",
      "Sanitização de Logs",
      "Gestão de Vulnerabilidades",
      "LGPD",
      "Requisitos (RF/RNF)",
      "Definição de Produto",
      "Controle de Acesso por Perfil",
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Jira",
      "Vercel",
      "Railway",
      "Netlify",
      "Docker",
      "Nginx",
      "PM2",
      "Linux",
      "Deploy",
      "Liderança Técnica",
      "Mentoria",
      "Scrum",
      "Kanban",
      "Pensamento Crítico",
      "Comunicação",
      "Documentação Técnica",
    ],
    mobileOrder: 1,
  },
];

export const skills = [
  {
    category: "Frontend & Frameworks",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "TailwindCSS",
      "Vite",
      "Zustand",
      "React Query",
      "Zod",
      "Chakra UI",
      "Shadcn",
      "Radix UI",
      "Styled Components",
      "Stitches",
      "Storybook",
      "Shiki",
    ],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo", "NativeWind"],
  },
  {
    category: "Prototipação & Design",
    items: ["Figma", "Pencil", "FigJam", "Prototipagem"],
  },
  {
    category: "Automação & IA",
    items: [
      "Claude",
      "Claude Design",
      "OpenCode",
      "Playwright MCP",
      "Sentry MCP",
      "n8n",
      "CLI customizado com IA",
      "Orquestração de Agentes",
      "Automação de Processos",
    ],
  },
  {
    category: "Bots & Chatbots",
    items: [
      "Blip",
      "Criação de Fluxograma",
      "Arquiteto de Bot",
      "RD Conversas",
      "ManyChat",
      "BotConversas",
      "Telemetria de Atendimento",
    ],
  },
  {
    category: "CMS & Headless",
    items: ["Prismic", "Hygraph", "Keystatic", "Markdoc"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Python",
      "Fastify",
      "Prisma",
      "Drizzle",
      "REST API",
      "PostgreSQL",
      "Redis",
      "Swagger",
    ],
  },
  {
    category: "Testes & Qualidade",
    items: [
      "Vitest",
      "Testing Library",
      "Cypress",
      "Playwright",
      "Jest",
      "Testes Unitários",
      "Testes de Integração",
      "Testes E2E",
    ],
  },
  {
    category: "Ferramentas & Infra",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Jira",
      "Vercel",
      "Railway",
      "Netlify",
      "Docker",
      "Nginx",
      "PM2",
      "Linux",
      "Deploy",
      "Biome",
    ],
  },
  {
    category: "Engenharia de Produto",
    items: [
      "Requisitos (RF/RNF)",
      "Definição de Produto",
      "Documentação Técnica",
      "Controle de Acesso por Perfil",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Liderança Técnica",
      "Mentoria",
      "Scrum",
      "Kanban",
      "Pensamento Crítico",
      "Comunicação",
      "Documentação Técnica",
    ],
  },
];

export const certifications = [
  {
    id: "1",
    title: "NLW Operator - Fullstack",
    issuer: "Rocketseat",
    date: "Mar 2026",
    link: "https://app.rocketseat.com.br/certificates/3ed35a9a-62ba-4fbc-b664-8cef30805589",
  },
  {
    id: "2",
    title: "Desafio Full-Stack com IA",
    issuer: "Rocketseat",
    date: "Nov 2025",
    link: "https://app.rocketseat.com.br/certificates/2662d39d-922f-4ee9-b1df-db477e90b73d",
  },
  {
    id: "3",
    title: "NLW Agents - Avançado",
    issuer: "Rocketseat",
    date: "Jul 2025",
    link: "https://app.rocketseat.com.br/certificates/7a226fe8-eee9-44ad-ade8-7c82fef33764",
  },
];

export const education = {
  institution: "Uninorte",
  period: "2017 - 2022",
};

/** Highlighted "core stack" shown above the full skills grid. Keys map into `skills[].items`. */
export const coreStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "TailwindCSS",
  "Zustand",
  "React Query",
  "Playwright",
  "GitHub Actions",
];
