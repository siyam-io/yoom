"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  className?: string;
  iconBgColor?: string;
  handleClick: () => void;
}

const HomeCard = ({
  img,
  title,
  description,
  className,
  iconBgColor = "bg-white/10",
  handleClick,
}: HomeCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "p-6 sm:p-7 flex flex-col justify-between w-full min-h-[240px] rounded-3xl cursor-pointer transition-all duration-300 relative overflow-hidden group border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:border-white/20 select-none",
        className
      )}
      onClick={handleClick}
    >
      {/* Top subtle highlight reflection */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      {/* Top row: Icon badge + Hover arrow */}
      <div className="flex items-center justify-between z-10">
        <div className={cn("size-14 rounded-2xl flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-110 shadow-lg border border-white/15", iconBgColor)}>
          <Image
            src={img}
            alt={title}
            width={28}
            height={28}
            className="size-7 object-contain drop-shadow"
          />
        </div>

        <div className="size-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
          <ArrowUpRight className="size-4 text-white" />
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-col gap-1.5 z-10 mt-6">
        <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-white transition-colors">
          {title}
        </h2>
        <p className="text-xs sm:text-sm font-medium text-slate-300/80 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default HomeCard;

