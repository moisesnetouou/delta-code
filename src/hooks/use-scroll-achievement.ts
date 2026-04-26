"use client";

import { useEffect } from "react";
import {
  type AchievementId,
  isAchievementUnlocked,
  unlockAchievement,
} from "@/lib/achievements";

const VISIBILITY_THRESHOLD_PX = 100;

export function useScrollAchievement(
  sectionId: string,
  achievementId: AchievementId,
) {
  useEffect(() => {
    const handleScroll = () => {
      if (isAchievementUnlocked(achievementId)) {
        window.removeEventListener("scroll", handleScroll);
        return;
      }
      const section = document.getElementById(sectionId);
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.bottom <= window.innerHeight + VISIBILITY_THRESHOLD_PX) {
        unlockAchievement(achievementId);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionId, achievementId]);
}
