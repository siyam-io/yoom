"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Video,
  Mic,
  MonitorUp,
  Disc,
  ShieldCheck,
  Zap,
  Users,
  Sparkles,
  ArrowRight,
  Check,
  X,
  Lock,
  Headphones,
  Sliders,
  Share2,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HomeNavbar from "@/app/components/HomeNavbar";

export default function FeaturesPage() {
  const detailedFeatures = [
    {
      category: "Audio & Video",
      title: "Crystal-Clear 4K Video & Dynamic Spatial Audio",
      desc: "Our real-time WebRTC media pipeline dynamically monitors bandwidth and automatically fine-tunes video resolution from 720p to 4K, preventing frozen frames and awkward interruptions.",
      icon: Video,
      highlights: [
        "Adaptive Bitrate (ABR) for unstable mobile connections",
        "Opus 48kHz studio audio sampling",
        "Real-time AI background noise suppression",
        "Low-light video enhancement & auto exposure",
      ],
      tag: "Visual & Acoustic Excellence",
    },
    {
      category: "Screen Presentation",
      title: "High-FPS Screen Sharing Without Motion Lag",
      desc: "Present intricate Figma wireframes, live software terminal sessions, and high-framerate videos at full 60 FPS with pixel-perfect text clarity.",
      icon: MonitorUp,
      highlights: [
        "Full desktop or individual browser tab sharing",
        "Low-latency cursor tracking for clear demonstrations",
        "Zero audio-sync drift during multimedia playback",
        "Simultaneous presenter audio mixing",
      ],
      tag: "Built for Creators & Engineers",
    },
    {
      category: "Recording & Cloud Hub",
      title: "Smart Cloud Recordings & Instant Playback",
      desc: "Never lose a breakthrough brainstorming session. Record meetings directly to the cloud and stream them immediately inside your Dashboard without downloading massive gigabyte files.",
      icon: Disc,
      highlights: [
        "Single-click recording with real-time '● REC' indicator",
        "Automatic cloud transcoding and coordinator indexing",
        "Integrated in-app HTML5 player with sleek error fallback",
        "Sharable invite and playback links for teammates",
      ],
      tag: "Persistent Knowledge",
    },
    {
      category: "Privacy & Controls",
      title: "Host Governance & End-to-End Cryptography",
      desc: "Maintain absolute control over your meeting rooms. With role-based permissions and DTLS/SRTP cryptography, unauthorized intruders can never compromise your internal discussions.",
      icon: ShieldCheck,
      highlights: [
        "Enterprise-grade DTLS/SRTP encryption protocols",
        "Mute all, camera moderation, and participant kick capabilities",
        "Custom Personal Meeting Room permanent IDs",
        "Zero third-party tracking or private conversation logging",
      ],
      tag: "Enterprise Protection",
    },
  ];

  const comparisonRows = [
    { name: "Browser-First (Zero App Downloads)", yoom: true, legacy: false, generic: false },
    { name: "Ultra-HD 4K Video & 60 FPS Sharing", yoom: true, legacy: false, generic: false },
    { name: "Instant In-Browser Cloud Recording Playback", yoom: true, legacy: true, generic: false },
    { name: "Persistent Personal Room Static Links", yoom: true, legacy: true, generic: true },
    { name: "Modern Dark Obsidian Glassmorphism UI", yoom: true, legacy: false, generic: false },
    { name: "Live Toast Alerts & Recording REC Badge", yoom: true, legacy: false, generic: false },
    { name: "Real-Time Spatial Audio & AI Noise Isolation", yoom: true, legacy: false, generic: false },
    { name: "Free Tier Meeting Access", yoom: true, legacy: "40 min limit", generic: "Limited" },
  ];

  return (
    <div className="min-h-screen bg-[#09080e] relative overflow-x-hidden flex flex-col text-white selection:bg-violet-600/30 selection:text-violet-200">
      {/* Background Glows */}
      <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-violet-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-15%] w-[45%] h-[45%] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Dynamic Navigation Bar */}
      <HomeNavbar />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-36 sm:pt-44 md:pt-48 pb-28 z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-600/10 border border-violet-500/25 text-violet-300 text-xs font-bold mb-5 shadow-lg shadow-violet-600/10">
            <Sparkles className="size-3.5" />
            <span>Platform Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Engineered for the future of{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              remote work.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-xl leading-relaxed">
            Every feature in YOOM was crafted to eliminate friction, maximize focus, and deliver an intuitive conferencing experience.
          </p>
        </div>

        {/* Detailed Feature Sections */}
        <div className="flex flex-col gap-12 sm:gap-16 mb-28">
          {detailedFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-8 sm:p-12 bg-[#12101c] border border-white/10 flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-10 items-center justify-between shadow-2xl hover:border-violet-500/30 transition-all`}
              >
                {/* Text Side */}
                <div className="flex-1 flex flex-col gap-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-violet-400">
                    {feat.category} • {feat.tag}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                    {feat.title}
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    {feat.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                    {feat.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Icon / Card Box */}
                <div className="w-full lg:w-96 rounded-2xl p-8 bg-gradient-to-tr from-violet-950/60 via-[#181528] to-[#12101c] border border-white/10 flex flex-col items-center text-center gap-4 shadow-inner">
                  <div className="size-20 rounded-3xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300 shadow-xl shadow-violet-600/20">
                    <Icon className="size-10" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{feat.tag}</h3>
                  <p className="text-xs text-slate-400">
                    Powered by Stream Video Coordinator & WebRTC
                  </p>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden mt-2">
                    <div className="w-4/5 h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* COMPARISON TABLE */}
        <section className="rounded-3xl p-8 sm:p-12 bg-[#12101c] border border-white/10 shadow-2xl mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-2 block">
              Feature Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              How YOOM compares to legacy solutions
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              See why teams are abandoning clunky legacy apps in favor of modern, browser-native speed.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 uppercase text-[11px] tracking-wider">
                  <th className="py-4 px-4 font-bold">Feature</th>
                  <th className="py-4 px-4 font-bold text-violet-400 text-base">YOOM 2.0</th>
                  <th className="py-4 px-4 font-semibold">Legacy Zoom</th>
                  <th className="py-4 px-4 font-semibold">Generic Video Tools</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-semibold text-white">{row.name}</td>
                    <td className="py-4 px-4 text-emerald-400 font-bold">
                      {typeof row.yoom === "boolean" ? (
                        row.yoom ? (
                          <div className="flex items-center gap-1.5 text-violet-300 font-bold">
                            <Check className="size-4 text-emerald-400" /> Yes
                          </div>
                        ) : (
                          <X className="size-4 text-slate-500" />
                        )
                      ) : (
                        row.yoom
                      )}
                    </td>
                    <td className="py-4 px-4 text-slate-400">
                      {typeof row.legacy === "boolean" ? (
                        row.legacy ? (
                          <Check className="size-4 text-slate-400" />
                        ) : (
                          <X className="size-4 text-slate-600" />
                        )
                      ) : (
                        row.legacy
                      )}
                    </td>
                    <td className="py-4 px-4 text-slate-400">
                      {typeof row.generic === "boolean" ? (
                        row.generic ? (
                          <Check className="size-4 text-slate-400" />
                        ) : (
                          <X className="size-4 text-slate-600" />
                        )
                      ) : (
                        row.generic
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <div className="rounded-3xl p-10 sm:p-14 bg-gradient-to-r from-violet-900/40 via-indigo-900/30 to-purple-900/40 border border-violet-500/30 text-center flex flex-col items-center gap-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Experience the difference in your next meeting
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl">
            Start a meeting right away without entering credit cards or downloading installers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link href="/dashboard">
              <Button className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-base px-8 py-5 h-auto shadow-lg shadow-violet-600/30">
                Launch Instant Meeting
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="rounded-full bg-white/5 hover:bg-white/10 text-white border-white/20 font-bold text-base px-8 py-5 h-auto">
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
