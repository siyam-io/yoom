"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Calendar, Copy, User } from "lucide-react";

export interface Attendee {
  id: string;
  name?: string;
  image?: string;
}

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
  isRecording?: boolean;
  isExpired?: boolean;
  members?: Attendee[];
  hostName?: string;
  hostImage?: string;
}

const AVATAR_GRADIENTS = [
  "from-violet-600 to-indigo-600",
  "from-sky-500 to-blue-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
  "from-fuchsia-600 to-purple-600",
];

const getInitials = (name?: string) => {
  if (!name) return "U";
  const parts = name.trim().split(" ");
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  return name.substring(0, 2).toUpperCase();
};

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
  isRecording,
  isExpired,
  members = [],
  hostName,
  hostImage,
}: MeetingCardProps) => {
  // Ensure we have at least the host as attendee if no extra members
  const displayAttendees: Attendee[] =
    members.length > 0
      ? members
      : [{ id: "host", name: hostName || "Host", image: hostImage }];

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    if (isExpired) {
      toast.warning("Link Copied (Note: Recording has passed Stream's 14-day retention limit)");
    } else {
      toast.success(isRecording ? "Recording Link Copied!" : "Meeting Link Copied to Clipboard!");
    }
  };

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
        {/* Dynamic Left Meta: Recording Status OR Real Member Avatars */}
        {isRecording ? (
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {isExpired ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/15 text-rose-300 border border-rose-500/30">
                <span className="size-1.5 rounded-full bg-rose-400" />
                Expired on Cloud (14d limit)
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available
              </span>
            )}
            <span className="text-xs font-medium text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full hidden sm:inline-block">
              MP4 • 720p
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex items-center">
              {displayAttendees.slice(0, 4).map((att, index) => {
                const gradient = AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];
                return (
                  <div
                    key={att.id || index}
                    className="relative group/avatar"
                    style={{ marginLeft: index > 0 ? -10 : 0, zIndex: 10 - index }}
                    title={att.name || "Participant"}
                  >
                    {att.image ? (
                      <img
                        src={att.image}
                        alt={att.name || "Member"}
                        className="size-8 rounded-full border-2 border-[#13111c] object-cover bg-violet-900/30"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                    ) : null}
                    <div
                      style={{ display: att.image ? "none" : "flex" }}
                      className={cn(
                        "size-8 rounded-full border-2 border-[#13111c] items-center justify-center text-[10px] font-bold text-white bg-gradient-to-br shadow-sm",
                        gradient
                      )}
                    >
                      {getInitials(att.name)}
                    </div>
                  </div>
                );
              })}
              {displayAttendees.length > 4 && (
                <div
                  className="flex items-center justify-center size-8 rounded-full border-2 border-[#13111c] bg-[#221d30] text-slate-200 text-xs font-bold shadow-sm"
                  style={{ marginLeft: -10, zIndex: 5 }}
                >
                  +{displayAttendees.length - 4}
                </div>
              )}
            </div>

            {hostName && (
              <span className="text-xs font-medium text-slate-400 flex items-center gap-1 truncate max-w-[140px] sm:max-w-[180px]">
                <User className="size-3 text-slate-500 shrink-0" />
                <span className="truncate">{hostName}</span>
              </span>
            )}
          </div>
        )}

        {/* Action Buttons */}
        {!isPreviousMeeting && (
          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
            <Button
              onClick={handleClick}
              className={cn(
                "flex-1 sm:flex-none rounded-xl text-white px-6 py-2.5 font-bold text-sm shadow-md active:scale-95 transition-all duration-200 cursor-pointer h-auto flex items-center justify-center gap-2",
                isExpired
                  ? "bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200"
                  : "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-violet-600/30"
              )}
            >
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={16} height={16} className="size-4 invert" />
              )}
              <span>{isExpired ? "View Details" : buttonText}</span>
            </Button>
            <Button
              onClick={handleCopy}
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
