export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SkillsProps {
  skills: SkillCategory[];
}