"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const BLOG_POSTS = [
  {
    title: "Introducing YOOM 2.0: The Future of Meetings",
    excerpt: "We're thrilled to announce the biggest update to YOOM yet, featuring HD audio, AI-powered summaries, and a complete redesign using Material You.",
    date: "October 24, 2026",
    category: "Product Updates"
  },
  {
    title: "5 Tips for More Engaging Virtual Team Meetings",
    excerpt: "Discover proven strategies to keep your team focused, interactive, and productive during virtual sessions.",
    date: "October 18, 2026",
    category: "Best Practices"
  },
  {
    title: "How We Scaled YOOM to Support 10k Concurrent Users",
    excerpt: "A deep dive into our engineering journey, utilizing Stream SDK and Next.js to build a resilient video conferencing platform.",
    date: "October 10, 2026",
    category: "Engineering"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-md-bg relative overflow-clip flex flex-col text-md-on-bg">
      {/* Background Shapes */}
      <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] bg-md-secondary-container/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      
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
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">YOOM Blog</h1>
          <p className="text-xl text-md-on-surface-variant max-w-2xl mx-auto">Latest news, product updates, and articles on virtual collaboration.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 * (idx + 1), ease: [0.2, 0, 0, 1] }}
              className="bg-md-surface-container rounded-[32px] p-8 border border-md-outline/10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group cursor-pointer"
            >
              <div className="mb-6 flex justify-between items-center text-sm font-bold">
                <span className="text-md-primary bg-md-primary/10 px-3 py-1 rounded-full">{post.category}</span>
                <span className="text-md-on-surface-variant">{post.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-md-on-bg group-hover:text-md-primary transition-colors">{post.title}</h2>
              <p className="text-md-on-surface-variant mb-8 flex-1 leading-relaxed">{post.excerpt}</p>
              <Button className="w-full bg-md-surface-container-high text-md-primary hover:bg-md-primary/10 rounded-full py-6 font-bold shadow-none">
                Read More
              </Button>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}
