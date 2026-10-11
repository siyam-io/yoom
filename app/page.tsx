"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Video,
  Mic,
  MonitorUp,
  Disc,
  Shield,
  Zap,
  Users,
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Lock,
  Headphones,
  Laptop,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HomeNavbar from "@/app/components/HomeNavbar";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: "99.99%", label: "Uptime Reliability", sub: "Global Edge Infrastructure" },
    { value: "< 35ms", label: "Global Latency", sub: "Real-time WebRTC Mesh" },
    { value: "10M+", label: "Meeting Minutes", sub: "Hosted Without Interruptions" },
    { value: "100K+", label: "Active Teams", sub: "From Startups to Scaleups" },
  ];

  const bentoFeatures = [
    {
      title: "Ultra-HD 4K Video Quality",
      desc: "Adaptive dynamic bitrate streams crisp video even on mobile data or fluctuating WiFi.",
      icon: Video,
      badge: "Crystal Visuals",
      gradient: "from-violet-600/20 to-indigo-600/5",
      border: "border-violet-500/30",
    },
    {
      title: "AI-Powered Noise Isolation",
      desc: "Background construction, dog barks, and mechanical keyboard clicks are suppressed in real-time.",
      icon: Headphones,
      badge: "Spatial Audio",
      gradient: "from-blue-600/20 to-cyan-600/5",
      border: "border-blue-500/30",
    },
    {
      title: "High-FPS Screen Sharing",
      desc: "Present Figma prototypes, IDE code sessions, and 60 FPS motion videos without frame stutter.",
      icon: MonitorUp,
      badge: "60 FPS Stream",
      gradient: "from-purple-600/20 to-pink-600/5",
      border: "border-purple-500/30",
    },
    {
      title: "Cloud Recordings with Fast Replay",
      desc: "Record directly to Stream Video cloud with instant in-browser playback and sharable links.",
      icon: Disc,
      badge: "14-Day Cloud Hub",
      gradient: "from-rose-600/20 to-amber-600/5",
      border: "border-rose-500/30",
    },
    {
      title: "Enterprise End-to-End Encryption",
      desc: "Every packet is guarded with DTLS/SRTP cryptography. Your private company conversations stay private.",
      icon: Lock,
      badge: "Zero Knowledge",
      gradient: "from-emerald-600/20 to-teal-600/5",
      border: "border-emerald-500/30",
    },
    {
      title: "Instant Browser Access, Zero Installs",
      desc: "Guests join in 1 click from Chrome, Safari, Firefox, or Edge. No executable downloads required.",
      icon: Laptop,
      badge: "No Downloads",
      gradient: "from-amber-600/20 to-orange-600/5",
      border: "border-amber-500/30",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Create or Schedule",
      desc: "Click 'New Meeting' for an instant room or schedule future team syncs in your personal calendar.",
    },
    {
      step: "02",
      title: "Share One-Click Link",
      desc: "Copy your meeting invitation with one tap and send it via Slack, WhatsApp, Discord, or Email.",
    },
    {
      step: "03",
      title: "Collaborate in Ultra-HD",
      desc: "Enjoy spatial audio, seamless screen shares, live emoji reactions, and instant cloud recordings.",
    },
  ];

  const testimonials = [
    {
      name: "Marcus Vance",
      role: "VP of Engineering at FinEdge",
      initials: "MV",
      bg: "#7c3aed",
      text: "Switching from traditional video tools to YOOM slashed our team's meeting setup lag to zero. The WebRTC audio quality is unmatched.",
      stars: 5,
    },
    {
      name: "Elena Rostova",
      role: "Lead Product Designer at Omnis",
      initials: "ER",
      bg: "#ec4899",
      text: "Presenting Figma files at 60fps with crystal screen sharing changed our design critiques completely. Plus, the Obsidian UI is so clean.",
      stars: 5,
    },
    {
      name: "Tariq Al-Mansoor",
      role: "Founder & CTO at CloudPulse",
      initials: "TM",
      bg: "#3b82f6",
      text: "The cloud recording feature with immediate in-browser playback saves our distributed engineering team at least 4 hours every week.",
      stars: 5,
    },
  ];

  const homeFaqs = [
    {
      q: "Is YOOM free to use for personal and team meetings?",
      a: "Yes! YOOM provides a generous free plan that lets you host meetings with unlimited spontaneous syncs, screen sharing, and reactions.",
    },
    {
      q: "Do guests need to install an app or create an account to join?",
      a: "No! Guests can join your meeting in any modern browser on desktop or mobile by clicking your invite link. Only the host needs to sign in.",
    },
    {
      q: "How does meeting recording work in YOOM?",
      a: "During any meeting, simply click the 'Record' button in the toolbar. A live '● REC' badge appears, and when finished, your recording is automatically encoded and stored in your Dashboard Recordings tab.",
    },
    {
      q: "Can I use YOOM on iOS and Android devices?",
      a: "Yes! YOOM is fully optimized for mobile browsers with tailored responsive controls, camera flipping, and audio optimization.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09080e] relative overflow-x-hidden flex flex-col text-white selection:bg-violet-600/30 selection:text-violet-200">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] bg-violet-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-15%] w-[60%] h-[60%] bg-indigo-600/10 rounded-[120px] blur-[170px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[20%] w-[45%] h-[45%] bg-purple-600/10 rounded-[100px] blur-[150px] pointer-events-none" />

      {/* Dynamic Navigation Bar */}
      <HomeNavbar />

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center relative z-10">
        {/* HERO SECTION */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-28">
          {/* Release Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600/10 border border-violet-500/25 mb-8 shadow-lg shadow-violet-600/10"
          >
            <span className="size-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-violet-200">
              YOOM 2.0 is live • Ultra-HD Spatial Meetings
            </span>
            <Sparkles className="size-3.5 text-violet-400" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[82px] font-black tracking-tight max-w-5xl leading-[1.08] mb-6 sm:mb-8 text-white"
          >
            Video meetings that feel{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              effortless & magical.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl md:text-2xl text-slate-300 max-w-3xl mb-10 sm:mb-12 leading-relaxed font-normal"
          >
            Crystal-clear 4K video, zero latency spatial audio, and high-FPS screen sharing. Built for modern high-velocity teams who value focus and craft.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-base sm:text-lg px-8 py-6 h-auto shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                <span>Launch Dashboard</span>
                <ArrowRight className="size-5" />
              </Button>
            </Link>
            <Link href="/features" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white font-bold text-base sm:text-lg px-8 py-6 h-auto active:scale-95 transition-all duration-300 cursor-pointer"
              >
                Discover Features
              </Button>
            </Link>
          </motion.div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-10 text-xs sm:text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-400" />
              <span>Free instant meetings</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-400" />
              <span>End-to-end encrypted</span>
            </div>
          </div>

          {/* INTERACTIVE PRODUCT HERO MOCKUP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-5xl mt-14 sm:mt-18 rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/15 shadow-[0_20px_80px_rgba(109,40,217,0.25)] relative"
          >
            <div className="rounded-2xl bg-[#12101c] border border-white/10 overflow-hidden relative shadow-2xl">
              {/* Window bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#181524] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-rose-500/80" />
                  <div className="size-3 rounded-full bg-amber-500/80" />
                  <div className="size-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-semibold text-slate-400 ml-2 hidden sm:inline">
                    YOOM Ultra Meeting • Room #829-410
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-[11px] font-bold">
                    <span className="size-2 rounded-full bg-rose-500 animate-ping" />
                    <span>REC</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-violet-600/20 text-violet-300 text-[11px] font-semibold hidden sm:inline">
                    4K • 60 FPS
                  </div>
                </div>
              </div>

              {/* Main Video Presentation Grid Mockup */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 sm:p-6 bg-[#0c0a13]">
                {/* Participant 1: Main Presenter */}
                <div className="sm:col-span-2 relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-tr from-violet-950/80 via-[#1f1938] to-[#12101c] border border-violet-500/40 p-4 flex flex-col justify-between shadow-inner">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-xs font-bold text-white border border-white/10">
                      Product Architecture Sync (Screen Share)
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                      Live
                    </span>
                  </div>
                  <div className="flex items-center justify-center my-auto">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="size-16 sm:size-20 rounded-3xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-xl sm:text-2xl font-black text-white shadow-lg shadow-violet-600/40">
                        SY
                      </div>
                      <span className="text-sm font-bold text-white">Siyam (Host)</span>
                      <div className="flex items-center gap-1 text-[11px] text-violet-300 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
                        <Mic className="size-3 text-emerald-400" /> Speaking...
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Latency: 18ms</span>
                    <span>1080p60 • Opus 48kHz</span>
                  </div>
                </div>

                {/* Side Participants */}
                <div className="flex flex-col gap-3">
                  <div className="relative aspect-video sm:aspect-auto sm:flex-1 rounded-2xl overflow-hidden bg-gradient-to-tr from-indigo-950/80 via-[#191728] to-[#12101c] border border-white/10 p-3 flex flex-col justify-between">
                    <span className="px-2 py-0.5 rounded-lg bg-black/60 text-[11px] font-semibold text-white w-fit">
                      Alex Vance
                    </span>
                    <div className="size-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center font-bold text-white mx-auto shadow-md">
                      AV
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span>Muted</span>
                      <span className="size-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  <div className="relative aspect-video sm:aspect-auto sm:flex-1 rounded-2xl overflow-hidden bg-gradient-to-tr from-purple-950/80 via-[#191728] to-[#12101c] border border-white/10 p-3 flex flex-col justify-between">
                    <span className="px-2 py-0.5 rounded-lg bg-black/60 text-[11px] font-semibold text-white w-fit">
                      Sophia Reed
                    </span>
                    <div className="size-10 rounded-2xl bg-gradient-to-tr from-pink-600 to-purple-500 flex items-center justify-center font-bold text-white mx-auto shadow-md">
                      SR
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span>Active</span>
                      <span className="size-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Control Bar Preview */}
              <div className="p-3 sm:p-4 bg-[#141220] border-t border-white/10 flex items-center justify-center gap-2 sm:gap-3">
                <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10">
                  <Mic className="size-4" />
                </div>
                <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10">
                  <Video className="size-4" />
                </div>
                <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10">
                  <MonitorUp className="size-4" />
                </div>
                <div className="size-10 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center">
                  <Disc className="size-4" />
                </div>
                <div className="size-10 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center ml-2 sm:ml-4 shadow-lg shadow-rose-600/30">
                  End
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* STATS RIBBON */}
        <section className="w-full border-y border-white/10 bg-[#0f0d18]/60 backdrop-blur-xl py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-sm sm:text-base font-bold text-white">{stat.label}</span>
                <span className="text-xs text-slate-400">{stat.sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* BENTO GRID: COMPREHENSIVE FEATURES */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-28 relative">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-bold mb-4">
              <Zap className="size-3.5" />
              <span>Full Collaboration Suite</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Engineered for seamless collaboration
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              Everything modern distributed teams need to talk, share, and build without friction or bloated desktop clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bentoFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className={`rounded-3xl p-8 bg-gradient-to-b ${feat.gradient} bg-[#12101c] border ${feat.border} hover:border-violet-400/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-violet-600/10 hover:-translate-y-1`}
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <Icon className="size-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {feat.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2.5">{feat.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3-STEP PROCESS SECTION */}
        <section className="w-full bg-[#0f0d18]/80 border-y border-white/10 py-24 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-2 block">
                How It Works
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Start meeting in 3 effortless steps
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl p-8 bg-[#151322] border border-white/10 relative overflow-hidden flex flex-col justify-between hover:border-violet-500/30 transition-all"
                >
                  <span className="text-6xl font-black text-white/10 absolute top-4 right-6 select-none">
                    {step.step}
                  </span>
                  <div className="mb-6 z-10">
                    <div className="size-12 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300 font-extrabold text-sm mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-violet-400 pt-2">
                    <Check className="size-4" /> Ready in seconds
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-28">
          <div className="text-center mb-16 sm:mb-20">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 fill-amber-400" />
              ))}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Loved by engineering & product teams
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              See how modern teams build closer culture and ship faster with YOOM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-8 bg-[#12101c] border border-white/10 flex flex-col justify-between hover:border-violet-500/30 transition-all shadow-xl"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-5">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    "{t.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3.5 pt-4 border-t border-white/5">
                  <div
                    style={{ backgroundColor: t.bg }}
                    className="size-11 rounded-2xl flex items-center justify-center font-bold text-white text-sm shadow-md"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ ACCORDION PREVIEW */}
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-20 border-t border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm">
              Quick answers to common questions about meetings and security.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {homeFaqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#12101c] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white cursor-pointer hover:text-violet-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`size-4 text-violet-400 transition-transform duration-200 shrink-0 ml-4 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* HIGH-CONVERSION CTA BANNER */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="rounded-3xl p-10 sm:p-16 bg-gradient-to-r from-violet-900/60 via-indigo-900/40 to-purple-900/60 border border-violet-500/30 text-center flex flex-col items-center gap-6 shadow-[0_20px_80px_rgba(109,40,217,0.3)] relative overflow-hidden">
            <div className="absolute top-[-40%] left-[-20%] size-96 bg-violet-500/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-40%] right-[-20%] size-96 bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold">
              <Sparkles className="size-3.5" /> Start Free Today
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white max-w-2xl tracking-tight leading-tight">
              Ready to elevate your team's video meetings?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
              Launch a meeting right now or sign up to schedule recurring calls and save recordings in your cloud dashboard.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link href="/sign-up">
                <Button className="rounded-full bg-white hover:bg-slate-100 text-[#09080e] font-extrabold text-base px-8 py-6 h-auto shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20 font-bold text-base px-8 py-6 h-auto cursor-pointer"
                >
                  Open Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-white/10 bg-[#0b0914] pt-16 pb-12 relative z-10 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-9 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 p-2 flex items-center justify-center shadow-lg shadow-violet-600/30">
                <Image
                  src="/icons/logo.svg"
                  width={20}
                  height={20}
                  alt="YOOM logo"
                  className="brightness-200"
                />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">YOOM</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
              The next-generation video conferencing platform built for high-performance distributed teams.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-white uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link href="/dashboard/personal-room" className="hover:text-white transition-colors">Personal Room</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ & Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-white uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/help" className="hover:text-white transition-colors">Security Overview</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-slate-500">
          <p>© 2026 YOOM Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
