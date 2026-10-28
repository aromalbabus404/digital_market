import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import PricingPlans from "@/components/PricingPlans";
import Faq from "@/components/Faq";
import AreasServed from "@/components/AreasServed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-lime-400 text-slate-950 font-bold rounded-lg shadow-lg text-sm"
      >
        Skip to main content
      </a>

      {/* Top Header Navigation */}
      <Navbar />

      {/* Main Content Sections matching Progbiz Kerala Agency Page */}
      <main id="main-content" className="flex-1">
        <Hero />
        <StatsBanner />
        <WhatWeDo />
        <Services />
        <CaseStudies />
        <WhyChooseUs />
        <Process />
        <PricingPlans />
        <Faq />
        <AreasServed />
        <Contact />
      </main>

      {/* Agency Footer */}
      <Footer />

      {/* Floating Action Controls */}
      <FloatingActions />
    </>
  );
}
