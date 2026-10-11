import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  image?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  image,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[480px] flex-col gap-6 border border-white/10 bg-[#12101c]/98 backdrop-blur-2xl p-6 sm:p-8 text-white rounded-3xl shadow-2xl">
        <div className="flex flex-col gap-5">
          {image && (
            <div className="flex justify-center bg-violet-600/15 border border-violet-500/30 size-20 mx-auto rounded-3xl items-center shadow-lg">
              <Image src={image} alt="image" width={48} height={48} className="size-12 object-contain" />
            </div>
          )}
          <h2 className={cn("text-2xl sm:text-3xl font-black leading-tight tracking-tight text-center text-white", className)}>
            {title}
          </h2>
          {children}
          <Button 
            onClick={handleClick} 
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-2xl py-6 text-base font-bold shadow-lg shadow-violet-600/30 transition-all duration-200 active:scale-95 cursor-pointer mt-2"
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button icon"
                width={18}
                height={18}
                className="mr-2 size-4.5 invert"
              />
            )}
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
