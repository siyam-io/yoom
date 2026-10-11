"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HomeNavbar from "@/app/components/HomeNavbar";

export default function PricingPage() {
  const plans = [
    { name: "Basic", price: "Free", desc: "Perfect for individuals and small teams just getting started.", features: ["Up to 10 participants", "40-minute limit", "Standard Video Quality", "Screen Sharing"] },
    { name: "Pro", price: "$15/mo", desc: "For growing teams that need more power and fewer limits.", features: ["Up to 100 participants", "Unlimited meeting time", "HD Video Quality", "Cloud Recording", "Custom Personal Room"] },
    { name: "Enterprise", price: "Custom", desc: "Advanced security and control for large organizations.", features: ["Up to 1000 participants", "4K Video Quality", "Dedicated Support", "SSO Integration", "Advanced Analytics"] },
  ];

  return (
    <div className="min-h-screen bg-[#09080e] relative overflow-clip flex flex-col text-white">
      {/* Background Shapes */}
      <div className="absolute top-[30%] left-[-15%] w-[40%] h-[40%] bg-violet-600/15 rounded-[100px] blur-[140px] pointer-events-none" />
      
      {/* Dynamic Navigation Bar */}
      <HomeNavbar />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Simple, transparent pricing</h1>
          <p className="text-xl text-md-on-surface-variant max-w-2xl mx-auto leading-relaxed">No hidden fees. No surprise charges. Just pick the plan that fits your team best.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
              className={cn(
                "bg-md-surface-container p-10 rounded-[32px] transition-all duration-300",
                i === 1 ? "md:-translate-y-4 shadow-lg ring-2 ring-md-primary relative bg-md-surface-container-low" : "shadow-sm hover:shadow-md hover:-translate-y-1 border border-md-outline/10"
              )}
            >
              {i === 1 && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-md-primary text-md-on-primary px-4 py-1 rounded-full text-sm font-bold shadow-md">Most Popular</span>}
              <h3 className="text-2xl font-bold mb-2 text-md-on-bg">{plan.name}</h3>
              <p className="text-md-on-surface-variant mb-6 min-h-[48px] text-lg">{plan.desc}</p>
              <div className="text-5xl font-extrabold mb-8 text-md-on-bg">{plan.price}</div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-md-on-surface-variant font-medium">
                    <span className="text-md-primary text-xl">✓</span> {feat}
                  </li>
                ))}
              </ul>
              <Button className={cn(
                "w-full rounded-full py-7 h-auto text-lg font-bold shadow-sm active:scale-95 transition-all duration-300",
                i === 1 ? "bg-md-primary text-md-on-primary hover:bg-md-primary/90 hover:shadow-md" : "bg-md-secondary-container text-md-on-secondary-container hover:bg-md-secondary-container/80"
              )}>
                {i === 2 ? 'Contact Sales' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
