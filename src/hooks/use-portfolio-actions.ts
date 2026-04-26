"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio-data";
import {
  type AchievementId,
  isAchievementUnlocked,
  unlockAchievement,
} from "@/lib/achievements";

const NAVIGATE_DELAY_MS = 1500;

function openWithUnlockGate(
  url: string,
  achievement: AchievementId,
  hasNavigated: boolean,
  setHasNavigated: (v: boolean) => void,
) {
  if (!hasNavigated && !isAchievementUnlocked(achievement)) {
    unlockAchievement(achievement);
    setHasNavigated(true);
    setTimeout(() => window.open(url, "_blank"), NAVIGATE_DELAY_MS);
    return;
  }
  window.open(url, "_blank");
}

export function usePortfolioActions() {
  const [hasNavigatedLinkedin, setHasNavigatedLinkedin] = useState(false);
  const [hasNavigatedGithub, setHasNavigatedGithub] = useState(false);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/moises-neto-curriculo.pdf";
    link.download = "moises-neto-curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    if (!isAchievementUnlocked("download_cv")) unlockAchievement("download_cv");
  };

  const openLinkedin = () =>
    openWithUnlockGate(
      personalInfo.linkedin,
      "click_linkedin",
      hasNavigatedLinkedin,
      setHasNavigatedLinkedin,
    );

  const openGithub = () =>
    openWithUnlockGate(
      personalInfo.github,
      "click_github",
      hasNavigatedGithub,
      setHasNavigatedGithub,
    );

  return { downloadCV, openLinkedin, openGithub };
}
