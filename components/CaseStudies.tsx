"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, TrendingUp, Sparkles, MapPin } from "lucide-react";
import { progbizData } from "@/lib/portfolio-data";

export default function CaseStudies() {
  const { caseStudies } = progbizData;

  return (
    <section id="projects" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-lime-600" />
            <span>Proven Kerala Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
            Industries we serve in Kerala
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We work with businesses of every kind across Kerala, so we know what makes each one grow.
            Over the years, we have run digital marketing for:
          </p>
        </div>

        {/* Case Studies Cards Stack */}
        <div className="space-y-8">
          {caseStudies.map((study, idx) => (
            <div
              key={study.id}
              className="bg-slate-50 border border-slate-200/80 hover:border-slate-300 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Meta & Left Content */}
                <div className="lg:col-span-8 flex flex-col items-start">
                  {/* Category & Location Badges */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="px-3 py-1 rounded-full bg-slate-950 text-white text-xs font-extrabold uppercase tracking-wider">
                      {study.industry}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700">
                      <MapPin className="w-3 h-3 text-lime-600" />
                      <span>{study.location}, Kerala</span>
                    </span>
                    <span className="text-xs font-extrabold text-lime-700 bg-lime-100 px-3 py-1 rounded-full">
                      {study.client}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 tracking-tight leading-tight mb-4">
                    {study.title}
                  </h3>

                  {/* Narrative Description */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-2xl">
                    {study.description}
                  </p>

                  {/* Result Metric Banner */}
                  <div className="inline-flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm font-bold mb-6 shadow-xs">
                    <TrendingUp className="w-4 h-4 text-lime-600 shrink-0" />
                    <span>Result: {study.metrics}</span>
                  </div>

                  {/* Channel Tags & Explore CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-4 w-full pt-4 border-t border-slate-200/60">
                    <div className="flex flex-wrap items-center gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-semibold text-slate-600 bg-slate-200/70 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-slate-900 hover:text-lime-700 transition-colors"
                    >
                      <span>Inquire About Similar Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right Visual Box */}
                <div className="lg:col-span-4 relative">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 aspect-[4/3] w-full">
                    <Image
                      src={
                        idx === 0
                          ? "/images/growth-dashboard.jpg"
                          : idx === 1
                          ? "/images/tablet-mockup.jpg"
                          : "/images/work-process.jpg"
                      }
                      alt={`${study.client} digital marketing success`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                      <div className="text-white">
                        <div className="text-xs uppercase font-bold text-lime-400">
                          {study.client}
                        </div>
                        <div className="text-xs font-medium text-slate-200">{study.metrics}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
