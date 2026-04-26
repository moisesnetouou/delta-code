"use client";

import { Trophy, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  type Achievement,
  achievementsList,
  getAchievements,
  resetAchievements,
  unlockAchievement,
} from "@/lib/achievements";

const TOTAL_ACHIEVEMENTS = 9;

interface AchievementsManagerProps {
  onAchievementsChange?: (unlocked: string[]) => void;
}

export function AchievementsManager({
  onAchievementsChange,
}: AchievementsManagerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>(
    [],
  );
  const [hasChecked, setHasChecked] = useState(false);
  const [recentlyUnlocked, setRecentlyUnlocked] = useState<string | null>(null);
  const shownToastIds = useRef<Set<string>>(new Set());

  const loadAchievements = useCallback(() => {
    const achievements = getAchievements();
    setUnlockedAchievements(achievements.unlocked);
    for (const id of achievements.unlocked) {
      shownToastIds.current.add(id);
    }
    return achievements;
  }, []);

  const showAchievementToast = useCallback((achievement: Achievement) => {
    if (shownToastIds.current.has(achievement.id)) return;
    shownToastIds.current.add(achievement.id);

    toast.custom(
      (t) => (
        <div className="flex items-center justify-between gap-4 p-4 bg-[#1a1a24] border border-[#00d9ff]/30 rounded-xl shadow-lg shadow-[#00d9ff]/10 min-w-[280px]">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{achievement.icon}</span>
            <div className="flex flex-col">
              <p className="font-semibold text-[#00d9ff] text-sm">
                🏆 Nova Conquista!
              </p>
              <p className="text-sm text-[#c0c0c8]">{achievement.title}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toast.dismiss(t)}
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

    toast.custom(
      (t) => (
        <div className="flex items-center justify-between gap-4 p-4 bg-gradient-to-r from-[#8b5cf6]/20 to-[#00d9ff]/20 border border-[#8b5cf6]/50 rounded-xl shadow-lg shadow-[#8b5cf6]/20 min-w-[280px]">
          <div className="flex items-center gap-3">
            <span className="text-3xl">💎</span>
            <div className="flex flex-col">
              <p className="font-semibold text-[#8b5cf6] text-sm">
                💎 Conquista Secreta Revelada!
              </p>
              <p className="text-sm text-[#c0c0c8]">
                Você explorou todo o portfólio!
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toast.dismiss(t)}
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
      const hasPlatinum = currentUnlocked.includes("platinum");
      const validIds = achievementsList
        .filter((a) => a.id !== "platinum")
        .map((a) => a.id);
      const regularCount = currentUnlocked.filter((id) =>
        (validIds as string[]).includes(id),
      ).length;

      if (!hasPlatinum && regularCount >= 8) {
        const newState = unlockAchievement("platinum");
        setUnlockedAchievements(newState.unlocked);

        if (onAchievementsChange) {
          onAchievementsChange(newState.unlocked);
        }

        setRecentlyUnlocked("platinum");
        setTimeout(() => setRecentlyUnlocked(null), 3000);

        setTimeout(() => showPlatinumToast(), 300);
      }
    },
    [onAchievementsChange, showPlatinumToast],
  );

  useEffect(() => {
    const achievements = loadAchievements();
    setUnlockedAchievements(achievements.unlocked);
    setHasChecked(true);

    const isFirstVisit = achievements.unlocked.length === 0;
    const hasWelcome = achievements.unlocked.includes("welcome");
    const hasReturn = achievements.unlocked.includes("return_visitor");

    if (!hasWelcome) {
      const newState = unlockAchievement("welcome");
      setUnlockedAchievements(newState.unlocked);

      if (onAchievementsChange) {
        onAchievementsChange(newState.unlocked);
      }

      setTimeout(() => {
        const achievement = achievementsList.find((a) => a.id === "welcome");
        if (achievement) {
          showAchievementToast(achievement);
        }
      }, 500);
    } else if (!hasReturn && isFirstVisit === false) {
      const newState = unlockAchievement("return_visitor");
      setUnlockedAchievements(newState.unlocked);

      if (onAchievementsChange) {
        onAchievementsChange(newState.unlocked);
      }

      setTimeout(() => {
        const achievement = achievementsList.find(
          (a) => a.id === "return_visitor",
        );
        if (achievement) {
          showAchievementToast(achievement);
        }
      }, 500);

      setTimeout(() => {
        checkAndUnlockPlatinum(newState.unlocked);
      }, 1000);
    } else {
      setTimeout(() => {
        checkAndUnlockPlatinum(achievements.unlocked);
      }, 1000);
    }
  }, [
    loadAchievements,
    onAchievementsChange,
    showAchievementToast,
    checkAndUnlockPlatinum,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentAchievements = getAchievements();

      if (currentAchievements.unlocked.length !== unlockedAchievements.length) {
        setUnlockedAchievements(currentAchievements.unlocked);

        if (onAchievementsChange) {
          onAchievementsChange(currentAchievements.unlocked);
        }

        const newAchievements = currentAchievements.unlocked.filter(
          (a) => !unlockedAchievements.includes(a),
        );

        newAchievements.forEach((id, index) => {
          if (id !== "platinum") {
            const achievement = achievementsList.find((a) => a.id === id);
            if (achievement) {
              setTimeout(() => {
                showAchievementToast(achievement);
              }, index * 800);
            }
          }
        });

        setTimeout(() => {
          checkAndUnlockPlatinum(currentAchievements.unlocked);
        }, newAchievements.length * 800);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [
    unlockedAchievements,
    onAchievementsChange,
    showAchievementToast,
    checkAndUnlockPlatinum,
  ]);

  const handleReset = () => {
    resetAchievements();
    setUnlockedAchievements([]);
    shownToastIds.current.clear();
    if (onAchievementsChange) {
      onAchievementsChange([]);
    }
  };

  const validAchievements = unlockedAchievements.filter((id) =>
    achievementsList.some((a) => a.id === id),
  );
  const progress = Math.min(
    100,
    Math.round((validAchievements.length / TOTAL_ACHIEVEMENTS) * 100),
  );

  const getSecretDescription = () => {
    const hasPlatinum = unlockedAchievements.includes("platinum");
    if (hasPlatinum) {
      return "Você explorou todo o portfólio!";
    }
    return "???";
  };

  if (!hasChecked) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
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
            aria-label="Fechar conquistas"
          />

          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#050508] border-l border-[#1a1a24] p-6 overflow-y-auto shadow-2xl shadow-black/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#00d9ff]/20 to-[#8b5cf6]/20 border border-[#00d9ff]/30">
                  <Trophy className="w-6 h-6 text-[#00d9ff]" />
                </div>
                <h2 className="text-xl font-bold text-[#f0f0f5]">Conquistas</h2>
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
                <span>Progresso</span>
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
                const isPlatinum = achievement.id === "platinum";
                const isRecentlyUnlocked = recentlyUnlocked === achievement.id;

                if (isPlatinum && !isUnlocked) {
                  return (
                    <div
                      key={achievement.id}
                      className="flex items-center gap-3 p-3 rounded-lg border bg-[#1a1a24] border-[#2a2a35] opacity-40"
                    >
                      <span className="text-2xl">🔒</span>
                      <div className="flex-1">
                        <p className="font-medium text-[#6b6b78]">
                          Conquista Secreta
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
                    <span className="text-2xl">
                      {isPlatinum ? "💎" : achievement.icon}
                    </span>
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
                        {isPlatinum ? "Conquista Secreta" : achievement.title}
                      </p>
                      <p className="text-xs text-[#6b6b78]">
                        {isPlatinum
                          ? getSecretDescription()
                          : achievement.description}
                      </p>
                    </div>
                    {isUnlocked && (
                      <span className="text-green-400 text-lg">✓</span>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-2 text-sm text-[#ef4444] border border-[#ef4444]/30 rounded-lg hover:bg-[#ef4444]/10 transition-colors"
            >
              Resetar Conquistas
            </button>
          </div>
        </div>
      )}
    </>
  );
}
