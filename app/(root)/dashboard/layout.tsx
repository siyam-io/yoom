import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "YOOM",
  description: "A workspace for your team, powered by Stream Chat and Clerk.",
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative min-h-screen bg-[#09080e] text-white selection:bg-violet-600/30 selection:text-white">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-8 lg:px-12 pb-10 pt-24 sm:pt-28 max-md:pb-20 max-w-[1600px] mx-auto w-full">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
