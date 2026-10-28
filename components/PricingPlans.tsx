"use client";

import React from "react";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { progbizData } from "@/lib/portfolio-data";

export default function PricingPlans() {
  const { pricingPlans } = progbizData;

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-lime-600" />
            <span>Transparent Kerala Growth Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
            Simple, Transparent Plans
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Pricing depends on your goals, but here&apos;s how our plans are generally structured, so you know what you&apos;re getting before you talk to us. Every plan includes clear monthly reporting.
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const isFeatured = plan.highlighted;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? "bg-slate-950 text-white shadow-2xl ring-2 ring-lime-400 -translate-y-1 sm:-translate-y-2"
                    : "bg-slate-50 border border-slate-200/80 text-slate-900 hover:border-slate-300 shadow-xs"
                }`}
              >
                {/* Popular Pill Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-lime-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-sm">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-2xl font-black tracking-tight">{plan.name}</h3>
                    <div
                      className={`text-xs font-extrabold mt-1 uppercase tracking-wider ${
                        isFeatured ? "text-lime-400" : "text-lime-700"
                      }`}
                    >
                      {plan.target}
                    </div>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mb-6 font-medium ${
                      isFeatured ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className={`w-full h-px mb-6 ${isFeatured ? "bg-white/10" : "bg-slate-200"}`} />

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isFeatured ? "text-lime-400" : "text-lime-600"
                          }`}
                        />
                        <span
                          className={`text-xs sm:text-sm font-semibold leading-snug ${
                            isFeatured ? "text-slate-200" : "text-slate-700"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Action CTA */}
                <div>
                  <a
                    href="#contact"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-extrabold text-sm transition-all shadow-sm ${
                      isFeatured
                        ? "bg-lime-400 hover:bg-lime-300 text-slate-950 shadow-lime-500/20"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    <span>Choose {plan.name} Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ownership Guarantee Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-lime-50/80 border border-lime-200 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-bold text-lime-900">
            ★ Always Transparent: You own your ad accounts, pages, and data forever. If you ever leave, your ad accounts and assets stay with you.
          </p>
        </div>
      </div>
    </section>
  );
}
