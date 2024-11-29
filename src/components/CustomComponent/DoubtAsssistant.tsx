'use client';


import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import DiscordImage03 from "../../../public/assets/discord-images/discord01.jpg"
import DiscordImage02 from "../../../public/assets/discord-images/discord02.jpg"
import DiscordImage01 from "../../../public/assets/discord-images/discord03.jpg"

export default function DoubtAssistance() {
  // Intersection Observer hook logic
  const useIntersectionObserver = (
    ref: React.RefObject<Element>,
    options: IntersectionObserverInit = {
      threshold: 0.1,
      root: null,
      rootMargin: "0px",
    }
  ): boolean => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      }, options);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        observer.disconnect();
      };
    }, [ref, options]);

    return isIntersecting;
  };

  // Component logic
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <div className="bg-[#181A1B]">
    <div className="container  pt-[4%] pb-[4%] mx-auto py-20 grid lg:grid-cols-2 gap-4 items-center max-w-6xl">
      {/* Left side with code screenshots */}
      <div
        ref={ref}
        className={`relative grid grid-cols-2 gap-4 mt-20 mb-32 transition-transform duration-1000 ease-out`}
      >
        <div className="relative col-span-2">
          {/* First card */}
          <Image
            src={DiscordImage01}
            alt="Code editor screenshot"
            width={200}
            height={220}
            className={`rounded-lg shadow-lg ml-[20%] transform transition-all duration-1000 ease-out ${
              isIntersecting ? "translate-y-[-20px]" : "translate-y-[50px]"
            }`}
          />
          {/* Second card */}
          <Image
            src={DiscordImage02}
            alt="Code editor screenshot"
            width={200}
            height={220}
            className={`absolute bottom-[60%] right-[20%] rounded-lg shadow-lg transform transition-all duration-1000 ease-out ${
              isIntersecting ? "translate-y-[-10px] translate-x-[10px]" : "translate-y-[50px] translate-x-0"
            }`}
          />
          {/* Third card */}
          <Image
            src={DiscordImage03}
            alt="Code editor screenshot"
            width={200}
            height={220}
            className={`absolute top-[60%] right-[30%] rounded-lg shadow-lg transform transition-all duration-1000 ease-out ${
              isIntersecting ? "translate-y-[-15px] translate-x-[-10px]" : "translate-y-[50px] translate-x-0"
            }`}
          />
        </div>
      </div>

      {/* Right side with content */}
      <div className="space-y-6 text-center">
        <h1 className="text-3xl text-white font-bold">
          Exclusive{" "}
          <span className="text-[#ff0000]">Doubt Assistance</span>
        </h1>
        <p className="text-xl  text-white">
          Get 1:1 doubt support from exclusive TAs and the batch community
        </p>
        <button className="bg-red-500 ml-[35%] text-white px-6 py-3 rounded-lg text-lg hover:bg-red-700 transition-all flex items-center">
          Enroll Now
          <span className="ml-2">→</span>
        </button>
      </div>
    </div>
    </div>
  );
}
