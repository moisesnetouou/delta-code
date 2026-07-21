"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/language-context";
import { renderCompany } from "./render-company";
import { timelineStyles } from "./styles";

const styles = timelineStyles();

import type { Experience } from "./types";

interface ExperienceDialogProps {
  experience: Experience | null;
  onClose: () => void;
  onSkillClick: (tech: string) => void;
}

export function ExperienceDialog({
  experience,
  onClose,
  onSkillClick,
}: ExperienceDialogProps) {
  const { t } = useLanguage();
  const experienceText = experience
    ? t.timeline.experiences[
        experience.id as keyof typeof t.timeline.experiences
      ]
    : null;
  const details = experience
    ? t.timeline.details[experience.id as keyof typeof t.timeline.details]
    : null;

  return (
    <Dialog open={!!experience} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className={styles.dialogContent()}>
        {experience && details && experienceText && (
          <>
            <div className={styles.dialogBar()} />

            <div className={styles.dialogBody()}>
              <DialogTitle className={styles.dialogTitle()}>
                {experienceText.role}
              </DialogTitle>
              <p className={styles.dialogCompany()}>
                {renderCompany(experience.company, experience.companyUrl)}
              </p>

              <div className={styles.dialogMetaRow()}>
                <span className={styles.dialogMetaItem()}>
                  <Calendar className="w-4 h-4" />
                  {experienceText.period}
                </span>
                <span className={styles.dialogMetaItem()}>
                  <MapPin className="w-4 h-4" />
                  {experienceText.location}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={styles.dialogSection()}
                >
                  <div>
                    <h4 className={styles.dialogSectionLabel()}>
                      <span className={styles.dialogDotCyan()} />
                      {t.timeline.responsibilitiesLabel}
                    </h4>
                    <ul className={styles.dialogList()}>
                      {details.responsibilities.map((resp) => (
                        <li key={resp} className={styles.dialogListItem()}>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.dialogDivider()}>
                    <h4 className={styles.dialogSectionLabel()}>
                      <span className={styles.dialogDotPurple()} />
                      {t.timeline.impactLabel}
                    </h4>
                    <ul className={styles.dialogList()}>
                      {details.impact.map((imp) => (
                        <li key={imp} className={styles.dialogListItem()}>
                          {imp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.dialogDivider()}>
                    <h4 className={styles.dialogSectionLabelPlain()}>
                      {t.timeline.technologiesLabel}
                    </h4>
                    <div className={styles.cardTech()}>
                      {experience.technologies.map((tech) => {
                        const hasDescription =
                          !!t.skills.descriptions[
                            tech as keyof typeof t.skills.descriptions
                          ];
                        if (hasDescription) {
                          return (
                            <button
                              key={tech}
                              type="button"
                              onClick={() => onSkillClick(tech)}
                              className={styles.techBadgeClickable()}
                            >
                              {tech}
                            </button>
                          );
                        }
                        return (
                          <span key={tech} className={styles.dialogTech()}>
                            {tech}
                          </span>
                        );
                      })}
                    </div>
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
