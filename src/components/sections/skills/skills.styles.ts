import { sectionStyles } from "../about/about.styles";

export const skillsStyles = {
  ...sectionStyles,
  grid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  categoryCard:
    "bg-surface rounded-xl p-6 border border-foreground-muted/10 hover:border-accent-primary/30 transition-all duration-300",
  categoryTitle: "text-lg font-semibold text-accent-primary mb-4",
  categoryItems: "flex flex-wrap gap-2",
  skillTag:
    "px-3 py-2 text-sm rounded-lg bg-background border border-foreground-muted/10 text-foreground-muted hover:border-accent-primary/30 hover:text-foreground transition-all duration-200",
};

export { sectionStyles };