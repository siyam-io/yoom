"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  Search,
  HelpCircle,
  MessageSquare,
  ArrowRight,
  Shield,
  Video,
  Disc,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HomeNavbar from "@/app/components/HomeNavbar";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "meetings", label: "Meetings & Audio" },
    { id: "recordings", label: "Cloud Recordings" },
    { id: "security", label: "Security & Privacy" },
    { id: "billing", label: "Plans & Billing" },
  ];

  const allFaqs = [
    {
      category: "meetings",
      q: "Is YOOM free to use, and what are the limits?",
      a: "Yes! The Starter tier is completely free forever. You can host meetings with up to 50 participants, share your screen at 60 FPS, use spatial audio, and chat with zero time limits on spontaneous 1-on-1s.",
    },
    {
      category: "meetings",
      q: "Do meeting participants need to create an account or download an app?",
      a: "No! Only the meeting host needs an account to start or schedule rooms. Guests can click any invitation link and join instantly in Chrome, Safari, Firefox, or Edge without downloading any desktop software or mobile apps.",
    },
    {
      category: "meetings",
      q: "How does screen sharing work?",
      a: "During any live meeting, click the 'Share Screen' button on your bottom toolbar. You can choose to share your entire display, an individual software window (like VS Code or Figma), or a specific browser tab with audio pass-through.",
    },
    {
      category: "meetings",
      q: "Can I use YOOM on iPhone, iPad, and Android?",
      a: "Yes! YOOM is fully optimized for modern mobile browsers. You will enjoy responsive control bars, touch-friendly grid layouts, front/back camera toggling, and background audio support.",
    },
    {
      category: "recordings",
      q: "How do I start and stop a meeting recording?",
      a: "As the call owner or host, tap the 'Record' button (the Disc icon 🔘) in the meeting control bar. You'll receive a toast confirmation ('Recording started!') and a live '● REC' badge appears in the top-left corner. Tap the button again or end the call to stop recording.",
    },
    {
      category: "recordings",
      q: "How long does it take for a recording to show up in the Dashboard?",
      a: "Once a recorded call finishes, Stream Video's cloud coordinator takes approximately 1 to 2 minutes to encode the video stream into an MP4 file. Once processed, it will automatically appear in your Dashboard's 'Recordings' tab.",
    },
    {
      category: "recordings",
      q: "How long are recordings kept on the free trial storage?",
      a: "Recordings on the default cloud coordinator are stored for 14 days. If a recording passes 14 days, our in-app player will display an 'Expiration Notice' detailing that the cloud retention period has ended.",
    },
    {
      category: "security",
      q: "How secure and private are our team's conversations?",
      a: "All streams are encrypted using DTLS (Datagram Transport Layer Security) and SRTP (Secure Real-time Transport Protocol). Media packets are transferred directly through secure WebRTC channels, meaning we never listen to, inspect, or sell your audio or video data.",
    },
    {
      category: "security",
      q: "Can unauthorized strangers join my meeting without my knowledge?",
      a: "No. Each meeting is created with a unique UUID or secured through your Personal Room ID. Hosts also have the ability to mute any participant, turn off remote cameras, or remove attendees from the room at any moment.",
    },
    {
      category: "billing",
      q: "What payment methods are supported for Pro and Enterprise plans?",
      a: "We accept all major international credit and debit cards (Visa, MasterCard, American Express) through Stripe, as well as ACH bank transfers and invoicing for Enterprise annual commitments.",
    },
    {
      category: "billing",
      q: "Can I cancel my subscription at any time?",
      a: "Yes. You can cancel your subscription with a single click from your account dashboard. You will continue to have full Pro access until the end of your billing cycle, and you will not be billed again.",
    },
  ];

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#09080e] relative overflow-x-hidden flex flex-col text-white selection:bg-violet-600/30 selection:text-violet-200">
      {/* Background Glows */}
      <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-violet-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-15%] w-[45%] h-[45%] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Dynamic Navigation Bar */}
      <HomeNavbar />

      {/* Main Content with generous navbar top spacing */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-36 sm:pt-44 md:pt-48 pb-28 z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-600/10 border border-violet-500/25 text-violet-300 text-xs font-bold mb-5 shadow-lg shadow-violet-600/10">
            <Sparkles className="size-3.5" />
            <span>Help Center & FAQ</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Questions.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-xl leading-relaxed mb-8">
            Everything you need to know about joining calls, screen sharing, recording retention, and account security.
          </p>

          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <Search className="size-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. recording, mobile, security)..."
              className="w-full rounded-2xl bg-[#12101c] border border-white/10 text-white placeholder:text-slate-500 pl-12 pr-4 py-3.5 text-sm outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20 transition-all shadow-xl"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer",
                activeCategory === cat.id
                  ? "bg-violet-600 text-white shadow-md shadow-violet-600/30"
                  : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3.5 mb-20">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#12101c] border border-white/10 overflow-hidden transition-all shadow-md hover:border-violet-500/30"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white cursor-pointer hover:text-violet-300 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "size-4 text-violet-400 transition-transform duration-200 shrink-0",
                      openIndex === i && "rotate-180"
                    )}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="p-12 text-center rounded-2xl bg-[#12101c] border border-white/10 text-slate-400">
              No matching questions found for "{searchQuery}". Try another keyword or browse all categories.
            </div>
          )}
        </div>

        {/* Support Help Card */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-violet-950/40 via-[#151324] to-[#12101c] border border-violet-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="size-14 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300 shrink-0 shadow-lg">
              <MessageSquare className="size-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Still have a question?</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Our developer and support team typically replies within a few hours.
              </p>
            </div>
          </div>
          <Link href="/contact" className="w-full sm:w-auto shrink-0">
            <Button className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm px-6 py-5 h-auto shadow-md shadow-violet-600/30 flex items-center justify-center gap-2">
              <span>Contact Support</span>
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
