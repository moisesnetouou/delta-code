"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { personalInfo } from "@/data/portfolio-data";
import { usePortfolioActions } from "@/hooks/use-portfolio-actions";
import { heroStyles } from "./styles";

const styles = heroStyles();

export default function Hero() {
  const { name, title, tagline } = personalInfo;
  const { downloadCV, openLinkedin, openGithub } = usePortfolioActions();

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
            onClick={openLinkedin}
            className={styles.socialLink()}
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedinIcon className={styles.socialIcon()} />
          </motion.button>
          <motion.button
            onClick={openGithub}
            className={styles.socialLink()}
            aria-label="GitHub"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon className={styles.socialIcon()} />
          </motion.button>
          <motion.button
            onClick={downloadCV}
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
