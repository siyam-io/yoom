import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-[#0c0a12]/80 backdrop-blur-2xl px-5 sm:px-8 py-3.5 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      <Link href="/dashboard" className="flex items-center gap-3 group">
        <div className="bg-gradient-to-br from-violet-600/20 to-indigo-600/20 p-2 rounded-xl border border-white/10 group-hover:border-violet-500/40 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
          <Image
            src="/icons/logo.svg"
            width={28}
            height={28}
            alt="yoom logo"
            className="size-7 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <p className="text-2xl font-black bg-gradient-to-r from-white via-slate-100 to-violet-300 bg-clip-text text-transparent max-sm:hidden tracking-tight">
          YOOM
        </p>
      </Link>
      <div className="flex-between gap-4 sm:gap-6">
        <SignedIn>
          <div className="bg-white/5 p-1 rounded-full border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-all duration-300 shadow-sm">
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
