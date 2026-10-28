"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Star, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";
import { progbizData } from "@/lib/portfolio-data";

export default function Hero() {
  const { hero } = progbizData;

  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 bg-white overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-lime-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-slate-100 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
              <h1 className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide">
                {hero.badge}
              </h1>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.15] mb-6">
              <span>{hero.headline} </span>
              <span className="text-lime-600 block sm:inline">{hero.headlineAccent}</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {hero.supportingText}
            </p>

            {/* Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-lime-400 hover:bg-lime-300 text-slate-950 font-extrabold text-sm sm:text-base tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>{hero.primaryCta.text}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm sm:text-base transition-all border border-slate-200/70"
              >
                <span>{hero.secondaryCta.text}</span>
              </a>
            </div>

            {/* Banner Trust Row */}
            <div className="w-full pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Google Partner */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs text-lime-600 font-black">
                  <ShieldCheck className="w-5 h-5 text-lime-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Google Certified</div>
                  <span className="text-[11px] font-semibold text-lime-700 flex items-center gap-0.5">
                    Partner Agency
                  </span>
                </div>
              </div>

              {/* 4.8 Rating on Google */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">4.8 ☆ Rating</div>
                  <a
                    href="#projects"
                    className="text-[11px] font-semibold text-slate-500 hover:text-slate-800 hover:underline"
                  >
                    Client Case Studies
                  </a>
                </div>
              </div>

              {/* Since 2017 */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs text-slate-800 font-black text-xs">
                  9+
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">9+ Years Exp.</div>
                  <div className="text-[11px] font-medium text-slate-500">Kerala, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Media */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 bg-slate-900 shadow-2xl group">
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src="/images/growth-dashboard.jpg"
                  alt="Digital Marketing Performance Growth Dashboard"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>

              {/* Overlay Glass Badge 1: 10x Revenue Scale */}
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white shadow-xl max-w-[200px]">
                <div className="flex items-center gap-1.5 text-lime-400 text-xs font-black uppercase tracking-wider mb-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>10x Client Growth</span>
                </div>
                <div className="text-sm font-extrabold text-white">₹4 Cr → ₹40 Cr</div>
                <div className="text-[10px] text-slate-300">Measured in real sales</div>
              </div>

              {/* Overlay Glass Badge 2: Inquiries Tracker */}
              <div className="absolute bottom-4 right-4 p-3 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-xs">
                    <PhoneCall className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-white">Calls & WhatsApp</div>
                    <div className="text-[10px] text-emerald-400 font-bold">Tracked to ROI</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Pill */}
            <div className="hidden sm:flex items-center gap-2 absolute -bottom-5 left-8 px-4 py-2 rounded-full bg-white shadow-lg border border-slate-100 text-xs font-bold text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-lime-600" />
              <span>All 14 Districts of Kerala Covered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
