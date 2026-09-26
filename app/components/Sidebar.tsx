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
    <section className="hidden sm:flex sticky left-0 top-0 h-screen w-fit flex-col justify-between bg-md-surface-container-low p-6 pt-28 lg:w-[280px] border-r border-md-outline/10">
      <div className="flex flex-col gap-4">
        {sidebarLinks.map((link) => {
          const isActive =
            pathName === link.route || pathName.startsWith(`${link.route}/`);
          return (
            <Link
              href={link.route}
              key={link.label}
              className="relative group"
            >
              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex gap-4 items-center p-4 rounded-full justify-start transition-colors duration-300 relative z-10",
                  { 
                    "bg-md-secondary-container shadow-sm": isActive,
                    "hover:bg-md-on-surface-variant/10": !isActive
                  }
                )}
              >
                <div className={cn("p-1 rounded-full", { "bg-md-primary/10": isActive })}>
                  <Image 
                    src={link.imgURL}
                    alt={link.label}
                    width={24}
                    height={24}
                    className={cn("transition-all duration-300 brightness-0", {
                      "opacity-100": isActive,
                      "opacity-70 group-hover:opacity-100": !isActive
                    })}
                  />
                </div>
                <p className={cn("text-lg font-bold tracking-tight transition-all duration-300", {
                  "text-md-on-secondary-container": isActive,
                  "text-md-on-surface-variant group-hover:text-md-on-bg": !isActive
                })}>{link.label}</p>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
