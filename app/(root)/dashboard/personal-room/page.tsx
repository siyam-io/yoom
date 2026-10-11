"use client";

import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

import { useGetCallById } from "@/hooks/useGetCallById";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { Copy, Sparkles, Check } from "lucide-react";
import { useState } from "react";

const Table = ({
  title,
  description,
  isEditable = false,
  value,
  onChange,
  onCopy,
}: {
  title: string;
  description?: string;
  isEditable?: boolean;
  value?: string;
  onChange?: (val: string) => void;
  onCopy?: () => void;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (onCopy) {
      onCopy();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#13111c]/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-1 min-w-0 w-full">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 sm:w-36 shrink-0">
          {title}
        </span>
        {isEditable ? (
          <input 
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className="w-full bg-[#0c0a12] border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 rounded-xl px-4 py-2.5 outline-none text-white font-semibold text-sm transition-all"
          />
        ) : (
          <span className="break-all text-sm font-semibold text-white/95 select-all truncate">
            {description}
          </span>
        )}
      </div>

      {onCopy && (
        <button
          onClick={handleCopy}
          className="shrink-0 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-1.5 text-xs font-medium"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      )}
    </div>
  );
};

const PersonalRoom = () => {
  const router = useRouter();
  const { user } = useUser();
  const client = useStreamVideoClient();
  
  const [topic, setTopic] = useState(`${user?.username || 'User'}'s Meeting Room`);

  const meetingId = user?.id;

  const { call } = useGetCallById(meetingId!);

  const startRoom = async () => {
    if (!client || !user) return;

    const newCall = client.call("default", meetingId!);

    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
          custom: {
            description: topic
          }
        },
      });
    }

    router.push(`/meeting/${meetingId}?personal=true`);
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;
  const inviteText = `Join my Personal Meeting Room\nTopic: ${topic}\nLink: ${meetingLink}`;

  return (
    <section className="flex size-full flex-col gap-8 text-white">
      <div className="flex flex-col gap-1.5 pb-4 border-b border-white/5">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-widest mb-1">
          <Sparkles className="size-3.5" />
          <span>Instant Room</span>
        </div>
        <h1 className="text-3xl font-black lg:text-4xl text-white tracking-tight">
          Personal Meeting Room
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Your permanent, dedicated meeting link. Always active and ready for your team.
        </p>
      </div>
      
      <div className="flex w-full flex-col gap-3.5 xl:max-w-[850px]">
        <Table 
          title="Topic" 
          isEditable={true} 
          value={topic} 
          onChange={setTopic} 
        />
        <Table 
          title="Meeting ID" 
          description={meetingId!} 
          onCopy={() => {
            navigator.clipboard.writeText(meetingId || '');
            toast("Meeting ID Copied to Clipboard");
          }}
        />
        <Table 
          title="Invite Link" 
          description={meetingLink} 
          onCopy={() => {
            navigator.clipboard.writeText(meetingLink);
            toast("Invite Link Copied to Clipboard");
          }}
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button 
          className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-2xl px-8 py-3.5 shadow-lg shadow-violet-600/30 active:scale-95 transition-all duration-200 font-bold text-base cursor-pointer w-full sm:w-auto h-auto" 
          onClick={startRoom}
        >
          Start Meeting
        </Button>
        <Button
          className="bg-white/5 hover:bg-white/10 text-white rounded-2xl px-6 py-3.5 border border-white/10 active:scale-95 transition-all duration-200 font-semibold text-base cursor-pointer w-full sm:w-auto h-auto flex items-center justify-center gap-2"
          onClick={() => {
            navigator.clipboard.writeText(inviteText);
            toast("Full Invitation Copied to Clipboard");
          }}
        >
          <Copy className="size-4" />
          <span>Copy Full Invitation</span>
        </Button>
      </div>
    </section>
  );
};

export default PersonalRoom;
