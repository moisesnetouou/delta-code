"use client";

import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { useMemo, useState } from "react";
import { type SelectedSkill, SkillDialog } from "@/components/skill-dialog";
import { skills } from "@/data/portfolio-data";
import type { Project, ProjectKind } from "@/data/projects";
import { DEFAULT_CATEGORY } from "@/data/skill-categories";
import { useLanguage } from "@/i18n/language-context";
import { ProjectCard } from "./project-card";
import { ProjectDialog } from "./project-dialog";
import { projectsStyles } from "./styles";
import type { ProjectsProps } from "./types";

const styles = projectsStyles();

const GROUP_ORDER: ProjectKind[] = ["professional", "personal"];

const techToCategory: Record<string, string> = {};
skills.forEach((category) => {
  category.items.forEach((item) => {
    techToCategory[item] = category.category;
  });
});

export default function Projects({ projects }: ProjectsProps) {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<SelectedSkill | null>(
    null,
  );

  const groups = useMemo(
    () =>
      GROUP_ORDER.map((kind) => ({
        kind,
        items: projects.filter((project) => project.kind === kind),
      })).filter((group) => group.items.length > 0),
    [projects],
  );

  const handleSkillClick = (tech: string) => {
    if (!t.skills.descriptions[tech as keyof typeof t.skills.descriptions])
      return;
    setSelectedSkill({
      name: tech,
      category: techToCategory[tech] || DEFAULT_CATEGORY,
    });
  };

  return (
    <>
      <section id="projects" className={styles.section()}>
        <div className={styles.backgroundGrid()} />

        <div className={styles.container()}>
          <motion.div
            className={styles.header()}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.icon()}>
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div className={styles.titleCol()}>
              <h2 className={styles.title()}>{t.projects.heading}</h2>
              <p className={styles.subtitle()}>{t.projects.subtitle}</p>
            </div>
          </motion.div>

          {groups.map((group) => (
            <div key={group.kind} className={styles.group()}>
              <span className={styles.groupLabel()}>
                {t.projects.groups[group.kind]}
              </span>
              <div
                className={
                  group.items.length === 1 ? styles.gridSingle() : styles.grid()
                }
              >
                {group.items.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onOpenDetails={setSelectedProject}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSkillClick={handleSkillClick}
      />

      <SkillDialog
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />
    </>
  );
}
