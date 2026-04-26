"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { type SelectedSkill, SkillDialog } from "@/components/skill-dialog";
import { type Experience, skills } from "@/data/portfolio-data";
import { DEFAULT_CATEGORY } from "@/data/skill-categories";
import { skillDescriptions } from "@/data/skill-descriptions";
import { useScrollAchievement } from "@/hooks/use-scroll-achievement";
import { isAchievementUnlocked, unlockAchievement } from "@/lib/achievements";
import { ExperienceDialog } from "./experience-dialog";
import { ExperienceSkillsDialog } from "./experience-skills-dialog";
import { timelineStyles } from "./styles";
import { TimelineCard } from "./timeline-card";
import type { TimelineProps } from "./types";

const styles = timelineStyles();

const techToCategory: Record<string, string> = {};
skills.forEach((category) => {
  category.items.forEach((item) => {
    techToCategory[item] = category.category;
  });
});

interface TimelineRow {
  /** Anchor experience — used for chronological sorting + solo rows. */
  right: Experience;
  /** Concurrent experience rendered on the left side of the row. */
  left?: Experience;
  /** Index among solo (non-pair) rows; used for left/right alternation. */
  soloIndex?: number;
}

function getExperienceStartDate(exp: Experience): Date {
  const [year, month] = exp.startDate.split("-").map(Number);
  return new Date(year, month - 1, 1);
}

function calculateYearsOfExperience(experiences: Experience[]) {
  if (experiences.length === 0) return 0;
  const earliest = experiences.reduce((oldest, exp) => {
    const start = getExperienceStartDate(exp);
    return start < oldest ? start : oldest;
  }, new Date());
  const now = new Date();
  const years = now.getFullYear() - earliest.getFullYear();
  const months = now.getMonth() - earliest.getMonth();
  return Math.max(1, Math.round((years * 12 + months) / 12));
}

function buildRows(experiences: Experience[]): TimelineRow[] {
  const consumed = new Set<string>();
  const rows: TimelineRow[] = [];

  for (const exp of experiences) {
    if (consumed.has(exp.id) || !exp.concurrentWith) continue;
    const target = experiences.find((e) => e.id === exp.concurrentWith);
    if (!target || consumed.has(target.id)) continue;
    rows.push({ left: exp, right: target });
    consumed.add(exp.id);
    consumed.add(target.id);
  }

  for (const exp of experiences) {
    if (consumed.has(exp.id)) continue;
    rows.push({ right: exp });
    consumed.add(exp.id);
  }

  rows.sort(
    (a, b) =>
      getExperienceStartDate(a.right).getTime() -
      getExperienceStartDate(b.right).getTime(),
  );

  let soloCounter = 0;
  for (const row of rows) {
    if (!row.left) {
      row.soloIndex = soloCounter;
      soloCounter += 1;
    }
  }

  return rows;
}

export default function Timeline({ experiences }: TimelineProps) {
  const [selectedSkill, setSelectedSkill] = useState<SelectedSkill | null>(
    null,
  );
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);
  const [selectedExperienceForSkills, setSelectedExperienceForSkills] =
    useState<Experience | null>(null);

  useScrollAchievement("timeline", "view_journey");

  const yearsOfExperience = useMemo(
    () => calculateYearsOfExperience(experiences),
    [experiences],
  );

  const sortedExperiencesMobile = useMemo(
    () => [...experiences].sort((a, b) => a.mobileOrder - b.mobileOrder),
    [experiences],
  );

  const desktopRows = useMemo(() => buildRows(experiences), [experiences]);

  const handleSkillClick = (tech: string) => {
    if (!skillDescriptions[tech]) return;
    const category = techToCategory[tech] || DEFAULT_CATEGORY;
    setSelectedSkill({ name: tech, category });
    if (!isAchievementUnlocked("open_skill")) unlockAchievement("open_skill");
  };

  const handleExperienceClick = (exp: Experience) => {
    setSelectedExperience(exp);
    if (!isAchievementUnlocked("open_experience")) {
      unlockAchievement("open_experience");
    }
  };

  return (
    <>
      <section id="timeline" className={styles.section()}>
        <div className={styles.container()}>
          <motion.div
            className={styles.header()}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.title()}>Minha Jornada</h2>
            <p className={styles.subtitle()}>
              {yearsOfExperience}+ anos de experiência construindo soluções
            </p>
          </motion.div>

          <div className={styles.desktopWrapper()}>
            <div className={styles.desktopLine()} />

            {desktopRows.map((row, rowIndex) => {
              const isPair = !!row.left;

              if (isPair && row.left) {
                return (
                  <motion.div
                    key={row.right.id}
                    className={styles.desktopRow()}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
                  >
                    <div className={styles.desktopGrid()}>
                      <div className={styles.desktopColRight()}>
                        <TimelineCard
                          experience={row.left}
                          alignment="right"
                          onClick={handleExperienceClick}
                          onShowMoreSkills={setSelectedExperienceForSkills}
                          onSkillClick={handleSkillClick}
                        />
                      </div>

                      <div className={styles.desktopDot()} />

                      <div className={styles.desktopColLeft()}>
                        <TimelineCard
                          experience={row.right}
                          alignment="left"
                          onClick={handleExperienceClick}
                          onShowMoreSkills={setSelectedExperienceForSkills}
                          onSkillClick={handleSkillClick}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              }

              const isLeftSide = (row.soloIndex ?? 0) % 2 === 0;
              const alignment = isLeftSide ? "right" : "left";

              return (
                <motion.div
                  key={row.right.id}
                  className={`relative flex items-center mb-12 last:mb-0 ${
                    isLeftSide ? "flex-row" : "flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
                >
                  <div
                    className={`w-[45%] ${
                      isLeftSide ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <TimelineCard
                      experience={row.right}
                      alignment={alignment}
                      onClick={handleExperienceClick}
                      onShowMoreSkills={setSelectedExperienceForSkills}
                      onSkillClick={handleSkillClick}
                    />
                  </div>

                  <div className={styles.desktopDot()} />
                </motion.div>
              );
            })}
          </div>

          <div className={styles.mobileWrapper()}>
            {sortedExperiencesMobile.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TimelineCard
                  experience={exp}
                  variant="mobile"
                  onClick={handleExperienceClick}
                  onShowMoreSkills={setSelectedExperienceForSkills}
                  onSkillClick={handleSkillClick}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ExperienceDialog
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
        onSkillClick={handleSkillClick}
      />

      <SkillDialog
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />

      <ExperienceSkillsDialog
        experience={selectedExperienceForSkills}
        onClose={() => setSelectedExperienceForSkills(null)}
        onSelectSkill={handleSkillClick}
      />
    </>
  );
}
