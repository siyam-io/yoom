"use client";

import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

import { useGetCallById } from "@/hooks/useGetCallById";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { useState } from "react";

const Table = ({
  title,
  description,
  isEditable = false,
  value,
  onChange,
}: {
  title: string;
  description?: string;
  isEditable?: boolean;
  value?: string;
  onChange?: (val: string) => void;
}) => {
  return (
    <div className="flex flex-col items-start gap-3 xl:flex-row xl:items-center bg-md-surface-container-low p-5 rounded-2xl border border-md-outline/10 shadow-sm transition-all hover:bg-md-surface-container">
      <h1 className="text-base font-bold text-md-on-surface-variant lg:text-lg xl:min-w-48">
        {title}:
      </h1>
      {isEditable ? (
        <input 
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full bg-md-bg border border-md-outline/20 focus:border-md-primary rounded-xl px-4 py-2.5 outline-none text-md-on-bg font-semibold text-sm lg:text-lg shadow-sm transition-all focus:ring-2 focus:ring-md-primary/20"
        />
      ) : (
        <h1 className="truncate text-sm font-semibold max-sm:max-w-[320px] lg:text-lg text-md-on-surface">
          {description}
        </h1>
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
    <section className="flex size-full flex-col gap-10 text-md-on-bg">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold lg:text-4xl text-md-on-bg tracking-tight">Personal Meeting Room</h1>
        <p className="text-md-on-surface-variant text-base">Your dedicated, permanent meeting space. Share this link for instant meetings.</p>
      </div>
      
      <div className="flex w-full flex-col gap-4 xl:max-w-[900px]">
        <Table 
          title="Topic" 
          isEditable={true} 
          value={topic} 
          onChange={setTopic} 
        />
        <Table title="Meeting ID" description={meetingId!} />
        <Table title="Invite Link" description={meetingLink} />
      </div>
      
      <div className="flex gap-4 pt-4">
        <Button className="bg-md-primary text-md-on-primary hover:bg-md-primary/90 rounded-full px-8 py-6 shadow-md active:scale-95 transition-all duration-300 font-bold text-lg" onClick={startRoom}>
          Start Meeting
        </Button>
        <Button
          className="bg-md-surface-container-low text-md-on-surface-variant hover:bg-md-on-surface-variant/10 hover:text-md-on-surface rounded-full px-8 py-6 border border-md-outline/20 active:scale-95 transition-all duration-300 font-bold text-lg shadow-sm"
          onClick={() => {
            navigator.clipboard.writeText(inviteText);
            toast("Invitation Copied to Clipboard");
          }}
        >
          Copy Invitation
        </Button>
      </div>
    </section>
  );
};

export default PersonalRoom;
