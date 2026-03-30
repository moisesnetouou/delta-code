import { sectionStyles } from "../about/about.styles";

export const experienceStyles = {
  ...sectionStyles,
  grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  card: `
    p-5 rounded-xl bg-surface/50 border border-foreground-muted/10 
    hover:border-accent-primary/30 transition-all duration-300
  `,
  cardHeader: "space-y-2 mb-3",
  role: "text-lg font-semibold text-foreground",
  company: "text-base text-accent-primary font-medium",
  period: "text-sm text-foreground-muted",
  description:
    "text-sm text-foreground-muted leading-relaxed mb-4 line-clamp-3",
  techBadges: "flex flex-wrap gap-1.5",
  badge: `
    px-2 py-1 text-xs rounded-md bg-accent-secondary/10 
    text-accent-secondary border border-accent-secondary/20
  `,
};

export { sectionStyles };
