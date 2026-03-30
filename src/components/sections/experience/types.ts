export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface ExperienceProps {
  experiences: Experience[];
}
