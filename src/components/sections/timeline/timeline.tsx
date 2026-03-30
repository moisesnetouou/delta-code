"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { experienceDetails } from "@/data/experience-details";
import { skills } from "@/data/portfolio-data";
import {
  type SkillDescription,
  skillDescriptions,
} from "@/data/skill-descriptions";
import { isAchievementUnlocked, unlockAchievement } from "@/lib/achievements";
import { getIcon } from "@/lib/icons";
import type { TimelineProps } from "./timeline.types";

const techToCategory: Record<string, string> = {};
skills.forEach((category) => {
  category.items.forEach((item) => {
    techToCategory[item] = category.category;
  });
});

type CategoryType =
  | "frontend"
  | "backend"
  | "testes"
  | "automacao"
  | "bots"
  | "ferramentas"
  | "soft";

const categoryConfig: Record<string, { type: CategoryType; label: string }> = {
  "Frontend & Frameworks": { type: "frontend", label: "Front" },
  "Testes & Qualidade": { type: "testes", label: "Test" },
  "Automação & IA": { type: "automacao", label: "AI" },
  "Bots & Chatbots": { type: "bots", label: "Bots" },
  Backend: { type: "backend", label: "Back" },
  "Ferramentas & Infra": { type: "ferramentas", label: "Infra" },
  "Soft Skills": { type: "soft", label: "Soft" },
};

const typeStyles: Record<
  CategoryType,
  { bg: string; border: string; text: string }
> = {
  frontend: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
  },
  backend: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
  },
  testes: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-400",
  },
  automacao: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    text: "text-yellow-400",
  },
  bots: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    text: "text-pink-400",
  },
  ferramentas: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
  },
  soft: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
  },
};

