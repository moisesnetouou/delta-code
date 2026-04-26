import { tv } from "tailwind-variants";

export const skillDialogStyles = tv({
  slots: {
    content:
      "sm:max-w-[480px] max-h-[85vh] bg-surface border border-border-subtle text-white p-0 overflow-hidden",
    bar: "h-2 bg-gradient-to-r",
    body: "p-4 md:p-6 pt-6 md:pt-8",
    categoryRow: "flex items-center gap-2 mb-4",
    categoryBadge:
      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border",
    iconRow: "flex items-start gap-4 mb-6",
    iconWrapper:
      "p-4 rounded-2xl bg-surface-2 border border-border-subtle flex items-center justify-center",
    iconInner: "w-14 h-14 flex items-center justify-center",
    titleCol: "flex-1",
    title: "text-xl md:text-2xl font-bold text-white mb-1",
    subtitle: "text-sm text-foreground-muted",
    sections: "space-y-4",
    sectionLabel:
      "text-xs font-semibold text-foreground-dim uppercase tracking-wider mb-2",
    sectionText: "text-sm text-foreground-soft leading-relaxed",
  },
});
