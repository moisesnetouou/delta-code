"use client";

import { MapPin, Phone } from "lucide-react";
import { aboutStyles } from "./about.styles";
import type { AboutProps } from "./about.types";

export default function About({ summary, location, phone }: AboutProps) {
  return (
    <section className={aboutStyles.section}>
      <div className={aboutStyles.container}>
        <div className={aboutStyles.header}>
          <div className={aboutStyles.icon}>
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
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <h2 className={aboutStyles.title}>Sobre</h2>
        </div>

        <div className={aboutStyles.content}>
          <p className={aboutStyles.text}>{summary}</p>

          <div className={aboutStyles.infoGrid}>
            <div className={aboutStyles.infoCard}>
              <MapPin className={aboutStyles.infoIcon} />
              <span className={aboutStyles.infoText}>
                <span className={aboutStyles.accent}>Local:</span> {location}
              </span>
            </div>
            <div className={aboutStyles.infoCard}>
              <Phone className={aboutStyles.infoIcon} />
              <span className={aboutStyles.infoText}>
                <span className={aboutStyles.accent}>Telefone:</span> {phone}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}