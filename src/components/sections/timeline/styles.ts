import { tv } from "tailwind-variants";

export const timelineStyles = tv({
  slots: {
    section: "py-16 md:py-20 px-5 md:px-8 lg:px-16 relative",
    container: "max-w-5xl mx-auto relative",
    header: "text-center mb-16",
    title: "text-3xl md:text-4xl font-bold text-foreground",
    subtitle: "text-foreground-muted mt-2",

    card: "bg-surface border border-border-subtle rounded-xl p-5 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer",
    cardSm:
      "bg-surface border border-border-subtle rounded-xl p-4 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer",
    cardRole: "text-lg font-bold text-white mb-1",
    cardRoleSm: "text-base font-bold text-white mb-1",
    cardCompany: "text-accent-primary font-medium mb-2",
    cardMetaRow: "flex items-center gap-3 text-sm text-foreground-muted mb-3",
    cardMetaRowSm: "flex items-center gap-3 text-xs text-foreground-muted mb-3",
    cardMetaItem: "flex items-center gap-1",
    cardDescription: "text-sm text-foreground-soft leading-relaxed mb-4",
    cardDescriptionSm: "text-sm text-foreground-soft leading-relaxed mb-3",
    cardTech: "flex flex-wrap gap-1.5",
    techBadge:
      "px-2 py-1 rounded-md text-xs font-medium bg-surface-3 border border-border-subtle text-foreground-muted flex items-center gap-1.5",
    techBadgeButton:
      "px-2 py-1 rounded-md text-xs font-medium bg-surface-3 border border-border-subtle text-foreground-muted hover:border-cyan-500/50 hover:text-cyan-400 transition-colors flex items-center gap-1.5",
    techBadgeIcon: "w-4 h-4 flex items-center justify-center",
    techMore:
      "px-2 py-1 rounded-md text-xs font-medium bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors",
    companyLink: "text-accent-primary font-medium hover:underline",
    companyText: "text-accent-primary font-medium",

    desktopWrapper: "relative hidden md:block",
    desktopLine:
      "absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500",
    desktopRow: "relative flex items-center mb-12",
    desktopGrid: "grid grid-cols-2 w-full",
    desktopColRight: "text-right pr-8",
    desktopColLeft: "text-left pl-8",
    desktopDot:
      "absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-background z-10",

    mobileWrapper: "md:hidden space-y-4",

    dialogContent:
      "sm:max-w-[520px] max-h-[85vh] bg-surface border border-border-subtle text-white p-0 overflow-hidden",
    dialogContentSkill:
      "sm:max-w-[480px] max-h-[85vh] bg-surface border border-border-subtle text-white p-0 overflow-hidden",
    dialogBar: "h-2 bg-gradient-to-r from-cyan-500 to-purple-500 flex-shrink-0",
    dialogBody:
      "p-4 md:p-6 pt-6 md:pt-8 overflow-y-auto max-h-[calc(80vh-8px)]",
    dialogTitle: "text-xl md:text-2xl font-bold text-white mb-1",
    dialogCompany: "text-accent-primary font-medium mb-4",
    dialogMetaRow: "flex flex-wrap gap-4 mb-6 text-sm text-foreground-muted",
    dialogMetaItem: "flex items-center gap-1.5",
    dialogSection: "space-y-5",
    dialogSectionLabel:
      "text-xs font-semibold text-foreground-dim uppercase tracking-wider mb-3 flex items-center gap-2",
    dialogSectionLabelPlain:
      "text-xs font-semibold text-foreground-dim uppercase tracking-wider mb-3",
    dialogList: "space-y-2",
    dialogListItem: "text-sm text-foreground-soft leading-relaxed",
    dialogDivider: "pt-3 border-t border-border-subtle",
    dialogDotCyan: "w-1.5 h-1.5 rounded-full bg-cyan-400",
    dialogDotPurple: "w-1.5 h-1.5 rounded-full bg-purple-400",
    dialogTech:
      "px-2 py-1 text-xs rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300",

    expDialogBody:
      "p-4 md:p-6 pt-6 md:pt-8 overflow-y-auto max-h-[calc(85vh-8px)]",
    techBadgeClickable:
      "px-2 py-1 text-xs rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-colors cursor-pointer",
    expDialogCompany: "text-accent-primary font-medium mb-6",
    expGrid: "grid grid-cols-2 gap-2",
    expCard:
      "p-3 rounded-lg bg-surface-3 border border-border-subtle hover:border-cyan-500/50 text-left transition-colors",
    expCardStatic: "p-3 rounded-lg bg-surface-3 border border-border-subtle",
    expCardTitle: "text-sm font-medium text-white",
    expCardTitleStatic: "text-sm font-medium text-foreground-muted",
    expCardSubtitle: "block text-xs text-foreground-muted mt-1",
    expHint: "text-xs text-foreground-muted mt-4 text-center",
  },
});
