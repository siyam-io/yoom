'use client';

import { Call, CallRecording } from '@stream-io/video-react-sdk';
import { useGetCalls } from '@/hooks/useGetCalls';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import Loader from './loader';
import MeetingCard from './MeetingCard';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { AlertCircle, Film } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallList = ({ type }: { type: 'ended' | 'upcoming' | 'recordings' }) => {
  const router = useRouter();
  const { user } = useUser();
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);
  const [videoError, setVideoError] = useState(false);

  const getCalls = () => {
    switch (type) {
      case 'ended':
        return endedCalls;
      case 'recordings':
        return recordings;
      case 'upcoming':
        return upcomingCalls;
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case 'ended':
        return 'No Previous Calls';
      case 'upcoming':
        return 'No Upcoming Calls';
      case 'recordings':
        return 'No Recordings';
      default:
        return '';
    }
  };

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        const callData = await Promise.all(
          callRecordings?.map((meeting) => meeting.queryRecordings()) ?? [],
        );

        const recs = callData
          .filter((call) => call.recordings && call.recordings.length > 0)
          .flatMap((call) => call.recordings);

        setRecordings(recs);
      } catch (err) {
        console.error('Error fetching recordings:', err);
      }
    };

    if (type === 'recordings') {
      fetchRecordings();
    }
  }, [type, callRecordings]);

  if (isLoading) return <Loader />;

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  const handlePlayRecording = (recording: CallRecording, isExpired: boolean) => {
    if (isExpired) {
      setVideoError(true);
      setSelectedVideo({
        url: recording.url,
        title: recording.filename || 'Meeting Recording',
      });
    } else {
      setVideoError(false);
      setSelectedVideo({
        url: recording.url,
        title: recording.filename || 'Meeting Recording',
      });
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        {calls && calls.length > 0 ? (
          calls.map((meeting: Call | CallRecording, idx: number) => {
            const isRecording = type === 'recordings';
            const callItem = meeting as Call;
            const recItem = meeting as CallRecording;

            const FOURTEEN_DAYS_MS = 14 * 24 * 60 * 60 * 1000;
            const isExpired = Boolean(
              isRecording &&
              recItem.start_time &&
              Date.now() - new Date(recItem.start_time).getTime() > FOURTEEN_DAYS_MS
            );

            const title = isRecording
              ? recItem.filename?.substring(0, 32) || 'Meeting Recording'
              : callItem.state?.custom?.description || 'Instant Meeting';

            const date = isRecording
              ? recItem.start_time
                ? new Date(recItem.start_time).toLocaleString()
                : 'Unknown Date'
              : callItem.state?.startsAt
                ? new Date(callItem.state.startsAt).toLocaleString()
                : 'Unknown Date';

            const link = isRecording
              ? recItem.url
              : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callItem.id}`;

            const hostName =
              callItem.state?.createdBy?.name ||
              user?.fullName ||
              user?.username ||
              'Host';
            const hostImage = callItem.state?.createdBy?.image || user?.imageUrl;

            const members =
              callItem.state?.members?.map((m) => ({
                id: m.user.id,
                name: m.user.name,
                image: m.user.image,
              })) || [];

            return (
              <MeetingCard
                key={isRecording ? `${recItem.session_id || idx}` : callItem.id}
                icon={
                  type === 'ended'
                    ? '/icons/previous.svg'
                    : type === 'upcoming'
                      ? '/icons/upcoming.svg'
                      : '/icons/recordings.svg'
                }
                title={title}
                date={date}
                isPreviousMeeting={type === 'ended'}
                link={link}
                buttonIcon1={isRecording ? '/icons/play.svg' : undefined}
                buttonText={isRecording ? (isExpired ? 'View Info' : 'Play') : 'Start'}
                isRecording={isRecording}
                isExpired={isExpired}
                members={members}
                hostName={hostName}
                hostImage={hostImage}
                handleClick={
                  isRecording
                    ? () => handlePlayRecording(recItem, isExpired)
                    : () => router.push(`/meeting/${callItem.id}`)
                }
              />
            );
          })
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center p-10 sm:p-14 rounded-3xl bg-[#13111c]/60 backdrop-blur-xl border border-white/10 text-center gap-4">
            <div className="size-16 rounded-2xl bg-violet-600/15 border border-violet-500/25 flex items-center justify-center text-violet-400 shadow-lg">
              <Film className="size-7" />
            </div>
            <div className="flex flex-col gap-1 max-w-md">
              <h3 className="text-xl font-bold text-white">{noCallsMessage}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {type === 'recordings'
                  ? 'Meetings recorded with the record button will automatically appear here.'
                  : type === 'upcoming'
                  ? 'No scheduled meetings right now. Start an instant meeting or schedule one from the dashboard.'
                  : 'Your past meeting attendance and session history will be stored here.'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* In-App Recording Player Modal */}
      <Dialog
        open={!!selectedVideo}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedVideo(null);
            setVideoError(false);
          }
        }}
      >
        <DialogContent className="max-w-2xl bg-[#13111c]/98 backdrop-blur-2xl border border-white/15 text-white rounded-3xl p-6 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold flex items-center gap-2 text-white truncate">
              <Film className="size-5 text-violet-400 shrink-0" />
              <span className="truncate">{selectedVideo?.title}</span>
            </DialogTitle>
          </DialogHeader>

          {videoError ? (
            <div className="flex flex-col items-center justify-center p-6 sm:p-8 text-center gap-4 bg-white/5 rounded-2xl border border-white/10 my-2">
              <div className="size-14 rounded-full bg-rose-500/15 flex items-center justify-center border border-rose-500/30">
                <AlertCircle className="size-7 text-rose-400" />
              </div>
              <div className="flex flex-col gap-1.5 max-w-md">
                <h3 className="text-lg font-bold text-white">Recording Retention Expired</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Stream Video-এর ফ্রি ট্রায়াল ক্লাউড স্টোরেজে ভিডিও সর্বোচ্চ <strong>১৪ দিন</strong> সংরক্ষিত থাকে। ১৪ দিন পার হয়ে যাওয়ায় ক্লাউড সার্ভার থেকে ফাইলটির মেয়াদ শেষ হয়ে গেছে।
                </p>
                <div className="bg-violet-600/10 border border-violet-500/20 rounded-xl p-3 text-xs text-violet-200 mt-1">
                  💡 নতুন যে কোনো মিটিং চলাকালীন রেকর্ড বাটনে চাপ দিলে নতুন ফ্রেশ রেকর্ডিং তৈরি হবে এবং সাথে সাথেই এখান থেকে প্লে করা যাবে।
                </div>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <Button
                  size="sm"
                  onClick={() => setSelectedVideo(null)}
                  className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs px-6 py-2 cursor-pointer shadow-md shadow-violet-600/30"
                >
                  Close
                </Button>
              </div>
            </div>
          ) : (
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center my-2 shadow-inner border border-white/10">
              <video
                key={selectedVideo?.url}
                src={selectedVideo?.url}
                controls
                autoPlay
                playsInline
                className="size-full object-contain"
                onError={() => setVideoError(true)}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CallList;
