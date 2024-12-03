"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
// import Typewriter from 'typewriter-effect';
import { Typewriter } from 'react-simple-typewriter'
export default function NewHero() {
  return (
    <div className="min-h-full pb-8  bg-black">
  <div className="container max-w-6xl mx-auto px-4 pt-4">
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
      {/* Left Column */}
      <div className="space-y-6">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-white leading-tight">
        Technical Winter Industrial 
          <br />
          {/* With Our{" "} */}
          <span className="text-[#FF6B6B]">
            {'<'}
            <Typewriter
            words={['Practical ', 'Offline ', 'Demanded !']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}

          />
            {'>'}
          </span>
          <br />
          Training Program 
        </h1>
        <p className="text-md md:text-lg pb-4 text-gray-300 max-w-xl">
        10 days long complete practical technical learning with project implementation on 

        <span className="text-[#ff0000] font-bold"> Machine Learning with AWS Cloud
        </span>
        </p>

        <div className="space-x-4">
        <a href="#liveProjects">
        <Button 
        // bg-[#DC2626] text-white rounded-lg text-sm font-semibold hover:bg-[#-[#DC2626]/90
          className="bg-[#DC2626] hover:bg-[#FF5151]  pt-4 text-white py-6 text-lg rounded-md"
        >
                        Build Live Project
        </Button>
        </a>

        <a href="#programcohorts">
        <Button 
        // bg-[#DC2626] text-white rounded-lg text-sm font-semibold hover:bg-[#-[#DC2626]/90
          className="bg-[#25262B]   pt-4 text-white py-6 text-lg rounded-md"
        >
Starts on 26th Dec, 2024

        </Button>
        </a>

       
        </div>
      </div>

      {/* Right Column */}
      <div className="relative">
        <Image
          src="/newHero.png"
          alt="Learning collage with tech icons"
          width={500}
          height={600}
          className="object-contain"
          priority
        />
      </div>
    </div>
  </div>
</div>

  )
}

