'use client';

import { useState, useEffect } from 'react';
import {
  CallParticipantsList,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
  StreamTheme,
} from '@stream-io/video-react-sdk';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import Loader from './loader';
import MeetingControls, { CallLayoutType } from './MeetingControls';

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get('personal');
  const [layout, setLayout] = useState<CallLayoutType>('speaker-bottom');
  const [showParticipants, setShowParticipants] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const {
    useCallCallingState,
    useHasOngoingScreenShare,
    useParticipants,
  } = useCallStateHooks();

  const callingState = useCallCallingState();
  const hasScreenShare = useHasOngoingScreenShare();
  const participants = useParticipants();

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
    // If screen share is ongoing, prioritize speaker layout with screen as spotlight
    if (hasScreenShare) {
      return (
        <SpeakerLayout
          participantsBarPosition={isMobile ? 'bottom' : 'right'}
        />
      );
    }

    if (layout === 'grid') {
      return <PaginatedGridLayout />;
    }

    // On mobile portrait, if 1 or 2 participants and not explicitly on speaker, grid gives optimal full frames
    if (isMobile && participants.length <= 2 && layout !== 'speaker-bottom') {
      return <PaginatedGridLayout />;
    }

    // On mobile, speaker view must put the participants bar at the bottom so spotlight video stays 100% wide
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
      <section className="relative h-screen w-full overflow-hidden text-md-on-bg bg-[#100e16] select-none">
        {/* Main Video Presentation Grid */}
        <div className="relative flex size-full items-center justify-center pb-20 sm:pb-24 pt-2 sm:pt-4 px-1.5 sm:px-4">
          <div className="flex size-full max-w-[1400px] items-center justify-center min-h-0 overflow-hidden">
            <CallLayout />
          </div>

          {/* Slide-over Participants Drawer */}
          {showParticipants && (
            <div className="fixed sm:relative inset-y-0 right-0 z-50 sm:z-auto h-full sm:h-[calc(100vh-120px)] w-full max-w-[320px] sm:max-w-[360px] bg-[#1a1722]/98 sm:bg-[#1a1722]/85 backdrop-blur-2xl border-l sm:border border-white/10 shadow-2xl p-4 sm:ml-4 flex flex-col transition-all duration-300 animate-in slide-in-from-right">
              <CallParticipantsList onClose={() => setShowParticipants(false)} />
            </div>
          )}
        </div>

        {/* Custom Redesigned Unified Control Bar */}
        <MeetingControls
          layout={layout}
          setLayout={setLayout}
          showParticipants={showParticipants}
          setShowParticipants={setShowParticipants}
          isPersonalRoom={isPersonalRoom}
        />
      </section>
    </StreamTheme>
  );
};

export default MeetingRoom;
