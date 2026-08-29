"use client";

import { motion } from "framer-motion";
import {
  Award,
  Globe,
  GraduationCap,
  MapPin,
  Sparkles,
  Target,
} from "lucide-react";
import Image from "next/image";
import { certifications, education } from "@/data/portfolio-data";
import { useLanguage } from "@/i18n/language-context";
import { aboutStyles } from "./styles";

const styles = aboutStyles();

export default function About() {
  const { t } = useLanguage();
  const {
    heading,
    bioTitle,
    summary,
    location,
    educationLabel,
    languagesLabel,
    certificationsLabel,
    highlightsLabel,
    highlights,
    course,
    languages,
  } = t.about;
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
          <h2 className={styles.title()}>{heading}</h2>
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
              <p className={styles.bioTitle()}>{bioTitle}</p>
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
              </div>

              {education && (
                <div className={styles.block()}>
                  <div className={styles.blockHeader()}>
                    <GraduationCap className={styles.blockIcon()} />
                    <span className={styles.blockLabel()}>
                      {educationLabel}
                    </span>
                  </div>
                  <div className={styles.eduList()}>
                    <p className={styles.eduCourse()}>{course}</p>
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
                    <span className={styles.blockLabel()}>
                      {languagesLabel}
                    </span>
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

              {highlights && highlights.length > 0 && (
                <div className={styles.block()}>
                  <div className={styles.blockHeader()}>
                    <Target className={styles.blockIcon()} />
                    <span className={styles.blockLabel()}>
                      {highlightsLabel}
                    </span>
                  </div>
                  <ul className={styles.highlightList()}>
                    {highlights.map((item) => (
                      <li key={item.label} className={styles.highlightItem()}>
                        <span className={styles.highlightLabel()}>
                          {item.label}
                        </span>
                        <span className={styles.highlightText()}>
                          {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {certifications && certifications.length > 0 && (
                <div className={styles.block()}>
                  <div className={styles.blockHeader()}>
                    <Award className={styles.blockIcon()} />
                    <span className={styles.blockLabel()}>
                      {certificationsLabel}
                    </span>
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
