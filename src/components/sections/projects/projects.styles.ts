import { sectionStyles } from "../about/about.styles";

export const projectsStyles = {
  ...sectionStyles,
  grid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  card: "group bg-surface rounded-xl p-6 border border-foreground-muted/10 hover:border-accent-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-secondary/10",
  cardHeader: "flex justify-between items-start mb-4",
  cardTitle: "text-xl font-semibold text-foreground group-hover:text-accent-secondary transition-colors",
  cardIcon: "w-5 h-5 text-foreground-muted group-hover:text-accent-secondary transition-colors",
  cardDescription: "text-foreground-muted leading-relaxed mb-4",
  cardTech: "flex flex-wrap gap-2 mb-6",
  techTag: "px-2 py-1 text-xs rounded bg-foreground-muted/10 text-foreground-muted",
  cardLinks: "flex gap-4",
  cardLink:
    "text-sm font-medium text-accent-primary hover:text-accent-secondary transition-colors flex items-center gap-1",
  cardLinkIcon: "w-4 h-4",
};

export { sectionStyles };