"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  type SkillDescription,
  skillDescriptions,
} from "@/data/skill-descriptions";
import { getIcon } from "@/lib/icons";
import { timelineStyles } from "./styles";

type CategoryType =
  | "frontend"
  | "backend"
  | "testes"
  | "automacao"
  | "bots"
  | "ferramentas"
  | "soft";

const categoryConfig: Record<string, { type: CategoryType; label: string }> = {
  "Frontend & Frameworks": { type: "frontend", label: "Front" },
  "Testes & Qualidade": { type: "testes", label: "Test" },
  "Automação & IA": { type: "automacao", label: "AI" },
  "Bots & Chatbots": { type: "bots", label: "Bots" },
  Backend: { type: "backend", label: "Back" },
  "Ferramentas & Infra": { type: "ferramentas", label: "Infra" },
  "Soft Skills": { type: "soft", label: "Soft" },
};

const typeStyles: Record<
  CategoryType,
  { bg: string; border: string; text: string; gradient: string }
> = {
  frontend: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    gradient: "from-cyan-500 to-blue-500",
  },
  backend: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    gradient: "from-purple-500 to-pink-500",
  },
  testes: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-400",
    gradient: "from-green-500 to-emerald-500",
  },
  automacao: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    text: "text-yellow-400",
    gradient: "from-yellow-500 to-orange-500",
  },
  bots: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    text: "text-pink-400",
    gradient: "from-pink-500 to-rose-500",
  },
  ferramentas: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    gradient: "from-orange-500 to-red-500",
  },
  soft: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    gradient: "from-blue-500 to-cyan-500",
  },
};

interface SelectedSkill {
  name: string;
  category: string;
}

interface SkillDialogProps {
  skill: SelectedSkill | null;
  onClose: () => void;
}

export function SkillDialog({ skill, onClose }: SkillDialogProps) {
  const styles = timelineStyles();
  const description: SkillDescription | null = skill
    ? skillDescriptions[skill.name] || null
    : null;
  const category = skill ? categoryConfig[skill.category] : null;
  const typeStyle = category ? typeStyles[category.type] : null;

  return (
    <Dialog open={!!skill} onOpenChange={onClose}>
      <DialogContent className={styles.dialogContentSkill()}>
        {description && typeStyle && category && (
          <>
            <div className={`h-2 bg-gradient-to-r ${typeStyle.gradient}`} />

            <div className={styles.skillDialogBody()}>
              <div className={styles.skillDialogCategoryRow()}>
                <span
                  className={`${styles.categoryBadge()} ${typeStyle.bg} ${typeStyle.border} ${typeStyle.text}`}
                >
                  {category.label}
                </span>
              </div>

              <div className={styles.skillDialogIconRow()}>
                <div className={styles.skillDialogIconWrapper()}>
                  <div className={styles.skillDialogIconInner()}>
                    {getIcon(description.name)}
                  </div>
                </div>
                <div className="flex-1">
                  <DialogTitle className={styles.dialogTitle()}>
                    {description.name}
                  </DialogTitle>
                  <p className={styles.skillDialogSubtitle()}>
                    {skill?.category}
                  </p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={description.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={styles.skillDialogContent()}
                >
                  <div>
                    <h4 className={styles.skillDialogSectionLabel()}>
                      O que é
                    </h4>
                    <p className={styles.skillDialogSectionText()}>
                      {description.description}
                    </p>
                  </div>

                  <div>
                    <h4 className={styles.skillDialogSectionLabel()}>
                      Caso de Uso
                    </h4>
                    <p className={styles.skillDialogSectionText()}>
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
