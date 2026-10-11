"use client";

import MeetingTypeList from "@/app/components/MeetingTypeList";
import React, { useEffect, useState } from "react";
import { Sparkles, Calendar } from "lucide-react";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      setCurrentDate(
        new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now)
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex size-full flex-col gap-6 sm:gap-10 text-white">
      {/* Aurora Glassmorphism Hero Card */}
      <div className="h-[230px] sm:h-[300px] w-full rounded-3xl bg-gradient-to-br from-[#1c1630]/90 via-[#120f20]/95 to-[#0b0a12] relative overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Ambient Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-600/25 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="flex h-full flex-col justify-between p-6 sm:p-9 lg:p-12 relative z-10">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-xl border border-white/15 px-4 py-1.5 rounded-full shadow-lg">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white/90 tracking-wide">
                Live Workspace Ready
              </span>
            </div>
            
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles className="size-3.5 text-violet-400" />
              <span>HD Video & Audio</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 sm:gap-2.5">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-[0_2px_15px_rgba(255,255,255,0.12)]">
              {mounted ? currentTime : "--:--"}
            </h1>
            <div className="flex items-center gap-2 text-slate-300 font-medium text-xs sm:text-base lg:text-lg">
              <Calendar className="size-4 text-violet-400 shrink-0" />
              <span>{mounted ? currentDate : "Loading..."}</span>
            </div>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
