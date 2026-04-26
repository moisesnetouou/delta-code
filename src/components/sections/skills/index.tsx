"use client";

import { AnimatePresence, motion } from "framer-motion";
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
import type React from "react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  type SkillDescription,
  skillDescriptions,
} from "@/data/skill-descriptions";
import { isAchievementUnlocked, unlockAchievement } from "@/lib/achievements";
import { getIcon } from "@/lib/icons";
import { skillsStyles } from "./styles";
import type { SkillsProps } from "./types";

type CategoryType =
  | "frontend"
  | "backend"
  | "testes"
  | "automacao"
  | "bots"
  | "ferramentas"
  | "soft"
  | "cms";

const categoryConfig: Record<string, { type: CategoryType; label: string }> = {
  "Frontend & Frameworks": { type: "frontend", label: "Front" },
  "Prototipação & Design": { type: "soft", label: "Design" },
  "CMS & Headless": { type: "cms", label: "CMS" },
  "Testes & Qualidade": { type: "testes", label: "Test" },
  "Automação & IA": { type: "automacao", label: "AI" },
  "Bots & Chatbots": { type: "bots", label: "Bots" },
  Backend: { type: "backend", label: "Back" },
  "Ferramentas & Infra": { type: "ferramentas", label: "Infra" },
  "Soft Skills": { type: "soft", label: "Soft" },
};

const typeStyles: Record<
  CategoryType,
  { bg: string; border: string; text: string; icon: React.ReactNode }
> = {
  frontend: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    icon: <Palette className="w-3 h-3" />,
  },
  backend: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    icon: <Cog className="w-3 h-3" />,
  },
  testes: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-400",
    icon: <Bug className="w-3 h-3" />,
  },
  automacao: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    text: "text-yellow-400",
    icon: <Sparkles className="w-3 h-3" />,
  },
  bots: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    text: "text-pink-400",
    icon: <MessageCircle className="w-3 h-3" />,
  },
  cms: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-400",
    icon: <Globe className="w-3 h-3" />,
  },
  ferramentas: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    icon: <Wrench className="w-3 h-3" />,
  },
  soft: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    icon: <Users className="w-3 h-3" />,
  },
};

interface SkillWithCategory {
  name: string;
  category: string;
}

export default function Skills({ skills }: SkillsProps) {
  const styles = skillsStyles();
  const [selectedSkill, setSelectedSkill] = useState<SkillWithCategory | null>(
    null,
  );

  const getSkillDescription = (name: string): SkillDescription | null => {
    return skillDescriptions[name] || null;
  };

  const handleSkillClick = (name: string, category: string) => {
    const description = getSkillDescription(name);
    if (description) {
      setSelectedSkill({ name, category });

      if (!isAchievementUnlocked("open_skill")) {
        unlockAchievement("open_skill");
      }
    }
  };

  const selectedDescription = selectedSkill
    ? getSkillDescription(selectedSkill.name)
    : null;
  const selectedCategoryConfig = selectedSkill
    ? categoryConfig[selectedSkill.category]
    : null;
  const selectedTypeStyle = selectedCategoryConfig
    ? typeStyles[selectedCategoryConfig.type]
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
              const config = categoryConfig[skillCategory.category] || {
                type: "frontend" as CategoryType,
                label: "Other",
              };
              const style = typeStyles[config.type];

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
                      {style.icon}
                      {config.label}
                    </span>
                    <h3 className={styles.categoryName()}>
                      {skillCategory.category}
                    </h3>
                  </div>

                  <div className={styles.grid()}>
                    {skillCategory.items.map((item, itemIndex) => {
                      const description = getSkillDescription(item);
                      return (
                        <motion.button
                          key={item}
                          onClick={() =>
                            description &&
                            handleSkillClick(item, skillCategory.category)
                          }
                          disabled={!description}
                          className={styles.skillItem()}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: itemIndex * 0.02,
                          }}
                          whileHover={description ? { scale: 1.05 } : {}}
                          whileTap={description ? { scale: 0.95 } : {}}
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

      <Dialog
        open={!!selectedSkill}
        onOpenChange={() => setSelectedSkill(null)}
      >
        <DialogContent className={styles.dialogContent()}>
          {selectedDescription && selectedTypeStyle && (
            <>
              <div
                className={`${styles.dialogBar()} ${
                  selectedCategoryConfig?.type === "frontend"
                    ? "from-cyan-500 to-blue-500"
                    : selectedCategoryConfig?.type === "backend"
                      ? "from-purple-500 to-pink-500"
                      : selectedCategoryConfig?.type === "testes"
                        ? "from-green-500 to-emerald-500"
                        : selectedCategoryConfig?.type === "automacao"
                          ? "from-yellow-500 to-orange-500"
                          : selectedCategoryConfig?.type === "bots"
                            ? "from-pink-500 to-rose-500"
                            : selectedCategoryConfig?.type === "ferramentas"
                              ? "from-orange-500 to-red-500"
                              : "from-blue-500 to-cyan-500"
                }`}
              />

              <div className={styles.dialogBody()}>
                <div className={styles.dialogCategoryRow()}>
                  <span
                    className={`${styles.categoryBadge()} ${selectedTypeStyle.bg} ${selectedTypeStyle.border} ${selectedTypeStyle.text}`}
                  >
                    {selectedTypeStyle.icon}
                    {selectedCategoryConfig?.label}
                  </span>
                </div>

                <div className={styles.dialogIconRow()}>
                  <div className={styles.dialogIconWrapper()}>
                    <div className={styles.dialogIconInner()}>
                      {getIcon(selectedDescription.name)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <DialogTitle className={styles.dialogTitle()}>
                      {selectedDescription.name}
                    </DialogTitle>
                    <p className={styles.dialogSubtitle()}>
                      {selectedSkill?.category}
                    </p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedDescription.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={styles.dialogSection()}
                  >
                    <div>
                      <h4 className={styles.dialogSectionLabel()}>O que é</h4>
                      <p className={styles.dialogSectionText()}>
                        {selectedDescription.description}
                      </p>
                    </div>

                    <div>
                      <h4 className={styles.dialogSectionLabel()}>
                        Caso de Uso
                      </h4>
                      <p className={styles.dialogSectionText()}>
                        {selectedDescription.useCase}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
