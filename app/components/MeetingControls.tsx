'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  useCall,
  useCallStateHooks,
  useToggleCallRecording,
  ReactionsButton,
  CallStatsButton,
} from '@stream-io/video-react-sdk';
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  MonitorUp,
  MonitorOff,
  Users,
  LayoutList,
  PhoneOff,
  Disc,
  Grid,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

export type CallLayoutType = 'grid' | 'speaker-bottom' | 'speaker-left' | 'speaker-right';

interface MeetingControlsProps {
  layout: CallLayoutType;
  setLayout: (layout: CallLayoutType) => void;
  showParticipants: boolean;
  setShowParticipants: React.Dispatch<React.SetStateAction<boolean>>;
  isPersonalRoom: boolean;
}

export const MeetingControls = ({
  layout,
  setLayout,
  showParticipants,
  setShowParticipants,
  isPersonalRoom,
}: MeetingControlsProps) => {
  const call = useCall();
  const router = useRouter();

  const {
    useMicrophoneState,
    useCameraState,
    useScreenShareState,
    useHasOngoingScreenShare,
    useParticipants,
    useLocalParticipant,
  } = useCallStateHooks();

  const { microphone, optimisticIsMute: isMicMuted } = useMicrophoneState();
  const { camera, optimisticIsMute: isCameraMuted } = useCameraState();
  const { screenShare, optimisticIsMute: isScreenShareMuted } = useScreenShareState();
  const isLocalScreenSharing = !isScreenShareMuted;
  const isSomeoneScreenSharing = useHasOngoingScreenShare();
  const { isCallRecordingInProgress, toggleCallRecording } = useToggleCallRecording();
  const participants = useParticipants();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    !isPersonalRoom &&
    Boolean(
      localParticipant &&
      call?.state.createdBy &&
      localParticipant.userId === call.state.createdBy.id
    );

  const handleToggleMic = async () => {
    try {
      await microphone.toggle();
    } catch (err) {
      console.error('Failed to toggle mic:', err);
    }
  };

  const handleToggleCamera = async () => {
    try {
      await camera.toggle();
    } catch (err) {
      console.error('Failed to toggle camera:', err);
    }
  };

  const handleToggleScreenShare = async () => {
    try {
      await screenShare.toggle();
    } catch (err) {
      console.error('Failed to toggle screen share:', err);
    }
  };

  const handleToggleRecording = async () => {
    try {
      if (isCallRecordingInProgress) {
        await toggleCallRecording();
        toast.info('Recording stopped. Processing video for dashboard...');
      } else {
        await toggleCallRecording();
        toast.success('Recording started! Meeting is now being recorded.');
      }
    } catch (err: any) {
      console.error('Failed to toggle recording:', err);
      toast.error(err?.message || 'Failed to toggle recording');
    }
  };

  const handleLeaveCall = async () => {
    try {
      await call?.leave();
      router.push('/dashboard');
    } catch (err) {
      console.error('Failed to leave call:', err);
      router.push('/dashboard');
    }
  };

  const handleEndCallForEveryone = async () => {
    try {
      await call?.endCall();
      router.push('/dashboard');
    } catch (err) {
      console.error('Failed to end call for everyone:', err);
      router.push('/dashboard');
    }
  };

  return (
    <div className="fixed bottom-2.5 sm:bottom-6 left-0 right-0 flex w-full items-center justify-center px-2 sm:px-4 z-50 pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between sm:justify-center gap-1.5 sm:gap-3 bg-[#181620]/95 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-full px-2.5 py-2 sm:px-6 sm:py-3 shadow-[0_12px_40px_rgba(0,0,0,0.6)] max-w-[98vw] sm:max-w-fit overflow-x-auto scrollbar-none transition-all">
        
        {/* 1. Microphone Button */}
        <button
          aria-label={isMicMuted ? 'Unmute microphone' : 'Mute microphone'}
          title={isMicMuted ? 'Unmute (Mic Off)' : 'Mute (Mic On)'}
          onClick={handleToggleMic}
          className={cn(
            'size-10 sm:size-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 active:scale-95 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-md-primary',
            isMicMuted
              ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 hover:bg-rose-500/30'
              : 'bg-white/10 text-white border border-white/10 hover:bg-white/20'
          )}
        >
          {isMicMuted ? (
            <MicOff className="size-4.5 sm:size-5" />
          ) : (
            <Mic className="size-4.5 sm:size-5" />
          )}
        </button>

        {/* 2. Camera Button */}
        <button
          aria-label={isCameraMuted ? 'Turn on camera' : 'Turn off camera'}
          title={isCameraMuted ? 'Start Video (Cam Off)' : 'Stop Video (Cam On)'}
          onClick={handleToggleCamera}
          className={cn(
            'size-10 sm:size-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 active:scale-95 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-md-primary',
            isCameraMuted
              ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 hover:bg-rose-500/30'
              : 'bg-white/10 text-white border border-white/10 hover:bg-white/20'
          )}
        >
          {isCameraMuted ? (
            <VideoOff className="size-4.5 sm:size-5" />
          ) : (
            <Video className="size-4.5 sm:size-5" />
          )}
        </button>

        {/* 3. Screen Share Button */}
        <button
          aria-label={isLocalScreenSharing ? 'Stop sharing screen' : 'Share screen'}
          title={
            isLocalScreenSharing
              ? 'Stop Sharing'
              : isSomeoneScreenSharing
              ? 'Someone else is sharing screen'
              : 'Share Screen'
          }
          disabled={isSomeoneScreenSharing && !isLocalScreenSharing}
          onClick={handleToggleScreenShare}
          className={cn(
            'size-10 sm:size-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 active:scale-95 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-md-primary',
            isLocalScreenSharing
              ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/35'
              : isSomeoneScreenSharing
              ? 'bg-white/5 text-white/30 border border-white/5 cursor-not-allowed opacity-50'
              : 'bg-white/10 text-white border border-white/10 hover:bg-white/20'
          )}
        >
          {isLocalScreenSharing ? (
            <MonitorOff className="size-4.5 sm:size-5" />
          ) : (
            <MonitorUp className="size-4.5 sm:size-5" />
          )}
        </button>

        {/* 4. Stream Reactions Button (Emoji reactions) */}
        <div className="custom-stream-reaction-btn flex items-center justify-center shrink-0">
          <ReactionsButton />
        </div>

        {/* 5. Record Call Button */}
        <button
          aria-label={isCallRecordingInProgress ? 'Stop recording' : 'Record call'}
          title={isCallRecordingInProgress ? 'Recording in progress (Click to stop)' : 'Record Meeting'}
          onClick={handleToggleRecording}
          className={cn(
            'size-10 sm:size-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 active:scale-95 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-md-primary',
            isCallRecordingInProgress
              ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 hover:bg-rose-500/30'
              : 'bg-white/10 text-white border border-white/10 hover:bg-white/20'
          )}
        >
          <Disc
            className={cn(
              'size-4.5 sm:size-5',
              isCallRecordingInProgress && 'animate-pulse text-rose-500'
            )}
          />
        </button>

        {/* Divider */}
        <div className="h-6 w-px bg-white/10 shrink-0 hidden sm:block" />

        {/* 6. Layout Switcher Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              aria-label="Change layout view"
              title="Layout view"
              className="size-10 sm:size-12 rounded-full flex items-center justify-center shrink-0 bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-all duration-200 active:scale-95 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-md-primary"
            >
              <LayoutList className="size-4.5 sm:size-5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="top"
            className="border border-white/10 bg-[#1c1924]/95 backdrop-blur-xl text-white rounded-xl shadow-2xl p-1.5 z-50 mb-2 min-w-[170px]"
          >
            {[
              { label: 'Speaker (Bottom)', value: 'speaker-bottom', icon: LayoutList },
              { label: 'Grid View', value: 'grid', icon: Grid },
              { label: 'Speaker (Left)', value: 'speaker-left', icon: LayoutList },
              { label: 'Speaker (Right)', value: 'speaker-right', icon: LayoutList },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.value}>
                  <DropdownMenuItem
                    className={cn(
                      'cursor-pointer rounded-lg px-3 py-2 text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors',
                      layout === item.value && 'bg-md-primary/20 text-md-primary font-bold'
                    )}
                    onClick={() => setLayout(item.value as CallLayoutType)}
                  >
                    <Icon className="size-4 opacity-80" />
                    <span>{item.label}</span>
                  </DropdownMenuItem>
                  {index < 3 && <DropdownMenuSeparator className="bg-white/10 my-1" />}
                </div>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* 7. Participants Toggle with live count badge */}
        <button
          aria-label="Toggle participants list"
          title={`Participants (${participants.length})`}
          onClick={() => setShowParticipants((prev) => !prev)}
          className={cn(
            'relative size-10 sm:size-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 active:scale-95 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-md-primary',
            showParticipants
              ? 'bg-md-primary text-md-on-primary font-bold shadow-md'
              : 'bg-white/10 text-white border border-white/10 hover:bg-white/20'
          )}
        >
          <Users className="size-4.5 sm:size-5" />
          {participants.length > 0 && (
            <span
              className={cn(
                'absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-bold flex items-center justify-center shadow-md',
                showParticipants
                  ? 'bg-white text-md-on-primary'
                  : 'bg-md-primary text-md-on-primary'
              )}
            >
              {participants.length}
            </span>
          )}
        </button>

        {/* 8. Call Stats Info */}
        <div className="custom-stream-stats-btn flex items-center justify-center shrink-0">
          <CallStatsButton />
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-white/10 shrink-0 hidden sm:block" />

        {/* 9. Leave / End Call Button */}
        {isMeetingOwner ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="End or Leave Call"
                title="End or Leave Call"
                className="size-10 sm:size-12 rounded-full flex items-center justify-center shrink-0 bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/40 transition-all duration-200 active:scale-95 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
              >
                <PhoneOff className="size-4.5 sm:size-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              align="end"
              className="border border-white/10 bg-[#1c1924]/95 backdrop-blur-xl text-white rounded-xl shadow-2xl p-1.5 z-50 mb-2 min-w-[190px]"
            >
              <DropdownMenuItem
                onClick={handleEndCallForEveryone}
                className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-bold text-rose-400 hover:bg-rose-500/20 hover:text-rose-300 transition-colors flex items-center gap-2"
              >
                <PhoneOff className="size-4 text-rose-400" />
                <span>End for Everyone</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-white/10 my-1" />
              <DropdownMenuItem
                onClick={handleLeaveCall}
                className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <span>Leave Meeting</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <button
            aria-label="Leave call"
            title="Leave Meeting"
            onClick={handleLeaveCall}
            className="size-10 sm:size-12 rounded-full flex items-center justify-center shrink-0 bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/40 transition-all duration-200 active:scale-95 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          >
            <PhoneOff className="size-4.5 sm:size-5" />
          </button>
        )}

      </div>
    </div>
  );
};

export default MeetingControls;
