"use client";

import { motion } from "framer-motion";
import { Download, Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { personalInfo } from "@/data/portfolio-data";
import { usePortfolioActions } from "@/hooks/use-portfolio-actions";
import { useScrollAchievement } from "@/hooks/use-scroll-achievement";
import { contactStyles } from "./styles";

const styles = contactStyles();

export default function Contact() {
  const { email } = personalInfo;
  const { downloadCV, openLinkedin, openGithub } = usePortfolioActions();

  useScrollAchievement("contact", "view_contact");

  return (
    <section id="contact" className={styles.section()}>
      <div className={styles.container()}>
        <motion.div
          className={styles.header()}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.icon()}>
            <Mail className="w-5 h-5" />
          </div>
          <h2 className={styles.title()}>Contato</h2>
        </motion.div>

        <motion.div
          className={styles.content()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href={`mailto:${email}`}
            className={styles.primaryButton()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5" />
            Enviar Mensagem
          </motion.a>

          <div className={styles.links()}>
            <motion.button
              onClick={downloadCV}
              className={styles.linkItem()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className={styles.linkIcon()} />
              <span className={styles.linkText()}>Baixar Currículo</span>
            </motion.button>

            <motion.button
              onClick={openLinkedin}
              className={styles.linkItem()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <LinkedinIcon className={styles.linkIcon()} />
              <span className={styles.linkText()}>LinkedIn</span>
            </motion.button>

            <motion.button
              onClick={openGithub}
              className={styles.linkItem()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <GithubIcon className={styles.linkIcon()} />
              <span className={styles.linkText()}>GitHub</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
