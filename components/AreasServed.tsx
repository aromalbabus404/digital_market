"use client";

import React, { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { progbizData } from "@/lib/portfolio-data";

export default function AreasServed() {
  const { districts } = progbizData;
  const [activeDistrict, setActiveDistrict] = useState<string>("Alappuzha");

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold mb-4 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-lime-600" />
            <span>Statewide Coverage • Based in Alappuzha</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-4">
            Areas We Serve Across Kerala
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Headquartered in Alappuzha, AVA empowers businesses across all 14 districts of Kerala with high-performance SEO, localized Google & Meta ads, and transparent growth strategies.
          </p>
        </div>

        {/* 14 Districts Tags Grid */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {districts.map((district) => {
              const isSelected = activeDistrict === district;
              const isHq = district === "Alappuzha";
              return (
                <button
                  key={district}
                  type="button"
                  onClick={() => setActiveDistrict(district)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-slate-950 text-white shadow-md scale-105 ring-2 ring-lime-400"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  <MapPin className={`w-3.5 h-3.5 ${isSelected ? "text-lime-400" : isHq ? "text-lime-600" : "text-slate-400"}`} />
                  <span>{district}</span>
                  {isHq && (
                    <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-lime-400 text-slate-950 ml-1">
                      HQ
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* District Highlights Box */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center text-lime-700 shrink-0 font-black text-sm">
                ✓
              </div>
              <div>
                <div className="text-sm font-black text-slate-900">
                  Targeted Marketing Campaigns for {activeDistrict}
                </div>
                <div className="text-xs text-slate-500">
                  Local SEO, Google Maps rankings, regional Malayalam & English ad targeting.
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-900 transition-colors"
            >
              <span>Get {activeDistrict} Strategy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Strategic Delivery Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-lime-700 mb-1">
                Strategic Coverage
              </div>
              <h3 className="text-lg font-black text-slate-950 mb-2">North & South Kerala Operations</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Local market knowledge across all commercial hubs, retail corridors, and emerging regional business centres.
              </p>
            </div>
            <a
              href="#contact"
              className="text-xs font-bold text-slate-900 hover:text-lime-700 flex items-center gap-1"
            >
              <span>Connect with Regional Strategist</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-lime-700 mb-1">
                Transparent Execution
              </div>
              <h3 className="text-lg font-black text-slate-950 mb-2">Online Planning & Reporting Hub</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Monthly review calls, real-time lead analytics, and full ownership of your ad accounts, pages, and customer data.
              </p>
            </div>
            <a
              href="#contact"
              className="text-xs font-bold text-slate-900 hover:text-lime-700 flex items-center gap-1"
            >
              <span>View Working Process</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
