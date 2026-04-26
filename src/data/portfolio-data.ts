export const personalInfo = {
  name: "Moisés Neto",
  title: "Frontend Engineer (React & Next.js) | IA & Automação",
  tagline: "",
  email: "moisesnetored@gmail.com",
  phone: "(92) 99508-5478",
  location: "Manaus, Brasil",
  linkedin: "https://linkedin.com/in/moisesnetouou",
  github: "https://github.com/moisesnetouou",
};

export const summary =
  "Desenvolvedor Frontend com +5 anos de experiência em arquitetura de aplicações, liderança técnica e construção de interfaces escaláveis. Especialista em testes automatizados, automação com IA e práticas modernas de DX (Developer Experience). Já resolvi demandas que passaram por outras pessoas e, mesmo não sendo diretamente do meu cargo, consegui entregar resultados: criei fluxo de chatbot integrando n8n para suprir limitações da plataforma, e automatizei análise de tickets da Blip usando CLI com prompts, Node.js e IA. Resolvi em menos de 3 dias algo que manualmente levaria semanas ou um mês, usando apenas $5 em tokens.";

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  /** ISO YYYY-MM */
  startDate: string;
  /** ISO YYYY-MM, null = ongoing */
  endDate: string | null;
  /** Display label for the period (e.g. "Set 2025 - Atual") */
  period: string;
  description: string;
  technologies: string[];
  /** Order on mobile timeline (lower = earlier in list) */
  mobileOrder: number;
  /** ID of an experience this one overlapped with. Renders side-by-side on desktop, concurrent on the LEFT. */
  concurrentWith?: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Frontend Engineer",
    company: "i_mais",
    companyUrl: "https://imais.com.br/",
    location: "Manaus, Brasil",
    startDate: "2025-09",
    endDate: null,
    period: "Set 2025 - Atual",
    description:
      "Liderança técnica de projetos frontend com React, Next.js e TypeScript. Definição de stack, padrões de arquitetura e garantias de qualidade. Automação de testes com estrutura própria baseada em Playwright MCP, criando testes para novas funcionalidades em minutos. Pipeline de testes (unitários, integração e E2E) via GitHub Actions. Integração com Sentry MCP para análise e resolução de bugs em tempo real. CLI com IA para análise automática de tickets, processando 300 tickets de uma vez e gerando relatórios consolidados. Revisão de PRs automatizada com Claude Code e skills customizadas. Colaboração com UX/UI para transformar protótipos em interfaces responsivas com TailwindCSS, Shadcn e Radix UI. Deploy contínuo com GitHub Actions (stage e production) com pipelines de tipagem, lint e testes.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Playwright",
      "Sentry MCP",
      "GitHub Actions",
      "TailwindCSS",
      "Hygraph",
      "Claude Code",
      "Radix UI",
    ],
    mobileOrder: 4,
  },
  {
    id: "2",
    role: "Tech Lead Temporário",
    company: "i_mais",
    companyUrl: "https://imais.com.br/",
    location: "Manaus, Brasil",
    startDate: "2026-01",
    endDate: "2026-04",
    period: "Jan 2026 - Abr 2026",
    description:
      "Liderança de time de 3 desenvolvedores (2 frontend + 1 backend) + 1 UX. Responsável por dailies, orientação técnica e decisões de produto. Coordenação de ambas as áreas (frontend e backend). Auxílio na lógica de produto e validação de soluções.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Liderança Técnica",
      "Scrum",
    ],
    mobileOrder: 3,
    concurrentWith: "1",
  },
  {
    id: "3",
    role: "Desenvolvedor Frontend Pleno",
    company: "i_mais",
    companyUrl: "https://imais.com.br/",
    location: "Manaus, Brasil",
    startDate: "2022-10",
    endDate: "2025-09",
    period: "Out 2022 - Set 2025",
    description:
      "Supervisão e suporte técnico a desenvolvedores júnior e pleno. Decisões técnicas dos projetos sem necessidade de aprovação do tech lead. Documentação técnica de projetos frontend e fluxos de chatbot. Treinamento de novos devs sobre construção de chatbots e fluxos Blip. Projeto de maior impacto: Leads — que escalou significativamente. Estruturação de arquiteturas escaláveis. Implementação de testes automatizados com Vitest, Testing Library, Cypress e Playwright.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Vitest",
      "Testing Library",
      "Cypress",
      "Playwright",
    ],
    mobileOrder: 2,
  },
  {
    id: "4",
    role: "Desenvolvedor Frontend Jr",
    company: "i_mais",
    companyUrl: "https://imais.com.br/",
    location: "Manaus, Brasil",
    startDate: "2021-07",
    endDate: "2022-09",
    period: "Jul 2021 - Set 2022",
    description:
      "Desenvolvimento de aplicações web e blogs com React, PrismicCMS, HTML, CSS, JavaScript. Desenvolvimento de aplicativos mobile com React Native e Expo. Criação e manutenção de documentação de componentes com Storybook. Projeto e implementação do bot inicial da empresa. Entregou +8 projetos.",
    technologies: [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "Blip",
      "Prismic",
      "React Native",
      "Expo",
      "Storybook",
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
    ],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo", "NativeWind"],
  },
  {
    category: "Prototipação & Design",
    items: ["Figma", "Pencil", "FigJam"],
  },
  {
    category: "Automação & IA",
    items: [
      "Claude Code",
      "OpenCode",
      "Playwright MCP",
      "Sentry MCP",
      "n8n",
      "CLI customizado com IA",
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
    ],
  },
  {
    category: "CMS & Headless",
    items: ["Prismic", "Hygraph"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Fastify",
      "Prisma",
      "Drizzle",
      "REST API",
      "PostgreSQL",
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
      "GitHub Actions",
      "CI/CD",
      "Jira",
      "Vercel",
      "Railway",
      "Docker",
      "Deploy",
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
  course: "Ciência da Computação",
  institution: "Uninorte",
  period: "2017 - 2022",
};

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário" },
];
