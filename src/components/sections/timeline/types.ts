export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface TimelineProps {
  experiences: Experience[];
}

export type TimelineAlignment = "left" | "right";
export type TimelineVariant = "desktop" | "mobile";

export interface TechBadgeProps {
  tech: string;
  isClickable?: boolean;
  onClick?: (tech: string) => void;
}

export interface TimelineCardProps {
  experience: Experience;
  alignment?: TimelineAlignment;
  variant?: TimelineVariant;
  onClick: (exp: Experience) => void;
  onShowMoreSkills: (exp: Experience) => void;
  onSkillClick: (tech: string) => void;
}
