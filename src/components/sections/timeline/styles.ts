export const timelineStyles = {
  section: "py-16 md:py-20 px-5 md:px-8 lg:px-16 relative",
  container: "max-w-5xl mx-auto relative",
  header: "text-center mb-16",
  title: "text-3xl md:text-4xl font-bold text-foreground",
  subtitle: "text-foreground-muted mt-2",

  timelineLine:
    "absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500",

  itemContainer: "relative flex justify-between items-center mb-12 last:mb-0",
  itemContainerLeft: "flex-row-reverse",

  itemContent: "w-[45%]",
  itemConnector:
    "absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-[#050508] z-10",

  card: "bg-[#0a0a12] border border-[#2a2a35] rounded-xl p-5 hover:border-cyan-500/30 transition-all duration-300",
  cardRole: "text-lg font-bold text-white mb-1",
  cardCompany: "text-accent-primary font-medium mb-2",
  cardPeriod: "text-sm text-foreground-muted mb-3",
  cardDescription: "text-sm text-[#999] leading-relaxed mb-4",
  cardTech: "flex flex-wrap gap-1.5",
  techBadge:
    "px-2 py-1 rounded-md text-xs font-medium bg-[#1a1a25] border border-[#2a2a35] text-foreground-muted",

  dot: "w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500",
};

export const mobileTimelineStyles = {
  ...timelineStyles,
  timelineLine:
    "absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500",
  itemContainer: "relative flex flex-col ml-12 mb-8 last:mb-0",
  itemContent: "w-full",
  itemConnector:
    "absolute left-4 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-2 border-[#050508] z-10 -top-1",
};
