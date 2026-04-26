"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { skills } from "@/data/portfolio-data";
import { skillDescriptions } from "@/data/skill-descriptions";
import { isAchievementUnlocked, unlockAchievement } from "@/lib/achievements";
import { ExperienceDialog } from "./experience-dialog";
import { ExperienceSkillsDialog } from "./experience-skills-dialog";
import { SkillDialog } from "./skill-dialog";
import { timelineStyles } from "./styles";
import { TimelineCard } from "./timeline-card";
import type { Experience, TimelineProps } from "./types";

const techToCategory: Record<string, string> = {};
skills.forEach((category) => {
  category.items.forEach((item) => {
    techToCategory[item] = category.category;
  });
});

function calculateYearsOfExperience(experiences: Experience[]) {
  if (experiences.length === 0) return 0;
  const firstExp = experiences.reduce((oldest, exp) => {
    const expStart = new Date(
      exp.period.split(" - ")[0].replace("Atual", "2026"),
    );
    return expStart < oldest ? expStart : oldest;
  }, new Date());
  const now = new Date();
  const years = now.getFullYear() - firstExp.getFullYear();
  const months = now.getMonth() - firstExp.getMonth();
  const totalMonths = years * 12 + months;
  return Math.max(1, Math.round(totalMonths / 12));
}

const jobOrderMobile: Record<string, number> = {
  "Desenvolvedor Frontend Jr": 1,
  "Desenvolvedor Frontend Pleno": 2,
  "Tech Lead Temporário": 3,
  "Frontend Engineer": 4,
};

export default function Timeline({ experiences }: TimelineProps) {
  const styles = timelineStyles();
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    category: string;
  } | null>(null);
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);
  const [selectedExperienceForSkills, setSelectedExperienceForSkills] =
    useState<Experience | null>(null);

  const yearsOfExperience = calculateYearsOfExperience(experiences);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("timeline");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.bottom <= window.innerHeight + 100;
        if (isVisible && !isAchievementUnlocked("view_journey")) {
          unlockAchievement("view_journey");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sortedExperiencesMobile = [...experiences].sort((a, b) => {
    const orderA = jobOrderMobile[a.role] || 99;
    const orderB = jobOrderMobile[b.role] || 99;
    return orderA - orderB;
  });

  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = new Date(a.period.split(" - ")[0].replace("Atual", "2026"));
    const dateB = new Date(b.period.split(" - ")[0].replace("Atual", "2026"));
    return dateA.getTime() - dateB.getTime();
  });

  const handleSkillClick = (tech: string) => {
    if (skillDescriptions[tech]) {
      const category = techToCategory[tech] || "Frontend & Frameworks";
      setSelectedSkill({ name: tech, category });
      if (!isAchievementUnlocked("open_skill")) {
        unlockAchievement("open_skill");
      }
    }
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

            {sortedExperiences.map((exp, index) => {
              if (index === 2) {
                const leftExp = sortedExperiences[3];
                const rightExp = sortedExperiences[2];

                return (
                  <motion.div
                    key="senior-row"
                    className={styles.desktopRow()}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className={styles.desktopGrid()}>
                      <div className={styles.desktopColRight()}>
                        <TimelineCard
                          experience={leftExp}
                          alignment="right"
                          onClick={handleExperienceClick}
                          onShowMoreSkills={setSelectedExperienceForSkills}
                          onSkillClick={handleSkillClick}
                        />
                      </div>

                      <div className={styles.desktopDot()} />

                      <div className={styles.desktopColLeft()}>
                        <TimelineCard
                          experience={rightExp}
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

              if (index >= 3) return null;

              const isLeft = index % 2 === 0;
              const alignment = isLeft ? "right" : "left";

              return (
                <motion.div
                  key={exp.id}
                  className={`relative flex items-center mb-12 last:mb-0 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div
                    className={`w-[45%] ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}
                  >
                    <TimelineCard
                      experience={exp}
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
      />

      <SkillDialog
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />

      <ExperienceSkillsDialog
        experience={selectedExperienceForSkills}
        onClose={() => setSelectedExperienceForSkills(null)}
        onSelectSkill={(tech) => {
          const category = techToCategory[tech] || "Frontend & Frameworks";
          setSelectedSkill({ name: tech, category });
        }}
      />
    </>
  );
}
