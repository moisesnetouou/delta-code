import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/sections/project-detail";
import { caseStudyProjects } from "@/data/projects";
import { dictionaries } from "@/i18n/dictionary";
import { absoluteUrl } from "@/lib/site";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudyProjects.find((item) => item.id === slug);
  const copy = dictionaries.pt.projects.items[slug];

  if (!project || !copy) {
    return { title: dictionaries.pt.projects.notFound };
  }

  const title = `${copy.title} | ${copy.tagline}`;
  const canonical = absoluteUrl(`/projects/${slug}`);

  return {
    title,
    description: copy.summary,
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: canonical,
      title,
      description: copy.summary,
      siteName: "Moisés Neto",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: copy.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = caseStudyProjects.find((item) => item.id === slug);

  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
