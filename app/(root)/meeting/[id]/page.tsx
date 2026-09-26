'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import { Loader } from 'lucide-react';
import { useGetCallById } from '@/hooks/useGetCallById';
import { Alert } from '@/components/ui/alert';
import MeetingSetup from '@/app/components/MeetingSetup';
import MeetingRoom from '@/app/components/MeetingRoom';

const MeetingPage = () => {
  const { id } = useParams();
  const { isLoaded, user } = useUser();
  const { call, isCallLoading } = useGetCallById(id ?? '');
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (!isLoaded || isCallLoading) return <Loader />;

  if (!call) return (
    <div className="flex h-screen w-full items-center justify-center bg-md-bg">
      <p className="text-center text-3xl font-extrabold text-md-on-bg">
        Call Not Found
      </p>
    </div>
  );

  // get more info about custom call type:  https://getstream.io/video/docs/react/guides/configuring-call-types/
  const notAllowed = call.type === 'invited' && (!user || !call.state.members.find((m) => m.user.id === user.id));

  if (notAllowed) return <Alert title="You are not allowed to join this meeting" />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>

        {!isSetupComplete ? (
          <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
        ) : (
          <MeetingRoom />
          // <Loader/>
        )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;
