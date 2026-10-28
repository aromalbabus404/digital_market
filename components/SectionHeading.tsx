"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlightWord?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlightWord,
  subtitle,
  align = "center",
  className = "",
  id,
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return title;
    }
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-lime-600 relative inline-block">
          {highlightWord}
          <span className="absolute bottom-1 left-0 w-full h-[3px] bg-lime-400/60 rounded-full" />
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      id={id}
      className={`mb-10 md:mb-16 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl"
      } ${className}`}
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-100/90 border border-lime-300 text-lime-800 text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <Sparkles className="w-3.5 h-3.5 text-lime-600" />
        <span>{badge}</span>
      </motion.div>

      <motion.h2
        initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-tight"
      >
        {renderTitle()}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
