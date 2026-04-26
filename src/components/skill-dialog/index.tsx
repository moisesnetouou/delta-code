"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { categoryConfig, categoryStyles } from "@/data/skill-categories";
import {
  type SkillDescription,
  skillDescriptions,
} from "@/data/skill-descriptions";
import { getIcon } from "@/lib/icons";
import { skillDialogStyles } from "./styles";

const styles = skillDialogStyles();

export interface SelectedSkill {
  name: string;
  category: string;
}

interface SkillDialogProps {
  skill: SelectedSkill | null;
  onClose: () => void;
  /** Optional category badge icon (lucide-react node) */
  categoryIcon?: ReactNode;
}

export function SkillDialog({
  skill,
  onClose,
  categoryIcon,
}: SkillDialogProps) {
  const description: SkillDescription | null = skill
    ? skillDescriptions[skill.name] || null
    : null;
  const category = skill ? categoryConfig[skill.category] : null;
  const typeStyle = category ? categoryStyles[category.type] : null;

  return (
    <Dialog open={!!skill} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className={styles.content()}>
        {description && typeStyle && category && (
          <>
            <div className={`${styles.bar()} ${typeStyle.gradient}`} />

            <div className={styles.body()}>
              <div className={styles.categoryRow()}>
                <span
                  className={`${styles.categoryBadge()} ${typeStyle.bg} ${typeStyle.border} ${typeStyle.text}`}
                >
                  {categoryIcon}
                  {category.label}
                </span>
              </div>

              <div className={styles.iconRow()}>
                <div className={styles.iconWrapper()}>
                  <div className={styles.iconInner()}>
                    {getIcon(description.name)}
                  </div>
                </div>
                <div className={styles.titleCol()}>
                  <DialogTitle className={styles.title()}>
                    {description.name}
                  </DialogTitle>
                  <p className={styles.subtitle()}>{skill?.category}</p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={description.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={styles.sections()}
                >
                  <div>
                    <h4 className={styles.sectionLabel()}>O que é</h4>
                    <p className={styles.sectionText()}>
                      {description.description}
                    </p>
                  </div>

                  <div>
                    <h4 className={styles.sectionLabel()}>Caso de Uso</h4>
                    <p className={styles.sectionText()}>
                      {description.useCase}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
