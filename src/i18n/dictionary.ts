import type { AchievementId } from "@/lib/achievements";
import { en } from "./en";
import { pt } from "./pt";
import type { Locale } from "./types";

interface ExperienceText {
  role: string;
  period: string;
  location: string;
  description: string;
}

interface ExperienceDetail {
  responsibilities: string[];
  impact: string[];
}

export interface Content {
  hero: {
    title: string;
    roles: string[];
    tagline: string;
    highlights: string[];
    availability: string;
    scroll: string;
    downloadCvAria: string;
  };
  nav: {
    about: string;
    howIWork: string;
    journey: string;
    skills: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  metrics: { value: string; label: string }[];
  howIWork: {
    heading: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  about: {
    heading: string;
    bioTitle: string;
    summary: string[];
    location: string;
    educationLabel: string;
    languagesLabel: string;
    certificationsLabel: string;
    course: string;
    languages: { name: string; level: string }[];
  };
  timeline: {
    heading: string;
    subtitleTemplate: string;
    responsibilitiesLabel: string;
    impactLabel: string;
    technologiesLabel: string;
    clickForDetails: string;
    techDialogHint: string;
    moreTemplate: string;
    experiences: Record<string, ExperienceText>;
    details: Record<string, ExperienceDetail>;
  };
  skills: {
    heading: string;
    coreHeading: string;
    whatIsLabel: string;
    useCaseLabel: string;
    categories: Record<string, { name: string; badge: string }>;
    descriptions: Record<
      string,
      { name: string; description: string; useCase: string }
    >;
  };
  contact: {
    heading: string;
    sendMessage: string;
    downloadCv: string;
    linkedin: string;
    github: string;
  };
  achievements: {
    panelTitle: string;
    progress: string;
    reset: string;
    newAchievement: string;
    secretRevealed: string;
    secretLockedTitle: string;
    secretLockedDescription: string;
    ctaText: string;
    items: Record<AchievementId, { title: string; description: string }>;
  };
  common: {
    close: string;
    backToTop: string;
  };
  consent: {
    message: string;
    accept: string;
    reject: string;
  };
}

export const dictionaries: Record<Locale, Content> = { pt, en };
