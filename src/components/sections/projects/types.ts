import type { Project } from "@/data/projects";

export type { Project };

export interface ProjectsProps {
  projects: Project[];
}

export interface ProjectCardProps {
  project: Project;
  /** Stagger index for the reveal animation */
  index: number;
  /** Called by cards without a case-study page */
  onOpenDetails: (project: Project) => void;
}

export interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
  onSkillClick: (tech: string) => void;
}
