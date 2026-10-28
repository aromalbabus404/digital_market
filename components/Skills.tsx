"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Search,
  Key,
  Share2,
  CalendarDays,
  PenTool,
  Binary,
  Gauge,
  BarChart3,
  Sparkles,
  BookOpen,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { portfolioData, SkillItem, ToolItem } from "@/lib/portfolio-data";

const skillIconMap: Record<string, React.ElementType> = {
  "SEO Fundamentals": Search,
  "Keyword Research": Key,
  "Social Media Management": Share2,
  "Content Planning": CalendarDays,
  "Content Writing": PenTool,
  "Competitor Research": Binary,
  "Website Optimization": Gauge,
  "Basic Digital Marketing Analytics": BarChart3,
};

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "SEO & Discovery", "Content & Strategy", "Social & Analytics"];

  const filteredSkills =
    selectedCategory === "All"
      ? portfolioData.skills
      : portfolioData.skills.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="skills"
      aria-label="Skills and Marketing Tools"
      className="py-16 sm:py-20 md:py-28 relative bg-[#f8fafc] border-t border-b border-zinc-200/80 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-lime-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Skills & Competencies"
          title="Practical Skills & Emerging Marketing Tools"
          highlightWord="Marketing Tools"
          subtitle="A solid foundation across search intent, content creation, audience engagement, and ongoing exploration of essential marketing platforms."
        />

        {/* Category Filters (Touch-friendly and responsive wrapping for mobile) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-lime-400 text-zinc-950 font-bold border border-lime-500/40 shadow-sm"
                  : "bg-white text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50 border border-zinc-200 shadow-2xs"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14 sm:mb-18">
          {filteredSkills.map((skill: SkillItem, index: number) => {
            const Icon = skillIconMap[skill.name] || Search;

            return (
              <motion.div
                key={skill.name}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200/90 hover:border-lime-500 hover:shadow-md transition-all duration-300 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-lime-50 border border-lime-200 text-lime-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
                      {skill.category.split(" ")[0]}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 mb-1.5">
                    {skill.name}
                  </h3>

                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 flex flex-wrap gap-1">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-zinc-600 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Separate Tools Area: Explicitly designated as Tools of Interest or Learning */}
        <div className="pt-10 sm:pt-12 border-t border-zinc-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-100 border border-lime-300 text-lime-900 text-xs font-bold mb-2.5">
                <BookOpen className="w-3.5 h-3.5 text-lime-700" />
                <span>Hands-On Learning & Exploration</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-zinc-900">
                Marketing Platforms & Tools
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm mt-1 max-w-xl">
                Actively learning and experimenting with industry-standard platforms to analyze data, track search performance, and manage campaigns.
              </p>
            </div>

            <div className="text-xs text-zinc-600 bg-white px-3.5 py-2 rounded-xl border border-zinc-200 shadow-2xs">
              <span className="text-lime-700 font-bold">Note:</span> Tools listed reflect ongoing learning, practice, and platform familiarity.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {portfolioData.tools.map((tool: ToolItem, index: number) => {
              const badgeColors = {
                "Active Learning": "bg-lime-100 text-lime-900 border-lime-300",
                "Exploration": "bg-emerald-100 text-emerald-900 border-emerald-300",
                "Tool of Interest": "bg-sky-100 text-sky-900 border-sky-300",
              };

              return (
                <motion.div
                  key={tool.name}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="p-4 rounded-xl bg-white border border-zinc-200/90 hover:border-lime-400 flex flex-col justify-between transition-all shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-xs font-mono font-medium text-zinc-500">{tool.category}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${badgeColors[tool.badge]}`}
                      >
                        {tool.badge}
                      </span>
                    </div>

                    <h4 className="text-zinc-900 font-bold text-sm mb-1.5 flex items-center gap-1.5">
                      <span>{tool.name}</span>
                    </h4>

                    <p className="text-zinc-600 text-xs leading-relaxed">
                      {tool.learningFocus}
                    </p>
                  </div>

                  <div className="mt-3.5 pt-2 border-t border-zinc-100 flex items-center gap-1 text-[11px] text-zinc-500">
                    <Sparkles className="w-3 h-3 text-lime-600" />
                    <span>Focus area</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
