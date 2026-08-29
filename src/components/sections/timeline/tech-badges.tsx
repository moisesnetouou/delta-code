"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/language-context";
import { getIcon } from "@/lib/icons";
import { timelineStyles } from "./styles";

const styles = timelineStyles();

interface TechBadgeProps {
  tech: string;
  onSkillClick: (tech: string) => void;
}

function TechBadge({ tech, onSkillClick }: TechBadgeProps) {
  const { t } = useLanguage();
  const hasDescription =
    !!t.skills.descriptions[tech as keyof typeof t.skills.descriptions];
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
  const { t } = useLanguage();
  const maxVisible = 6;
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
          {t.timeline.moreTemplate.replace("{count}", String(remaining))}
        </motion.button>
      )}
    </div>
  );
}
