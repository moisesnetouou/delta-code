"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { personalInfo } from "@/data/portfolio-data";
import { usePortfolioActions } from "@/hooks/use-portfolio-actions";
import { useLanguage } from "@/i18n/language-context";
import { heroStyles } from "./styles";

const styles = heroStyles();

const ROLE_ROTATION_MS = 2500;

export default function Hero() {
  const { t } = useLanguage();
  const { name } = personalInfo;
  const { roles, tagline, highlights, availability, scroll, downloadCvAria } =
    t.hero;
  const { downloadCV, openLinkedin, openGithub } = usePortfolioActions();
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || roles.length <= 1) return;

    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, ROLE_ROTATION_MS);

    return () => clearInterval(interval);
  }, [prefersReducedMotion, roles.length]);

  const currentRole = prefersReducedMotion ? roles[0] : roles[roleIndex];

  return (
    <section id="hero" className={styles.container()}>
      <div className={styles.backgroundGradient()} />
      <div className={styles.backgroundGrid()} />

      <div className={styles.orbCyan()} />
      <div className={styles.orbPurple()} />

      <div className={styles.content()}>
        {availability && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badge()}>
              <span className={styles.badgeDot()} />
              {availability}
            </span>
          </motion.div>
        )}

        <motion.h1
          className={styles.name()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {name}
        </motion.h1>

        <motion.div
          className={styles.roleWrapper()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentRole}
              className={styles.title()}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {currentRole}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {tagline && (
          <motion.p
            className={styles.tagline()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {tagline}
          </motion.p>
        )}

        {highlights && highlights.length > 0 && (
          <motion.div
            className={styles.highlights()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {highlights.map((highlight) => (
              <span key={highlight} className={styles.highlightChip()}>
                {highlight}
              </span>
            ))}
          </motion.div>
        )}

        <motion.div
          className={styles.socialLinks()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={openLinkedin}
            className={styles.socialLink()}
            aria-label={t.contact.linkedin}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedinIcon className={styles.socialIcon()} />
          </motion.button>
          <motion.button
            onClick={openGithub}
            className={styles.socialLink()}
            aria-label={t.contact.github}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon className={styles.socialIcon()} />
          </motion.button>
          <motion.button
            onClick={downloadCV}
            className={styles.socialLink()}
            aria-label={downloadCvAria}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText className={styles.socialIcon()} />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <span className={styles.scrollLabel()}>{scroll}</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className={styles.scrollIcon()} />
        </motion.div>
      </motion.div>
    </section>
  );
}
