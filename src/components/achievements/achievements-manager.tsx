"use client";

import { Trophy, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/language-context";
import {
  ACHIEVEMENT_EVENT,
  type AchievementId,
  achievementsList,
  canUnlockPlatinum,
  getAchievements,
  getProgress,
  refreshAchievementsCache,
  resetAchievements,
  unlockAchievement,
} from "@/lib/achievements";

interface AchievementsManagerProps {
  onAchievementsChange?: (unlocked: string[]) => void;
}

const ICONS: Record<string, string> = Object.fromEntries(
  achievementsList.map((a) => [a.id, a.icon]),
);

export function AchievementsManager({
  onAchievementsChange,
}: AchievementsManagerProps) {
  const { t } = useLanguage();
  const tRef = useRef(t);
  tRef.current = t;

  const [isOpen, setIsOpen] = useState(false);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>(
    [],
  );
  const [hasChecked, setHasChecked] = useState(false);
  const [recentlyUnlocked, setRecentlyUnlocked] = useState<string | null>(null);
  const shownToastIds = useRef<Set<string>>(new Set());
  const unlockedRef = useRef<string[]>([]);

  const loadAchievements = useCallback(() => {
    const achievements = getAchievements();
    setUnlockedAchievements(achievements.unlocked);
    for (const id of achievements.unlocked) {
      shownToastIds.current.add(id);
    }
    return achievements;
  }, []);

  const showAchievementToast = useCallback((id: AchievementId) => {
    if (shownToastIds.current.has(id)) return;
    shownToastIds.current.add(id);

    const item = tRef.current.achievements.items[id];
    const icon = ICONS[id];

    toast.custom(
      (toastId) => (
        <div className="flex items-center justify-between gap-4 p-4 bg-[#1a1a24] border border-[#00d9ff]/30 rounded-xl shadow-lg shadow-[#00d9ff]/10 min-w-[280px]">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{icon}</span>
            <div className="flex flex-col">
              <p className="font-semibold text-[#00d9ff] text-sm">
                🏆 {tRef.current.achievements.newAchievement}
              </p>
              <p className="text-sm text-[#c0c0c8]">{item.title}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toast.dismiss(toastId)}
            className="text-[#6b6b78] hover:text-[#f0f0f5] p-1 rounded-lg hover:bg-[#2a2a35] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ),
      { duration: 4000 },
    );
  }, []);

  const showPlatinumToast = useCallback(() => {
    if (shownToastIds.current.has("platinum")) return;
    shownToastIds.current.add("platinum");

    const platinum = tRef.current.achievements.items.platinum;

    toast.custom(
      (toastId) => (
        <div className="flex items-center justify-between gap-4 p-4 bg-gradient-to-r from-[#8b5cf6]/20 to-[#00d9ff]/20 border border-[#8b5cf6]/50 rounded-xl shadow-lg shadow-[#8b5cf6]/20 min-w-[280px]">
          <div className="flex items-center gap-3">
            <span className="text-3xl">💎</span>
            <div className="flex flex-col">
              <p className="font-semibold text-[#8b5cf6] text-sm">
                💎 {tRef.current.achievements.secretRevealed}
              </p>
              <p className="text-sm text-[#c0c0c8]">{platinum.description}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toast.dismiss(toastId)}
            className="text-[#6b6b78] hover:text-[#f0f0f5] p-1 rounded-lg hover:bg-[#2a2a35] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ),
      { duration: 5000 },
    );
  }, []);

  const checkAndUnlockPlatinum = useCallback(
    (currentUnlocked: string[]) => {
      if (!currentUnlocked.includes("platinum") && canUnlockPlatinum()) {
        const newState = unlockAchievement("platinum");
        setUnlockedAchievements(newState.unlocked);
        onAchievementsChange?.(newState.unlocked);

        setRecentlyUnlocked("platinum");
        setTimeout(() => setRecentlyUnlocked(null), 3000);
        setTimeout(() => showPlatinumToast(), 300);
      }
    },
    [onAchievementsChange, showPlatinumToast],
  );

  const syncFromStore = useCallback(() => {
    const current = getAchievements();
    const prev = unlockedRef.current;
    if (current.unlocked.length === prev.length) return;

    const newIds = current.unlocked.filter((id) => !prev.includes(id));
    unlockedRef.current = current.unlocked;
    setUnlockedAchievements(current.unlocked);
    onAchievementsChange?.(current.unlocked);

    newIds.forEach((id, index) => {
      if (id !== "platinum") {
        setTimeout(
          () => showAchievementToast(id as AchievementId),
          index * 800,
        );
      }
    });
    setTimeout(
      () => checkAndUnlockPlatinum(current.unlocked),
      newIds.length * 800,
    );
  }, [onAchievementsChange, showAchievementToast, checkAndUnlockPlatinum]);

  useEffect(() => {
    unlockedRef.current = unlockedAchievements;
  }, [unlockedAchievements]);

  useEffect(() => {
    const achievements = loadAchievements();
    unlockedRef.current = achievements.unlocked;
    setUnlockedAchievements(achievements.unlocked);
    setHasChecked(true);

    const isFirstVisit = achievements.unlocked.length === 0;
    const hasWelcome = achievements.unlocked.includes("welcome");
    const hasReturn = achievements.unlocked.includes("return_visitor");

    if (!hasWelcome) {
      unlockAchievement("welcome");
    } else if (!hasReturn && isFirstVisit === false) {
      unlockAchievement("return_visitor");
    }

    syncFromStore();
    setTimeout(() => checkAndUnlockPlatinum(getAchievements().unlocked), 1000);
  }, [loadAchievements, syncFromStore, checkAndUnlockPlatinum]);

  useEffect(() => {
    const onExternal = () => {
      refreshAchievementsCache();
      syncFromStore();
    };
    window.addEventListener(ACHIEVEMENT_EVENT, syncFromStore);
    window.addEventListener("focus", onExternal);
    document.addEventListener("visibilitychange", onExternal);
    return () => {
      window.removeEventListener(ACHIEVEMENT_EVENT, syncFromStore);
      window.removeEventListener("focus", onExternal);
      document.removeEventListener("visibilitychange", onExternal);
    };
  }, [syncFromStore]);

  const handleReset = () => {
    resetAchievements();
    setUnlockedAchievements([]);
    shownToastIds.current.clear();
    onAchievementsChange?.([]);
  };

  const progress = getProgress().percentage;

  if (!hasChecked) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={t.achievements.panelTitle}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#0a0a0f] border border-[#00d9ff]/30 hover:border-[#00d9ff]/60 hover:bg-[#00d9ff]/10 transition-all duration-300 shadow-lg shadow-[#00d9ff]/10 group"
      >
        <Trophy className="w-6 h-6 text-[#00d9ff] group-hover:scale-110 transition-transform" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
            onClick={() => setIsOpen(false)}
            aria-label={t.common.close}
          />

          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#050508] border-l border-[#1a1a24] p-6 overflow-y-auto shadow-2xl shadow-black/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#00d9ff]/20 to-[#8b5cf6]/20 border border-[#00d9ff]/30">
                  <Trophy className="w-6 h-6 text-[#00d9ff]" />
                </div>
                <h2 className="text-xl font-bold text-[#f0f0f5]">
                  {t.achievements.panelTitle}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 text-[#6b6b78] hover:text-[#f0f0f5] hover:bg-[#1a1a24] rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6 p-3 bg-[#1a1a24] rounded-lg border border-[#2a2a35]">
              <div className="flex justify-between text-sm text-[#c0c0c8] mb-2">
                <span>{t.achievements.progress}</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-2 bg-[#2a2a35] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {achievementsList.map((achievement) => {
                const isUnlocked = unlockedAchievements.includes(
                  achievement.id,
                );
                const isPlatinum = achievement.isPlatinum === true;
                const isRecentlyUnlocked = recentlyUnlocked === achievement.id;
                const item = t.achievements.items[achievement.id];

                if (isPlatinum && !isUnlocked) {
                  return (
                    <div
                      key={achievement.id}
                      className="flex items-center gap-3 p-3 rounded-lg border bg-[#1a1a24] border-[#2a2a35] opacity-40"
                    >
                      <span className="text-2xl">🔒</span>
                      <div className="flex-1">
                        <p className="font-medium text-[#6b6b78]">
                          {t.achievements.secretLockedTitle}
                        </p>
                        <p className="text-xs text-[#6b6b78]">
                          {t.achievements.secretLockedDescription}
                        </p>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={achievement.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                      isUnlocked
                        ? isPlatinum
                          ? "bg-gradient-to-r from-[#8b5cf6]/20 to-[#00d9ff]/20 border-[#8b5cf6]/50"
                          : "bg-[#00d9ff]/10 border-[#00d9ff]/30"
                        : "bg-[#1a1a24] border-[#2a2a35] opacity-50"
                    } ${isRecentlyUnlocked ? "animate-pulse" : ""}`}
                  >
                    <span className="text-2xl">{achievement.icon}</span>
                    <div className="flex-1">
                      <p
                        className={`font-medium ${
                          isUnlocked
                            ? isPlatinum
                              ? "text-[#8b5cf6]"
                              : "text-[#00d9ff]"
                            : "text-[#6b6b78]"
                        }`}
                      >
                        {item.title}
                      </p>
                      <p className="text-xs text-[#6b6b78]">
                        {item.description}
                      </p>
                    </div>
                    {isUnlocked && (
                      <span className="text-green-400 text-lg">✓</span>
                    )}
                  </div>
                );
              })}
            </div>

            {progress === 100 && (
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mb-3 block w-full rounded-lg bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] py-2 text-center text-sm font-semibold text-[#050508] transition-opacity hover:opacity-90"
              >
                {t.achievements.ctaText}
              </button>
            )}

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-2 text-sm text-[#ef4444] border border-[#ef4444]/30 rounded-lg hover:bg-[#ef4444]/10 transition-colors"
            >
              {t.achievements.reset}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
