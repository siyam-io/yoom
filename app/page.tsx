"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-md-bg relative overflow-clip flex flex-col text-md-on-bg">
      {/* Background Glows (Material You Organic Shapes) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-md-secondary-container/60 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-[20%] right-[-15%] w-[60%] h-[60%] bg-md-surface-container-low/70 rounded-[120px] blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-md-tertiary/10 rounded-[100px] blur-[80px] pointer-events-none mix-blend-multiply" />

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-10 relative">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-md-surface-container p-2 rounded-xl border border-md-outline/20 group-hover:bg-md-primary/10 transition-colors duration-300">
            <Image
              src="/icons/logo.svg"
              width={28}
              height={28}
              alt="yoom logo"
              className="brightness-0"
            />
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
          <Link href="/sign-in">
            <Button variant="ghost" className="hidden md:inline-flex text-md-primary hover:bg-md-primary/10 rounded-full font-medium">Log In</Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-md-primary text-md-on-primary hover:bg-md-primary/90 active:bg-md-primary/80 rounded-full px-8 py-5 h-auto text-base font-medium shadow-sm hover:shadow-md active:scale-95 transition-all duration-300">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 w-full flex flex-col items-center relative z-10">
        <section className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center pt-24 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-md-surface-container border border-md-outline/10 mb-10 shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-md-primary animate-pulse" />
            <span className="text-sm font-bold text-md-on-surface-variant">YOOM 2.0 is now live</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="text-5xl md:text-7xl lg:text-[84px] font-extrabold tracking-tighter max-w-5xl leading-[1.1] mb-8 text-md-on-bg"
          >
            Video meetings that feel <span className="text-md-primary">magical.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.2, 0, 0, 1] }}
            className="text-xl md:text-2xl text-md-on-surface-variant max-w-3xl mb-12 leading-relaxed"
          >
            Crystal clear audio, zero latency video, and a stunning interface. YOOM brings your team together like never before, natively built on Material You.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.2, 0, 0, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href="/dashboard">
              <Button className="bg-md-primary text-md-on-primary hover:bg-md-primary/90 active:bg-md-primary/80 rounded-full px-10 py-7 h-auto text-lg font-bold shadow-md hover:shadow-lg active:scale-95 transition-all duration-300">
                Launch Dashboard
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="outline" className="rounded-full px-10 py-7 h-auto text-lg font-bold bg-transparent border-md-outline/30 text-md-on-surface-variant hover:bg-md-on-surface-variant/5 active:scale-95 transition-all duration-300">
                Discover Features
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Features Preview */}
        <section className="w-full bg-md-surface-container py-28 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-md-outline/20 to-transparent" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Everything you need to collaborate</h2>
              <p className="text-md-on-surface-variant text-xl max-w-2xl mx-auto leading-relaxed">Experience the next generation of video conferencing with tools designed for modern teams.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "HD Video & Audio", desc: "Experience crystal clear 4k video and spatial audio powered by Stream SDK.", icon: "🎥" },
                { title: "Instant Meetings", desc: "Start a meeting with a single click and share the link instantly.", icon: "⚡" },
                { title: "Secure & Private", desc: "Enterprise-grade encryption keeps your conversations safe and private.", icon: "🔒" }
              ].map((feat, i) => (
                <div key={i} className="bg-md-bg p-10 rounded-[32px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-md-secondary-container rounded-2xl mb-8 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {feat.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-md-on-bg">{feat.title}</h3>
                  <p className="text-md-on-surface-variant leading-relaxed text-lg">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof / Testimonials */}
        <section className="w-full py-28 bg-md-bg relative">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-20">Loved by teams worldwide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-md-surface-container-low p-8 rounded-[24px] border border-md-outline/10 text-left hover:shadow-md transition-shadow duration-300">
                  <div className="flex text-md-primary mb-6 text-xl">{"★".repeat(5)}</div>
                  <p className="text-md-on-bg text-lg leading-relaxed mb-8">"YOOM has completely transformed how our remote team communicates. The UI is absolutely gorgeous and the latency is non-existent."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-md-secondary-container rounded-full flex items-center justify-center font-bold text-md-on-secondary-container">
                      SJ
                    </div>
                    <div>
                      <p className="font-bold text-md-on-bg">Sarah Jenkins</p>
                      <p className="text-sm text-md-on-surface-variant">Product Manager</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-md-outline/20 bg-md-surface-container pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <h4 className="font-bold text-lg mb-6 text-md-on-bg">Product</h4>
            <ul className="space-y-4 text-md-on-surface-variant font-medium">
              <li><Link href="/features" className="hover:text-md-primary transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-md-primary transition-colors">Pricing</Link></li>
              <li><Link href="/dashboard" className="hover:text-md-primary transition-colors">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-md-on-bg">Company</h4>
            <ul className="space-y-4 text-md-on-surface-variant font-medium">
              <li><Link href="/about" className="hover:text-md-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-md-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-md-on-bg">Resources</h4>
            <ul className="space-y-4 text-md-on-surface-variant font-medium">
              <li><Link href="/faq" className="hover:text-md-primary transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-md-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/privacy" className="hover:text-md-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-md-on-bg">Connect</h4>
            <ul className="space-y-4 text-md-on-surface-variant font-medium">
              <li><a href="#" className="hover:text-md-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-md-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-md-primary transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-md-outline/10 text-sm text-md-on-surface-variant font-medium">
          <p>© 2026 YOOM Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-md-primary transition-colors">Privacy</Link>
            <Link href="/privacy" className="hover:text-md-primary transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
