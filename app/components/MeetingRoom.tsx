'use client';

import { useState, useEffect } from 'react';
import {
  CallParticipantsList,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
  useToggleCallRecording,
} from '@stream-io/video-react-sdk';
import { useSearchParams } from 'next/navigation';
import Loader from './loader';
import MeetingControls, { CallLayoutType } from './MeetingControls';

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get('personal');
  const [layout, setLayout] = useState<CallLayoutType>('speaker-bottom');
  const [showParticipants, setShowParticipants] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  const { useCallCallingState, useHasOngoingScreenShare } = useCallStateHooks();
  const { isCallRecordingInProgress } = useToggleCallRecording();

  const callingState = useCallCallingState();
  const hasScreenShare = useHasOngoingScreenShare();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (callingState !== CallingState.JOINED) return <Loader />;

  // Determine speaker layout bar position cleanly without unmounting component instances
  let speakerBarPosition: 'bottom' | 'left' | 'right' = 'bottom';
  if (!isMobile) {
    if (layout === 'speaker-left') speakerBarPosition = 'left';
    else if (layout === 'speaker-right' || hasScreenShare) speakerBarPosition = 'right';
  }

  return (
    <section className="relative h-screen w-full overflow-hidden text-md-on-bg bg-[#100e16] select-none">
      {/* Live Recording Indicator */}
      {isCallRecordingInProgress && (
        <div className="absolute top-4 left-4 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold backdrop-blur-md shadow-lg shadow-rose-950/50">
          <span className="size-2 rounded-full bg-rose-500 animate-ping" />
          <span>REC</span>
        </div>
      )}

      {/* Main Video Presentation Grid */}
      <div className="relative flex size-full items-center justify-center pb-20 sm:pb-24 pt-2 sm:pt-4 px-1.5 sm:px-4">
        <div className="flex size-full max-w-[1400px] items-center justify-center min-h-0 overflow-hidden">
          {layout === 'grid' && !hasScreenShare ? (
            <PaginatedGridLayout />
          ) : (
            <SpeakerLayout participantsBarPosition={speakerBarPosition} />
          )}
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
  );
};

export default MeetingRoom;
