"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import HomeNavbar from "@/app/components/HomeNavbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#09080e] relative overflow-clip flex flex-col text-white">
      {/* Background Shapes */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[30%] left-[-15%] w-[40%] h-[40%] bg-indigo-600/10 rounded-[100px] blur-[120px] pointer-events-none" />

      {/* Dynamic Navigation Bar */}
      <HomeNavbar />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-20 z-10 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }} className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-md-secondary-container text-md-on-secondary-container text-sm font-medium mb-6">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Building a <span className="text-md-primary">closer</span> world.
          </h1>
          <p className="text-xl text-md-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            We believe that distance shouldn't mean disconnection. YOOM is built to bring human warmth to digital conversations.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="w-full bg-md-surface-container rounded-[32px] p-8 md:p-14 shadow-sm hover:shadow-md transition-shadow duration-300 group"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-md-on-bg">The Mission</h2>
              <p className="text-md-on-surface-variant text-lg leading-relaxed mb-6">
                YOOM was born out of frustration with clunky, robotic video conferencing tools. In a world increasingly moving to remote work, we wanted to build a platform that felt as natural, vibrant, and personal as chatting over a coffee.
              </p>
              <p className="text-md-on-surface-variant text-lg leading-relaxed">
                By blending high-performance streaming technology with a warm, Material You inspired design system, we've created a space where people actually <i>want</i> to meet.
              </p>
            </div>
            <div className="bg-md-surface-container-low rounded-[24px] p-8 border border-md-outline/10 shadow-sm overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)]">
               <h3 className="text-xl font-bold mb-4 text-md-primary">Our Stack</h3>
               <ul className="space-y-4">
                  {[
                    { title: 'Next.js 15', desc: 'Blazing fast App Router' },
                    { title: 'Stream SDK', desc: 'Global edge video network' },
                    { title: 'Clerk Auth', desc: 'Secure, seamless identity' },
                    { title: 'Material You', desc: 'Dynamic, organic design' }
                  ].map((item, i) => (
                    <li key={i} className="flex flex-col">
                      <span className="font-bold text-md-on-bg">{item.title}</span>
                      <span className="text-md-on-surface-variant text-sm">{item.desc}</span>
                    </li>
                  ))}
               </ul>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-md-outline/20 text-center">
            <h2 className="text-2xl font-bold mb-8">Ready to experience better meetings?</h2>
            <Link href="/sign-up">
              <Button className="bg-md-primary text-md-on-primary hover:bg-md-primary/90 active:bg-md-primary/80 rounded-full px-10 py-6 h-auto text-lg font-medium shadow-md hover:shadow-lg active:scale-95 transition-all duration-300">
                Join Us Today
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-md-outline/20 bg-md-surface-container mt-auto py-8 text-center">
        <p className="text-md-on-surface-variant text-sm">© 2026 YOOM. All rights reserved.</p>
      </footer>
    </div>
  );
}
