"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import HomeNavbar from "@/app/components/HomeNavbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#09080e] relative overflow-clip flex flex-col text-white">
      {/* Background Shapes */}
      <div className="absolute top-[30%] left-[10%] w-[30%] h-[30%] bg-violet-600/15 rounded-[100px] blur-[140px] pointer-events-none" />
      
      {/* Dynamic Navigation Bar */}
      <HomeNavbar />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-20 z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Get in touch</h1>
          <p className="text-xl text-md-on-surface-variant">Have a question or need support? We're here to help.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="bg-md-surface-container p-8 md:p-14 rounded-[32px] shadow-sm border border-md-outline/10"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-md-on-surface-variant ml-1">First Name</label>
                <Input placeholder="John" className="rounded-t-lg rounded-b-none border-0 border-b-2 border-md-outline bg-md-surface-container-low h-14 focus:ring-0 focus:border-b-md-primary text-md-on-bg placeholder:text-md-on-surface-variant/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-md-on-surface-variant ml-1">Last Name</label>
                <Input placeholder="Doe" className="rounded-t-lg rounded-b-none border-0 border-b-2 border-md-outline bg-md-surface-container-low h-14 focus:ring-0 focus:border-b-md-primary text-md-on-bg placeholder:text-md-on-surface-variant/50" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-md-on-surface-variant ml-1">Email Address</label>
              <Input placeholder="john@example.com" type="email" className="rounded-t-lg rounded-b-none border-0 border-b-2 border-md-outline bg-md-surface-container-low h-14 focus:ring-0 focus:border-b-md-primary text-md-on-bg placeholder:text-md-on-surface-variant/50" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-md-on-surface-variant ml-1">Message</label>
              <Textarea placeholder="How can we help you?" className="rounded-t-lg rounded-b-none border-0 border-b-2 border-md-outline bg-md-surface-container-low min-h-[150px] p-4 focus-visible:ring-0 focus-visible:border-md-primary text-md-on-bg placeholder:text-md-on-surface-variant/50 resize-none" />
            </div>
            <div className="pt-4">
              <Button type="button" className="w-full bg-md-primary text-md-on-primary hover:bg-md-primary/90 rounded-full py-7 h-auto text-lg font-bold shadow-md active:scale-95 transition-all duration-300">
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
