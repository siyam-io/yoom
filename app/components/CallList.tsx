'use client';

import { Call, CallRecording } from '@stream-io/video-react-sdk';
import { useGetCalls } from '@/hooks/useGetCalls';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from './loader';
import MeetingCard from './MeetingCard';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { AlertCircle, Film, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallList = ({ type }: { type: 'ended' | 'upcoming' | 'recordings' }) => {
  const router = useRouter();
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

  const handlePlayRecording = (recording: CallRecording) => {
    setVideoError(false);
    setSelectedVideo({
      url: recording.url,
      title: recording.filename || 'Meeting Recording',
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        {calls && calls.length > 0 ? (
          calls.map((meeting: Call | CallRecording, idx: number) => {
            const isRecording = type === 'recordings';
            const callItem = meeting as Call;
            const recItem = meeting as CallRecording;

            const title = isRecording
              ? recItem.filename?.substring(0, 30) || 'Recording'
              : callItem.state?.custom?.description || 'No Description';

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
                buttonText={isRecording ? 'Play' : 'Start'}
                handleClick={
                  isRecording
                    ? () => handlePlayRecording(recItem)
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
        <DialogContent className="max-w-3xl bg-[#17151f] border border-white/10 text-white rounded-3xl p-5 sm:p-6 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl font-bold flex items-center gap-2 text-white truncate">
              <Film className="size-5 text-md-primary shrink-0" />
              <span className="truncate">{selectedVideo?.title}</span>
            </DialogTitle>
          </DialogHeader>

          {videoError ? (
            <div className="flex flex-col items-center justify-center p-6 sm:p-10 text-center gap-4 bg-white/5 rounded-2xl border border-white/10 my-2">
              <div className="size-14 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                <AlertCircle className="size-8 text-rose-400" />
              </div>
              <div className="flex flex-col gap-1.5 max-w-md">
                <h3 className="text-lg font-bold text-white">Recording Expired on Server</h3>
                <p className="text-sm text-md-on-surface-variant leading-relaxed">
                  Stream Video-এর ফ্রি ক্লাউড স্টোরেজে রেকর্ডিং সর্বোচ্চ <strong>১৪ দিন</strong> থাকে। ১৪ দিন পার হয়ে গেলে ফাইলটি স্বয়ংক্রিয়ভাবে মুছে যায়, যার কারণে সরাসরি ক্লাউড লিঙ্কটি অ্যাক্সেস করা যায় না।
                </p>
                <p className="text-xs text-white/50 mt-1">
                  ভবিষ্যতের মিটিংয়ের রেকর্ডিং স্থায়ীভাবে সংরক্ষণ করতে Stream Dashboard থেকে আপনার নিজস্ব AWS S3 বাকেট কানেক্ট করতে পারেন।
                </p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => selectedVideo && window.open(selectedVideo.url, '_blank')}
                  className="rounded-full border-white/20 text-white hover:bg-white/10 text-xs flex items-center gap-1.5"
                >
                  <ExternalLink className="size-3.5" />
                  <span>Open Raw Link</span>
                </Button>
                <Button
                  size="sm"
                  onClick={() => setSelectedVideo(null)}
                  className="rounded-full bg-white/10 hover:bg-white/20 text-white text-xs"
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
