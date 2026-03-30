"use client";

import { motion } from "framer-motion";
import {
  Award,
  Globe,
  GraduationCap,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { aboutStyles } from "./styles";
import type { AboutProps } from "./types";

export default function About({
  summary,
  location,
  phone,
  education,
  languages,
  certifications,
}: AboutProps) {
  return (
    <section id="about" className={aboutStyles.section}>
      <div className={aboutStyles.backgroundGradient} />
      <div className={aboutStyles.backgroundGrid} />

      <motion.div
        className="absolute top-20 left-10 w-24 h-24 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #00d9ff 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className={aboutStyles.container}>
        <motion.div
          className={aboutStyles.header}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={aboutStyles.icon}>
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className={aboutStyles.title}>Sobre</h2>
        </motion.div>

        <motion.div
          className={aboutStyles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={aboutStyles.bioSection}>
            <div className={aboutStyles.avatarWrapper}>
              <Image
                src="/images/profile.jpg"
                alt="Moisés Neto"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className={aboutStyles.textSection}>
              <p className={aboutStyles.bioTitle}>
                Desenvolvedor Frontend com +5 anos de experiência
              </p>
              <p className={aboutStyles.bioDescription}>{summary}</p>

              <div className={aboutStyles.infoSection}>
                <div className={aboutStyles.infoItem}>
                  <MapPin className={aboutStyles.infoIcon} />
                  <span>{location}</span>
                </div>
                <div className={aboutStyles.infoItem}>
                  <Phone className={aboutStyles.infoIcon} />
                  <span>{phone}</span>
                </div>
              </div>

              {education && (
                <div className="mt-6 pt-6 border-t border-[#2a2a35]">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="w-4 h-4 text-[#8b5cf6]" />
                    <span className="text-sm font-medium text-white">
                      Formação
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-white">{education.course}</p>
                    <p className="text-xs text-foreground-muted">
                      {education.institution} • {education.period}
                    </p>
                  </div>
                </div>
              )}

              {languages && languages.length > 0 && (
                <div className="mt-6 pt-6 border-t border-[#2a2a35]">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-4 h-4 text-[#8b5cf6]" />
                    <span className="text-sm font-medium text-white">
                      Idiomas
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {languages.map((lang) => (
                      <span
                        key={lang.name}
                        className="text-sm text-foreground-muted"
                      >
                        <span className="text-white">{lang.name}</span>
                        <span className="text-[#666]"> • {lang.level}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {certifications && certifications.length > 0 && (
                <div className="mt-6 pt-6 border-t border-[#2a2a35]">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-[#8b5cf6]" />
                    <span className="text-sm font-medium text-white">
                      Certificações
                    </span>
                  </div>
                  <div className="space-y-2">
                    {certifications.map((cert) => (
                      <a
                        key={cert.id}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-2 rounded-lg bg-[#0a0a12] border border-[#2a2a35] hover:border-[#8b5cf6]/50 transition-colors"
                      >
                        <p className="text-sm text-white font-medium">
                          {cert.title}
                        </p>
                        <p className="text-xs text-foreground-muted">
                          {cert.issuer} • {cert.date}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
