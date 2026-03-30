"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { useState } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { isAchievementUnlocked, unlockAchievement } from "@/lib/achievements";
import { heroStyles } from "./styles";
import type { HeroProps } from "./types";

export default function Hero({
  name,
  title,
  tagline,
  linkedin,
  github,
}: HeroProps) {
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
    <section id="hero" className={heroStyles.container}>
      <div className={heroStyles.backgroundGradient} />
      <div className={heroStyles.backgroundGrid} />

      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 animate-pulse-slow"
        style={{
          top: "5%",
          left: "0%",
          background: "radial-gradient(circle, #00d9ff 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15 animate-pulse-slower"
        style={{
          bottom: "10%",
          right: "0%",
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className={heroStyles.content}>
        <motion.h1
          className={heroStyles.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {name}
        </motion.h1>

        <motion.p
          className={heroStyles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.p>

        {tagline && (
          <motion.p
            className={heroStyles.tagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {tagline}
          </motion.p>
        )}

        <motion.div
          className={heroStyles.socialLinks}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={handleLinkedinClick}
            className={heroStyles.socialLink}
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedinIcon className={heroStyles.socialIcon} />
          </motion.button>
          <motion.button
            onClick={handleGithubClick}
            className={heroStyles.socialLink}
            aria-label="GitHub"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon className={heroStyles.socialIcon} />
          </motion.button>
          <motion.button
            onClick={handleDownloadCV}
            className={heroStyles.socialLink}
            aria-label="Baixar Currículo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText className={heroStyles.socialIcon} />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className={heroStyles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className={heroStyles.scrollIcon} />
        </motion.div>
      </motion.div>
    </section>
  );
}
