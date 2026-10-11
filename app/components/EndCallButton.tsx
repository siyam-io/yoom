'use client';

import { Button } from '@/components/ui/button';
import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import { PhoneOff } from 'lucide-react';

const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();

  if (!call)
    throw new Error(
      'useStreamCall must be used within a StreamCall component.',
    );

  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    localParticipant &&
    call.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return null;

  const endCall = async () => {
    await call.endCall();
    router.push('/dashboard');
  };

  return (
    <Button
      onClick={endCall}
      className="bg-md-error text-md-on-error hover:bg-md-error/90 active:scale-95 rounded-full px-3 py-1.5 sm:px-5 sm:py-2.5 transition-all duration-200 text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm whitespace-nowrap cursor-pointer"
      title="End call for everyone"
    >
      <PhoneOff className="size-3.5 sm:size-4 shrink-0" />
      <span>End All</span>
      <span className="hidden md:inline">for everyone</span>
    </Button>
  );
};

export default EndCallButton;

