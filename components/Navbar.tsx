"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Phone, MessageSquare, Search } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "Case Studies", href: "#projects" },
    { name: "Why AVA", href: "#why-choose" },
    { name: "Process", href: "#process" },
    { name: "Plans", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
            : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 rounded-lg p-1"
            aria-label="AVA - Digital Marketing Agency in Kerala"
          >
            <div className="w-9 h-9 rounded-xl bg-slate-950 flex items-center justify-center text-white font-black text-xl tracking-tighter shadow-sm group-hover:bg-lime-500 group-hover:text-slate-950 transition-colors">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-950 flex items-center gap-1">
                AVA
                <span className="w-1.5 h-1.5 rounded-full bg-lime-500 inline-block"></span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 -mt-1">
                Digital Marketing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-50 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              aria-label="Search services"
            >
              <Search className="w-4 h-4" />
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-lime-600" />
              <span>Contact Our Team</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs uppercase tracking-wider font-extrabold text-slate-950 bg-lime-400 hover:bg-lime-300 rounded-full transition-all shadow-sm hover:shadow"
            >
              <span>Get Free Plan</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contact"
              className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-lime-400 rounded-full"
            >
              Growth Plan
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Quick Search Dropdown Bar */}
        {searchOpen && (
          <div className="border-t border-slate-100 bg-slate-50 py-3 px-4 animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-xl mx-auto flex items-center gap-2">
              <input
                type="text"
                placeholder="Search services (e.g. SEO, Google Ads, Kerala Ecommerce)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm bg-white border border-slate-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-1.5"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <span className="font-black text-lg text-slate-950 flex items-center gap-1.5">
                  AVA
                  <span className="w-2 h-2 rounded-full bg-lime-500"></span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900 rounded-lg"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 py-6" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base font-semibold text-slate-800 hover:text-lime-700 hover:bg-lime-50 rounded-xl transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-50 text-emerald-800 font-bold rounded-xl text-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Quick Inquiry</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 text-slate-800 font-bold rounded-xl text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Request Call Back</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-lime-400 text-slate-950 font-extrabold rounded-xl text-sm shadow-sm"
              >
                <span>Get Free Growth Plan</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
