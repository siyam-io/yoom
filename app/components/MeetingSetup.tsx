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
    <div className="flex h-screen w-full flex-col items-center justify-center gap-6 text-md-on-bg bg-md-bg">
      <h1 className="text-center text-3xl font-extrabold text-md-on-bg tracking-tight">Setup</h1>
      <div className="rounded-3xl overflow-hidden shadow-lg border border-md-outline/10 bg-md-surface-container w-full max-w-2xl">
        <VideoPreview />
      </div>
      <div className="flex h-16 items-center justify-center gap-6 mt-4">
        <label className="flex items-center justify-center gap-3 font-bold text-md-on-surface-variant cursor-pointer">
          <input
            type="checkbox"
            checked={isMicCamToggled}
            onChange={(e) => setIsMicCamToggled(e.target.checked)}
            className="w-5 h-5 accent-md-primary"
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90 px-10 py-7 font-bold text-lg mt-6 shadow-md active:scale-95 transition-all duration-300"
        onClick={() => {
          call.join();

          setIsSetupComplete(true);
        }}
      >
        Join meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
