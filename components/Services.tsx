"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { progbizData } from "@/lib/portfolio-data";

export default function Services() {
  const { services } = progbizData;
  const [activeId, setActiveId] = useState<string>("360-marketing");

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? "" : id);
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-lime-600" />
              <span>Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Our Digital Marketing Services in Kerala
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Choose one service or a combined plan. Each is set up around your business goal and budget.
            </p>
          </div>
        </div>

        {/* Progbiz-Style Numbered Accordion List */}
        <div className="space-y-4">
          {services.map((service) => {
            const isOpen = activeId === service.id;
            return (
              <div
                key={service.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-slate-50 border-slate-300 shadow-md p-6 sm:p-8"
                    : "bg-white border-slate-200/80 hover:border-slate-300 p-5 sm:p-6"
                }`}
              >
                {/* Header Row */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(service.id)}
                  className="w-full flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 rounded-lg"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-lg sm:text-2xl font-black text-slate-400 group-hover:text-slate-900 transition-colors">
                      {service.number}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-black text-slate-950 tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Content Drawer */}
                {isOpen && (
                  <div className="mt-6 pt-6 border-t border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in-50 duration-200">
                    {/* Description & Deliverables */}
                    <div className="lg:col-span-8 flex flex-col items-start">
                      <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-medium">
                        {service.shortDescription}
                      </p>

                      <div className="w-full bg-white rounded-xl p-5 border border-slate-200/80 mb-6">
                        <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-400 mb-3">
                          What We Deliver:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-semibold">
                              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-xs"
                      >
                        <span>Inquire About {service.title}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Media / Quick Stat Graphic */}
                    <div className="lg:col-span-4 w-full">
                      <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 aspect-[4/3] w-full">
                        <Image
                          src={service.featuredImage || "/images/growth-dashboard.jpg"}
                          alt={`${service.title} Agency Deliverables`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                          <span className="text-xs font-bold text-white tracking-wide">
                            Proven for Kerala Businesses
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
