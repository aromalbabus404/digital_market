"use client";

import React from "react";
import { ArrowUpRight, ShieldCheck, Star, Sparkles } from "lucide-react";
import { progbizData } from "@/lib/portfolio-data";
import { LinkedInIcon, InstagramIcon, TwitterIcon } from "./Icons";

export default function Footer() {
  const { agency } = progbizData;

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA Banner inside Footer */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get a Free Quote</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Book a call and see how <br className="hidden sm:inline" /> you can grow with AVA!
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-lime-400 hover:bg-lime-300 text-slate-950 font-extrabold text-sm tracking-wide transition-all shadow-md shrink-0"
          >
            <span>Contact Our Team</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* Middle Footer: Brand, AI Verification, Trust Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Summary */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-lime-400 flex items-center justify-center text-slate-950 font-black text-xl">
                A
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                AVA
                <span className="w-2 h-2 rounded-full bg-lime-500 inline-block ml-1"></span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              We are AVA, a digital growth company helping businesses build, launch, and scale, with technology, creativity, and strategy that actually works.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-8">
              <a
                href={agency.socials.linkedin}
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-lime-400 hover:text-slate-950 text-slate-400 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={agency.socials.instagram}
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-lime-400 hover:text-slate-950 text-slate-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={agency.socials.twitter}
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-lime-400 hover:text-slate-950 text-slate-400 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>

            {/* AI Search Engine Compatibility Badge */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 w-full max-w-sm">
              <span className="text-xs font-bold text-slate-300 block mb-2">
                Ask AI how AVA can scale your business:
              </span>
              <div className="flex items-center gap-2">
                {["ChatGPT", "Gemini", "Perplexity", "Claude"].map((ai) => (
                  <span
                    key={ai}
                    className="px-2.5 py-1 text-[10px] font-bold bg-slate-800 text-slate-300 rounded-md border border-slate-700"
                  >
                    {ai}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Review & Trust Indicators */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Google Rating */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-1.5 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-sm font-extrabold text-white">4.8 ☆ Rating</div>
              <div className="text-xs text-slate-400 mt-1">Verified Client Satisfaction</div>
            </div>

            {/* Google Partner */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-lime-400" />
                <span className="text-sm font-extrabold text-white">Google Partner</span>
              </div>
              <div className="text-xs text-slate-400">Certified Agency Standard</div>
            </div>

            {/* Clutch & GoodFirms */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-sm font-extrabold text-white mb-1">Top Rated Agency</div>
              <div className="text-xs text-lime-400 font-bold mb-1">★★★★★ 5.0 Star Standards</div>
              <div className="text-[11px] text-slate-400">South India Digital Leaders</div>
            </div>
          </div>
        </div>

        {/* Links Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-slate-800 text-xs sm:text-sm">
          <div>
            <h3 className="text-white font-extrabold mb-4 uppercase tracking-wider text-xs">Services</h3>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">360° Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Performance Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Search Engine Optimisation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Website Design & Dev</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brand Identity</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-extrabold mb-4 uppercase tracking-wider text-xs">Solutions</h3>
            <ul className="space-y-2.5 text-slate-400">
              <li><span className="text-slate-300">Custom ERP Systems</span></li>
              <li><span className="text-slate-300">Custom CRM Platforms</span></li>
              <li><span className="text-slate-300">E-Commerce Platforms</span></li>
              <li><span className="text-slate-300">AI Voice & Chat Automation</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-extrabold mb-4 uppercase tracking-wider text-xs">Quick Links</h3>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#what-we-do" className="hover:text-white transition-colors">What We Do</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Kerala Case Studies</a></li>
              <li><a href="#why-choose" className="hover:text-white transition-colors">Why AVA</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">How We Work</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Plans & Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-extrabold mb-4 uppercase tracking-wider text-xs">Kerala Operations</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <strong className="text-white block">Headquarters:</strong>
                <span>Alappuzha, Kerala, India</span>
              </li>
              <li>
                <strong className="text-white block">Regional Coverage:</strong>
                <span>All 14 Districts across Kerala</span>
              </li>
              <li>
                <strong className="text-white block">Consultation:</strong>
                <span>Online Strategy & On-Site Alignment</span>
              </li>
              <li>
                <strong className="text-white block">Direct Inquiries:</strong>
                <a href="#contact" className="text-lime-400 hover:underline">Get Free Growth Plan →</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 AVA Digital. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Alappuzha-Based Digital Marketing Agency</span>
            <span>•</span>
            <a href="#contact" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#contact" className="hover:text-slate-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
