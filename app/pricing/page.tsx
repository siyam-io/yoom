"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  const plans = [
    { name: "Basic", price: "Free", desc: "Perfect for individuals and small teams just getting started.", features: ["Up to 10 participants", "40-minute limit", "Standard Video Quality", "Screen Sharing"] },
    { name: "Pro", price: "$15/mo", desc: "For growing teams that need more power and fewer limits.", features: ["Up to 100 participants", "Unlimited meeting time", "HD Video Quality", "Cloud Recording", "Custom Personal Room"] },
    { name: "Enterprise", price: "Custom", desc: "Advanced security and control for large organizations.", features: ["Up to 1000 participants", "4K Video Quality", "Dedicated Support", "SSO Integration", "Advanced Analytics"] },
  ];

  return (
    <div className="min-h-screen bg-md-bg relative overflow-clip flex flex-col text-md-on-bg">
      {/* Background Shapes */}
      <div className="absolute top-[30%] left-[-15%] w-[40%] h-[40%] bg-md-tertiary/20 rounded-[100px] rounded-tr-[20px] blur-[80px] pointer-events-none mix-blend-multiply" />
      
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-10 relative">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-md-surface-container p-2 rounded-xl border border-md-outline/20 group-hover:bg-md-primary/10 transition-colors duration-300">
            <Image src="/icons/logo.svg" width={28} height={28} alt="yoom logo" className="brightness-0" />
          </div>
          <p className="text-[26px] font-extrabold tracking-tight text-md-primary">YOOM</p>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-md-on-surface-variant font-medium">
          <Link href="/features" className="hover:text-md-primary transition-colors">Features</Link>
          <Link href="/pricing" className="text-md-primary font-bold">Pricing</Link>
          <Link href="/faq" className="hover:text-md-primary transition-colors">FAQ</Link>
          <Link href="/about" className="hover:text-md-primary transition-colors">About</Link>
          <Link href="/contact" className="hover:text-md-primary transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button className="bg-md-primary text-md-on-primary hover:bg-md-primary/90 active:bg-md-primary/80 rounded-full px-8 py-5 h-auto text-base font-medium shadow-sm hover:shadow-md active:scale-95 transition-all duration-300">Dashboard</Button>
          </Link>
        </div>
      </header>

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
