"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  Sparkles,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { progbizData } from "@/lib/portfolio-data";

interface FormData {
  fullName: string;
  phone: string;
  businessName: string;
  district: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export default function Contact() {
  const { districts } = progbizData;

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    businessName: "",
    district: "Alappuzha",
    service: "360° Marketing",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone or WhatsApp number";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi AVA, I'm ${formData.fullName || "a business owner"} from ${formData.district || "Alappuzha"}. I'd like a Free Growth Plan for my business (${formData.businessName || "My Business"}). Interested in: ${formData.service}. Message: ${formData.message || "Please share details."}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-lime-600" />
            <span>Get a Quote / Free Growth Plan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
            Book a call and see how you can grow with AVA!
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Fill in the details below to receive a free audit and clear growth plan for your business in Kerala from our team at AVA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Quick Action Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-black text-slate-950">Contact Our Team</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-lime-100 text-lime-800 text-[11px] font-bold">
                  AVA Growth Desk
                </span>
              </div>

              <div className="space-y-3.5">
                {/* WhatsApp direct click */}
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full flex items-center justify-between p-4 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 rounded-2xl transition-all text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-emerald-800">WhatsApp Inquiry</div>
                      <div className="text-sm font-black text-slate-950">
                        Chat with Our Strategist
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 underline group-hover:no-underline">Chat →</span>
                </button>

                {/* Phone callback */}
                <button
                  type="button"
                  onClick={() => {
                    const phoneInput = document.getElementById("phone");
                    phoneInput?.focus();
                  }}
                  className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-100/80 border border-slate-200 rounded-2xl transition-all text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500">Phone Consultation</div>
                      <div className="text-sm font-black text-slate-950">
                        Request Instant Callback
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-600 group-hover:text-slate-950">Book →</span>
                </button>

                {/* Email proposal */}
                <button
                  type="button"
                  onClick={() => {
                    const msgInput = document.getElementById("message");
                    msgInput?.focus();
                  }}
                  className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-100/80 border border-slate-200 rounded-2xl transition-all text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500">Growth Blueprint</div>
                      <div className="text-sm font-black text-slate-950">
                        Detailed Audit & Strategy
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-600 group-hover:text-slate-950">Write →</span>
                </button>

                {/* Headquarters Location Card */}
                <div className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-lime-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500">Agency Headquarters</div>
                    <div className="text-sm font-black text-slate-950">
                      Alappuzha, Kerala
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      Serving businesses across all 14 districts
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="mt-6 pt-6 border-t border-slate-200 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-lime-600 shrink-0" />
                  <span>No obligation, 100% free initial roadmap</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Clock className="w-4 h-4 text-lime-600 shrink-0" />
                  <span>Fast response within 1 hour during business hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 shadow-xl rounded-3xl p-6 sm:p-10">
            {submitSuccess ? (
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-950 mb-3">Growth Plan Request Sent!</h3>
                <p className="text-sm text-slate-600 max-w-md mb-8">
                  Thank you! Our Kerala digital marketing strategist will review your business and reach out to you within 1 business hour.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitSuccess(false);
                    setFormData({
                      fullName: "",
                      phone: "",
                      businessName: "",
                      district: "Alappuzha",
                      service: "360° Marketing",
                      message: "",
                    });
                  }}
                  className="px-6 py-2.5 bg-slate-950 text-white text-xs font-bold rounded-full hover:bg-slate-800 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h3 className="text-xl font-black text-slate-950 mb-2">Request Free Growth Plan</h3>
                <p className="text-xs text-slate-500 mb-6">
                  Tell us about your business goals and where you want to grow.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-extrabold text-slate-800 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Rahul Menon"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                        errors.fullName
                          ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                          : "border-slate-200 focus:ring-lime-400 bg-slate-50/50"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-extrabold text-slate-800 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                          : "border-slate-200 focus:ring-lime-400 bg-slate-50/50"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Business Name */}
                  <div>
                    <label htmlFor="businessName" className="block text-xs font-extrabold text-slate-800 mb-1.5">
                      Business or Brand Name
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      placeholder="e.g. Kerala Solar Tech"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                  </div>

                  {/* District */}
                  <div>
                    <label htmlFor="district" className="block text-xs font-extrabold text-slate-800 mb-1.5">
                      Your District in Kerala
                    </label>
                    <select
                      id="district"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-lime-400"
                    >
                      {districts.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Needed */}
                <div>
                  <label htmlFor="service" className="block text-xs font-extrabold text-slate-800 mb-1.5">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-lime-400"
                  >
                    <option value="360° Marketing">360° Complete Marketing Solution</option>
                    <option value="Performance Marketing">Performance Marketing (Google & Meta Ads)</option>
                    <option value="Search Engine Optimisation">Local SEO & Google Maps Ranking</option>
                    <option value="Social Media Marketing">Social Media Marketing & Content</option>
                    <option value="Website Design & Development">High-Converting Website Development</option>
                    <option value="Branding">Branding & Creative Identity</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-extrabold text-slate-800 mb-1.5">
                    What is your main marketing goal right now?
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="e.g. We want more customer calls and WhatsApp leads for our retail store in Kannur..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-lime-400"
                  ></textarea>
                </div>

                {/* Action Buttons: Submit & Direct WhatsApp */}
                <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-lime-400 hover:bg-lime-300 text-slate-950 font-extrabold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Get Free Growth Plan</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
