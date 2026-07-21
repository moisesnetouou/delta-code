"use client";

import { motion } from "framer-motion";
import { Compass, Crown, Rocket, Sparkles, TestTube } from "lucide-react";
import type { ReactNode } from "react";
import { useLanguage } from "@/i18n/language-context";
import { howIWorkStyles } from "./styles";

const styles = howIWorkStyles();

const itemIcons: ReactNode[] = [
  <Sparkles key="ai" className="w-5 h-5" />,
  <TestTube key="tests" className="w-5 h-5" />,
  <Rocket key="products" className="w-5 h-5" />,
  <Crown key="leadership" className="w-5 h-5" />,
];

export default function HowIWork() {
  const { t } = useLanguage();
  const { heading, subtitle, items } = t.howIWork;
  const metrics = t.metrics;

  return (
    <section id="how-i-work" className={styles.section()}>
      <div className={styles.backgroundGradient()} />

      <div className={styles.container()}>
        <motion.div
          className={styles.header()}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.icon()}>
            <Compass className="w-5 h-5" />
          </div>
          <h2 className={styles.title()}>{heading}</h2>
        </motion.div>

        {subtitle && <p className={styles.subtitle()}>{subtitle}</p>}

        {metrics && metrics.length > 0 && (
          <div className={styles.metricsGrid()}>
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className={styles.metricTile()}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <span className={styles.metricValue()}>{metric.value}</span>
                <span className={styles.metricLabel()}>{metric.label}</span>
              </motion.div>
            ))}
          </div>
        )}

        <div className={styles.grid()}>
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.card()}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardIcon()}>
                {itemIcons[index] ?? <Sparkles className="w-5 h-5" />}
              </div>
              <h3 className={styles.cardTitle()}>{item.title}</h3>
              <p className={styles.cardDescription()}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
