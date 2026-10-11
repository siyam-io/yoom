"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles, HelpCircle, Shield, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HomeNavbar from "@/app/components/HomeNavbar";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  const plans = [
    {
      name: "Starter",
      badge: "Free Forever",
      priceMonthly: "$0",
      priceAnnual: "$0",
      period: "forever",
      desc: "Ideal for spontaneous 1-on-1 chats and small quick syncs.",
      highlight: false,
      features: [
        "Up to 50 meeting participants",
        "Unlimited spontaneous calls",
        "HD 1080p video & spatial audio",
        "Screen sharing & interactive reactions",
        "Browser-based (no download required)",
        "Standard community support",
      ],
      ctaText: "Start Free",
      ctaLink: "/dashboard",
      buttonVariant: "outline",
    },
    {
      name: "Pro Team",
      badge: "Most Popular",
      priceMonthly: "$15",
      priceAnnual: "$12",
      period: "/user/month",
      desc: "For growing teams that need unlimited meeting time and cloud recordings.",
      highlight: true,
      features: [
        "Up to 250 meeting participants",
        "Unlimited meeting duration",
        "4K Ultra-HD video & 60 FPS screen sharing",
        "Automatic cloud recordings (14-day cloud retention)",
        "Dedicated Personal Meeting Room static URLs",
        "Live recording status & host moderation tools",
        "Custom branding & priority support",
      ],
      ctaText: "Upgrade to Pro",
      ctaLink: "/sign-up",
      buttonVariant: "gradient",
    },
    {
      name: "Enterprise",
      badge: "Custom Scale",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      period: "billed annually",
      desc: "For large organizations with strict compliance, security, and SSO needs.",
      highlight: false,
      features: [
        "Up to 1,000+ meeting participants",
        "Unlimited cloud recording retention & S3 export",
        "Enterprise SAML SSO & Okta integration",
        "Dedicated 99.99% uptime SLA guarantee",
        "Custom domain & white-label room links",
        "Dedicated customer success manager & 24/7 hotline",
        "Audit logs & compliance reporting",
      ],
      ctaText: "Contact Sales",
      ctaLink: "/contact",
      buttonVariant: "outline",
    },
  ];

  const faqs = [
    {
      q: "Can I use YOOM for free without entering a credit card?",
      a: "Yes! The Starter plan is 100% free forever and allows you to create instant meetings without entering any payment information.",
    },
    {
      q: "How does the annual discount work?",
      a: "When you choose Annual billing, you save over 20% on Pro plans compared to paying month-to-month.",
    },
    {
      q: "Where are my meeting recordings stored?",
      a: "Recordings are safely encrypted and stored on Stream Video's global cloud coordinator. You can view, stream, or copy links right from your Dashboard Recordings tab.",
    },
    {
      q: "Can I cancel or change plans anytime?",
      a: "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly through your account settings.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09080e] relative overflow-x-hidden flex flex-col text-white selection:bg-violet-600/30 selection:text-violet-200">
      {/* Background Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-violet-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Dynamic Navigation Bar */}
      <HomeNavbar />

      {/* Main Content with generous navbar top spacing */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-36 sm:pt-44 md:pt-48 pb-28 z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-600/10 border border-violet-500/25 text-violet-300 text-xs font-bold mb-5 shadow-lg shadow-violet-600/10">
            <Sparkles className="size-3.5" />
            <span>Transparent Pricing</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Predictable plans for teams of{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              any size.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-xl leading-relaxed mb-8">
            Start free, host crystal-clear video calls, and scale seamlessly as your team grows. No hidden fees or surprise lock-ins.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-[#151322] border border-white/10 rounded-full p-1.5 backdrop-blur-md">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer",
                billingCycle === "monthly"
                  ? "bg-white/10 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              )}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={cn(
                "px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer",
                billingCycle === "annual"
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/30"
                  : "text-slate-400 hover:text-white"
              )}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-white/20 text-white">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={cn(
                "rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative",
                plan.highlight
                  ? "bg-gradient-to-b from-violet-950/40 via-[#161324] to-[#12101c] border-2 border-violet-500/50 shadow-[0_20px_60px_rgba(109,40,217,0.25)] lg:-translate-y-4"
                  : "bg-[#12101c] border border-white/10 hover:border-violet-500/30 shadow-xl"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-lg shadow-violet-600/40">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  {!plan.highlight && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed min-h-[40px]">
                  {plan.desc}
                </p>

                <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-white/10">
                  <span className="text-4xl sm:text-5xl font-black text-white">
                    {billingCycle === "annual" ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 font-medium">
                    {plan.period}
                  </span>
                </div>

                <div className="space-y-3.5 mb-8">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    What's included:
                  </span>
                  {plan.features.map((feat, j) => (
                    <div key={j} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <div className="size-4.5 rounded-full bg-violet-600/20 text-violet-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="size-3 text-emerald-400" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href={plan.ctaLink} className="w-full mt-4">
                <Button
                  className={cn(
                    "w-full rounded-xl py-6 h-auto font-bold text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer",
                    plan.buttonVariant === "gradient"
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-violet-600/30"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/15"
                  )}
                >
                  {plan.ctaText}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Security & Guarantee Trust Bar */}
        <div className="rounded-3xl p-8 bg-[#12101c] border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
              <Shield className="size-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">SOC-2 & GDPR Ready</h4>
              <p className="text-xs text-slate-400">Strict zero-retention data privacy compliance.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-violet-400 shrink-0">
              <Zap className="size-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">99.99% Uptime Guarantee</h4>
              <p className="text-xs text-slate-400">Backed by globally distributed WebRTC edge nodes.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0">
              <Sparkles className="size-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">30-Day Money-Back Guarantee</h4>
              <p className="text-xs text-slate-400">Not completely satisfied? Full refund, no questions asked.</p>
            </div>
          </div>
        </div>

        {/* PRICING FAQ */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">Pricing FAQ</h2>
            <p className="text-slate-400 text-sm">Everything you need to know about billing and limits.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl p-6 bg-[#12101c] border border-white/10">
                <h4 className="text-base font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
