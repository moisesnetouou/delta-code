"use client";

import Clarity from "@microsoft/clarity";
import { personalInfo } from "@/data/portfolio-data";
import {
  type AchievementId,
  isAchievementUnlocked,
  unlockAchievement,
} from "@/lib/achievements";

function openExternal(url: string, achievement: AchievementId) {
  // Open synchronously inside the click gesture, otherwise browsers block the
  // popup (a delayed window.open breaks the user-activation chain).
  window.open(url, "_blank", "noopener,noreferrer");
  if (!isAchievementUnlocked(achievement)) unlockAchievement(achievement);
}

export function usePortfolioActions() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/moises-neto-curriculo.pdf";
    link.download = "moises-neto-curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    try {
      Clarity.event("cv_downloaded");
    } catch {}
    if (!isAchievementUnlocked("download_cv")) unlockAchievement("download_cv");
  };

  const openLinkedin = () =>
    openExternal(personalInfo.linkedin, "click_linkedin");

  const openGithub = () => openExternal(personalInfo.github, "click_github");

  return { downloadCV, openLinkedin, openGithub };
}
