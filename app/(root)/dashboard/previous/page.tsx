import CallList from "@/app/components/CallList";
import React from "react";

const Previous = () => {
  return (
    <section className="flex size-full flex-col gap-8 text-white">
      <div className="flex flex-col gap-1.5 pb-4 border-b border-white/5">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-widest mb-1">
          <span>History</span>
        </div>
        <h1 className="text-3xl font-black lg:text-4xl text-white tracking-tight">
          Previous Meetings
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Browse your complete log of concluded calls and past meeting sessions.
        </p>
      </div>
      <div>
        <CallList type="ended" />
      </div>
    </section>
  );
};

export default Previous;
