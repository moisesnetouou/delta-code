import type { Experience } from "@/data/portfolio-data";

export type { Experience };

export interface TimelineProps {
  experiences: Experience[];
}

export type TimelineAlignment = "left" | "right";
export type TimelineVariant = "desktop" | "mobile";

export interface TimelineCardProps {
  experience: Experience;
  alignment?: TimelineAlignment;
  variant?: TimelineVariant;
  onClick: (exp: Experience) => void;
  onShowMoreSkills: (exp: Experience) => void;
  onSkillClick: (tech: string) => void;
}
