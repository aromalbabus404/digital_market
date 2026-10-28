"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import { progbizData } from "@/lib/portfolio-data";

export default function WhatWeDo() {
  const { whatWeDo } = progbizData;

  return (
    <section id="what-we-do" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200/70 rounded-3xl p-6 sm:p-10 lg:p-14 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Box */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800 mb-5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-500"></span>
                <span>{whatWeDo.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-5">
                {whatWeDo.heading}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                {whatWeDo.description}
              </p>

              {/* Bullets List */}
              <ul className="space-y-4 mb-8 w-full">
                {whatWeDo.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-lime-100 flex items-center justify-center shrink-0 mt-0.5 text-lime-700">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-slate-700 leading-snug">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-full text-sm transition-all shadow-sm"
                >
                  <span>{whatWeDo.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold rounded-full text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Inquire for Your Business</span>
                </a>
              </div>
            </div>

            {/* Right Tablet Mockup Box */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10]">
                  <Image
                    src="/images/tablet-mockup.jpg"
                    alt="Kerala Local Search & Campaign Performance Tablet Mockup"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Bottom Overlay Label */}
                <div className="p-4 bg-white/95 backdrop-blur-md border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-slate-800">
                      Live Local Kerala Search Ranking
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-lime-700 bg-lime-50 px-2 py-0.5 rounded-md">
                    #1 Google Maps Pack
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