export default function Timeline({ experiences }: TimelineProps) {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    category: string;
  } | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<
    (typeof experiences)[0] | null
  >(null);
  const [selectedExperienceForSkills, setSelectedExperienceForSkills] =
    useState<(typeof experiences)[0] | null>(null);

  const selectedExperienceDetails = selectedExperience
    ? experienceDetails[selectedExperience.id]
    : null;

  const calculateYearsOfExperience = () => {
    if (experiences.length === 0) return 0;
    const firstExp = experiences.reduce((oldest, exp) => {
      const expStart = new Date(
        exp.period.split(" - ")[0].replace("Atual", "2026"),
      );
      return expStart < oldest ? expStart : oldest;
    }, new Date());
    const now = new Date();
    const years = now.getFullYear() - firstExp.getFullYear();
    const months = now.getMonth() - firstExp.getMonth();
    const totalMonths = years * 12 + months;
    return Math.max(1, Math.round(totalMonths / 12));
  };

  const yearsOfExperience = calculateYearsOfExperience();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("timeline");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.bottom <= window.innerHeight + 100;
        if (isVisible && !isAchievementUnlocked("view_journey")) {
          unlockAchievement("view_journey");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jobOrderMobile: Record<string, number> = {
    "Desenvolvedor Frontend Jr": 1,
    "Desenvolvedor Frontend Pleno": 2,
    "Tech Lead Temporário": 3,
    "Frontend Engineer": 4,
  };

  const sortedExperiencesMobile = [...experiences].sort((a, b) => {
    const orderA = jobOrderMobile[a.role] || 99;
    const orderB = jobOrderMobile[b.role] || 99;
    return orderA - orderB;
  });

  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = new Date(a.period.split(" - ")[0].replace("Atual", "2026"));
    const dateB = new Date(b.period.split(" - ")[0].replace("Atual", "2026"));
    return dateA.getTime() - dateB.getTime();
  });

  const getSkillDescription = (name: string): SkillDescription | null => {
    return skillDescriptions[name] || null;
  };

  const handleSkillClick = (tech: string) => {
    const description = getSkillDescription(tech);
    if (description) {
      const category = techToCategory[tech] || "Frontend & Frameworks";
      setSelectedSkill({ name: tech, category });
      if (!isAchievementUnlocked("open_skill")) {
        unlockAchievement("open_skill");
      }
    }
  };

  const handleExperienceClick = (exp: (typeof experiences)[0]) => {
    setSelectedExperience(exp);
    if (!isAchievementUnlocked("open_experience")) {
      unlockAchievement("open_experience");
    }
  };

  const renderCompany = (company: string, companyUrl?: string) => {
    if (companyUrl) {
      return (
        <a
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary font-medium hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          {company}
        </a>
      );
    }
    return <span className="text-accent-primary font-medium">{company}</span>;
  };

  const selectedDescription = selectedSkill
    ? getSkillDescription(selectedSkill.name)
    : null;
  const selectedCategoryConfig = selectedSkill
    ? categoryConfig[selectedSkill.category]
    : null;
  const selectedTypeStyle = selectedCategoryConfig
    ? typeStyles[selectedCategoryConfig.type]
    : null;

  const renderTechBadge = (tech: string, isClickable: boolean = true) => {
    const hasDescription = getSkillDescription(tech);
    const IconComponent = getIcon(tech);

    if (hasDescription && isClickable) {
      return (
        <motion.button
          key={tech}
          onClick={(e) => {
            e.stopPropagation();
            handleSkillClick(tech);
          }}
          className="px-2 py-1 rounded-md text-xs font-medium bg-[#1a1a25] border border-[#2a2a35] text-foreground-muted hover:border-cyan-500/50 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="w-4 h-4 flex items-center justify-center">
            {IconComponent}
          </span>
          {tech}
        </motion.button>
      );
    }

    return (
      <span
        key={tech}
        className="px-2 py-1 rounded-md text-xs font-medium bg-[#1a1a25] border border-[#2a2a35] text-foreground-muted flex items-center gap-1.5"
      >
        <span className="w-4 h-4 flex items-center justify-center">
          {IconComponent}
        </span>
        {tech}
      </span>
    );
  };

  const renderTechBadgesWithLimit = (
    technologies: string[],
    justifyClass: string = "justify-start",
    onShowMore?: () => void,
  ) => {
    const maxVisible = 4;
    const visible = technologies.slice(0, maxVisible);
    const remaining = technologies.length - maxVisible;

    return (
      <div className={`flex flex-wrap gap-1.5 ${justifyClass}`}>
        {visible.map((tech) => renderTechBadge(tech))}
        {remaining > 0 && (
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              onShowMore?.();
            }}
            className="px-2 py-1 rounded-md text-xs font-medium bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            +{remaining}
          </motion.button>
        )}
      </div>
    );
  };

  return (
    <>
      <section
        id="timeline"
        className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Minha Jornada
            </h2>
            <p className="text-foreground-muted">
              {yearsOfExperience}+ anos de experiência construindo soluções
            </p>
          </motion.div>

          <div className="relative hidden md:block">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

            {sortedExperiences.map((exp, index) => {
              if (index === 2) {
                const leftExp = sortedExperiences[3];
                const rightExp = sortedExperiences[2];

                return (
                  <motion.div
                    key="senior-row"
                    className="relative flex items-center mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="grid grid-cols-2 w-full">
                      <div className="text-right pr-8">
                        <motion.div
                          className="bg-[#0a0a12] border border-[#2a2a35] rounded-xl p-5 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          onClick={() => handleExperienceClick(leftExp)}
                        >
                          <h3 className="text-lg font-bold text-white mb-1">
                            {leftExp.role}
                          </h3>
                          <p className="text-accent-primary font-medium mb-2">
                            {renderCompany(leftExp.company, leftExp.companyUrl)}
                          </p>
                          <div className="flex items-center gap-3 text-sm text-foreground-muted mb-3 justify-end">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {leftExp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {leftExp.location}
                            </span>
                          </div>
                          <p className="text-sm text-[#b0b0b0] leading-relaxed mb-4">
                            {leftExp.description}
                          </p>
                          {renderTechBadgesWithLimit(
                            leftExp.technologies,
                            "justify-end",
                            () => setSelectedExperienceForSkills(leftExp),
                          )}
                        </motion.div>
                      </div>

                      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-[#050508] z-10" />

                      <div className="text-left pl-8">
                        <motion.div
                          className="bg-[#0a0a12] border border-[#2a2a35] rounded-xl p-5 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          onClick={() => handleExperienceClick(rightExp)}
                        >
                          <h3 className="text-lg font-bold text-white mb-1">
                            {rightExp.role}
                          </h3>
                          <p className="text-accent-primary font-medium mb-2">
                            {renderCompany(
                              rightExp.company,
                              rightExp.companyUrl,
                            )}
                          </p>
                          <div className="flex items-center gap-3 text-sm text-foreground-muted mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {rightExp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {rightExp.location}
                            </span>
                          </div>
                          <p className="text-sm text-[#b0b0b0] leading-relaxed mb-4">
                            {rightExp.description}
                          </p>
                          {renderTechBadgesWithLimit(
                            rightExp.technologies,
                            "justify-start",
                            () => setSelectedExperienceForSkills(rightExp),
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              if (index >= 3) return null;

              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  className={`relative flex items-center mb-12 last:mb-0 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div
                    className={`w-[45%] ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}
                  >
                    <motion.div
                      className="bg-[#0a0a12] border border-[#2a2a35] rounded-xl p-5 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => handleExperienceClick(exp)}
                    >
                      <h3 className="text-lg font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-accent-primary font-medium mb-2">
                        {renderCompany(exp.company, exp.companyUrl)}
                      </p>
                      <div className="flex items-center gap-3 text-sm text-foreground-muted mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                      <p className="text-sm text-[#b0b0b0] leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      {renderTechBadgesWithLimit(
                        exp.technologies,
                        isLeft ? "justify-end" : "justify-start",
                        () => setSelectedExperienceForSkills(exp),
                      )}
                    </motion.div>
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-[#050508] z-10" />
                </motion.div>
              );
            })}
          </div>

          <div className="md:hidden space-y-4">
            {sortedExperiencesMobile.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="bg-[#0a0a12] border border-[#2a2a35] rounded-xl p-4 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => handleExperienceClick(exp)}
              >
                <h3 className="text-base font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-accent-primary font-medium mb-2">
                  {renderCompany(exp.company, exp.companyUrl)}
                </p>
                <div className="flex items-center gap-3 text-xs text-foreground-muted mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>
                <p className="text-sm text-[#b0b0b0] leading-relaxed mb-3">
                  {exp.description}
                </p>
                {renderTechBadgesWithLimit(
                  exp.technologies,
                  "justify-start",
                  () => setSelectedExperienceForSkills(exp),
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={!!selectedExperience}
        onOpenChange={() => setSelectedExperience(null)}
      >
        <DialogContent className="sm:max-w-[520px] max-h-[85vh] bg-[#0a0a0f] border border-[#2a2a35] text-white p-0 overflow-hidden">
          {selectedExperience && selectedExperienceDetails && (
            <>
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-purple-500 flex-shrink-0" />

              <div className="p-4 md:p-6 pt-6 md:pt-8 overflow-y-auto max-h-[calc(80vh-8px)]">
                <DialogTitle className="text-xl md:text-2xl font-bold text-white mb-1">
                  {selectedExperience.role}
                </DialogTitle>
                <p className="text-accent-primary font-medium mb-4">
                  {renderCompany(
                    selectedExperience.company,
                    selectedExperience.companyUrl,
                  )}
                </p>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-foreground-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {selectedExperience.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {selectedExperience.location}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedExperience.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-5"
                  >
                    <div>
                      <h4 className="text-xs font-semibold text-[#666] uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        Responsabilidades
                      </h4>
                      <ul className="space-y-2">
                        {selectedExperienceDetails.responsibilities.map(
                          (resp) => (
                            <li
                              key={resp}
                              className="text-sm text-[#ccc] leading-relaxed"
                            >
                              {resp}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-[#2a2a35]">
                      <h4 className="text-xs font-semibold text-[#666] uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        Impacto
                      </h4>
                      <ul className="space-y-2">
                        {selectedExperienceDetails.impact.map((imp) => (
                          <li
                            key={imp}
                            className="text-sm text-[#ccc] leading-relaxed"
                          >
                            {imp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-[#2a2a35]">
                      <h4 className="text-xs font-semibold text-[#666] uppercase tracking-wider mb-3">
                        Tecnologias
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedExperience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={!!selectedSkill}
        onOpenChange={() => setSelectedSkill(null)}
      >
        <DialogContent className="sm:max-w-[480px] bg-[#0a0a0f] border border-[#2a2a35] text-white p-0 overflow-hidden">
          {selectedDescription && selectedTypeStyle && (
            <>
              <div
                className={`h-2 bg-gradient-to-r ${
                  selectedCategoryConfig?.type === "frontend"
                    ? "from-cyan-500 to-blue-500"
                    : selectedCategoryConfig?.type === "backend"
                      ? "from-purple-500 to-pink-500"
                      : selectedCategoryConfig?.type === "testes"
                        ? "from-green-500 to-emerald-500"
                        : selectedCategoryConfig?.type === "automacao"
                          ? "from-yellow-500 to-orange-500"
                          : selectedCategoryConfig?.type === "bots"
                            ? "from-pink-500 to-rose-500"
                            : selectedCategoryConfig?.type === "ferramentas"
                              ? "from-orange-500 to-red-500"
                              : "from-blue-500 to-cyan-500"
                }`}
              />

              <div className="p-6 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${selectedTypeStyle.bg} ${selectedTypeStyle.border} ${selectedTypeStyle.text}`}
                  >
                    {selectedCategoryConfig?.label}
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-[#12121a] border border-[#2a2a35] flex items-center justify-center">
                    <div className="w-14 h-14 flex items-center justify-center">
                      {getIcon(selectedDescription.name)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <DialogTitle className="text-xl md:text-2xl font-bold text-white mb-1">
                      {selectedDescription.name}
                    </DialogTitle>
                    <p className="text-sm text-foreground-muted">
                      {selectedSkill?.category}
                    </p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedDescription.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div>
                      <h4 className="text-xs font-semibold text-[#666] uppercase tracking-wider mb-2">
                        O que é
                      </h4>
                      <p className="text-sm text-[#ccc] leading-relaxed">
                        {selectedDescription.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-[#666] uppercase tracking-wider mb-2">
                        Caso de Uso
                      </h4>
                      <p className="text-sm text-[#ccc] leading-relaxed">
                        {selectedDescription.useCase}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={!!selectedExperienceForSkills}
        onOpenChange={() => setSelectedExperienceForSkills(null)}
      >
        <DialogContent className="sm:max-w-[520px] bg-[#0a0a0f] border border-[#2a2a35] text-white p-0 overflow-hidden">
          {selectedExperienceForSkills && (
            <>
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-purple-500" />

              <div className="p-4 md:p-6 pt-6 md:pt-8">
                <DialogTitle className="text-xl md:text-2xl font-bold text-white mb-1">
                  Tecnologias
                </DialogTitle>
                <p className="text-accent-primary font-medium mb-6">
                  {selectedExperienceForSkills.role} @{" "}
                  {renderCompany(
                    selectedExperienceForSkills.company,
                    selectedExperienceForSkills.companyUrl,
                  )}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {selectedExperienceForSkills.technologies.map((tech) => {
                    const hasDescription = getSkillDescription(tech);
                    if (hasDescription) {
                      return (
                        <motion.button
                          key={tech}
                          onClick={() => {
                            const category =
                              techToCategory[tech] || "Frontend & Frameworks";
                            setSelectedSkill({ name: tech, category });
                          }}
                          className="p-3 rounded-lg bg-[#1a1a25] border border-[#2a2a35] hover:border-cyan-500/50 text-left transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="text-sm font-medium text-white">
                            {tech}
                          </span>
                          <span className="block text-xs text-foreground-muted mt-1">
                            Clique para ver detalhes
                          </span>
                        </motion.button>
                      );
                    }
                    return (
                      <div
                        key={tech}
                        className="p-3 rounded-lg bg-[#1a1a25] border border-[#2a2a35]"
                      >
                        <span className="text-sm font-medium text-foreground-muted">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <p className="text-xs text-foreground-muted mt-4 text-center">
                  Clique em uma tecnologia para ver mais detalhes
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
