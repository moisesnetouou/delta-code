"use client";

import { ExternalLink, GitBranch } from "lucide-react";
import { projectsStyles } from "./projects.styles";
import type { ProjectsProps } from "./projects.types";

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className={projectsStyles.section}>
      <div className={projectsStyles.container}>
        <div className={projectsStyles.header}>
          <div className={projectsStyles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h2 className={projectsStyles.title}>Projetos</h2>
        </div>

        <div className={projectsStyles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={projectsStyles.card}>
              <div className={projectsStyles.cardHeader}>
                <h3 className={projectsStyles.cardTitle}>{project.title}</h3>
                <ExternalLink className={projectsStyles.cardIcon} />
              </div>
              <p className={projectsStyles.cardDescription}>{project.description}</p>
              <div className={projectsStyles.cardTech}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={projectsStyles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={projectsStyles.cardLinks}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={projectsStyles.cardLink}
                >
                  <GitBranch className={projectsStyles.cardLinkIcon} />
                  Código
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={projectsStyles.cardLink}
                  >
                    <ExternalLink className={projectsStyles.cardLinkIcon} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}