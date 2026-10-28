"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Phone, MessageSquare } from "lucide-react";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-center gap-3">
      {/* WhatsApp Floating Button */}
      <a
        href="#contact"
        className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all"
        aria-label="Inquire via WhatsApp or Message"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
      </a>

      {/* Call Floating Button */}
      <a
        href="#contact"
        className="w-11 h-11 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center shadow-md hover:scale-105 transition-all"
        aria-label="Request Callback"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-100 flex items-center justify-center shadow-md transition-all animate-in fade-in-50 duration-200"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
