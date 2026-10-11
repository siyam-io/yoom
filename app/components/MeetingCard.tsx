"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { avatarImages } from "@/constant";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Calendar, Copy } from "lucide-react";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  return (
    <section className="flex min-h-[250px] w-full flex-col justify-between rounded-3xl bg-[#13111c]/90 backdrop-blur-xl p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.35)] border border-white/10 hover:border-white/20 transition-all duration-300 text-white relative overflow-hidden group">
      {/* Top subtle rim highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      <article className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="size-12 rounded-2xl bg-violet-600/15 border border-violet-500/30 flex items-center justify-center p-2.5 shadow-md">
            <Image src={icon} alt="meeting icon" width={24} height={24} className="size-6 object-contain" />
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            <Calendar className="size-3.5 text-violet-400 shrink-0" />
            <span className="truncate max-w-[220px]">{date}</span>
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-2">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight line-clamp-2">
            {title}
          </h2>
        </div>
      </article>

      <article className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-white/5">
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="attendees"
              width={34}
              height={34}
              className={cn("rounded-full border-2 border-[#13111c] size-[34px] object-cover", { absolute: index > 0 })}
              style={{ top: 0, left: index * 22 }}
            />
          ))}
          <div className="flex items-center justify-center absolute left-[110px] size-[34px] rounded-full border-2 border-[#13111c] bg-[#221d30] text-slate-200 text-xs font-bold shadow-sm">
            +5
          </div>
        </div>

        {!isPreviousMeeting && (
          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
            <Button
              onClick={handleClick}
              className="flex-1 sm:flex-none rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-6 py-2.5 font-bold text-sm shadow-md shadow-violet-600/30 active:scale-95 transition-all duration-200 cursor-pointer h-auto flex items-center justify-center gap-2"
            >
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={16} height={16} className="size-4 invert" />
              )}
              <span>{buttonText}</span>
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast("Meeting Link Copied to Clipboard");
              }}
              className="rounded-xl bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 border border-white/10 px-4 py-2.5 font-semibold text-sm active:scale-95 transition-all duration-200 cursor-pointer h-auto flex items-center justify-center gap-1.5"
            >
              <Copy className="size-4" />
              <span className="hidden sm:inline">Copy Link</span>
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
