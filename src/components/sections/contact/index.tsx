"use client";

import { motion } from "framer-motion";
import { Download, Mail, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { isAchievementUnlocked, unlockAchievement } from "@/lib/achievements";
import { contactStyles } from "./styles";
import type { ContactProps } from "./types";

export default function Contact({ email, linkedin, github }: ContactProps) {
  const [hasNavigatedLinkedin, setHasNavigatedLinkedin] = useState(false);
  const [hasNavigatedGithub, setHasNavigatedGithub] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.bottom <= window.innerHeight + 100;
        if (isVisible && !isAchievementUnlocked("view_contact")) {
          unlockAchievement("view_contact");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <section id="contact" className={contactStyles.section}>
      <div className={contactStyles.container}>
        <motion.div
          className={contactStyles.header}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={contactStyles.icon}>
            <Mail className="w-5 h-5" />
          </div>
          <h2 className={contactStyles.title}>Contato</h2>
        </motion.div>

        <motion.div
          className={contactStyles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href={`mailto:${email}`}
            className={contactStyles.primaryButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5" />
            Enviar Mensagem
          </motion.a>

          <div className={contactStyles.links}>
            <motion.button
              onClick={handleDownloadCV}
              className={contactStyles.linkItem}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className={contactStyles.linkIcon} />
              <span className={contactStyles.linkText}>Baixar Currículo</span>
            </motion.button>

            <motion.button
              onClick={handleLinkedinClick}
              className={contactStyles.linkItem}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <LinkedinIcon className={contactStyles.linkIcon} />
              <span className={contactStyles.linkText}>LinkedIn</span>
            </motion.button>

            <motion.button
              onClick={handleGithubClick}
              className={contactStyles.linkItem}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <GithubIcon className={contactStyles.linkIcon} />
              <span className={contactStyles.linkText}>GitHub</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
