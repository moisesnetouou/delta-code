"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  formatProjectPeriod,
  projectIcons,
  projectStatusStyles,
} from "@/data/projects";
import { useLanguage } from "@/i18n/language-context";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { projectCardStyles } from "./styles";
import type { ProjectCardProps } from "./types";

const styles = projectCardStyles();

const MAX_VISIBLE_TECH = 5;

export function ProjectCard({
  project,
  index,
  onOpenDetails,
}: ProjectCardProps) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.id];
  const status = projectStatusStyles[project.status];

  if (!copy) return null;

  const visibleTech = project.technologies.slice(0, MAX_VISIBLE_TECH);
  const hiddenCount = project.technologies.length - visibleTech.length;
  const period = formatProjectPeriod(project, {
    ongoing: t.projects.ongoing,
    ...t.projects.duration,
  });
  const Icon = project.icon ? projectIcons[project.icon] : null;
  const isPersonal = project.kind === "personal";

  return (
    <motion.article
      className={cn(styles.card(), project.featured && styles.cardFeatured())}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
    >
      <div
        className={styles.accentBar()}
        style={{ background: project.accent }}
      />

      {project.thumbnail && (
        <div
          className={cn(
            styles.thumbWrapper(),
            project.featured && styles.thumbWrapperFeatured(),
          )}
        >
          <Image
            src={project.thumbnail}
            alt={copy.title}
            fill
            sizes="(max-width: 768px) 100vw, 520px"
            className={styles.thumb()}
          />
        </div>
      )}

      <div className={styles.content()}>
        {isPersonal && (
          <div className={styles.metaRow()}>
            <span
              className={cn(
                styles.statusBadge(),
                status.bg,
                status.border,
                status.text,
              )}
            >
              <span className={cn(styles.statusDot(), status.dot)} />
              {t.projects.status[project.status]}
            </span>
            {period && <span className={styles.period()}>{period}</span>}
          </div>
        )}

        <div className={styles.nameRow()}>
          {Icon && (
            <span
              className={styles.iconTile()}
              style={{
                backgroundColor: `${project.accent}1a`,
                color: project.accent,
              }}
            >
              <Icon className="w-5 h-5" />
            </span>
          )}
          <div className={styles.nameCol()}>
            <h3 className={styles.name()}>{copy.title}</h3>
            <p className={styles.tagline()}>{copy.tagline}</p>
          </div>
        </div>

        <p className={styles.summary()}>{copy.summary}</p>

        <div className={styles.techRow()}>
          {visibleTech.map((tech) => (
            <span key={tech} className={styles.techChip()}>
              <span className={styles.techChipIcon()}>{getIcon(tech)}</span>
              {tech}
            </span>
          ))}
          {hiddenCount > 0 && (
            <span className={styles.moreChip()}>
              {t.projects.moreTemplate.replace("{count}", String(hiddenCount))}
            </span>
          )}
        </div>

        <div className={styles.footer()}>
          {project.caseStudy ? (
            <Link
              href={`/projects/${project.id}`}
              aria-label={`${t.projects.viewCase}: ${project.name}`}
              className={styles.caseLink()}
            >
              {t.projects.viewCase}
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => onOpenDetails(project)}
              aria-label={`${t.projects.viewDetails}: ${project.name}`}
              className={styles.detailsButton()}
            >
              {t.projects.viewDetails}
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveLink()}
            >
              {new URL(project.liveUrl).host.replace(/^www\./, "")}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
