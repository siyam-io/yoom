'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useUser, UserButton } from '@clerk/nextjs';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const HomeNavbar = () => {
  const pathname = usePathname();
  const { isSignedIn, isLoaded, user } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6',
        isScrolled ? 'py-3' : 'py-5'
      )}
    >
      <div
        className={cn(
          'w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 rounded-2xl px-4 sm:px-6 py-2.5',
          isScrolled
            ? 'bg-[#0f0d18]/90 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        )}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="size-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-purple-500 p-2 flex items-center justify-center shadow-lg shadow-violet-600/30 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/icons/logo.svg"
              width={22}
              height={22}
              alt="YOOM logo"
              className="brightness-200"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-white group-hover:text-violet-300 transition-colors">
              YOOM
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300">
              <Sparkles className="size-2.5" /> 2.0
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/5 rounded-full p-1.5 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200',
                  isActive
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Dynamic Auth Actions */}
        <div className="hidden md:flex items-center gap-3">
          {isLoaded && (
            <>
              {isSignedIn ? (
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full p-1.5 pl-3.5 backdrop-blur-md">
                  <span className="text-xs font-medium text-slate-300">
                    Hi, <span className="text-white font-semibold">{user?.firstName || 'User'}</span>
                  </span>
                  <Link href="/dashboard">
                    <Button
                      size="sm"
                      className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs px-4 py-2 cursor-pointer shadow-md shadow-violet-600/30 flex items-center gap-1.5 active:scale-95 transition-all"
                    >
                      <LayoutDashboard className="size-3.5" />
                      Dashboard
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </Link>
                  <div className="shrink-0 size-8 flex items-center justify-center">
                    <UserButton
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          userButtonAvatarBox: 'size-8 border border-white/20 shadow-md',
                        },
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link href="/sign-in">
                    <Button
                      variant="ghost"
                      className="text-slate-300 hover:text-white hover:bg-white/10 rounded-full text-sm font-semibold px-4 cursor-pointer transition-colors"
                    >
                      Log In
                    </Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button
                      className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm px-5 py-2.5 cursor-pointer shadow-lg shadow-violet-600/30 active:scale-95 transition-all"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          {isSignedIn && (
            <div className="shrink-0 size-8 flex items-center justify-center mr-1">
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="size-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-colors active:scale-95"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-auto w-full max-w-7xl bg-[#12101c]/98 backdrop-blur-3xl border border-white/15 rounded-3xl p-5 shadow-2xl flex flex-col gap-3 text-white"
          >
            <div className="flex flex-col gap-1 pb-3 border-b border-white/10">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      'px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between',
                      isActive
                        ? 'bg-violet-600 text-white font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    )}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="size-1.5 rounded-full bg-white" />}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Auth Actions */}
            <div className="flex flex-col gap-2 pt-1">
              {isSignedIn ? (
                <Link href="/dashboard" className="w-full">
                  <Button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm py-3 shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2">
                    <LayoutDashboard className="size-4" />
                    Go to Dashboard
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              ) : (
                <div className="grid grid-cols-2 gap-2 w-full">
                  <Link href="/sign-in" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 font-semibold text-sm py-2.5"
                    >
                      Log In
                    </Button>
                  </Link>
                  <Link href="/sign-up" className="w-full">
                    <Button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm py-2.5 shadow-md shadow-violet-600/30">
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HomeNavbar;
