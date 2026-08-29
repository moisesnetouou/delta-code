import type { ProjectKind, ProjectStatus } from "@/data/projects";
import type { AchievementId } from "@/lib/achievements";
import { en } from "./en";
import { pt } from "./pt";
import type { Locale } from "./types";

interface ExperienceText {
  role: string;
  period: string;
  location: string;
  description: string;
  /** Role milestones inside the same company, oldest first */
  progression: { role: string; period: string }[];
}

interface ExperienceDetail {
  responsibilities: string[];
  impact: string[];
}

/** Every project: card plus dialog. */
interface ProjectCopy {
  title: string;
  tagline: string;
  /** Card summary, two lines at most */
  summary: string;
  role: string;
  /** Dialog body */
  overview: string[];
  highlights: string[];
}

/** Only projects with `caseStudy: true` in `src/data/projects.ts`. */
interface ProjectCaseStudy {
  /** Detail-page hero blurb */
  intro: string;
  repoNote: string;
  problem: string[];
  architectureIntro: string;
  architecture: string[];
  /** One per entry in `screenshots`, same order */
  screenshotCaptions: string[];
  thumbnailAlt: string;
  ctaTitle: string;
  ctaDescription: string;
}

export interface Content {
  hero: {
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
    projects: string;
    skills: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
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
    highlightsLabel: string;
    highlights: { label: string; description: string }[];
    course: string;
    languages: { name: string; level: string }[];
  };
  timeline: {
    heading: string;
    subtitleTemplate: string;
    responsibilitiesLabel: string;
    impactLabel: string;
    technologiesLabel: string;
    progressionLabel: string;
    clickForDetails: string;
    techDialogHint: string;
    moreTemplate: string;
    experiences: Record<string, ExperienceText>;
    details: Record<string, ExperienceDetail>;
  };
  projects: {
    heading: string;
    subtitle: string;
    ongoing: string;
    /** Elapsed-time labels, each with a `{count}` placeholder */
    duration: { month: string; months: string; year: string; years: string };
    moreTemplate: string;
    viewCase: string;
    viewLive: string;
    viewRepo: string;
    backToPortfolio: string;
    stackHint: string;
    notFound: string;
    viewDetails: string;
    groups: Record<ProjectKind, string>;
    labels: {
      problem: string;
      stack: string;
      architecture: string;
      period: string;
      role: string;
      repo: string;
      highlights: string;
    };
    eyebrows: {
      problem: string;
      stack: string;
      architecture: string;
    };
    status: Record<ProjectStatus, string>;
    items: Record<string, ProjectCopy>;
    caseStudies: Record<string, ProjectCaseStudy>;
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
