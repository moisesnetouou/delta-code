"use client";

import { ExternalLink, GitBranch } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projectsStyles } from "./projects.styles";
import type { ProjectsProps } from "./projects.types";

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className={projectsStyles.section}>
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
              aria-label="Projetos"
            >
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h2 className={projectsStyles.title}>Projetos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-surface border-foreground-muted/10 hover:border-accent-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-secondary/10 cursor-pointer"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent-secondary transition-colors">
                    {project.title}
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-foreground-muted group-hover:text-accent-secondary transition-colors" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-foreground-muted/10 text-foreground-muted"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent-primary hover:text-accent-secondary transition-colors flex items-center gap-1"
                  >
                    <GitBranch className="w-4 h-4" />
                    Código
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent-primary hover:text-accent-secondary transition-colors flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
