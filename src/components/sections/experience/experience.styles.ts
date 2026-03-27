import { sectionStyles } from "../about/about.styles";

export const experienceStyles = {
  ...sectionStyles,
  timeline: "relative pl-8 border-l-2 border-accent-primary/20",
  timelineItem: "relative mb-12 last:mb-0",
  timelineDot:
    "absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-primary/30 border-2 border-accent-primary",
  card: "bg-surface rounded-xl p-6 border border-foreground-muted/10 hover:border-accent-primary/30 transition-all duration-300",
  role: "text-xl font-semibold text-foreground mb-1",
  company: "text-lg text-accent-primary mb-2",
  meta: "flex flex-wrap gap-3 text-sm text-foreground-muted mb-4",
  description: "text-foreground-muted leading-relaxed mb-4",
  techList: "flex flex-wrap gap-2",
  techTag:
    "px-3 py-1 text-xs rounded-full bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20",
};

export { sectionStyles };