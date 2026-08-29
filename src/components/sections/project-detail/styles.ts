import { tv } from "tailwind-variants";

export const projectDetailStyles = tv({
  slots: {
    main: "pt-24 md:pt-28 pb-16 md:pb-24 px-5 md:px-8 lg:px-16",
    container: "max-w-6xl mx-auto flex flex-col gap-10 md:gap-12",
    backLink:
      "inline-flex items-center gap-2 self-start text-sm text-foreground-muted hover:text-accent-primary transition-colors",

    hero: "flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-start",
    heroCol: "flex flex-col gap-4 md:gap-5 lg:w-[500px] lg:flex-shrink-0",
    badgeRow: "flex items-center gap-2.5 flex-wrap",
    statusBadge:
      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
    statusDot: "w-1.5 h-1.5 rounded-full",
    heroTitle:
      "text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.05] text-foreground",
    heroTagline:
      "text-base md:text-lg lg:text-xl font-medium leading-snug text-accent-primary",
    heroIntro: "text-sm md:text-base leading-relaxed text-foreground-muted",

    metaList: "flex flex-col gap-3 py-4 border-t border-b border-border-subtle",
    metaRow: "grid grid-cols-[86px_minmax(0,1fr)] gap-3.5 items-start",
    metaLabel:
      "font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-dim pt-0.5",
    metaValue: "text-[13px] text-foreground-soft",
    metaValueDim: "text-[13px] text-foreground-dim",

    ctaRow: "flex flex-wrap items-center gap-3",
    primaryCta:
      "inline-flex items-center justify-center gap-2 rounded-lg bg-accent-primary px-5 py-3 text-sm md:text-[15px] font-semibold text-background hover:bg-accent-primary/90 transition-colors min-h-11",
    secondaryCta:
      "inline-flex items-center justify-center gap-2 rounded-lg border border-border-subtle bg-surface px-5 py-3 text-sm md:text-[15px] font-medium text-foreground hover:border-accent-primary/50 transition-colors min-h-11",

    heroImageWrapper:
      "relative w-full aspect-video flex-grow rounded-xl overflow-hidden border border-border-subtle bg-background",
    heroAccentBar: "absolute top-0 left-0 right-0 h-0.5 z-10",
    image: "object-cover object-top",

    block: "flex flex-col gap-5 pt-9 md:pt-12 border-t border-border-subtle",
    blockHeader: "flex flex-col gap-2",
    blockHeaderRow:
      "flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-6",
    eyebrow:
      "font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-dim",
    blockTitle: "text-xl md:text-2xl font-bold text-foreground",
    hint: "text-[13px] text-foreground-dim",

    prose: "flex flex-col gap-4",
    proseText:
      "text-sm md:text-[15px] leading-[1.7] text-foreground-muted max-w-[68ch]",

    stackGrid:
      "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2.5 md:gap-3",
    stackTile:
      "flex items-center gap-2.5 p-3 rounded-xl bg-surface/50 border border-foreground-muted/10 transition-colors duration-200 enabled:hover:border-accent-primary/40 enabled:hover:bg-surface disabled:opacity-60 text-left",
    stackTileIcon:
      "flex items-center justify-center flex-shrink-0 [&>svg]:size-5 [&>span]:text-base",
    stackTileName: "text-xs md:text-[13px] text-foreground-soft truncate",

    archLayout: "flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-start",
    archCol: "flex flex-col gap-4 lg:w-[560px] lg:flex-shrink-0",
    bulletList: "flex flex-col gap-3",
    bullet:
      "grid grid-cols-[18px_minmax(0,1fr)] gap-2.5 text-sm leading-relaxed text-foreground-muted",
    bulletDot: "w-1.5 h-1.5 rounded-full bg-accent-primary mt-2",

    gallery: "flex flex-col gap-6 flex-grow min-w-0",
    galleryGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",
    figure: "flex flex-col gap-2.5",
    figureImage:
      "relative w-full aspect-video rounded-xl overflow-hidden border border-border-subtle bg-background",
    caption:
      "font-mono text-[10px] uppercase tracking-[0.12em] leading-relaxed text-foreground-dim",

    footerCta:
      "flex flex-col items-center gap-6 p-6 md:p-8 rounded-xl bg-surface border border-border-subtle text-center",
    footerCtaCol: "flex flex-col items-center gap-1.5",
    footerCtaTitle: "text-base md:text-lg font-semibold text-foreground",
    footerCtaText: "text-sm text-foreground-muted",
    footerCtaActions:
      "flex flex-col sm:flex-row items-center justify-center gap-4",
    footerBackLink:
      "inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-accent-primary transition-colors",
  },
});
