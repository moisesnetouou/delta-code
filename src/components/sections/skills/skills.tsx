"use client";

import { skillsStyles } from "./skills.styles";
import type { SkillsProps } from "./skills.types";

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className={skillsStyles.section}>
      <div className={skillsStyles.container}>
        <div className={skillsStyles.header}>
          <div className={skillsStyles.icon}>
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
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h2 className={skillsStyles.title}>Habilidades</h2>
        </div>

        <div className={skillsStyles.grid}>
          {skills.map((skill) => (
            <div key={skill.category} className={skillsStyles.categoryCard}>
              <h3 className={skillsStyles.categoryTitle}>{skill.category}</h3>
              <div className={skillsStyles.categoryItems}>
                {skill.items.map((item) => (
                  <span key={item} className={skillsStyles.skillTag}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}