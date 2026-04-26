import { tv } from "tailwind-variants";

export const skillsStyles = tv({
  slots: {
    section: "py-12 md:py-16 px-5 md:px-8 lg:px-16",
    container: "max-w-6xl mx-auto",
    header: "flex items-center gap-3 mb-8 md:mb-10",
    icon: "w-8 h-8 md:w-10 md:h-10 p-1.5 md:p-2 rounded-lg bg-accent-primary/10 text-accent-primary flex items-center justify-center",
    title: "text-2xl md:text-3xl font-bold text-foreground",
    grid: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3",
    skillItem:
      "flex flex-col items-center justify-center gap-1.5 md:gap-2 p-3 md:p-4 rounded-xl bg-surface/50 border border-foreground-muted/10 hover:border-accent-primary/40 hover:bg-surface transition-all duration-200 cursor-pointer group min-h-[80px] md:min-h-[100px]",
    skillIcon: "w-5 h-5 md:w-7 md:h-7 flex items-center justify-center",
    skillName:
      "text-xs md:text-xs text-center text-foreground-muted group-hover:text-white transition-colors line-clamp-2",
    categoryRow: "flex items-center gap-3 mb-4",
    categoryBadge:
      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border",
    categoryName: "text-sm font-medium text-foreground-muted",
    dialogContent:
      "sm:max-w-[480px] max-h-[85vh] bg-surface border border-border-subtle text-white p-0 overflow-hidden",
    dialogBar: "h-2 bg-gradient-to-r",
    dialogBody: "p-4 md:p-6 pt-6 md:pt-8",
    dialogCategoryRow: "flex items-center gap-2 mb-4",
    dialogIconRow: "flex items-start gap-4 mb-6",
    dialogIconWrapper:
      "p-4 rounded-2xl bg-surface-2 border border-border-subtle flex items-center justify-center",
    dialogIconInner: "w-14 h-14 flex items-center justify-center",
    dialogTitle: "text-xl md:text-2xl font-bold text-white mb-1",
    dialogSubtitle: "text-sm text-foreground-muted",
    dialogSection: "space-y-4",
    dialogSectionLabel:
      "text-xs font-semibold text-foreground-dim uppercase tracking-wider mb-2",
    dialogSectionText: "text-sm text-foreground-soft leading-relaxed",
  },
});
