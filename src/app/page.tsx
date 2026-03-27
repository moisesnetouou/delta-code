import Hero from "@/components/sections/hero/hero";
import About from "@/components/sections/about/about";
import Experience from "@/components/sections/experience/experience";
import Projects from "@/components/sections/projects/projects";
import Skills from "@/components/sections/skills/skills";
import Certifications from "@/components/sections/certifications/certifications";
import Contact from "@/components/sections/contact/contact";
import {
  personalInfo,
  summary,
  experiences,
  projects,
  skills,
  certifications,
} from "@/data/portfolio-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero
        name={personalInfo.name}
        title={personalInfo.title}
        tagline={personalInfo.tagline}
        linkedin={personalInfo.linkedin}
        github={personalInfo.github}
        email={personalInfo.email}
      />

      <About summary={summary} location={personalInfo.location} phone={personalInfo.phone} />

      <Experience experiences={experiences} />

      <Projects projects={projects} />

      <Skills skills={skills} />

      <Certifications certifications={certifications} />

      <Contact
        email={personalInfo.email}
        linkedin={personalInfo.linkedin}
        github={personalInfo.github}
      />
    </main>
  );
}