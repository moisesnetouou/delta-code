import {
  Activity,
  Bot,
  Braces,
  type LucideIcon,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

/**
 * Structural project data. Translatable copy (title, tagline, summary, role,
 * overview, highlights) lives in the i18n dictionary keyed by `id`
 * (`src/i18n/pt.ts` -> `projects.items[id]`). Projects with `caseStudy: true`
 * also read `projects.caseStudies[id]`.
 */
export interface Project {
  /** Slug used in the /projects/[slug] route and as the i18n dictionary key */
  id: string;
  /** Brand name, never translated */
  name: string;
  kind: ProjectKind;
  liveUrl?: string;
  /** Only set when the repository is public */
  repoUrl?: string;
  /**
   * Must match the strings in `skills[].items` whenever one exists, so
   * `getIcon()` and `t.skills.descriptions[tech]` keep resolving.
   */
  technologies: string[];
  /** ISO YYYY-MM, omitted when the dates are not public */
  startDate?: string;
  /** ISO YYYY-MM, null = ongoing */
  endDate?: string | null;
  status: ProjectStatus;
  /** Card thumbnail, 16:9, under /public */
  thumbnail?: string;
  /** Icon key for projects with no screenshot, see `projectIcons` */
  icon?: ProjectIconKey;
  /** Detail-page gallery, ordered to match `caseStudies[id].screenshotCaptions` */
  screenshots?: string[];
  /** Has a /projects/[slug] page; false opens the dialog instead */
  caseStudy: boolean;
  /** Featured projects span the full grid width */
  featured: boolean;
  /** Project brand color, used as the card accent bar */
  accent: string;
}

export type ProjectKind = "professional" | "personal";

export type ProjectStatus = "live" | "wip" | "archived";

type ProjectIconKey =
  | "observability"
  | "shield"
  | "crm"
  | "growth"
  | "bot"
  | "script";

export const projectIcons: Record<ProjectIconKey, LucideIcon> = {
  observability: Activity,
  shield: ShieldCheck,
  crm: Users,
  growth: TrendingUp,
  bot: Bot,
  script: Braces,
};

export const projects: Project[] = [
  {
    id: "observabilidade",
    name: "Plataforma de observabilidade",
    kind: "professional",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Redis",
      "Docker",
      "Nginx",
      "PM2",
      "Linux",
      "TailwindCSS",
    ],
    status: "live",
    icon: "observability",
    caseStudy: false,
    featured: false,
    accent: "#10b981",
  },
  {
    id: "denuncias",
    name: "Canal de denúncias anônimo",
    kind: "professional",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Zod",
      "REST API",
      "Claude Design",
      "Controle de Acesso por Perfil",
    ],
    status: "live",
    icon: "shield",
    caseStudy: false,
    featured: false,
    accent: "#8b5cf6",
  },
  {
    id: "crm",
    name: "CRM com conteúdo editável",
    kind: "professional",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "React Query",
      "Zod",
      "Vitest",
      "Testing Library",
    ],
    status: "live",
    icon: "crm",
    caseStudy: false,
    featured: false,
    accent: "#f59e0b",
  },
  {
    id: "leads",
    name: "Plataforma de leads e indicação",
    kind: "professional",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "React Query",
      "Playwright",
      "Vitest",
      "GitHub Actions",
      "CI/CD",
    ],
    status: "live",
    icon: "growth",
    caseStudy: false,
    featured: false,
    accent: "#ec4899",
  },
  {
    id: "automacao-atendimento",
    name: "Atendimento automatizado e telemetria",
    kind: "professional",
    technologies: [
      "Arquiteto de Bot",
      "Criação de Fluxograma",
      "n8n",
      "Node.js",
      "TypeScript",
      "CLI customizado com IA",
      "Claude",
      "Orquestração de Agentes",
    ],
    status: "live",
    icon: "bot",
    caseStudy: false,
    featured: false,
    accent: "#3b82f6",
  },
  {
    id: "automacoes-python",
    name: "Automações em Python com IA",
    kind: "professional",
    technologies: [
      "Python",
      "Claude",
      "Whisper",
      "Embeddings",
      "Busca Semântica",
      "Automação de Processos",
      "CLI customizado com IA",
    ],
    status: "live",
    icon: "script",
    caseStudy: false,
    featured: false,
    accent: "#22c55e",
  },
  {
    id: "deltalog",
    name: "deltalog",
    kind: "personal",
    liveUrl: "https://www.deltalog.dev.br",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Keystatic",
      "Markdoc",
      "Shiki",
      "Radix UI",
      "Biome",
      "Vercel",
    ],
    startDate: "2026-08",
    endDate: null,
    status: "live",
    thumbnail: "/images/projects/deltalog-home.jpg",
    screenshots: [
      "/images/projects/deltalog-post.jpg",
      "/images/projects/deltalog-posts.jpg",
      "/images/projects/deltalog-tools.jpg",
    ],
    caseStudy: true,
    featured: true,
    accent: "#01c8f1",
  },
];

/** Projects that have a /projects/[slug] page. */
export const caseStudyProjects = projects.filter(
  (project) => project.caseStudy,
);

const toMonthYear = (iso: string) => {
  const [year, month] = iso.split("-");
  return `${month}/${year}`;
};

const toDate = (iso: string) => {
  const [year, month] = iso.split("-").map(Number);
  return new Date(year, month - 1, 1);
};

/** All labels carry a `{count}` placeholder except `ongoing`. */
interface ProjectPeriodLabels {
  ongoing: string;
  month: string;
  months: string;
  year: string;
  years: string;
}

function elapsedLabel(
  startDate: string,
  endDate: string | null | undefined,
  labels: ProjectPeriodLabels,
): string {
  const start = toDate(startDate);
  const end = endDate ? toDate(endDate) : new Date();
  const months = Math.max(
    1,
    (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth()),
  );

  if (months < 12) {
    const template = months === 1 ? labels.month : labels.months;
    return template.replace("{count}", String(months));
  }

  const years = Math.floor(months / 12);
  const template = years === 1 ? labels.year : labels.years;
  return template.replace("{count}", String(years));
}

/**
 * `08/2026 · atual · 1 mês`, or null when the project has no public dates.
 * Labels come from the caller's dictionary.
 */
export function formatProjectPeriod(
  project: Project,
  labels: ProjectPeriodLabels,
): string | null {
  if (!project.startDate) return null;

  const start = toMonthYear(project.startDate);
  const end = project.endDate ? toMonthYear(project.endDate) : labels.ongoing;
  return `${start} · ${end} · ${elapsedLabel(project.startDate, project.endDate, labels)}`;
}

interface ProjectStatusStyle {
  bg: string;
  border: string;
  text: string;
  dot: string;
}

export const projectStatusStyles: Record<ProjectStatus, ProjectStatusStyle> = {
  live: {
    bg: "bg-success/10",
    border: "border-success/30",
    text: "text-success",
    dot: "bg-success",
  },
  wip: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-400",
    dot: "bg-amber-400",
  },
  archived: {
    bg: "bg-foreground-muted/10",
    border: "border-foreground-muted/30",
    text: "text-foreground-muted",
    dot: "bg-foreground-muted",
  },
};
