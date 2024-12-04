'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import DiscordImage03 from "../../../public/dis4.png";
import DiscordImage02 from "../../../public/dis2.png";
import DiscordImage01 from "../../../public/dis3.png";

export default function DoubtAssistance() {
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

  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  // State for modal visibility and selected image
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="bg-[#181A1B]">
      <div className="container sm:px-6 mx-auto pt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center max-w-6xl">
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
              className={`border-4 rounded-lg shadow-lg ml-[20%] transform transition-all duration-1000 ease-out ${
                isIntersecting ? "translate-y-[-20px]" : "translate-y-[50px]"
              }`}
              onClick={() => handleImageClick("/dis3.png")}
            />
            {/* Second card */}
            <Image
              src={DiscordImage02}
              alt="Code editor screenshot"
              width={200}
              height={220}
              className={`border-4 absolute bottom-[60%] right-[20%] rounded-lg shadow-lg transform transition-all duration-1000 ease-out ${
                isIntersecting
                  ? "translate-y-[-10px] translate-x-[10px]"
                  : "translate-y-[50px] translate-x-0"
              }`}
              onClick={() => handleImageClick("/dis2.png")}
            />
            {/* Third card */}
            <Image
              src={DiscordImage03}
              alt="Code editor screenshot"
              width={200}
              height={220}
              className={`border-4 absolute top-[60%] right-[30%] rounded-lg shadow-lg transform transition-all duration-1000 ease-out ${
                isIntersecting
                  ? "translate-y-[-15px] translate-x-[-10px]"
                  : "translate-y-[50px] translate-x-0"
              }`}
              onClick={() => handleImageClick("/dis4.png")}
            />
          </div>
        </div>

        {/* Right side with content */}
        <div className="space-y-6 text-center sm:px-0">
          <h1 className="text-lg sm:text-2xl text-white ">
            Exclusive{" "}
            <span className="text-[#ff0000]">Discord Community</span>
          </h1>
          <p className="text-sm sm:text-lg pb-4 text-white">
            Get 1:1 technical doubt support from our team & elite Discord
            community for lifetime
          </p>
          <a href="#bookyourseat" className="pt-8">
            <button className="bg-[#ff0000] text-white px-6 py-3 rounded-lg text-base sm:text-lg hover:shadow-white hover:shadow-md transition-all flex items-center justify-center mx-auto">
              Book Your Seat
              <span className="ml-2">→</span>
            </button>
          </a>
        </div>
      </div>

      {/* Modal for large image view */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
