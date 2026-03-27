"use client";

import { GitBranch, Link, Mail, Send } from "lucide-react";
import { contactStyles } from "./contact.styles";
import type { ContactProps } from "./contact.types";

export default function Contact({ email, linkedin, github }: ContactProps) {
  return (
    <section className={contactStyles.section}>
      <div className={contactStyles.container}>
        <div className={contactStyles.header}>
          <div className={contactStyles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <h2 className={contactStyles.title}>Contato</h2>
        </div>

        <div className={contactStyles.content}>
          <div className={contactStyles.info}>
            <div className={contactStyles.infoItem}>
              <div className={contactStyles.infoIcon}>
                <Mail className="w-full h-full" />
              </div>
              <div>
                <p className={contactStyles.infoLabel}>Email</p>
                <a href={`mailto:${email}`} className={contactStyles.infoLink}>
                  {email}
                </a>
              </div>
            </div>
            <div className={contactStyles.infoItem}>
              <div className={contactStyles.infoIcon}>
                <Link className="w-full h-full" />
              </div>
              <div>
                <p className={contactStyles.infoLabel}>LinkedIn</p>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactStyles.infoLink}
                >
                  linkedin.com/in/moisesnetouou
                </a>
              </div>
            </div>
            <div className={contactStyles.infoItem}>
              <div className={contactStyles.infoIcon}>
                <GitBranch className="w-full h-full" />
              </div>
              <div>
                <p className={contactStyles.infoLabel}>GitHub</p>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactStyles.infoLink}
                >
                  github.com/moisesnetouou
                </a>
              </div>
            </div>
          </div>

          <div className={contactStyles.cta}>
            <h3 className={contactStyles.ctaTitle}>Vamos trabalhar juntos?</h3>
            <p className={contactStyles.ctaText}>
              Estou disponível para projetos freelance e oportunidades full-time.
            </p>
            <a href={`mailto:${email}`} className={contactStyles.ctaButton}>
              <Send className="w-5 h-5" />
              Enviar Mensagem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}