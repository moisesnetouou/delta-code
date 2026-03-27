"use client";

import { GitBranch, Link, Mail, ArrowDown } from "lucide-react";
import { heroStyles } from "./hero.styles";
import type { HeroProps } from "./hero.types";

export default function Hero({ name, title, tagline, linkedin, github, email }: HeroProps) {
  return (
    <section className={heroStyles.container}>
      <div className={heroStyles.backgroundGradient} />
      <div className={heroStyles.backgroundGrid} />

      <div className={heroStyles.content}>
        <h1 className={heroStyles.name}>{name}</h1>
        <p className={heroStyles.title}>{title}</p>
        <p className={heroStyles.tagline}>{tagline}</p>

        <div className={heroStyles.socialLinks}>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={heroStyles.socialLink}
            aria-label="LinkedIn"
          >
            <Link className={heroStyles.socialIcon} />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={heroStyles.socialLink}
            aria-label="GitHub"
          >
            <GitBranch className={heroStyles.socialIcon} />
          </a>
          <a href={`mailto:${email}`} className={heroStyles.socialLink} aria-label="Email">
            <Mail className={heroStyles.socialIcon} />
          </a>
        </div>
      </div>

      <div className={heroStyles.scrollIndicator}>
        <span className="text-sm">Scroll</span>
        <ArrowDown className={heroStyles.scrollIcon} />
      </div>
    </section>
  );
}