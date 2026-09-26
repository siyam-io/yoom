import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-dark-1 relative overflow-hidden">
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-blue-1/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-1/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="z-10 relative">
        <SignIn />
      </div>
    </main>
  );
};

export default SignInPage;
