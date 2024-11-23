'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
    <div className="container min-h-screen mt-[4%] mx-auto px-4 py-12 grid lg:grid-cols-2 gap-4 items-center">
      {/* Left side with code screenshots */}
      <div
        ref={ref}
        className={`relative grid grid-cols-2 gap-4 transition-transform duration-1000 ease-out`}
      >
        <div className="relative col-span-2">
          {/* First card */}
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="Code editor screenshot"
            width={200}
            height={220}
            className={`rounded-lg shadow-lg ml-[20%] transform transition-all duration-1000 ease-out ${
              isIntersecting ? "translate-y-[-20px]" : "translate-y-[50px]"
            }`}
          />
          {/* Second card */}
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Code editor screenshot"
            width={200}
            height={220}
            className={`absolute bottom-[60%] right-[20%] rounded-lg shadow-lg transform transition-all duration-1000 ease-out ${
              isIntersecting ? "translate-y-[-10px] translate-x-[10px]" : "translate-y-[50px] translate-x-0"
            }`}
          />
          {/* Third card */}
          <Image
            src="/placeholder.svg?height=300&width=300"
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
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">
          Exclusive{" "}
          <span className="text-[#ff0000]">Doubt Assistance</span>
        </h1>
        <p className="text-xl text-gray-600">
          Get 1:1 doubt support from exclusive TAs and the batch community
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-700 transition-all flex items-center">
          Enroll Now
          <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
}
