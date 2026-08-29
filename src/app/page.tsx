import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import HowIWork from "@/components/sections/how-i-work";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Timeline from "@/components/sections/timeline";
import { experiences, skills } from "@/data/portfolio-data";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <HowIWork />
      <Timeline experiences={experiences} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact />
    </main>
  );
}
