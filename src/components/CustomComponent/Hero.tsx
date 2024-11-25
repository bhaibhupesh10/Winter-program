"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Vimalsir from "../../../public/vimalsir.png";
import LeftHero from "./miniComponent/LeftHero";

const FloatingShape = ({ children, className, left, top, animationDuration = 8 }: any) => {
  return (
    <div
      className={`absolute opacity-1 ${className}`}
      style={{
        left: `${left}%`,
        top: `${top}%`,
        transform: `translate(-50%, -50%)`,
        animation: `float ${animationDuration}s infinite ease-in-out`,
      }}
    >
      {children}
    </div>
  );
};

// Image component
const ImageTile = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="relative aspect-square rounded-lg overflow-hidden max-w-6xl">
      <Image
        src={imageUrl}
        alt="Ad image"
        width={200}
        height={200}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
};

export default function Hero() {
  // Sample image URLs - replace with your actual image URLs
  const images = [
    "/assets/backLogo/back1.jpg",
    "/assets/backLogo/back2.jpg",
    "/assets/backLogo/back3.jpg",
    "/assets/backLogo/back4.jpg",
    "/assets/backLogo/back5.jpg",
    "/assets/backLogo/back6.jpg",
    "/assets/backLogo/back7.jpg",
    "/assets/backLogo/back1.jpg",
    "/assets/backLogo/back1.jpg",
    "/assets/backLogo/back2.jpg",
    "/assets/backLogo/back3.jpg",
    "/assets/backLogo/back3.jpg",

  ];

  return (
    <div className="bg-black overflow-hidden">
      <style jsx global>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(-50%, -50%) translateY(0px) rotate(0deg);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          25% { 
            transform: translate(-50%, -50%) translateY(-15px) rotate(5deg);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          75% { 
            transform: translate(-50%, -50%) translateY(15px) rotate(-5deg);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
        }
      `}</style>

      {/* Main content */}
      <main className="max-w-6xl mt-0 mx-auto px-6 lg:px-14 pt-4 md:pt-8 pb-8 flex flex-col md:flex-row items-center relative z-10">
        {/* Left content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <LeftHero />
        </div>

        {/* Right content with image grid and instructor */}
        <div className="md:w-1/2 relative">
          {/* Image grid with blur effect */}
          <div className="grid grid-cols-4 gap-2 opacity-70 blur-[1px] transition-all duration-300 hover:blur-0 hover:opacity-80">
            {images.map((image, index) => (
              <ImageTile key={index} imageUrl={image} />
            ))}
          </div>

          {/* Centered instructor image */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="relative w-2/3 transform transition-all duration-300 hover:scale-105">
              <Image
                src={Vimalsir}
                alt="Featured instructor"
                width={400}
                height={500}
                className="rounded-lg drop-shadow-2xl"
                priority
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
