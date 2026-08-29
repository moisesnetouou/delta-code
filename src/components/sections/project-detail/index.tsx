"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { type SelectedSkill, SkillDialog } from "@/components/skill-dialog";
import { GithubIcon } from "@/components/ui/social-icons";
import { skills } from "@/data/portfolio-data";
import { formatProjectPeriod, projectStatusStyles } from "@/data/projects";
import { DEFAULT_CATEGORY } from "@/data/skill-categories";
import { useLanguage } from "@/i18n/language-context";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { projectDetailStyles } from "./styles";
import type { ProjectDetailProps } from "./types";

const styles = projectDetailStyles();

const techToCategory: Record<string, string> = {};
skills.forEach((category) => {
  category.items.forEach((item) => {
    techToCategory[item] = category.category;
  });
});

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { t } = useLanguage();
  const [selectedSkill, setSelectedSkill] = useState<SelectedSkill | null>(
    null,
  );

  const copy = t.projects.items[project.id];
  const caseStudy = t.projects.caseStudies[project.id];
  const status = projectStatusStyles[project.status];

  if (!copy || !caseStudy || !project.thumbnail) return null;

  const period = formatProjectPeriod(project, {
    ongoing: t.projects.ongoing,
    ...t.projects.duration,
  });

  const handleTechClick = (tech: string) => {
    if (!t.skills.descriptions[tech as keyof typeof t.skills.descriptions])
      return;
    setSelectedSkill({
      name: tech,
      category: techToCategory[tech] || DEFAULT_CATEGORY,
    });
  };

  return (
    <>
      <main className={styles.main()}>
        <div className={styles.container()}>
          <Link href="/#projects" className={styles.backLink()}>
            <ArrowLeft className="w-4 h-4" />
            {t.projects.backToPortfolio}
          </Link>

          <motion.div
            className={styles.hero()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.heroCol()}>
              <div className={styles.badgeRow()}>
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
              </div>

              <h1 className={styles.heroTitle()}>{copy.title}</h1>
              <p className={styles.heroTagline()}>{copy.tagline}</p>
              <p className={styles.heroIntro()}>{caseStudy.intro}</p>

              <div className={styles.metaList()}>
                {period && (
                  <div className={styles.metaRow()}>
                    <span className={styles.metaLabel()}>
                      {t.projects.labels.period}
                    </span>
                    <span className={styles.metaValue()}>{period}</span>
                  </div>
                )}
                <div className={styles.metaRow()}>
                  <span className={styles.metaLabel()}>
                    {t.projects.labels.role}
                  </span>
                  <span className={styles.metaValue()}>{copy.role}</span>
                </div>
                <div className={styles.metaRow()}>
                  <span className={styles.metaLabel()}>
                    {t.projects.labels.repo}
                  </span>
                  <span
                    className={
                      project.repoUrl
                        ? styles.metaValue()
                        : styles.metaValueDim()
                    }
                  >
                    {caseStudy.repoNote}
                  </span>
                </div>
              </div>

              <div className={styles.ctaRow()}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryCta()}
                  >
                    {t.projects.viewLive}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryCta()}
                  >
                    <GithubIcon size={16} />
                    {t.projects.viewRepo}
                  </a>
                )}
              </div>
            </div>

            <div className={styles.heroImageWrapper()}>
              <div
                className={styles.heroAccentBar()}
                style={{ background: project.accent }}
              />
              <Image
                src={project.thumbnail}
                alt={caseStudy.thumbnailAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className={styles.image()}
              />
            </div>
          </motion.div>

          <section className={styles.block()}>
            <div className={styles.blockHeader()}>
              <span className={styles.eyebrow()}>
                {t.projects.eyebrows.problem}
              </span>
              <h2 className={styles.blockTitle()}>
                {t.projects.labels.problem}
              </h2>
            </div>
            <div className={styles.prose()}>
              {caseStudy.problem.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className={styles.proseText()}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className={styles.block()}>
            <div className={styles.blockHeaderRow()}>
              <div className={styles.blockHeader()}>
                <span className={styles.eyebrow()}>
                  {t.projects.eyebrows.stack}
                </span>
                <h2 className={styles.blockTitle()}>
                  {t.projects.labels.stack}
                </h2>
              </div>
              <p className={styles.hint()}>{t.projects.stackHint}</p>
            </div>
            <div className={styles.stackGrid()}>
              {project.technologies.map((tech) => {
                const hasDescription = Boolean(
                  t.skills.descriptions[
                    tech as keyof typeof t.skills.descriptions
                  ],
                );

                return (
                  <motion.button
                    key={tech}
                    type="button"
                    disabled={!hasDescription}
                    aria-disabled={!hasDescription}
                    onClick={() => handleTechClick(tech)}
                    className={styles.stackTile()}
                    whileHover={hasDescription ? { scale: 1.03 } : {}}
                    whileTap={hasDescription ? { scale: 0.97 } : {}}
                  >
                    <span className={styles.stackTileIcon()}>
                      {getIcon(tech)}
                    </span>
                    <span className={styles.stackTileName()}>{tech}</span>
                  </motion.button>
                );
              })}
            </div>
          </section>

          <section className={styles.block()}>
            <div className={styles.blockHeader()}>
              <span className={styles.eyebrow()}>
                {t.projects.eyebrows.architecture}
              </span>
              <h2 className={styles.blockTitle()}>
                {t.projects.labels.architecture}
              </h2>
            </div>

            <div className={styles.archLayout()}>
              <div className={styles.archCol()}>
                <p className={styles.proseText()}>
                  {caseStudy.architectureIntro}
                </p>
                <ul className={styles.bulletList()}>
                  {caseStudy.architecture.map((item) => (
                    <li key={item.slice(0, 40)} className={styles.bullet()}>
                      <span className={styles.bulletDot()} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {(project.screenshots?.length ?? 0) > 0 && (
                <div className={styles.gallery()}>
                  <figure className={styles.figure()}>
                    <div className={styles.figureImage()}>
                      <Image
                        src={project.screenshots?.[0] ?? project.thumbnail}
                        alt={
                          caseStudy.screenshotCaptions[0] ??
                          caseStudy.thumbnailAlt
                        }
                        fill
                        sizes="(max-width: 1024px) 100vw, 520px"
                        className={styles.image()}
                      />
                    </div>
                    <figcaption className={styles.caption()}>
                      {caseStudy.screenshotCaptions[0]}
                    </figcaption>
                  </figure>
                </div>
              )}
            </div>

            {(project.screenshots?.length ?? 0) > 1 && (
              <div className={styles.galleryGrid()}>
                {(project.screenshots ?? []).slice(1).map((src, index) => (
                  <figure key={src} className={styles.figure()}>
                    <div className={styles.figureImage()}>
                      <Image
                        src={src}
                        alt={
                          caseStudy.screenshotCaptions[index + 1] ??
                          caseStudy.thumbnailAlt
                        }
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.image()}
                      />
                    </div>
                    <figcaption className={styles.caption()}>
                      {caseStudy.screenshotCaptions[index + 1]}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </section>

          <div className={styles.footerCta()}>
            <div className={styles.footerCtaCol()}>
              <span className={styles.footerCtaTitle()}>
                {caseStudy.ctaTitle}
              </span>
              <span className={styles.footerCtaText()}>
                {caseStudy.ctaDescription}
              </span>
            </div>
            <div className={styles.footerCtaActions()}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryCta()}
                >
                  {t.projects.viewLive}
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <Link href="/#projects" className={styles.footerBackLink()}>
                <ArrowLeft className="w-4 h-4" />
                {t.projects.backToPortfolio}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SkillDialog
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />
    </>
  );
}
