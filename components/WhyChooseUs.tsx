"use client";

import React from "react";
import Image from "next/image";
import { Star, Phone, ShieldCheck, MessageSquare } from "lucide-react";
import { progbizData } from "@/lib/portfolio-data";

export default function WhyChooseUs() {
  const { whyChoose } = progbizData;

  return (
    <section id="why-choose" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Context Section */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-4">
            <Star className="w-3.5 h-3.5 fill-lime-500 text-lime-600" />
            <span>{whyChoose.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-6">
            {whyChoose.heading}
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {whyChoose.context.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {/* Bottom Split Container */}
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 lg:p-14 overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Visual Box */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-[4/3] w-full">
                <Image
                  src="/images/work-process.jpg"
                  alt="Why Choose Our Digital Marketing Agency in Kerala"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Float Trust Note */}
              <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-lime-400 shrink-0" />
                <div className="text-xs text-slate-300">
                  <span className="text-white font-bold block">100% Data & Ad Account Ownership</span>
                  You retain full ownership of all Meta & Google ad accounts forever.
                </div>
              </div>
            </div>

            {/* Right Content Box */}
            <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                {whyChoose.reasonsTitle}
              </h3>
              <p className="text-sm sm:text-base text-slate-400 mb-8 font-medium">
                {whyChoose.reasonsSubtitle}
              </p>

              {/* Star Bullets List */}
              <ul className="space-y-3.5 mb-8 w-full">
                {whyChoose.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-lime-400/20 text-lime-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Star className="w-3.5 h-3.5 fill-lime-400" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-slate-200 leading-snug">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Direct Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-lime-400 hover:bg-lime-300 text-slate-950 font-extrabold text-sm tracking-wide transition-all shadow-md hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Talk to Our Experts</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-wide transition-all border border-white/10"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Request Free Growth Plan</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
