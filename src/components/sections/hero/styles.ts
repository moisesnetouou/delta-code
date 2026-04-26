import { tv } from "tailwind-variants";

export const heroStyles = tv({
  slots: {
    container:
      "min-h-screen flex flex-col justify-center items-center px-5 py-20 relative overflow-hidden",
    backgroundGradient:
      "absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-background to-accent-secondary/5",
    backgroundGrid:
      "absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]",
    content: "relative z-10 text-center max-w-3xl mx-auto space-y-6",
    name: "text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-accent-primary via-white to-accent-secondary bg-clip-text text-transparent",
    title: "text-lg md:text-xl lg:text-2xl text-accent-primary font-medium",
    tagline:
      "text-base md:text-lg lg:text-xl text-foreground-muted max-w-xl mx-auto leading-relaxed",
    socialLinks: "flex gap-4 md:gap-4 justify-center items-center mt-6 md:mt-8",
    socialLink:
      "p-3 md:p-3 rounded-xl bg-surface/80 border border-foreground-muted/10 hover:border-accent-primary/50 hover:bg-accent-primary/10 transition-all duration-300 group",
    socialIcon:
      "w-5 h-5 md:w-6 md:h-6 text-foreground-muted group-hover:text-accent-primary transition-colors",
    scrollIndicator:
      "absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground-muted/40",
    scrollIcon: "w-4 h-4 md:w-5 md:h-5 animate-bounce",
    scrollLabel: "text-xs uppercase tracking-widest",
    orbCyan:
      "absolute w-[600px] h-[600px] top-[5%] left-0 rounded-full opacity-20 animate-pulse-slow [background:radial-gradient(circle,var(--color-accent-primary)_0%,transparent_70%)] [filter:blur(80px)]",
    orbPurple:
      "absolute w-[500px] h-[500px] bottom-[10%] right-0 rounded-full opacity-15 animate-pulse-slower [background:radial-gradient(circle,var(--color-accent-secondary)_0%,transparent_70%)] [filter:blur(60px)]",
  },
});
