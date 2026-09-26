"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const OPENINGS = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time"
  },
  {
    title: "Customer Success Manager",
    department: "Support",
    location: "London, UK",
    type: "Full-time"
  },
  {
    title: "Developer Advocate",
    department: "DevRel",
    location: "Remote",
    type: "Full-time"
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-md-bg relative overflow-clip flex flex-col text-md-on-bg">
      {/* Background Shapes */}
      <div className="absolute top-[30%] -right-[10%] w-[60%] h-[60%] bg-md-tertiary-container/30 rounded-full blur-[150px] pointer-events-none mix-blend-multiply" />
      
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
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Join Our Team</h1>
          <p className="text-xl text-md-on-surface-variant max-w-2xl mx-auto">Help us build the future of remote collaboration. We're looking for passionate individuals to join our growing team.</p>
        </motion.div>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
          {OPENINGS.map((job, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 * (idx + 1), ease: [0.2, 0, 0, 1] }}
              className="bg-md-surface-container rounded-3xl p-6 md:p-8 border border-md-outline/10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <div className="mb-2 flex flex-wrap gap-2 text-sm font-bold">
                  <span className="text-md-primary bg-md-primary/10 px-3 py-1 rounded-full">{job.department}</span>
                  <span className="text-md-on-surface-variant bg-md-surface-container-high px-3 py-1 rounded-full">{job.type}</span>
                  <span className="text-md-on-surface-variant bg-md-surface-container-high px-3 py-1 rounded-full">{job.location}</span>
                </div>
                <h3 className="text-2xl font-bold text-md-on-bg mt-4">{job.title}</h3>
              </div>
              <Button className="bg-md-primary text-md-on-primary hover:bg-md-primary/90 rounded-full px-8 py-6 font-bold shadow-sm active:scale-95 shrink-0">
                Apply Now
              </Button>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
