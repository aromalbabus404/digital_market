"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  SearchCheck,
  Target,
  Sparkles,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { portfolioData } from "@/lib/portfolio-data";

const pillarIconMap: Record<string, React.ElementType> = {
  SearchCheck,
  Target,
  Sparkles,
  MessageSquare,
};

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-label="About the Marketer"
      className="py-16 sm:py-20 md:py-28 relative bg-white overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-5 sm:left-10 w-64 sm:w-80 h-64 sm:h-80 bg-lime-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image & Personal Card */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none"
          >
            {/* Ambient blur behind image */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-lime-300/30 to-emerald-300/20 rounded-3xl blur-xl opacity-60" />

            <div className="relative rounded-3xl bg-white border border-zinc-200/90 p-4 sm:p-5 shadow-xl">
              {/* Profile Image with Next.js Image component */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 mb-4 sm:mb-5">
                <Image
                  src={portfolioData.personal.profileImage}
                  alt={`${portfolioData.personal.name} - Digital Marketer & Strategist`}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  priority={false}
                />
                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-zinc-200 text-zinc-900 shadow-md">
                  <span className="flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
                    {portfolioData.personal.location}
                  </span>
                  <span className="text-lime-700 font-bold text-[11px]">Ready to Collaborate</span>
                </div>
              </div>

              {/* Bio summary card below photo */}
              <div className="px-1 py-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-zinc-950 font-bold text-lg">
                    {portfolioData.personal.name}
                  </h3>
                  <span className="text-[11px] font-bold text-lime-800 bg-lime-100 border border-lime-300 px-2 py-0.5 rounded-full">
                    Digital Marketer
                  </span>
                </div>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {portfolioData.personal.bio}
                </p>

                {/* Core attribute tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-700 border border-zinc-200">
                    Curious Learner
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-700 border border-zinc-200">
                    Intent-Focused
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-700 border border-zinc-200">
                    Detail-Oriented
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story & Principles */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionHeading
              badge={portfolioData.about.badge}
              title={portfolioData.about.title}
              highlightWord="Online Growth"
              align="left"
              className="mb-6 sm:mb-8"
            />

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="space-y-3.5 text-zinc-700 text-sm sm:text-base leading-relaxed mb-8"
            >
              {portfolioData.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-zinc-700">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* 4 Core Pillars Grid */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-8 sm:mb-10"
            >
              {portfolioData.about.pillars.map((pillar) => {
                const IconComp = pillarIconMap[pillar.icon] || CheckCircle2;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/90 hover:border-lime-400 hover:bg-white transition-all shadow-sm"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="p-1.5 rounded-lg bg-lime-100 text-lime-700">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h4 className="text-zinc-900 text-sm font-bold">{pillar.title}</h4>
                    </div>
                    <p className="text-zinc-600 text-xs leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Link
                href="#contact"
                id="about-cta"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-zinc-950 bg-lime-400 hover:bg-lime-300 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>{portfolioData.about.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
