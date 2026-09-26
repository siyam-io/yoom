"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  className?: string;
  handleClick: () => void;
}

const HomeCard = ({
  img,
  title,
  description,
  className,
  handleClick,
}: HomeCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        `px-6 py-8 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[32px] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group border border-md-outline/10 text-md-on-surface`,
        className
      )}
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-md-on-surface-variant/0 group-hover:bg-md-on-surface-variant/5 transition-colors duration-300 pointer-events-none" />
      
      <div className="flex-center bg-md-surface-container-high size-14 rounded-2xl shadow-sm z-10 p-2">
        <Image src={img} alt={title} width={28} height={28} className="group-hover:scale-110 transition-transform duration-300 brightness-0 opacity-80" />
      </div>
      
      <div className="flex flex-col gap-2 z-10 mt-6">
        <h1 className="text-2xl font-bold tracking-tight text-md-on-surface">{title}</h1>
        <p className="text-sm font-medium text-md-on-surface-variant leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default HomeCard;

