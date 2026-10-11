"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Globe2,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import HomeNavbar from "@/app/components/HomeNavbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your message has been dispatched to our engineering team.");
      setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Direct Email",
      detail: "support@yoom.io",
      sub: "General & Enterprise Inquiries",
    },
    {
      icon: MessageSquare,
      title: "Live Developer Discord",
      detail: "discord.gg/yoom-app",
      sub: "Community assistance & discussions",
    },
    {
      icon: Clock,
      title: "Response Time",
      detail: "Within 2 Hours",
      sub: "Monday to Friday, 24/5 global coverage",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      detail: "San Francisco, CA",
      sub: "Distributed across 8 timezones",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09080e] relative overflow-x-hidden flex flex-col text-white selection:bg-violet-600/30 selection:text-violet-200">
      {/* Background Glows */}
      <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-violet-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-15%] w-[45%] h-[45%] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Dynamic Navigation Bar */}
      <HomeNavbar />

      {/* Main Content with generous navbar top spacing */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-36 sm:pt-44 md:pt-48 pb-28 z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-600/10 border border-violet-500/25 text-violet-300 text-xs font-bold mb-5 shadow-lg shadow-violet-600/10">
            <Sparkles className="size-3.5" />
            <span>We're Here to Help</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Get in touch with the{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              YOOM team.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-xl leading-relaxed">
            Have questions about custom enterprise deployments, feature requests, or technical support? Drop us a line.
          </p>
        </div>

        {/* Content Split: Form on Left, Contact Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Card (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl p-8 sm:p-12 bg-[#12101c] border border-white/10 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-2">Send us a message</h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-8">
              Fill out the form below and a representative will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Siyam Ahmed"
                    className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 px-4 py-3 text-sm outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="siyam@example.com"
                    className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 px-4 py-3 text-sm outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-2">
                  Inquiry Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-xl bg-[#171424] border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20 transition-all"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Enterprise Sales">Enterprise & Team Sales</option>
                  <option value="Technical Support">Technical & Recording Support</option>
                  <option value="Security & Compliance">Security & Compliance</option>
                  <option value="Bug Report">Feedback & Bug Report</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you need help with or what you'd like to build..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 px-4 py-3 text-sm outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm py-6 h-auto shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="size-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Right Info Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-3xl p-8 bg-[#12101c] border border-white/10 shadow-xl flex flex-col gap-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-violet-400">
                  Direct Channels
                </span>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Team Online</span>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                {contactMethods.map((method, i) => {
                  const Icon = method.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="size-11 rounded-2xl bg-violet-600/15 border border-violet-500/25 flex items-center justify-center text-violet-400 shrink-0 shadow-md">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{method.title}</h4>
                        <p className="text-xs font-semibold text-violet-300">{method.detail}</p>
                        <p className="text-[11px] text-slate-400">{method.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Meeting CTA */}
            <div className="rounded-3xl p-8 bg-gradient-to-tr from-violet-950/40 via-[#151324] to-[#12101c] border border-violet-500/30 shadow-xl flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white">Need an immediate sync?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Launch an instant meeting right now and invite anyone with a single link.
              </p>
              <Link href="/dashboard">
                <Button className="w-full rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs py-3">
                  Open Instant Meeting Room
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
