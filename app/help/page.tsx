"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HELP_CATEGORIES = [
  {
    title: "Getting Started",
    description: "Learn how to set up your account, schedule your first meeting, and invite participants.",
    icon: "/icons/add-meeting.svg"
  },
  {
    title: "Audio & Video",
    description: "Troubleshoot camera, microphone, and speaker issues for a seamless experience.",
    icon: "/icons/Video.svg"
  },
  {
    title: "Account & Billing",
    description: "Manage your subscription, update payment methods, and view your billing history.",
    icon: "/icons/copy.svg"
  }
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-md-bg relative overflow-clip flex flex-col text-md-on-bg">
      {/* Background Shapes */}
      <div className="absolute top-[10%] left-[20%] w-[40%] h-[40%] bg-md-primary-container/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      
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
          <Link href="/pricing" className="hover:text-md-primary transition-colors">Pricing</Link>
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
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-20 z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Help Center</h1>
          <p className="text-xl text-md-on-surface-variant max-w-2xl mx-auto mb-10">How can we help you today? Search our knowledge base or browse categories below.</p>
          <div className="max-w-2xl mx-auto relative">
            <input type="text" placeholder="Search for help..." className="w-full bg-md-surface-container rounded-full py-5 pl-8 pr-16 text-lg border border-md-outline/20 focus:outline-none focus:border-md-primary focus:ring-1 focus:ring-md-primary transition-all shadow-sm" />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-md-primary p-3 rounded-full cursor-pointer hover:bg-md-primary/90 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-md-on-primary"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HELP_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 * (idx + 1), ease: [0.2, 0, 0, 1] }}
              className="bg-md-surface-container rounded-[32px] p-8 border border-md-outline/10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="bg-md-primary/10 p-5 rounded-2xl mb-6 group-hover:bg-md-primary/20 transition-colors">
                <Image src={category.icon} alt={category.title} width={32} height={32} className="brightness-0 opacity-80 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-md-on-bg">{category.title}</h3>
              <p className="text-md-on-surface-variant flex-1">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
