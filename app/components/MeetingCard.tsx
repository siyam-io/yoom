"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { avatarImages } from "@/constant";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[32px] bg-md-surface-container-low px-6 py-8 shadow-sm border border-md-outline/10 text-md-on-surface hover:shadow-md transition-shadow duration-300 xl:max-w-[568px]">
      <article className="flex flex-col gap-6">
        <div className="bg-md-primary/10 w-fit p-3 rounded-2xl">
          <Image src={icon} alt="upcoming" width={28} height={28} className="brightness-0 opacity-80" />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-md-on-surface tracking-tight">{title}</h1>
            <p className="text-base font-medium text-md-on-surface-variant">{date}</p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative mt-8", {})}>
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="attendees"
              width={40}
              height={40}
              className={cn("rounded-full border-[3px] border-md-surface-container-low", { absolute: index > 0 })}
              style={{ top: 0, left: index * 28 }}
            />
          ))}
          <div className="flex-center absolute left-[136px] size-10 rounded-full border-[3px] border-md-surface-container-low bg-md-surface-container-high text-md-on-surface text-sm font-bold shadow-sm">
            +5
          </div>
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-3 w-full">
            <Button onClick={handleClick} className="rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90 px-8 py-6 font-bold text-base active:scale-95 transition-all duration-300 shadow-sm flex-1 max-w-[200px]">
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={20} height={20} className="brightness-0 invert" />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast("Link Copied");
              }}
              className="rounded-full bg-md-surface-container-high text-md-on-surface hover:bg-md-on-surface-variant/10 border border-md-outline/20 px-8 py-6 font-bold text-base active:scale-95 transition-all duration-300 flex-1 max-w-[200px]"
            >
              <Image
                src="/icons/copy.svg"
                alt="feature"
                width={20}
                height={20}
                className="brightness-0 opacity-80"
              />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
