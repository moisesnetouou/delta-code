export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export interface CertificationsProps {
  certifications: Certification[];
}
