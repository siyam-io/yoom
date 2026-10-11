/* eslint-disable camelcase */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";

import HomeCard from "./HomeCard";
import MeetingModal from "./MeetingModal";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";

import { Input } from "@/components/ui/input";
import Loader from "./loader";
import { Textarea } from "@/components/ui/textarea";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { toast } from "sonner";

const initialValues = {
  dateTime: new Date(),
  description: "",
  link: "",
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);
  const [values, setValues] = useState(initialValues);
  const [callDetail, setCallDetail] = useState<Call>();
  const client = useStreamVideoClient();
  const { user } = useUser();

  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      if (!values.dateTime) {
        toast("Please select a date and time");
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call("default", id);
      if (!call) throw new Error("Failed to create meeting");
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetail(call);
      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast("Meeting Created");
    } catch (error) {
      console.error(error);
      toast("Failed to create Meeting");
    }
  };

  if (!client || !user) return <Loader />;

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail?.id}`;

  return (
    <motion.section 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
    >
      <motion.div variants={item}>
        <HomeCard
          img="/icons/add-meeting.svg"
          title="New Meeting"
          description="Start an instant meeting now"
          className="bg-gradient-to-br from-violet-600/25 via-[#18122c]/90 to-[#0e0c18] border-violet-500/30 hover:border-violet-400/60 hover:shadow-[0_12px_40px_rgba(139,92,246,0.25)]"
          iconBgColor="bg-gradient-to-br from-violet-500 to-indigo-600 shadow-violet-500/30"
          handleClick={() => setMeetingState("isInstantMeeting")}
        />
      </motion.div>
      <motion.div variants={item}>
        <HomeCard
          img="/icons/join-meeting.svg"
          title="Join Meeting"
          description="Via invitation link or call ID"
          className="bg-gradient-to-br from-sky-600/25 via-[#10192e]/90 to-[#0e0c18] border-sky-500/30 hover:border-sky-400/60 hover:shadow-[0_12px_40px_rgba(14,165,233,0.25)]"
          iconBgColor="bg-gradient-to-br from-sky-500 to-blue-600 shadow-sky-500/30"
          handleClick={() => setMeetingState("isJoiningMeeting")}
        />
      </motion.div>
      <motion.div variants={item}>
        <HomeCard
          img="/icons/schedule.svg"
          title="Schedule Meeting"
          description="Plan ahead and invite members"
          className="bg-gradient-to-br from-amber-600/25 via-[#251a14]/90 to-[#0e0c18] border-amber-500/30 hover:border-amber-400/60 hover:shadow-[0_12px_40px_rgba(245,158,11,0.25)]"
          iconBgColor="bg-gradient-to-br from-amber-500 to-orange-600 shadow-amber-500/30"
          handleClick={() => setMeetingState("isScheduleMeeting")}
        />
      </motion.div>
      <motion.div variants={item}>
        <HomeCard
          img="/icons/recordings.svg"
          title="View Recordings"
          description="Access archived meeting tapes"
          className="bg-gradient-to-br from-rose-600/25 via-[#26121c]/90 to-[#0e0c18] border-rose-500/30 hover:border-rose-400/60 hover:shadow-[0_12px_40px_rgba(244,63,94,0.25)]"
          iconBgColor="bg-gradient-to-br from-rose-500 to-pink-600 shadow-rose-500/30"
          handleClick={() => router.push("/dashboard/recordings")}
        />
      </motion.div>

      {!callDetail ? (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Schedule a Meeting"
          handleClick={createMeeting}
        >
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Meeting Description
            </label>
            <Textarea
              placeholder="e.g. Weekly Product Sync"
              className="bg-[#12101a] border-white/10 text-white placeholder:text-slate-500 rounded-2xl focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all min-h-[90px] p-3.5"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Date and Time
            </label>
            <DatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded-2xl bg-[#12101a] border border-white/10 text-white p-3.5 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all font-medium text-sm"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Meeting Scheduled!"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast("Link Copied to Clipboard");
          }}
          image={"/icons/checked.svg"}
          buttonIcon="/icons/copy.svg"
          className="text-center"
          buttonText="Copy Meeting Link"
        />
      )}

      <MeetingModal
        isOpen={meetingState === "isJoiningMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Join a Meeting"
        className="text-center"
        buttonText="Join Now"
        handleClick={() => router.push(values.link)}
      >
        <Input
          placeholder="Paste meeting link here"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
          className="bg-[#12101a] border-white/10 text-white placeholder:text-slate-500 rounded-2xl py-6 px-4 text-center text-sm focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
        />
      </MeetingModal>

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </motion.section>
  );
};

export default MeetingTypeList;
