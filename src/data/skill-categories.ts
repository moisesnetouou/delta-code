export type CategoryType =
  | "frontend"
  | "backend"
  | "testes"
  | "automacao"
  | "bots"
  | "ferramentas"
  | "soft"
  | "cms";

export interface CategoryConfig {
  type: CategoryType;
  label: string;
}

export const categoryConfig: Record<string, CategoryConfig> = {
  "Frontend & Frameworks": { type: "frontend", label: "Front" },
  "Prototipação & Design": { type: "soft", label: "Design" },
  "CMS & Headless": { type: "cms", label: "CMS" },
  "Testes & Qualidade": { type: "testes", label: "Test" },
  "Automação & IA": { type: "automacao", label: "AI" },
  "Bots & Chatbots": { type: "bots", label: "Bots" },
  Backend: { type: "backend", label: "Back" },
  "Ferramentas & Infra": { type: "ferramentas", label: "Infra" },
  "Soft Skills": { type: "soft", label: "Soft" },
};

export const DEFAULT_CATEGORY = "Frontend & Frameworks";

export interface CategoryStyle {
  bg: string;
  border: string;
  text: string;
  gradient: string;
}

export const categoryStyles: Record<CategoryType, CategoryStyle> = {
  frontend: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    gradient: "from-cyan-500 to-blue-500",
  },
  backend: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    gradient: "from-purple-500 to-pink-500",
  },
  testes: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-400",
    gradient: "from-green-500 to-emerald-500",
  },
  automacao: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    text: "text-yellow-400",
    gradient: "from-yellow-500 to-orange-500",
  },
  bots: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    text: "text-pink-400",
    gradient: "from-pink-500 to-rose-500",
  },
  cms: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-400",
    gradient: "from-amber-500 to-orange-500",
  },
  ferramentas: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    gradient: "from-orange-500 to-red-500",
  },
  soft: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    gradient: "from-blue-500 to-cyan-500",
  },
};
