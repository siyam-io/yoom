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
          <div className="bg-md-surface-container-low p-2 rounded-xl border border-md-outline/20 hover:bg-md-primary/10 transition-all duration-300 cursor-pointer sm:hidden">
            <Image
              src={"/icons/hamburger.svg"}
              width={24}
              height={24}
              alt="hamburger icon"
              className="brightness-0"
            />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-md-surface-container w-72 pt-16">
          <Link href={"/"} className="flex items-center gap-3 mb-10 group px-4">
            <div className="bg-md-surface-container-low p-2 rounded-xl border border-md-outline/20 group-hover:bg-md-primary/10 transition-colors duration-300">
              <Image
                src={"/icons/logo.svg"}
                width={28}
                height={28}
                alt="yoom logo"
                className="brightness-0"
              />
            </div>
            <p className="text-[26px] text-md-primary font-extrabold tracking-tight">
              YOOM
            </p>
          </Link>
          <div className="flex h-[calc(100vh-140px)] flex-col justify-between overflow-y-auto px-2">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-2">
                {sidebarLinks.map((link) => {
                  const isActive = pathName === link.route;
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className="relative group"
                      >
                        <div
                          className={cn(
                            "flex gap-4 items-center p-4 rounded-full w-full transition-colors duration-300 relative z-10",
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
                              width={20}
                              height={20}
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
