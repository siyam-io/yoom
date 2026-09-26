"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FeaturesPage() {
  const features = [
    { title: "Crystal Clear Video", desc: "4K resolution video calls powered by the latest web technologies.", icon: "🎥" },
    { title: "Spatial Audio", desc: "Hear exactly where everyone is with immersive spatial audio.", icon: "🔊" },
    { title: "Screen Sharing", desc: "Share your entire screen or specific application windows instantly.", icon: "💻" },
    { title: "Meeting Recording", desc: "Record your meetings and access them anytime in the cloud.", icon: "⏺️" },
    { title: "Secure Encryption", desc: "End-to-end encryption ensures your conversations stay private.", icon: "🔒" },
    { title: "Instant Access", desc: "No downloads required. Join directly from your browser.", icon: "⚡" },
  ];

  return (
    <div className="min-h-screen bg-md-bg relative overflow-clip flex flex-col text-md-on-bg">
      {/* Background Shapes */}
      <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-md-secondary-container/50 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-10 relative">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-md-surface-container p-2 rounded-xl border border-md-outline/20 group-hover:bg-md-primary/10 transition-colors duration-300">
            <Image src="/icons/logo.svg" width={28} height={28} alt="yoom logo" className="brightness-0" />
          </div>
          <p className="text-[26px] font-extrabold tracking-tight text-md-primary">YOOM</p>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-md-on-surface-variant font-medium">
          <Link href="/features" className="text-md-primary font-bold">Features</Link>
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
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Powerful Features</h1>
          <p className="text-xl text-md-on-surface-variant max-w-2xl mx-auto leading-relaxed">Everything you need to run highly productive and engaging video meetings from anywhere in the world.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
              className="bg-md-surface-container p-8 rounded-[32px] hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-md-secondary-container text-md-on-secondary-container rounded-full flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">{feat.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-md-on-bg">{feat.title}</h3>
              <p className="text-md-on-surface-variant leading-relaxed text-lg">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
