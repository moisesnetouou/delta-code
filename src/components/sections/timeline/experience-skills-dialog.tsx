"use client";

import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { skillDescriptions } from "@/data/skill-descriptions";
import { renderCompany } from "./render-company";
import { timelineStyles } from "./styles";
import type { Experience } from "./types";

interface ExperienceSkillsDialogProps {
  experience: Experience | null;
  onClose: () => void;
  onSelectSkill: (tech: string) => void;
}

export function ExperienceSkillsDialog({
  experience,
  onClose,
  onSelectSkill,
}: ExperienceSkillsDialogProps) {
  const styles = timelineStyles();
  return (
    <Dialog open={!!experience} onOpenChange={onClose}>
      <DialogContent className={styles.dialogContentSkill()}>
        {experience && (
          <>
            <div className="h-2 bg-gradient-to-r from-cyan-500 to-purple-500" />

            <div className={styles.expDialogBody()}>
              <DialogTitle className={styles.dialogTitle()}>
                Tecnologias
              </DialogTitle>
              <p className={styles.expDialogCompany()}>
                {experience.role} @{" "}
                {renderCompany(experience.company, experience.companyUrl)}
              </p>

              <div className={styles.expGrid()}>
                {experience.technologies.map((tech) => {
                  const hasDescription = !!skillDescriptions[tech];
                  if (hasDescription) {
                    return (
                      <motion.button
                        key={tech}
                        onClick={() => onSelectSkill(tech)}
                        className={styles.expCard()}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className={styles.expCardTitle()}>{tech}</span>
                        <span className={styles.expCardSubtitle()}>
                          Clique para ver detalhes
                        </span>
                      </motion.button>
                    );
                  }
                  return (
                    <div key={tech} className={styles.expCardStatic()}>
                      <span className={styles.expCardTitleStatic()}>
                        {tech}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className={styles.expHint()}>
                Clique em uma tecnologia para ver mais detalhes
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
