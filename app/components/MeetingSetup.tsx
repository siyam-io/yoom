'use client';
import { useEffect, useState } from 'react';
import {
  DeviceSettings,
  VideoPreview,
  useCall,
  useCallStateHooks,
} from '@stream-io/video-react-sdk';
import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';


const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  // https://getstream.io/video/docs/react/guides/call-and-participant-state/#call-state
  const { useCallEndedAt, useCallStartsAt } = useCallStateHooks();
  const callStartsAt = useCallStartsAt();
  const callEndedAt = useCallEndedAt();
  const callTimeNotArrived =
    callStartsAt && new Date(callStartsAt) > new Date();
  const callHasEnded = !!callEndedAt;

  const call = useCall();

  if (!call) {
    throw new Error(
      'useStreamCall must be used within a StreamCall component.',
    );
  }

  // https://getstream.io/video/docs/react/ui-cookbook/replacing-call-controls/
  const [isMicCamToggled, setIsMicCamToggled] = useState(false);

  useEffect(() => {
    if (isMicCamToggled) {
      call.camera.disable();
      call.microphone.disable();
    } else {
      call.camera.enable();
      call.microphone.enable();
    }
  }, [isMicCamToggled, call.camera, call.microphone]);

  if (callTimeNotArrived)
    return (
      <Alert
        title={`Your Meeting has not started yet. It is scheduled for ${callStartsAt.toLocaleString()}`}
      />
    );

  if (callHasEnded)
    return (
      <Alert
        title="The call has been ended by the host"
      />
    );

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 sm:gap-6 text-md-on-bg bg-md-bg px-4 py-8 overflow-y-auto">
      <h1 className="text-center text-2xl sm:text-3xl font-extrabold text-md-on-bg tracking-tight">Meeting Setup</h1>
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-md-outline/10 bg-md-surface-container w-full max-w-2xl aspect-video flex items-center justify-center">
        <VideoPreview />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-2">
        <label className="flex items-center justify-center gap-3 font-semibold text-sm sm:text-base text-md-on-surface-variant cursor-pointer select-none">
          <input
            type="checkbox"
            checked={isMicCamToggled}
            onChange={(e) => setIsMicCamToggled(e.target.checked)}
            className="w-5 h-5 accent-md-primary rounded cursor-pointer"
          />
          Join with mic and camera off
        </label>
        <div className="flex items-center justify-center">
          <DeviceSettings />
        </div>
      </div>
      <Button
        className="rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90 px-8 py-5 sm:px-10 sm:py-6 font-bold text-base sm:text-lg mt-4 shadow-lg active:scale-95 transition-all duration-300 w-full sm:w-auto max-w-xs"
        onClick={() => {
          call.join();

          setIsSetupComplete(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
