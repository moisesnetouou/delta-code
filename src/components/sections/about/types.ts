export interface AboutProps {
  summary: string;
  location: string;
  phone: string;
  education?: {
    course: string;
    institution: string;
    period: string;
  };
  languages?: {
    name: string;
    level: string;
  }[];
  certifications?: {
    id: string;
    title: string;
    issuer: string;
    date: string;
    link: string;
  }[];
}
