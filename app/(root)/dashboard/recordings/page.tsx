import CallList from "@/app/components/CallList";
import React from "react";

const Recordings = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-md-on-bg">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold lg:text-4xl text-md-on-bg tracking-tight">Meeting Recordings</h1>
        <p className="text-md-on-surface-variant text-base">Watch and share recordings from your past meetings.</p>
      </div>
      <div className="mt-4">
        <CallList type="recordings" />
      </div>
    </section>
  );
};

export default Recordings;
