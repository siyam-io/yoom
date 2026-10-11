"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import HomeNavbar from "@/app/components/HomeNavbar";

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
    <div className="min-h-screen bg-[#09080e] relative overflow-clip flex flex-col text-white">
      {/* Background Shapes */}
      <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Dynamic Navigation Bar */}
      <HomeNavbar />

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
