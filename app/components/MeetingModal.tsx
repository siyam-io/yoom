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
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border border-md-outline/10 bg-md-surface-container-high px-8 py-10 text-md-on-surface rounded-[32px] shadow-lg">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center bg-md-secondary-container/30 w-fit mx-auto p-4 rounded-full">
              <Image src={image} alt="image" width={64} height={64} className="brightness-0" />
            </div>
          )}
          <h1 className={cn("text-3xl font-extrabold leading-[42px] tracking-tight text-center text-md-on-bg", className)}>
            {title}
          </h1>
          {children}
          <Button onClick={handleClick} className="bg-md-primary text-md-on-primary hover:bg-md-primary/90 transition-all duration-300 rounded-full py-7 text-lg font-bold shadow-md active:scale-95 cursor-pointer mt-4">
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button icon"
                width={18}
                height={18}
                className="mr-2 brightness-0 invert"
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
