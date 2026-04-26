"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { experienceDetails } from "@/data/experience-details";
import { renderCompany } from "./render-company";
import { timelineStyles } from "./styles";

const styles = timelineStyles();

import type { Experience } from "./types";

interface ExperienceDialogProps {
  experience: Experience | null;
  onClose: () => void;
}

export function ExperienceDialog({
  experience,
  onClose,
}: ExperienceDialogProps) {
  const details = experience ? experienceDetails[experience.id] : null;

  return (
    <Dialog open={!!experience} onOpenChange={onClose}>
      <DialogContent className={styles.dialogContent()}>
        {experience && details && (
          <>
            <div className={styles.dialogBar()} />

            <div className={styles.dialogBody()}>
              <DialogTitle className={styles.dialogTitle()}>
                {experience.role}
              </DialogTitle>
              <p className={styles.dialogCompany()}>
                {renderCompany(experience.company, experience.companyUrl)}
              </p>

              <div className={styles.dialogMetaRow()}>
                <span className={styles.dialogMetaItem()}>
                  <Calendar className="w-4 h-4" />
                  {experience.period}
                </span>
                <span className={styles.dialogMetaItem()}>
                  <MapPin className="w-4 h-4" />
                  {experience.location}
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
                      Responsabilidades
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
                      Impacto
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
                      Tecnologias
                    </h4>
                    <div className={styles.cardTech()}>
                      {experience.technologies.map((tech) => (
                        <span key={tech} className={styles.dialogTech()}>
                          {tech}
                        </span>
                      ))}
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
