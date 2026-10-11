'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SignIn } from '@clerk/nextjs';
import { ArrowLeft, Sparkles, Video, ShieldCheck, Cloud, Zap, Star } from 'lucide-react';

const SignInPage = () => {
  return (
    <main className="min-h-screen w-full bg-[#0a0812] text-white flex flex-col lg:flex-row relative overflow-x-hidden selection:bg-violet-600/30 selection:text-violet-200">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-indigo-600/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Left Column: Brand & Feature Showcase (Desktop) */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 xl:p-16 relative z-10 border-r border-white/5 bg-[#0f0d18]/40 backdrop-blur-xl">
        {/* Top Logo */}
        <Link href="/" className="flex items-center gap-3 group w-fit">
          <div className="size-11 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-purple-500 p-2.5 flex items-center justify-center shadow-lg shadow-violet-600/30 group-hover:scale-105 transition-transform">
            <Image
              src="/icons/logo.svg"
              width={24}
              height={24}
              alt="YOOM logo"
              className="brightness-200"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-white group-hover:text-violet-300 transition-colors">
              YOOM
            </span>
            <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300">
              2.0
            </span>
          </div>
        </Link>

        {/* Middle Content */}
        <div className="flex flex-col gap-8 max-w-lg my-auto py-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold w-fit">
            <Sparkles className="size-3.5" />
            <span>Welcome Back</span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              Log in to your <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">virtual workspace.</span>
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Experience seamless video conferences, crystal clear audio, and team recordings with zero setup required.
            </p>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {[
              { icon: Video, title: 'Ultra-HD Video', desc: '4K clarity & zero latency' },
              { icon: ShieldCheck, title: 'Encrypted Calls', desc: 'Enterprise security' },
              { icon: Cloud, title: 'Cloud Recordings', desc: 'Instant replay & sharing' },
              { icon: Zap, title: 'Instant Access', desc: 'Browser-based, no app' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-violet-500/20 transition-all">
                  <div className="size-8 rounded-xl bg-violet-600/15 border border-violet-500/25 flex items-center justify-center text-violet-400 shrink-0">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{item.title}</h4>
                    <p className="text-[11px] text-slate-400">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Proof */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
            <div className="flex -space-x-2">
              {['#8b5cf6', '#6366f1', '#ec4899', '#3b82f6'].map((color, i) => (
                <div
                  key={i}
                  style={{ backgroundColor: color }}
                  className="size-8 rounded-full border-2 border-[#0f0d18] flex items-center justify-center text-[10px] font-bold text-white"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3 fill-amber-400" />
                ))}
                <span className="text-xs font-bold text-white ml-1">4.9/5</span>
              </div>
              <span className="text-[11px] text-slate-400">Trusted by over 10,000+ teams worldwide</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-xs text-slate-500">
          © 2026 YOOM Inc. All rights reserved.
        </div>
      </div>

      {/* Right Column: Clerk Sign-In Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-10 relative z-10">
        {/* Mobile / Universal Top Bar */}
        <div className="w-full max-w-md flex items-center justify-between mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl border border-white/10"
          >
            <ArrowLeft className="size-3.5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2 lg:hidden">
            <Image src="/icons/logo.svg" width={20} height={20} alt="YOOM logo" className="brightness-200" />
            <span className="font-bold text-white text-sm">YOOM</span>
          </div>
        </div>

        {/* Clerk Sign-In Box */}
        <div className="w-full max-w-md flex justify-center">
          <SignIn />
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
