export const certificationsStyles = {
  section: "py-12 md:py-16 px-5 md:px-8 lg:px-16",
  container: "max-w-6xl mx-auto",
  header: "flex items-center gap-3 mb-10",
  icon: "w-10 h-10 p-2 rounded-lg bg-accent-primary/10 text-accent-primary",
  title: "text-3xl font-bold text-foreground",
  grid: "grid grid-cols-1 md:grid-cols-3 gap-4",
  card: `
    flex items-center gap-4 p-4 rounded-xl bg-surface/50 
    border border-foreground-muted/10 hover:border-accent-secondary/30 
    transition-all duration-300 group cursor-pointer
  `,
  iconWrapper: `
    w-12 h-12 rounded-xl bg-accent-secondary/10 flex items-center justify-center 
    text-accent-secondary flex-shrink-0
  `,
  content: "flex-1 min-w-0",
  cardTitle:
    "text-sm font-semibold text-foreground group-hover:text-accent-secondary transition-colors truncate",
  issuer: "text-xs text-foreground-muted",
  link: "text-xs text-accent-primary hover:text-accent-secondary transition-colors",
};
