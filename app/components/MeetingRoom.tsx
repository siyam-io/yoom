'use client';
import { useState, useEffect } from 'react';
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
  StreamTheme,
} from '@stream-io/video-react-sdk';
import { useRouter, useSearchParams } from 'next/navigation';
import { Users, LayoutList } from 'lucide-react';

import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import EndCallButton from './EndCallButton';
import Loader from './loader';

type CallLayoutType = 'grid' | 'speaker-bottom' | 'speaker-left' | 'speaker-right';

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get('personal');
  const router = useRouter();
  const [layout, setLayout] = useState<CallLayoutType>('speaker-bottom');
  const [showParticipants, setShowParticipants] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { useCallCallingState } = useCallStateHooks();

  const callingState = useCallCallingState();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    if (layout === 'grid') {
      return <PaginatedGridLayout />;
    }

    // On mobile, always prioritize bottom participants bar so the spotlight video stays full width
    if (isMobile) {
      return <SpeakerLayout participantsBarPosition="bottom" />;
    }

    switch (layout) {
      case 'speaker-left':
        return <SpeakerLayout participantsBarPosition="left" />;
      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition="right" />;
      default:
        return <SpeakerLayout participantsBarPosition="bottom" />;
    }
  };

  return (
    <StreamTheme>
      <section className="relative h-screen w-full overflow-hidden text-md-on-bg bg-md-bg">
        <div className="relative flex size-full items-center justify-center pb-28 sm:pb-24 pt-2 sm:pt-4 px-2 sm:px-4">
          <div className="flex size-full max-w-[1200px] items-center justify-center min-h-0">
            <CallLayout />
          </div>
          <div
            className={cn(
              'fixed sm:relative inset-y-0 right-0 z-50 sm:z-auto h-full sm:h-[calc(100vh-120px)] w-full max-w-[320px] sm:max-w-[360px] bg-md-surface-container/95 sm:bg-md-surface-container-high/70 backdrop-blur-md rounded-none sm:rounded-2xl border-l sm:border border-md-outline/15 shadow-2xl p-4 sm:ml-4 transition-all duration-300',
              showParticipants ? 'flex flex-col' : 'hidden'
            )}
          >
            <CallParticipantsList onClose={() => setShowParticipants(false)} />
          </div>
        </div>
        
        {/* video layout and call controls */}
        <div className="fixed bottom-2.5 sm:bottom-6 left-0 right-0 flex w-full items-center justify-center px-2 z-50 pointer-events-none">
          <div className="pointer-events-auto flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-4 bg-md-surface-container-high/95 backdrop-blur-xl rounded-2xl sm:rounded-full px-3 py-2 sm:px-6 sm:py-3 max-w-[96vw] sm:max-w-fit shadow-2xl border border-md-outline/15">
            {/* Primary Call Controls (Audio, Video, Reaction, Screen, Record, Hangup) */}
            <div className="flex items-center justify-center max-w-full">
              <CallControls onLeave={() => router.push(`/dashboard`)} />
            </div>

            {/* Subtle Divider for Desktop */}
            <div className="hidden sm:block h-7 w-[1px] bg-md-outline/20" />

            {/* Secondary Controls (Layout, Stats, Participants, End Call) */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto">
              <DropdownMenu>
                <div className="flex items-center">
                  <DropdownMenuTrigger
                    aria-label="Change layout"
                    className="cursor-pointer rounded-full bg-md-surface-container-highest hover:bg-md-surface-container-low p-2.5 sm:p-3 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-md-primary"
                  >
                    <LayoutList className="size-5 sm:size-[22px] text-md-on-surface" />
                  </DropdownMenuTrigger>
                </div>
                <DropdownMenuContent className="border-md-outline/10 bg-md-surface-container-high text-md-on-surface rounded-xl shadow-xl p-2 z-50">
                  {[
                    { label: 'Speaker (Bottom)', value: 'speaker-bottom' },
                    { label: 'Grid View', value: 'grid' },
                    { label: 'Speaker (Left)', value: 'speaker-left' },
                    { label: 'Speaker (Right)', value: 'speaker-right' },
                  ].map((item, index) => (
                    <div key={item.value}>
                      <DropdownMenuItem
                        className={cn(
                          "cursor-pointer hover:bg-md-primary/10 rounded-lg px-4 py-2.5 font-medium focus:bg-md-primary/10 text-sm",
                          layout === item.value && "bg-md-primary/15 text-md-primary font-bold"
                        )}
                        onClick={() =>
                          setLayout(item.value as CallLayoutType)
                        }
                      >
                        {item.label}
                      </DropdownMenuItem>
                      {index < 3 && <DropdownMenuSeparator className="border-md-outline/10 bg-md-outline/10 my-1" />}
                    </div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <div className="flex items-center justify-center [&_button]:!p-2.5 sm:[&_button]:!p-3 [&_button]:!rounded-full">
                <CallStatsButton />
              </div>
              
              <button
                aria-label="Toggle participants list"
                onClick={() => setShowParticipants((prev) => !prev)}
                className={cn(
                  "cursor-pointer rounded-full p-2.5 sm:p-3 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-md-primary",
                  showParticipants
                    ? "bg-md-primary text-md-on-primary"
                    : "bg-md-surface-container-highest hover:bg-md-surface-container-low text-md-on-surface"
                )}
              >
                <Users className="size-5 sm:size-[22px]" />
              </button>
              
              {!isPersonalRoom && <EndCallButton />}
            </div>
          </div>
        </div>
      </section>
    </StreamTheme>
  );
};

export default MeetingRoom;
