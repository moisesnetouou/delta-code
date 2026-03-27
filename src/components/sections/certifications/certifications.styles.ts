import { sectionStyles } from "../about/about.styles";

export const certificationsStyles = {
  ...sectionStyles,
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
  card: "bg-surface rounded-xl p-5 border border-foreground-muted/10 hover:border-accent-secondary/30 transition-all duration-300 group",
  cardHeader: "flex items-center gap-3 mb-3",
  cardIcon: "w-8 h-8 p-1.5 rounded bg-accent-secondary/10 text-accent-secondary",
  cardTitle: "text-base font-semibold text-foreground group-hover:text-accent-secondary transition-colors",
  cardMeta: "text-sm text-foreground-muted mb-3",
  cardLink:
    "text-sm text-accent-primary hover:text-accent-secondary transition-colors flex items-center gap-1",
  cardLinkIcon: "w-4 h-4",
};

export { sectionStyles };