import { sectionStyles } from "../about/about.styles";

export const contactStyles = {
  ...sectionStyles,
  content: "flex flex-col md:flex-row items-center justify-center gap-12",
  info: "flex flex-col gap-6",
  infoItem: "flex items-center gap-4",
  infoIcon: "w-10 h-10 p-2 rounded-lg bg-accent-primary/10 text-accent-primary",
  infoLabel: "text-sm text-foreground-muted",
  infoValue: "text-lg text-foreground font-medium",
  infoLink: "text-lg text-accent-primary hover:text-accent-secondary transition-colors",
  cta: "text-center",
  ctaTitle: "text-2xl font-bold text-foreground mb-4",
  ctaText: "text-foreground-muted mb-6",
  ctaButton:
    "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-primary text-background font-semibold hover:bg-accent-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/25",
};

export { sectionStyles };