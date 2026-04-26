import { tv } from "tailwind-variants";

export const aboutStyles = tv({
  slots: {
    section: "py-12 md:py-16 px-5 md:px-8 lg:px-16 relative overflow-hidden",
    backgroundGradient:
      "absolute inset-0 bg-gradient-to-br from-accent-primary/3 via-transparent to-accent-secondary/3",
    backgroundGrid:
      "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]",
    container: "max-w-4xl mx-auto relative z-10",
    header: "flex items-center gap-3 mb-6 md:mb-8",
    icon: "w-8 h-8 md:w-10 md:h-10 p-1.5 md:p-2 rounded-lg bg-accent-primary/10 text-accent-primary flex items-center justify-center",
    title: "text-2xl md:text-3xl font-bold text-foreground",

    content: "space-y-5 md:space-y-6",

    bioSection: "flex flex-col md:flex-row gap-5 md:gap-8 items-start",
    avatarWrapper:
      "relative w-24 h-32 md:w-36 md:h-52 flex-shrink-0 rounded-lg overflow-hidden border-2 border-accent-primary/30 bg-surface flex items-center justify-center",
    avatarInitial:
      "w-full h-full flex items-center justify-center text-3xl md:text-5xl font-bold text-accent-primary",

    textSection: "flex-1 space-y-3 md:space-y-4",
    bioTitle:
      "text-lg md:text-xl lg:text-2xl text-foreground font-medium leading-relaxed",
    bioDescription:
      "text-sm md:text-base text-foreground-muted leading-relaxed",

    infoSection: "flex flex-wrap gap-4 md:gap-6 pt-2",
    infoItem: "flex items-center gap-2 text-sm text-foreground-muted",
    infoIcon: "w-4 h-4 text-accent-primary",

    block: "mt-6 pt-6 border-t border-border-subtle",
    blockHeader: "flex items-center gap-2 mb-3",
    blockIcon: "w-4 h-4 text-accent-secondary",
    blockLabel: "text-sm font-medium text-white",
    eduList: "space-y-1",
    eduCourse: "text-sm text-white",
    eduMeta: "text-xs text-foreground-muted",
    langList: "flex flex-wrap gap-3",
    langItem: "text-sm text-foreground-muted",
    langName: "text-white",
    langLevel: "text-foreground-dim",
    certList: "space-y-2",
    certCard:
      "block p-2 rounded-lg bg-surface border border-border-subtle hover:border-accent-secondary/50 transition-colors",
    certTitle: "text-sm text-white font-medium",
    certMeta: "text-xs text-foreground-muted",
    orbBlur:
      "absolute top-20 left-10 w-24 h-24 rounded-full opacity-15 [background:radial-gradient(circle,var(--color-accent-primary)_0%,transparent_70%)] [filter:blur(30px)]",
    avatarImage: "object-cover object-top",
  },
});
