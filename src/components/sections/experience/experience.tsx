"use client";

import { experienceStyles } from "./experience.styles";
import type { ExperienceProps } from "./experience.types";

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section className={experienceStyles.section}>
      <div className={experienceStyles.container}>
        <div className={experienceStyles.header}>
          <div className={experienceStyles.icon}>
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
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <h2 className={experienceStyles.title}>Experiência</h2>
        </div>

        <div className={experienceStyles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.id} className={experienceStyles.timelineItem}>
              <div className={experienceStyles.timelineDot} />
              <div className={experienceStyles.card}>
                <h3 className={experienceStyles.role}>{exp.role}</h3>
                <p className={experienceStyles.company}>{exp.company}</p>
                <div className={experienceStyles.meta}>
                  <span>{exp.period}</span>
                  <span>{exp.location}</span>
                </div>
                <p className={experienceStyles.description}>{exp.description}</p>
                <div className={experienceStyles.techList}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className={experienceStyles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}