import { useEffect, useRef, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface DiscountTimerProps {
  className: string;
  endTime: string; // Assuming endTime is a string representing a valid date
}

export default function DiscountTimer({
  className,
  endTime,
}: DiscountTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  const intervalRef = useRef<any>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, []);

  function calculateTimeLeft(): TimeLeft {
    const difference = new Date(endTime).getTime() - new Date().getTime();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className={`${className} flex items-center gap-1`} dir="ltr">
      <div className="bg-[#f9f9f9c6] dark:bg-[#2e2d2dc6] w-12 h-12 grid place-content-center rounded-md shadow-xl text-[var(--title-color)] transition-all">
        {timeLeft.days}
      </div>
      <span className="text-white">:</span>
      <div className="bg-[#f9f9f9c6] dark:bg-[#2e2d2dc6] w-12 h-12 grid place-content-center rounded-md shadow-xl text-[var(--title-color)] transition-all">
        {timeLeft.hours}
      </div>
      <span className="text-white">:</span>
      <div className="bg-[#f9f9f9c6] dark:bg-[#2e2d2dc6] w-12 h-12 grid place-content-center rounded-md shadow-xl text-[var(--title-color)] transition-all">
        {timeLeft.minutes}
      </div>
      <span className="text-white">:</span>
      <div className="bg-[#f9f9f9c6] dark:bg-[#2e2d2dc6] w-12 h-12 grid place-content-center rounded-md shadow-xl dark:text-red-400 text-red-500  transition-all">
        {timeLeft.seconds}
      </div>
    </div>
  );
}
