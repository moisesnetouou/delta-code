"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { useState } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { personalInfo } from "@/data/portfolio-data";
import { isAchievementUnlocked, unlockAchievement } from "@/lib/achievements";
import { heroStyles } from "./styles";

export default function Hero() {
  const styles = heroStyles();
  const { name, title, tagline, linkedin, github } = personalInfo;

  const [hasNavigatedLinkedin, setHasNavigatedLinkedin] = useState(false);
  const [hasNavigatedGithub, setHasNavigatedGithub] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/curriculo.pdf";
    link.download = "Curriculo-Moises-Neto.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (!isAchievementUnlocked("download_cv")) {
      unlockAchievement("download_cv");
    }
  };

  const handleLinkedinClick = () => {
    if (!hasNavigatedLinkedin && !isAchievementUnlocked("click_linkedin")) {
      unlockAchievement("click_linkedin");
      setHasNavigatedLinkedin(true);
      setTimeout(() => {
        window.open(linkedin, "_blank");
      }, 1500);
    } else {
      window.open(linkedin, "_blank");
    }
  };

  const handleGithubClick = () => {
    if (!hasNavigatedGithub && !isAchievementUnlocked("click_github")) {
      unlockAchievement("click_github");
      setHasNavigatedGithub(true);
      setTimeout(() => {
        window.open(github, "_blank");
      }, 1500);
    } else {
      window.open(github, "_blank");
    }
  };

  return (
    <section id="hero" className={styles.container()}>
      <div className={styles.backgroundGradient()} />
      <div className={styles.backgroundGrid()} />

      <div className={styles.orbCyan()} />
      <div className={styles.orbPurple()} />

      <div className={styles.content()}>
        <motion.h1
          className={styles.name()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {name}
        </motion.h1>

        <motion.p
          className={styles.title()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.p>

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

        <motion.div
          className={styles.socialLinks()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={handleLinkedinClick}
            className={styles.socialLink()}
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedinIcon className={styles.socialIcon()} />
          </motion.button>
          <motion.button
            onClick={handleGithubClick}
            className={styles.socialLink()}
            aria-label="GitHub"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon className={styles.socialIcon()} />
          </motion.button>
          <motion.button
            onClick={handleDownloadCV}
            className={styles.socialLink()}
            aria-label="Baixar Currículo"
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
        <span className={styles.scrollLabel()}>Scroll</span>
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
