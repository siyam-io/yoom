import MeetingTypeList from "@/app/components/MeetingTypeList";
import React from "react";

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex size-full flex-col gap-10 text-md-on-bg">
      <div className="h-[300px] w-full rounded-[32px] bg-md-primary/10 relative overflow-hidden border border-md-outline/10 shadow-sm">
        {/* Background Decorative Shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-md-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-md-secondary/20 rounded-full blur-3xl" />
        
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11 relative z-10">
          <h2 className="bg-md-surface-container/60 backdrop-blur-md max-w-[270px] rounded-full px-6 py-2 text-center text-sm font-bold text-md-on-surface shadow-sm">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl tracking-tighter text-md-primary">
              {time}
            </h1>
            <p className="text-lg font-bold text-md-on-surface-variant lg:text-2xl">
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
