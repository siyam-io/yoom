"use client";
import { sidebarLinks } from "@/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <section className="hidden sm:flex sticky left-0 top-0 h-screen w-fit flex-col justify-between bg-[#0c0a12]/85 backdrop-blur-2xl p-5 pt-28 lg:w-[270px] border-r border-white/10 select-none">
      <div className="flex flex-col gap-2.5">
        {sidebarLinks.map((link) => {
          const isActive =
            pathName === link.route || (link.route !== '/dashboard' && pathName.startsWith(`${link.route}/`));
          return (
            <Link
              href={link.route}
              key={link.label}
              className="relative group block"
            >
              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex gap-3.5 items-center px-4 py-3 rounded-2xl justify-start transition-all duration-200 relative border",
                  isActive
                    ? "bg-gradient-to-r from-violet-600/20 to-indigo-600/10 border-violet-500/30 shadow-[0_4px_20px_rgba(139,92,246,0.15)]"
                    : "border-transparent text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/5"
                )}
              >
                <div
                  className={cn(
                    "p-2 rounded-xl transition-all duration-200 flex items-center justify-center",
                    isActive
                      ? "bg-violet-600/25 text-violet-300 shadow-[0_0_12px_rgba(139,92,246,0.35)]"
                      : "bg-white/5 text-slate-400 group-hover:bg-white/10 group-hover:text-white"
                  )}
                >
                  <Image 
                    src={link.imgURL}
                    alt={link.label}
                    width={20}
                    height={20}
                    className={cn(
                      "transition-all duration-200 size-5",
                      isActive ? "opacity-100 scale-105" : "opacity-70 group-hover:opacity-100"
                    )}
                  />
                </div>
                <p
                  className={cn(
                    "text-sm font-semibold tracking-tight transition-colors duration-200",
                    isActive ? "text-white font-bold" : "text-slate-400 group-hover:text-white"
                  )}
                >
                  {link.label}
                </p>
                {isActive && (
                  <div className="ml-auto w-1.5 h-4 rounded-full bg-violet-400 shadow-[0_0_8px_#a78bfa]" />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
