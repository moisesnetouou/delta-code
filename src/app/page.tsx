import About from "@/components/sections/about/about";
import Contact from "@/components/sections/contact/contact";
import Hero from "@/components/sections/hero/hero";
import Skills from "@/components/sections/skills/skills";
import Timeline from "@/components/sections/timeline/timeline";
import {
  certifications,
  education,
  experiences,
  languages,
  personalInfo,
  skills,
  summary,
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

      <About
        summary={summary}
        location={personalInfo.location}
        phone={personalInfo.phone}
        education={education}
        languages={languages}
        certifications={certifications}
      />

      <Timeline experiences={experiences} />

      <Skills skills={skills} />

      <Contact
        email={personalInfo.email}
        linkedin={personalInfo.linkedin}
        github={personalInfo.github}
      />
    </main>
  );
}
