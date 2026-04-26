"use client";

import { motion } from "framer-motion";
import {
  Bug,
  Cog,
  Globe,
  Layers,
  MessageCircle,
  Palette,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { type SelectedSkill, SkillDialog } from "@/components/skill-dialog";
import {
  type CategoryType,
  categoryConfig,
  categoryStyles,
} from "@/data/skill-categories";
import { skillDescriptions } from "@/data/skill-descriptions";
import { isAchievementUnlocked, unlockAchievement } from "@/lib/achievements";
import { getIcon } from "@/lib/icons";
import { skillsStyles } from "./styles";
import type { SkillsProps } from "./types";

const styles = skillsStyles();

const categoryIcons: Record<CategoryType, ReactNode> = {
  frontend: <Palette className="w-3 h-3" />,
  backend: <Cog className="w-3 h-3" />,
  testes: <Bug className="w-3 h-3" />,
  automacao: <Sparkles className="w-3 h-3" />,
  bots: <MessageCircle className="w-3 h-3" />,
  cms: <Globe className="w-3 h-3" />,
  ferramentas: <Wrench className="w-3 h-3" />,
  soft: <Users className="w-3 h-3" />,
};

const FALLBACK_CATEGORY: { type: CategoryType; label: string } = {
  type: "frontend",
  label: "Other",
};

export default function Skills({ skills }: SkillsProps) {
  const [selectedSkill, setSelectedSkill] = useState<SelectedSkill | null>(
    null,
  );

  const handleSkillClick = (name: string, category: string) => {
    if (!skillDescriptions[name]) return;
    setSelectedSkill({ name, category });
    if (!isAchievementUnlocked("open_skill")) unlockAchievement("open_skill");
  };

  const selectedCategoryIcon = selectedSkill
    ? categoryIcons[
        (categoryConfig[selectedSkill.category] ?? FALLBACK_CATEGORY).type
      ]
    : null;

  return (
    <>
      <section id="skills" className={styles.section()}>
        <div className={styles.container()}>
          <motion.div
            className={styles.header()}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.icon()}>
              <Layers className="w-5 h-5" />
            </div>
            <h2 className={styles.title()}>Habilidades</h2>
          </motion.div>

          <div className="space-y-8">
            {skills.map((skillCategory, catIndex) => {
              const config =
                categoryConfig[skillCategory.category] ?? FALLBACK_CATEGORY;
              const style = categoryStyles[config.type];
              const icon = categoryIcons[config.type];

              return (
                <motion.div
                  key={skillCategory.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                >
                  <div className={styles.categoryRow()}>
                    <span
                      className={`${styles.categoryBadge()} ${style.bg} ${style.border} ${style.text}`}
                    >
                      {icon}
                      {config.label}
                    </span>
                    <h3 className={styles.categoryName()}>
                      {skillCategory.category}
                    </h3>
                  </div>

                  <div className={styles.grid()}>
                    {skillCategory.items.map((item, itemIndex) => {
                      const hasDescription = !!skillDescriptions[item];
                      return (
                        <motion.button
                          key={item}
                          onClick={() =>
                            handleSkillClick(item, skillCategory.category)
                          }
                          disabled={!hasDescription}
                          aria-disabled={!hasDescription}
                          className={styles.skillItem()}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: itemIndex * 0.02,
                          }}
                          whileHover={hasDescription ? { scale: 1.05 } : {}}
                          whileTap={hasDescription ? { scale: 0.95 } : {}}
                        >
                          <div className={styles.skillIcon()}>
                            {getIcon(item)}
                          </div>
                          <span className={styles.skillName()}>{item}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SkillDialog
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
        categoryIcon={selectedCategoryIcon}
      />
    </>
  );
}
