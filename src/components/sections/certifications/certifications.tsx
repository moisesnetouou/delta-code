"use client";

import { Award, ExternalLink } from "lucide-react";
import { certificationsStyles } from "./certifications.styles";
import type { CertificationsProps } from "./certifications.types";

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <section className={certificationsStyles.section}>
      <div className={certificationsStyles.container}>
        <div className={certificationsStyles.header}>
          <div className={certificationsStyles.icon}>
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
            >
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            </svg>
          </div>
          <h2 className={certificationsStyles.title}>Certificações</h2>
        </div>

        <div className={certificationsStyles.grid}>
          {certifications.map((cert) => (
            <div key={cert.id} className={certificationsStyles.card}>
              <div className={certificationsStyles.cardHeader}>
                <div className={certificationsStyles.cardIcon}>
                  <Award className="w-full h-full" />
                </div>
                <h3 className={certificationsStyles.cardTitle}>{cert.title}</h3>
              </div>
              <p className={certificationsStyles.cardMeta}>
                {cert.issuer} • {cert.date}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={certificationsStyles.cardLink}
              >
                <ExternalLink className={certificationsStyles.cardLinkIcon} />
                Verificar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}