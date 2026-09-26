import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-md-surface-container/90 backdrop-blur-md px-6 py-4 lg:px-10 border-b border-md-outline/10 shadow-sm">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="bg-md-surface-container-low p-2 rounded-xl border border-md-outline/20 group-hover:bg-md-primary/10 transition-colors duration-300">
          <Image
            src="/icons/logo.svg"
            width={28}
            height={28}
            alt="yoom logo"
            className="max-sm:size-8 brightness-0"
          />
        </div>
        <p className="text-[26px] font-extrabold text-md-primary max-sm:hidden tracking-tight">
          YOOM
        </p>
      </Link>
      <div className="flex-between gap-6">
        <SignedIn>
          <div className="bg-md-surface-container-low p-1 rounded-full border border-md-outline/20 hover:border-md-primary/50 transition-all duration-300 shadow-sm">
             <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
