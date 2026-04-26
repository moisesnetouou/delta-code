import { tv } from "tailwind-variants";

export const contactStyles = tv({
  slots: {
    section: "py-12 md:py-16 px-5 md:px-8 lg:px-16",
    container: "max-w-4xl mx-auto",
    header: "flex items-center justify-center gap-3 mb-8 md:mb-10",
    icon: "w-8 h-8 md:w-10 md:h-10 p-1.5 md:p-2 rounded-lg bg-accent-primary/10 text-accent-primary flex items-center justify-center",
    title: "text-2xl md:text-3xl font-bold text-foreground",
    content: "text-center space-y-6 md:space-y-8",
    ctaTitle: "text-xl md:text-2xl font-semibold text-foreground mb-2",
    ctaText: "text-sm md:text-base text-foreground-muted mb-6 md:mb-8",
    links: "flex flex-wrap justify-center gap-3 md:gap-4",
    linkItem:
      "flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 rounded-xl bg-surface/50 border border-foreground-muted/10 hover:border-accent-primary/40 hover:bg-surface transition-all duration-300 group",
    linkIcon:
      "w-4 h-4 md:w-5 md:h-5 text-foreground-muted group-hover:text-accent-primary transition-colors",
    linkText:
      "text-xs md:text-sm text-foreground-muted group-hover:text-white transition-colors",
    primaryButton:
      "inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full bg-accent-primary text-background font-semibold hover:bg-accent-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/25",
    secondaryButton:
      "inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-lg bg-surface border border-accent-primary/20 hover:border-accent-primary/50 hover:bg-accent-primary/10 transition-all duration-300 group",
  },
});
