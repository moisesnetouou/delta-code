"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificationsStyles } from "./certifications.styles";
import type { CertificationsProps } from "./certifications.types";

export default function Certifications({
  certifications,
}: CertificationsProps) {
  return (
    <section id="certifications" className={certificationsStyles.section}>
      <div className={certificationsStyles.container}>
        <motion.div
          className={certificationsStyles.header}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={certificationsStyles.icon}>
            <Award className="w-5 h-5" />
          </div>
          <h2 className={certificationsStyles.title}>Certificações</h2>
        </motion.div>

        <div className={certificationsStyles.grid}>
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={certificationsStyles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={certificationsStyles.iconWrapper}>
                <Award className="w-6 h-6" />
              </div>
              <div className={certificationsStyles.content}>
                <h3 className={certificationsStyles.cardTitle}>{cert.title}</h3>
                <p className={certificationsStyles.issuer}>
                  {cert.issuer} • {cert.date}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-accent-primary flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
