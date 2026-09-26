"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-md-bg relative overflow-clip flex flex-col text-md-on-bg">
      {/* Background Shapes */}
      <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] bg-md-secondary-container/30 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      
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
          <h1 className="text-5xl font-extrabold mb-6">Privacy Policy</h1>
          <p className="text-xl text-md-on-surface-variant">Last updated: September 2026</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="bg-md-surface-container p-8 md:p-14 rounded-[32px] shadow-sm border border-md-outline/10 space-y-10"
        >
          <section>
            <h2 className="text-3xl font-bold mb-4 text-md-on-bg">1. Information We Collect</h2>
            <p className="text-md-on-surface-variant leading-relaxed text-lg">We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us. This includes your name, email address, and any other information you choose to provide.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-md-on-bg">2. How We Use Information</h2>
            <p className="text-md-on-surface-variant leading-relaxed text-lg">We use the information we collect to provide, maintain, and improve our services, to process transactions, to send you technical notices and support messages, and to communicate with you about products, services, and events.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-md-on-bg">3. Data Security</h2>
            <p className="text-md-on-surface-variant leading-relaxed text-lg">YOOM takes reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. Your video and audio streams are encrypted end-to-end where supported.</p>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold mb-4 text-md-on-bg">4. Sharing of Information</h2>
            <p className="text-md-on-surface-variant leading-relaxed text-lg">We do not share your personal information with third parties except as described in this privacy policy, such as with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-md-on-bg">5. Contact Us</h2>
            <p className="text-md-on-surface-variant leading-relaxed text-lg">If you have any questions about this Privacy Policy, please contact us at privacy@yoom.com.</p>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
