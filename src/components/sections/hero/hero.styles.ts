export const heroStyles = {
  container:
    "min-h-screen flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden",
  backgroundGradient:
    "absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-background to-accent-secondary/5",
  backgroundGrid:
    "absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]",
  content: "relative z-10 text-center max-w-3xl mx-auto",
  name: "text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-accent-primary to-accent-secondary bg-clip-text text-transparent animate-pulse",
  title: "text-xl md:text-2xl text-foreground-muted mb-6",
  tagline: "text-lg text-foreground-muted/80 mb-8 max-w-xl mx-auto",
  socialLinks: "flex gap-6 justify-center items-center",
  socialLink:
    "p-3 rounded-full bg-surface border border-foreground-muted/10 hover:border-accent-primary/50 hover:bg-accent-primary/10 transition-all duration-300 group",
  socialIcon: "w-5 h-5 text-foreground-muted group-hover:text-accent-primary transition-colors",
  scrollIndicator:
    "absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground-muted/50 animate-bounce",
  scrollIcon: "w-6 h-6",
};

export const buttonVariants = {
  primary:
    "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-primary text-background font-semibold hover:bg-accent-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/25",
  secondary:
    "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent-secondary text-accent-secondary font-semibold hover:bg-accent-secondary/10 transition-all duration-300",
};