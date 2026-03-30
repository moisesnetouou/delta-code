export interface TimelineProps {
  experiences: {
    id: string;
    role: string;
    company: string;
    companyUrl?: string;
    location: string;
    period: string;
    description: string;
    technologies: string[];
  }[];
}
