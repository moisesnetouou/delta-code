import { tv } from "tailwind-variants";

export const projectsStyles = tv({
  slots: {
    section: "py-12 md:py-16 px-5 md:px-8 lg:px-16 relative overflow-hidden",
    backgroundGrid:
      "absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]",
    container: "max-w-6xl mx-auto relative z-10",
    header: "flex items-center gap-3 mb-8 md:mb-10",
    icon: "w-8 h-8 md:w-10 md:h-10 p-1.5 md:p-2 rounded-lg bg-accent-primary/10 text-accent-primary flex items-center justify-center",
    titleCol: "flex flex-col gap-0.5",
    title: "text-2xl md:text-3xl font-bold text-foreground",
    subtitle: "text-sm md:text-base text-foreground-muted",
    group: "flex flex-col gap-4 md:gap-5 mb-10 md:mb-12 last:mb-0",
    groupLabel:
      "font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-dim",
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5",
    gridSingle: "grid grid-cols-1 gap-4 md:gap-5",
  },
});

export const projectCardStyles = tv({
  slots: {
    card: "group relative flex flex-col gap-4 p-4 md:p-5 rounded-xl bg-surface border border-border-subtle overflow-hidden transition-colors duration-200 hover:border-accent-primary/40",
    cardFeatured: "md:flex-row md:gap-7 md:p-6",
    accentBar: "absolute top-0 left-0 right-0 h-0.5",
    thumbWrapper:
      "relative w-full aspect-video rounded-lg overflow-hidden border border-border-subtle bg-background",
    thumbWrapperFeatured: "md:w-[520px] md:flex-shrink-0 md:self-start",
    thumb: "object-cover object-top",
    content: "flex flex-col gap-3 md:gap-3.5 flex-grow min-w-0",
    metaRow: "flex items-center gap-2.5 flex-wrap",
    iconTile:
      "flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0",
    statusBadge:
      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
    statusDot: "w-1.5 h-1.5 rounded-full",
    period:
      "font-mono text-[11px] uppercase tracking-wider text-foreground-dim",
    nameRow: "flex items-start gap-3",
    nameCol: "flex flex-col gap-1.5 min-w-0",
    name: "text-lg md:text-xl font-bold text-foreground",
    tagline: "text-sm font-medium text-accent-primary",
    summary: "text-sm leading-relaxed text-foreground-muted max-w-[62ch]",
    techRow: "flex flex-wrap gap-2",
    techChip:
      "flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-foreground-muted",
    techChipIcon:
      "flex items-center justify-center [&>svg]:size-3.5 [&>span]:text-xs",
    moreChip:
      "rounded-full border border-accent-primary/25 bg-accent-primary/10 px-2.5 py-1 text-[11px] text-accent-primary",
    footer:
      "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-auto pt-4 border-t border-border-subtle",
    caseLink:
      "inline-flex items-center gap-2 text-sm font-medium text-accent-primary transition-colors after:absolute after:inset-0 group-hover:text-white",
    detailsButton:
      "inline-flex items-center gap-2 self-start text-sm font-medium text-accent-primary transition-colors after:absolute after:inset-0 group-hover:text-white",
    liveLink:
      "relative z-10 inline-flex items-center gap-1.5 text-[13px] text-foreground-muted hover:text-accent-primary transition-colors self-start",
  },
});

export const projectDialogStyles = tv({
  slots: {
    content:
      "sm:max-w-[560px] max-h-[85vh] bg-surface border border-border-subtle text-white p-0 overflow-hidden",
    bar: "h-2 flex-shrink-0",
    body: "p-4 md:p-6 pt-6 md:pt-8 overflow-y-auto max-h-[calc(80vh-8px)]",
    header: "flex items-start gap-3.5 mb-4",
    iconTile:
      "flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0",
    titleCol: "flex flex-col gap-1 min-w-0",
    title: "text-xl md:text-2xl font-bold text-white",
    tagline: "text-sm text-accent-primary font-medium",
    metaRow: "flex flex-wrap gap-4 mb-6 text-sm text-foreground-muted",
    metaItem: "flex items-center gap-1.5",
    sections: "space-y-5",
    prose: "flex flex-col gap-3",
    proseText: "text-sm text-foreground-soft leading-relaxed",
    divider: "pt-3 border-t border-border-subtle",
    sectionLabel:
      "text-xs font-semibold text-foreground-dim uppercase tracking-wider mb-3",
    list: "flex flex-col gap-2.5",
    listItem:
      "grid grid-cols-[16px_minmax(0,1fr)] gap-2 text-sm text-foreground-soft leading-relaxed",
    listDot: "w-1.5 h-1.5 rounded-full mt-1.5",
    techRow: "flex flex-wrap gap-2",
    techChip:
      "rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-foreground-muted",
    techChipClickable:
      "rounded-full border border-accent-primary/25 bg-accent-primary/10 px-2.5 py-1 text-[11px] text-accent-primary hover:border-accent-primary/60 transition-colors",
  },
});
