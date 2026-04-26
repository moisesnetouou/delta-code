"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { renderCompany } from "./render-company";
import { timelineStyles } from "./styles";

const styles = timelineStyles();

import { TechBadgesList } from "./tech-badges";
import type { TimelineCardProps } from "./types";

export function TimelineCard({
  experience,
  alignment = "right",
  variant = "desktop",
  onClick,
  onShowMoreSkills,
  onSkillClick,
}: TimelineCardProps) {
  const isMobile = variant === "mobile";
  const cardClass = isMobile ? styles.cardSm() : styles.card();
  const roleClass = isMobile ? styles.cardRoleSm() : styles.cardRole();
  const metaClass = isMobile ? styles.cardMetaRowSm() : styles.cardMetaRow();
  const descClass = isMobile
    ? styles.cardDescriptionSm()
    : styles.cardDescription();
  const iconSize = isMobile ? "w-3 h-3" : "w-3.5 h-3.5";
  const metaJustify = !isMobile && alignment === "right" ? "justify-end" : "";

  return (
    <motion.div
      className={cardClass}
      whileHover={{ scale: isMobile ? 1.01 : 1.02 }}
      whileTap={isMobile ? { scale: 0.99 } : undefined}
      onClick={() => onClick(experience)}
    >
      <h3 className={roleClass}>{experience.role}</h3>
      <p className={styles.cardCompany()}>
        {renderCompany(experience.company, experience.companyUrl)}
      </p>
      <div className={`${metaClass} ${metaJustify}`}>
        <span className={styles.cardMetaItem()}>
          <Calendar className={iconSize} />
          {experience.period}
        </span>
        <span className={styles.cardMetaItem()}>
          <MapPin className={iconSize} />
          {experience.location}
        </span>
      </div>
      <p className={descClass}>{experience.description}</p>
      <TechBadgesList
        technologies={experience.technologies}
        justify={alignment === "right" && !isMobile ? "end" : "start"}
        onSkillClick={onSkillClick}
        onShowMore={() => onShowMoreSkills(experience)}
      />
    </motion.div>
  );
}
