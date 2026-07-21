"use client";

import { motion } from "framer-motion";
import {
  Bug,
  Cog,
  Globe,
  Layers,
  MessageCircle,
  Palette,
  Smartphone,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { type SelectedSkill, SkillDialog } from "@/components/skill-dialog";
import { coreStack } from "@/data/portfolio-data";
import {
  type CategoryType,
  categoryConfig,
  categoryStyles,
  DEFAULT_CATEGORY,
} from "@/data/skill-categories";
import { useLanguage } from "@/i18n/language-context";
import {
  isAchievementUnlocked,
  recordSkillView,
  unlockAchievement,
} from "@/lib/achievements";
import { getIcon } from "@/lib/icons";
import { skillsStyles } from "./styles";
import type { SkillsProps } from "./types";

const styles = skillsStyles();

const categoryIcons: Record<CategoryType, ReactNode> = {
  frontend: <Palette className="w-3 h-3" />,
  backend: <Cog className="w-3 h-3" />,
  mobile: <Smartphone className="w-3 h-3" />,
  testes: <Bug className="w-3 h-3" />,
  automacao: <Sparkles className="w-3 h-3" />,
  bots: <MessageCircle className="w-3 h-3" />,
  cms: <Globe className="w-3 h-3" />,
  ferramentas: <Wrench className="w-3 h-3" />,
  soft: <Users className="w-3 h-3" />,
};

const FALLBACK_CATEGORY_TYPE: CategoryType = "frontend";

export default function Skills({ skills }: SkillsProps) {
  const { t } = useLanguage();
  const [selectedSkill, setSelectedSkill] = useState<SelectedSkill | null>(
    null,
  );

  const techToCategory = useMemo(() => {
    const map: Record<string, string> = {};
    for (const skillCategory of skills) {
      for (const item of skillCategory.items) {
        map[item] = skillCategory.category;
      }
    }
    return map;
  }, [skills]);

  const handleSkillClick = (name: string, category: string) => {
    if (!t.skills.descriptions[name as keyof typeof t.skills.descriptions])
      return;
    setSelectedSkill({ name, category });
    if (!isAchievementUnlocked("open_skill")) unlockAchievement("open_skill");
    recordSkillView(name);
  };

  const selectedCategoryIcon = selectedSkill
    ? categoryIcons[
        categoryConfig[selectedSkill.category]?.type ?? FALLBACK_CATEGORY_TYPE
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
            <h2 className={styles.title()}>{t.skills.heading}</h2>
          </motion.div>

          {coreStack && coreStack.length > 0 && (
            <motion.div
              className={styles.coreSection()}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className={styles.coreHeading()}>{t.skills.coreHeading}</h3>
              <div className={styles.coreGrid()}>
                {coreStack.map((item, index) => {
                  const skillDict =
                    t.skills.descriptions[
                      item as keyof typeof t.skills.descriptions
                    ];
                  const category = techToCategory[item] ?? DEFAULT_CATEGORY;
                  return (
                    <motion.button
                      key={item}
                      type="button"
                      onClick={() => handleSkillClick(item, category)}
                      className={styles.coreBadge()}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={styles.coreIcon()}>{getIcon(item)}</div>
                      <span className={styles.coreName()}>
                        {skillDict?.name ?? item}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          <div className="space-y-8">
            {skills.map((skillCategory, catIndex) => {
              const type =
                categoryConfig[skillCategory.category]?.type ??
                FALLBACK_CATEGORY_TYPE;
              const categoryDict = t.skills.categories[
                skillCategory.category as keyof typeof t.skills.categories
              ] ?? {
                name: skillCategory.category,
                badge: skillCategory.category,
              };
              const style = categoryStyles[type];
              const icon = categoryIcons[type];

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
                      {categoryDict.badge}
                    </span>
                    <h3 className={styles.categoryName()}>
                      {categoryDict.name}
                    </h3>
                  </div>

                  <div className={styles.grid()}>
                    {skillCategory.items.map((item, itemIndex) => {
                      const skillDict =
                        t.skills.descriptions[
                          item as keyof typeof t.skills.descriptions
                        ];
                      const hasDescription = !!skillDict;
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
                          <span className={styles.skillName()}>
                            {skillDict?.name ?? item}
                          </span>
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
