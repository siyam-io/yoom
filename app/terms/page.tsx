"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-md-bg relative overflow-clip flex flex-col text-md-on-bg">
      {/* Background Shapes */}
      <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-md-primary-container/30 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      
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
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-20 z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Terms of Service</h1>
          <p className="text-xl text-md-on-surface-variant">Last updated: October 2026</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="bg-md-surface-container p-8 md:p-14 rounded-[32px] shadow-sm border border-md-outline/10 space-y-10"
        >
          <section>
            <h2 className="text-3xl font-bold mb-4 text-md-on-bg">1. Acceptance of Terms</h2>
            <p className="text-md-on-surface-variant leading-relaxed text-lg">By accessing and using YOOM, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-md-on-bg">2. Description of Service</h2>
            <p className="text-md-on-surface-variant leading-relaxed text-lg">YOOM provides users with access to a rich collection of resources for video conferencing and online collaboration. You understand and agree that the service is provided "AS-IS" and that YOOM assumes no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-md-on-bg">3. User Conduct</h2>
            <p className="text-md-on-surface-variant leading-relaxed text-lg">You understand that all information, data, text, software, music, sound, photographs, graphics, video, messages or other materials, whether publicly posted or privately transmitted, are the sole responsibility of the person from which such content originated. This means that you, and not YOOM, are entirely responsible for all content that you upload, post, email, transmit or otherwise make available via the Service.</p>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold mb-4 text-md-on-bg">4. Modifications to Service</h2>
            <p className="text-md-on-surface-variant leading-relaxed text-lg">YOOM reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that YOOM shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.</p>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
