"use client";

import Clarity from "@microsoft/clarity";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

const COOKIE_NAME = "delta-achievements";
const OPENED_SKILLS_COOKIE = "delta-opened-skills";

export const ACHIEVEMENT_EVENT = "delta-achievement";

const COOKIE_OPTS = {
  maxAge: 60 * 60 * 24 * 365,
  sameSite: "lax",
  secure:
    typeof window !== "undefined" && window.location.protocol === "https:",
} as const;

export type AchievementId =
  | "welcome"
  | "view_journey"
  | "view_contact"
  | "open_experience"
  | "open_skill"
  | "curious"
  | "click_linkedin"
  | "click_github"
  | "download_cv"
  | "return_visitor"
  | "platinum";

/**
 * Structural achievement metadata. Title/description are localized and live in
 * the i18n dictionary (`t.achievements.items[id]`); only id/icon/flags live here.
 */
export interface Achievement {
  id: AchievementId;
  icon: string;
  isPlatinum?: boolean;
  requiredAchievements?: AchievementId[];
}

export const achievementsList: Achievement[] = [
  { id: "welcome", icon: "👋" },
  { id: "view_journey", icon: "🧭", requiredAchievements: ["welcome"] },
  { id: "view_contact", icon: "🏁", requiredAchievements: ["welcome"] },
  { id: "open_experience", icon: "🔍", requiredAchievements: ["welcome"] },
  { id: "open_skill", icon: "📚", requiredAchievements: ["welcome"] },
  { id: "curious", icon: "🤓", requiredAchievements: ["welcome"] },
  { id: "click_linkedin", icon: "💼", requiredAchievements: ["welcome"] },
  { id: "click_github", icon: "💻", requiredAchievements: ["welcome"] },
  { id: "download_cv", icon: "📄", requiredAchievements: ["welcome"] },
  { id: "return_visitor", icon: "🔄" },
  { id: "platinum", icon: "💎", isPlatinum: true },
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

function emitChange(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(ACHIEVEMENT_EVENT));
  }
}

export function getAchievements(): AchievementsState {
  if (typeof window === "undefined") return { unlocked: [] };
  if (cache) return cache;
  cache = readCookie();
  return cache;
}

/** Drops the in-memory cache so the next read reflects an external (cross-tab) write. */
export function refreshAchievementsCache(): void {
  cache = null;
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
    setCookie(COOKIE_NAME, JSON.stringify(newState), COOKIE_OPTS);
    cache = newState;
    try {
      Clarity.event(`achievement_unlocked:${achievementId}`);
    } catch {}
    emitChange();
  } catch (e) {
    console.error("Error setting achievements cookie:", e);
  }

  return newState;
}

/**
 * Platinum requires every non-platinum achievement that a thorough single
 * visit can reach (return_visitor is a bonus, not required).
 */
const PLATINUM_REQUIREMENTS: AchievementId[] = [
  "welcome",
  "view_journey",
  "view_contact",
  "open_experience",
  "open_skill",
  "curious",
  "click_linkedin",
  "click_github",
  "download_cv",
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
    deleteCookie(OPENED_SKILLS_COOKIE);
    cache = { unlocked: [] };
    emitChange();
  } catch (e) {
    console.error("Error deleting achievements cookie:", e);
  }
}

export function isAchievementUnlocked(achievementId: AchievementId): boolean {
  return getAchievements().unlocked.includes(achievementId);
}

/**
 * Tracks distinct skills opened to unlock the "curious" achievement (open 3
 * different skill dialogs). Persisted in a cookie so it survives reloads.
 */
const CURIOUS_THRESHOLD = 3;
const OPENED_SKILLS_CAP = 20;

function readOpenedSkills(): string[] {
  try {
    const value = getCookie(OPENED_SKILLS_COOKIE);
    if (value) return JSON.parse(value as string);
  } catch {}
  return [];
}

export function recordSkillView(skillKey: string): void {
  if (typeof window === "undefined") return;
  const opened = readOpenedSkills();
  if (opened.includes(skillKey)) return;

  const next = [...opened, skillKey].slice(-OPENED_SKILLS_CAP);
  try {
    setCookie(OPENED_SKILLS_COOKIE, JSON.stringify(next), COOKIE_OPTS);
  } catch (e) {
    console.error("Error setting opened-skills cookie:", e);
  }

  if (next.length >= CURIOUS_THRESHOLD && !isAchievementUnlocked("curious")) {
    unlockAchievement("curious");
  }
}

export function getProgress(): {
  current: number;
  total: number;
  percentage: number;
} {
  const unlocked = getAchievements().unlocked;
  const unlockedCount = PLATINUM_REQUIREMENTS.filter((id) =>
    unlocked.includes(id),
  ).length;
  const totalCount = PLATINUM_REQUIREMENTS.length;
  return {
    current: unlockedCount,
    total: totalCount,
    percentage:
      totalCount > 0 ? Math.round((unlockedCount / totalCount) * 100) : 0,
  };
}
