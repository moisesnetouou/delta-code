import { tv } from "tailwind-variants";

export const howIWorkStyles = tv({
  slots: {
    section: "py-12 md:py-16 px-5 md:px-8 lg:px-16 relative overflow-hidden",
    backgroundGradient:
      "absolute inset-0 bg-gradient-to-br from-accent-secondary/3 via-transparent to-accent-primary/3",
    container: "max-w-6xl mx-auto relative z-10",
    header: "flex items-center gap-3 mb-2",
    icon: "w-8 h-8 md:w-10 md:h-10 p-1.5 md:p-2 rounded-lg bg-accent-primary/10 text-accent-primary flex items-center justify-center",
    title: "text-2xl md:text-3xl font-bold text-foreground",
    subtitle: "text-sm md:text-base text-foreground-muted mb-8 md:mb-10",

    grid: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6",
    card: "flex flex-col gap-3 p-5 md:p-6 rounded-xl bg-surface/50 border border-foreground-muted/10 hover:border-accent-primary/40 hover:bg-surface transition-all duration-200",
    cardIcon:
      "w-10 h-10 p-2 rounded-lg bg-accent-secondary/10 text-accent-secondary flex items-center justify-center shrink-0",
    cardTitle: "text-base md:text-lg font-semibold text-foreground",
    cardDescription:
      "text-sm md:text-base text-foreground-muted leading-relaxed",
  },
});
