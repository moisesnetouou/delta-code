"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { projectIcons } from "@/data/projects";
import { useLanguage } from "@/i18n/language-context";
import { projectDialogStyles } from "./styles";
import type { ProjectDialogProps } from "./types";

const styles = projectDialogStyles();

export function ProjectDialog({
  project,
  onClose,
  onSkillClick,
}: ProjectDialogProps) {
  const { t } = useLanguage();
  const copy = project ? t.projects.items[project.id] : null;
  const Icon = project?.icon ? projectIcons[project.icon] : null;

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className={styles.content()}>
        {project && copy && (
          <>
            <div
              className={styles.bar()}
              style={{ background: project.accent }}
            />

            <div className={styles.body()}>
              <div className={styles.header()}>
                {Icon && (
                  <span
                    className={styles.iconTile()}
                    style={{
                      backgroundColor: `${project.accent}1a`,
                      color: project.accent,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </span>
                )}
                <div className={styles.titleCol()}>
                  <DialogTitle className={styles.title()}>
                    {copy.title}
                  </DialogTitle>
                  <p className={styles.tagline()}>{copy.tagline}</p>
                </div>
              </div>

              <div className={styles.metaRow()}>
                <span className={styles.metaItem()}>{copy.role}</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={styles.sections()}
                >
                  <div className={styles.prose()}>
                    {copy.overview.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 40)}
                        className={styles.proseText()}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className={styles.divider()}>
                    <h4 className={styles.sectionLabel()}>
                      {t.projects.labels.highlights}
                    </h4>
                    <ul className={styles.list()}>
                      {copy.highlights.map((item) => (
                        <li key={item} className={styles.listItem()}>
                          <span
                            className={styles.listDot()}
                            style={{ background: project.accent }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.divider()}>
                    <h4 className={styles.sectionLabel()}>
                      {t.projects.labels.stack}
                    </h4>
                    <div className={styles.techRow()}>
                      {project.technologies.map((tech) => {
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
                              className={styles.techChipClickable()}
                            >
                              {tech}
                            </button>
                          );
                        }

                        return (
                          <span key={tech} className={styles.techChip()}>
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
