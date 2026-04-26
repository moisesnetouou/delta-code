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
import {
  certifications,
  education,
  languages,
  personalInfo,
  summary,
} from "@/data/portfolio-data";
import { aboutStyles } from "./styles";

const styles = aboutStyles();

export default function About() {
  const { location, phone } = personalInfo;
  return (
    <section id="about" className={styles.section()}>
      <div className={styles.backgroundGradient()} />
      <div className={styles.backgroundGrid()} />

      <motion.div
        className={styles.orbBlur()}
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

      <div className={styles.container()}>
        <motion.div
          className={styles.header()}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.icon()}>
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className={styles.title()}>Sobre</h2>
        </motion.div>

        <motion.div
          className={styles.content()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.bioSection()}>
            <div className={styles.avatarWrapper()}>
              <Image
                src="/images/profile.jpg"
                alt="Moisés Neto"
                fill
                className={styles.avatarImage()}
              />
            </div>

            <div className={styles.textSection()}>
              <p className={styles.bioTitle()}>
                Desenvolvedor Frontend com +5 anos de experiência
              </p>
              <div className={styles.bioParagraphs()}>
                {summary.map((paragraph) => (
                  <p key={paragraph} className={styles.bioDescription()}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className={styles.infoSection()}>
                <div className={styles.infoItem()}>
                  <MapPin className={styles.infoIcon()} />
                  <span>{location}</span>
                </div>
                <div className={styles.infoItem()}>
                  <Phone className={styles.infoIcon()} />
                  <span>{phone}</span>
                </div>
              </div>

              {education && (
                <div className={styles.block()}>
                  <div className={styles.blockHeader()}>
                    <GraduationCap className={styles.blockIcon()} />
                    <span className={styles.blockLabel()}>Formação</span>
                  </div>
                  <div className={styles.eduList()}>
                    <p className={styles.eduCourse()}>{education.course}</p>
                    <p className={styles.eduMeta()}>
                      {education.institution} • {education.period}
                    </p>
                  </div>
                </div>
              )}

              {languages && languages.length > 0 && (
                <div className={styles.block()}>
                  <div className={styles.blockHeader()}>
                    <Globe className={styles.blockIcon()} />
                    <span className={styles.blockLabel()}>Idiomas</span>
                  </div>
                  <div className={styles.langList()}>
                    {languages.map((lang) => (
                      <span key={lang.name} className={styles.langItem()}>
                        <span className={styles.langName()}>{lang.name}</span>
                        <span className={styles.langLevel()}>
                          {" "}
                          • {lang.level}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {certifications && certifications.length > 0 && (
                <div className={styles.block()}>
                  <div className={styles.blockHeader()}>
                    <Award className={styles.blockIcon()} />
                    <span className={styles.blockLabel()}>Certificações</span>
                  </div>
                  <div className={styles.certList()}>
                    {certifications.map((cert) => (
                      <a
                        key={cert.id}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.certCard()}
                      >
                        <p className={styles.certTitle()}>{cert.title}</p>
                        <p className={styles.certMeta()}>
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
