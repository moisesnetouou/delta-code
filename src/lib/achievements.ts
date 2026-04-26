"use client";

import { deleteCookie, getCookie, setCookie } from "cookies-next";

const COOKIE_NAME = "delta-achievements";

export type AchievementId =
  | "welcome"
  | "view_contact"
  | "view_journey"
  | "open_experience"
  | "open_skill"
  | "click_linkedin"
  | "click_github"
  | "download_cv"
  | "return_visitor"
  | "platinum";

export interface Achievement {
  id: AchievementId;
  title: string;
  description: string;
  icon: string;
  isPlatinum?: boolean;
  requiredAchievements?: AchievementId[];
}

export const achievementsList: Achievement[] = [
  {
    id: "welcome",
    title: "Bem-vindo",
    description: "Você visitou meu portfólio",
    icon: "👋",
  },
  {
    id: "view_contact",
    title: "Fechamento",
    description: "Chegou ao final do portfólio",
    icon: "🏁",
    requiredAchievements: ["welcome"],
  },
  {
    id: "open_experience",
    title: "Detalhista",
    description: "Viu detalhes de uma experiência",
    icon: "🔍",
    requiredAchievements: ["welcome"],
  },
  {
    id: "open_skill",
    title: "Aprendizado",
    description: "Viu detalhes de uma skill",
    icon: "📚",
    requiredAchievements: ["welcome"],
  },
  {
    id: "click_linkedin",
    title: "Networking",
    description: "Visitou meu LinkedIn",
    icon: "💼",
    requiredAchievements: ["welcome"],
  },
  {
    id: "click_github",
    title: "Código Aberto",
    description: "Visitou meu GitHub",
    icon: "💻",
    requiredAchievements: ["welcome"],
  },
  {
    id: "download_cv",
    title: "Currículo Obtido",
    description: "Você baixou meu currículo",
    icon: "📄",
    requiredAchievements: ["welcome"],
  },
  {
    id: "return_visitor",
    title: "Retorno Bem-sucedido",
    description: "Revisitou meu portfólio",
    icon: "🔄",
  },
  {
    id: "platinum",
    title: "Conquista Secreta",
    description: "Você explorou todo o portfólio!",
    icon: "💎",
  },
];

export interface AchievementsState {
  unlocked: AchievementId[];
  unlockedAt?: Record<string, string>;
}

let cache: AchievementsState | null = null;

function readCookie(): AchievementsState {
  try {
    const cookieValue = getCookie(COOKIE_NAME);
    if (cookieValue) return JSON.parse(cookieValue as string);
  } catch (e) {
    console.error("Error reading achievements cookie:", e);
  }
  return { unlocked: [] };
}

export function getAchievements(): AchievementsState {
  if (typeof window === "undefined") return { unlocked: [] };
  if (cache) return cache;
  cache = readCookie();
  return cache;
}

export function unlockAchievement(
  achievementId: AchievementId,
): AchievementsState {
  if (typeof window === "undefined") return { unlocked: [] };

  const current = getAchievements();
  if (current.unlocked.includes(achievementId)) return current;

  const newState: AchievementsState = {
    unlocked: [...current.unlocked, achievementId],
    unlockedAt: {
      ...current.unlockedAt,
      [achievementId]: new Date().toISOString(),
    },
  };

  try {
    setCookie(COOKIE_NAME, JSON.stringify(newState), {
      maxAge: 60 * 60 * 24 * 365,
    });
    cache = newState;
  } catch (e) {
    console.error("Error setting achievements cookie:", e);
  }

  return newState;
}

const PLATINUM_REQUIREMENTS: AchievementId[] = [
  "welcome",
  "view_contact",
  "open_experience",
  "open_skill",
  "click_linkedin",
  "click_github",
  "download_cv",
  "return_visitor",
];

export function canUnlockPlatinum(): boolean {
  const current = getAchievements();
  return PLATINUM_REQUIREMENTS.every((req) => current.unlocked.includes(req));
}

export function checkReturnVisitor(): boolean {
  return getAchievements().unlocked.length > 0;
}

export function resetAchievements(): void {
  if (typeof window === "undefined") return;
  try {
    deleteCookie(COOKIE_NAME);
    cache = { unlocked: [] };
  } catch (e) {
    console.error("Error deleting achievements cookie:", e);
  }
}

export function isAchievementUnlocked(achievementId: AchievementId): boolean {
  return getAchievements().unlocked.includes(achievementId);
}

export function getProgress(): {
  current: number;
  total: number;
  percentage: number;
} {
  const unlockedCount = getAchievements().unlocked.length;
  const totalCount = achievementsList.filter((a) => !a.isPlatinum).length;
  return {
    current: unlockedCount,
    total: totalCount,
    percentage:
      totalCount > 0 ? Math.round((unlockedCount / totalCount) * 100) : 0,
  };
}
