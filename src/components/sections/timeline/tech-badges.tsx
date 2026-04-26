"use client";

import { motion } from "framer-motion";
import { skillDescriptions } from "@/data/skill-descriptions";
import { getIcon } from "@/lib/icons";
import { timelineStyles } from "./styles";

interface TechBadgeProps {
  tech: string;
  onSkillClick: (tech: string) => void;
}

function TechBadge({ tech, onSkillClick }: TechBadgeProps) {
  const styles = timelineStyles();
  const hasDescription = !!skillDescriptions[tech];
  const IconComponent = getIcon(tech);

  if (hasDescription) {
    return (
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          onSkillClick(tech);
        }}
        className={styles.techBadgeButton()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className={styles.techBadgeIcon()}>{IconComponent}</span>
        {tech}
      </motion.button>
    );
  }

  return (
    <span className={styles.techBadge()}>
      <span className={styles.techBadgeIcon()}>{IconComponent}</span>
      {tech}
    </span>
  );
}

interface TechBadgesListProps {
  technologies: string[];
  justify?: "start" | "end";
  onSkillClick: (tech: string) => void;
  onShowMore: () => void;
}

export function TechBadgesList({
  technologies,
  justify = "start",
  onSkillClick,
  onShowMore,
}: TechBadgesListProps) {
  const styles = timelineStyles();
  const maxVisible = 4;
  const visible = technologies.slice(0, maxVisible);
  const remaining = technologies.length - maxVisible;
  const justifyClass = justify === "end" ? "justify-end" : "justify-start";

  return (
    <div className={`flex flex-wrap gap-1.5 ${justifyClass}`}>
      {visible.map((tech) => (
        <TechBadge key={tech} tech={tech} onSkillClick={onSkillClick} />
      ))}
      {remaining > 0 && (
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onShowMore();
          }}
          className={styles.techMore()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          +{remaining}
        </motion.button>
      )}
    </div>
  );
}
