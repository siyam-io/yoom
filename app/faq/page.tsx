"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import HomeNavbar from "@/app/components/HomeNavbar";

export default function FAQPage() {
  const faqs = [
    { q: "Is YOOM free to use?", a: "Yes! We offer a completely free Basic plan that allows up to 10 participants for 40 minutes per meeting." },
    { q: "Do participants need an account to join?", a: "No, participants can join your meeting simply by clicking the invitation link. Only the host needs an account." },
    { q: "How secure are my video calls?", a: "We use enterprise-grade encryption powered by the Stream SDK to ensure all your calls are private and secure." },
    { q: "Can I record my meetings?", a: "Yes, meeting recording is available on our Pro and Enterprise plans. Recordings are securely saved in the cloud." },
    { q: "Does YOOM work on mobile?", a: "Absolutely. YOOM is fully responsive and works beautifully on any mobile browser without needing an app download." },
  ];

  return (
    <div className="min-h-screen bg-[#09080e] relative overflow-clip flex flex-col text-white">
      {/* Background Shapes */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Dynamic Navigation Bar */}
      <HomeNavbar />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-20 z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-md-on-surface-variant">Find answers to common questions about YOOM.</p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
              className="bg-md-surface-container p-8 rounded-[24px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-transparent hover:border-md-outline/10"
            >
              <h3 className="text-2xl font-bold mb-3 text-md-on-bg group-hover:text-md-primary transition-colors">{faq.q}</h3>
              <p className="text-md-on-surface-variant leading-relaxed text-lg">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
