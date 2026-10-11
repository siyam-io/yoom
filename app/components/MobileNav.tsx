"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[254px]">
      <Sheet>
        <SheetTrigger asChild>
          <div className="bg-white/5 p-2 rounded-xl border border-white/10 hover:border-violet-500/40 hover:bg-white/10 transition-all duration-300 cursor-pointer sm:hidden">
            <Image
              src={"/icons/hamburger.svg"}
              width={22}
              height={22}
              alt="hamburger icon"
              className="size-5 opacity-90"
            />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="border-r border-white/10 bg-[#0c0a12]/95 backdrop-blur-2xl w-72 pt-16 text-white">
          <Link href={"/dashboard"} className="flex items-center gap-3 mb-8 px-2 group">
            <div className="bg-gradient-to-br from-violet-600/20 to-indigo-600/20 p-2 rounded-xl border border-white/10 group-hover:border-violet-500/40 transition-colors duration-300">
              <Image
                src={"/icons/logo.svg"}
                width={26}
                height={26}
                alt="yoom logo"
                className="size-6"
              />
            </div>
            <p className="text-2xl font-black bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent tracking-tight">
              YOOM
            </p>
          </Link>
          <div className="flex h-[calc(100vh-140px)] flex-col justify-between overflow-y-auto px-1">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-2">
                {sidebarLinks.map((link) => {
                  const isActive = pathName === link.route || (link.route !== '/dashboard' && pathName.startsWith(`${link.route}/`));
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className="relative group block"
                      >
                        <div
                          className={cn(
                            "flex gap-3.5 items-center px-4 py-3 rounded-2xl w-full transition-all duration-200 border",
                            isActive
                              ? "bg-gradient-to-r from-violet-600/20 to-indigo-600/10 border-violet-500/30 text-white font-bold shadow-[0_4px_16px_rgba(139,92,246,0.15)]"
                              : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"
                          )}
                        >
                          <div
                            className={cn(
                              "p-2 rounded-xl transition-all duration-200 flex items-center justify-center",
                              isActive
                                ? "bg-violet-600/25 text-violet-300"
                                : "bg-white/5 text-slate-400 group-hover:bg-white/10"
                            )}
                          >
                            <Image 
                              src={link.imgURL}
                              alt={link.label}
                              width={20}
                              height={20}
                              className={cn(
                                "size-5 transition-all duration-200",
                                isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"
                              )}
                            />
                          </div>
                          <p className="text-sm font-semibold tracking-tight">{link.label}</p>
                          {isActive && (
                            <div className="ml-auto w-1.5 h-3.5 rounded-full bg-violet-400 shadow-[0_0_8px_#a78bfa]" />
                          )}
                        </div>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
