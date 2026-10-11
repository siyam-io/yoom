"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Zap,
  Shield,
  Heart,
  Globe2,
  Users,
  Code2,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HomeNavbar from "@/app/components/HomeNavbar";

export default function AboutPage() {
  const values = [
    {
      title: "Speed Over Bloat",
      desc: "Video calls should start in milliseconds. We stripped out slow native installers in favor of high-performance WebRTC browser architecture.",
      icon: Zap,
      gradient: "from-violet-600/20 to-indigo-600/5",
    },
    {
      title: "Radical Privacy",
      desc: "Your team's internal strategy, confidential design files, and whiteboard notes belong strictly to you. Media streams are encrypted and never harvested.",
      icon: Shield,
      gradient: "from-blue-600/20 to-cyan-600/5",
    },
    {
      title: "Obsidian Craft",
      desc: "Software should inspire the people using it. Every curve, gradient, micro-interaction, and audio cue in YOOM is crafted with obsession.",
      icon: Sparkles,
      gradient: "from-purple-600/20 to-pink-600/5",
    },
    {
      title: "Global Inclusivity",
      desc: "Whether on a high-speed fiber connection in Tokyo or mobile 4G in Dhaka, our adaptive bitrate algorithms guarantee stable connections.",
      icon: Globe2,
      gradient: "from-emerald-600/20 to-teal-600/5",
    },
  ];

  const milestones = [
    { year: "2024", title: "Inception & Prototype", desc: "Built the initial WebRTC audio/video mesh for developer team syncs." },
    { year: "2025", title: "Stream Video Integration", desc: "Integrated global coordinator infrastructure, cloud recordings, and multi-layout grid." },
    { year: "2026", title: "YOOM 2.0 Launch", desc: "Redesigned from the ground up with Obsidian glassmorphism, responsive mobile controls, and enterprise security." },
  ];

  const team = [
    { name: "Siyam", role: "Creator & Lead Architect", initials: "SY", bg: "#7c3aed" },
    { name: "Alex Chen", role: "Principal WebRTC Engineer", initials: "AC", bg: "#3b82f6" },
    { name: "Sarah Miller", role: "Head of Product Design", initials: "SM", bg: "#ec4899" },
    { name: "David Kim", role: "Infrastructure & Security", initials: "DK", bg: "#10b981" },
  ];

  return (
    <div className="min-h-screen bg-[#09080e] relative overflow-x-hidden flex flex-col text-white selection:bg-violet-600/30 selection:text-violet-200">
      {/* Background Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-violet-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Dynamic Navigation Bar */}
      <HomeNavbar />

      {/* Main Content with generous navbar top spacing */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-36 sm:pt-44 md:pt-48 pb-28 z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-600/10 border border-violet-500/25 text-violet-300 text-xs font-bold mb-5 shadow-lg shadow-violet-600/10">
            <Sparkles className="size-3.5" />
            <span>Our Mission</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Building video communication that feels{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              truly natural.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-xl leading-relaxed">
            We started YOOM because existing video conferencing tools felt bloated, slow, and outdated. We set out to create a lightning-fast, web-first platform where teams can meet instantly with zero friction.
          </p>
        </div>

        {/* Core Values Bento Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-2 block">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our Core Principles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  className={`rounded-3xl p-8 sm:p-10 bg-gradient-to-br ${val.gradient} bg-[#12101c] border border-white/10 hover:border-violet-500/30 transition-all flex flex-col justify-between shadow-xl`}
                >
                  <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 mb-6 shadow-md">
                    <Icon className="size-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2.5">{val.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline / Milestones */}
        <div className="rounded-3xl p-8 sm:p-12 bg-[#12101c] border border-white/10 shadow-2xl mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-2 block">
              Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">How We Evolved</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-3 relative border-l-2 border-violet-500/30 pl-6 sm:pl-8">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-violet-600/20 text-violet-300 border border-violet-500/30 w-fit">
                  {item.year}
                </span>
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-2 block">
              The Minds Behind YOOM
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Crafted by passionate engineers</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="rounded-3xl p-6 bg-[#12101c] border border-white/10 text-center flex flex-col items-center hover:border-violet-500/30 transition-all shadow-lg"
              >
                <div
                  style={{ backgroundColor: member.bg }}
                  className="size-20 rounded-3xl flex items-center justify-center font-black text-2xl text-white mb-4 shadow-xl shadow-black/40"
                >
                  {member.initials}
                </div>
                <h4 className="text-base font-bold text-white mb-1">{member.name}</h4>
                <p className="text-xs text-slate-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl p-10 sm:p-14 bg-gradient-to-r from-violet-900/40 via-indigo-900/30 to-purple-900/40 border border-violet-500/30 text-center flex flex-col items-center gap-5 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Join the modern video revolution</h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl">
            Start using YOOM today for your daily standups, client meetings, or spontaneous brainstorming sessions.
          </p>
          <div className="flex gap-4 pt-2">
            <Link href="/dashboard">
              <Button className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-base px-8 py-5 h-auto shadow-lg shadow-violet-600/30">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
