"use client";

import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/language-context";
import { renderCompany } from "./render-company";
import { timelineStyles } from "./styles";

const styles = timelineStyles();

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
  const { t } = useLanguage();
  const experienceText = experience
    ? t.timeline.experiences[
        experience.id as keyof typeof t.timeline.experiences
      ]
    : null;
  return (
    <Dialog open={!!experience} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className={styles.dialogContentSkill()}>
        {experience && experienceText && (
          <>
            <div className="h-2 bg-gradient-to-r from-cyan-500 to-purple-500" />

            <div className={styles.expDialogBody()}>
              <DialogTitle className={styles.dialogTitle()}>
                {t.timeline.technologiesLabel}
              </DialogTitle>
              <p className={styles.expDialogCompany()}>
                {experienceText.role} @{" "}
                {renderCompany(experience.company, experience.companyUrl)}
              </p>

              <div className={styles.expGrid()}>
                {experience.technologies.map((tech) => {
                  const hasDescription =
                    !!t.skills.descriptions[
                      tech as keyof typeof t.skills.descriptions
                    ];
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
                          {t.timeline.clickForDetails}
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

              <p className={styles.expHint()}>{t.timeline.techDialogHint}</p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
