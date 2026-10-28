import React from "react";
import { progbizData } from "@/lib/portfolio-data";

export default function StatsBanner() {
  const { stats } = progbizData;

  return (
    <section className="py-8 bg-white" aria-label="Agency Statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  idx < stats.length - 1 ? "md:border-r md:border-slate-200/80" : ""
                }`}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight flex items-baseline">
                  <span>{stat.number}</span>
                  <span className="text-lime-500 text-2xl sm:text-3xl font-extrabold ml-0.5">.</span>
                </div>
                <div className="text-sm font-bold text-slate-800 mt-2">{stat.label}</div>
                {stat.sublabel && (
                  <div className="text-xs text-slate-500 mt-0.5 font-medium">{stat.sublabel}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
