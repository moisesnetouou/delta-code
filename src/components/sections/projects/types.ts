export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  live?: string;
}

export interface ProjectsProps {
  projects: Project[];
}
