"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { progbizData } from "@/lib/portfolio-data";

export default function Process() {
  const { process } = progbizData;

  return (
    <section id="process" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-lime-600" />
              <span>{process.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {process.heading}
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {process.description}
            </p>
          </div>
        </div>

        {/* Process Graphic Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 bg-slate-950 mb-10 shadow-lg">
          <div className="relative w-full aspect-[21/9] min-h-[220px]">
            <Image
              src="/images/work-process.jpg"
              alt="Kerala Marketing Strategy & Execution Process"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent flex items-center p-6 sm:p-12">
              <div className="max-w-xl text-white">
                <span className="text-xs uppercase font-extrabold tracking-widest text-lime-400 block mb-2">
                  Systematic Agency Framework
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-2">
                  No guesswork. Every campaign is measured against real calls and revenue.
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.steps.map((step) => (
            <div
              key={step.number}
              className="bg-slate-50 border border-slate-200/80 hover:border-lime-500 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-slate-300 group-hover:text-lime-600 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-lime-500 transition-colors"></div>
                </div>

                <h4 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight mb-3">
                  {step.title}
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70 text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-600 shrink-0" />
                <span>{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
