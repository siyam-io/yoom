'use client';
import { useState } from 'react';
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

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get('personal');
  const router = useRouter();
  const [layout, setLayout] = useState<CallLayoutType>('speaker-left');
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();

  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout />;
      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <StreamTheme>
      <section className="relative h-screen w-full overflow-hidden pt-4 text-md-on-bg bg-md-bg">
        <div className="relative flex size-full items-center justify-center">
          <div className=" flex size-full max-w-[1000px] items-center">
            <CallLayout />
          </div>
          <div
            className={cn('h-[calc(100vh-100px)] hidden ml-2', {
              'show-block': showParticipants,
            })}
          >
            <CallParticipantsList onClose={() => setShowParticipants(false)} />
          </div>
        </div>
        
        {/* video layout and call controls */}
        <div className="fixed bottom-4 sm:bottom-6 left-0 right-0 flex w-full items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-md-surface-container-high rounded-full px-4 py-3 sm:px-6 mx-2 w-full max-w-fit shadow-lg border border-md-outline/10 z-50">
            <CallControls onLeave={() => router.push(`/dashboard`)} />

            <DropdownMenu>
              <div className="flex items-center">
                <DropdownMenuTrigger className="cursor-pointer rounded-full bg-md-surface-container-highest hover:bg-md-surface-container-low p-3 transition-colors duration-300">
                  <LayoutList size={22} className="text-md-on-surface" />
                </DropdownMenuTrigger>
              </div>
              <DropdownMenuContent className="border-md-outline/10 bg-md-surface-container-high text-md-on-surface rounded-xl shadow-md p-2">
                {['Grid', 'Speaker-Left', 'Speaker-Right'].map((item, index) => (
                  <div key={index}>
                    <DropdownMenuItem
                      className="cursor-pointer hover:bg-md-primary/10 rounded-lg px-4 py-3 font-medium focus:bg-md-primary/10"
                      onClick={() =>
                        setLayout(item.toLowerCase() as CallLayoutType)
                      }
                    >
                      {item}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="border-md-outline/10 bg-md-outline/10" />
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <CallStatsButton />
            
            <button onClick={() => setShowParticipants((prev) => !prev)}>
              <div className="cursor-pointer rounded-full bg-md-surface-container-highest hover:bg-md-surface-container-low p-3 transition-colors duration-300">
                <Users size={22} className="text-md-on-surface" />
              </div>
            </button>
            
            {!isPersonalRoom && <EndCallButton />}
          </div>
        </div>
      </section>
    </StreamTheme>
  );
};

export default MeetingRoom;
