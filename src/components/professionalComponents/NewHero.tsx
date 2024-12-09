"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
// import Typewriter from 'typewriter-effect';
import { Typewriter } from 'react-simple-typewriter'
export default function NewHero() {
  return (
    <div className="min-h-full pb-8  bg-black" id="newhero">
  <div className="container max-w-6xl mx-auto px-4 pt-4">
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
      {/* Left Column */}
      <div className="space-y-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
        Become a part of 
          <br />
          {/* With Our{" "} */}
          <span className="text-[#ff0000]">
            {'<'}
            <Typewriter
            words={['Most Demanded', 'Industry use case Based', 'Uniquely compiled']}
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
          Technical Bootcamp
        </h1>
        <p className="text-md md:text-lg pb-4 text-gray-300 max-w-xl">
        7 days long complete practical technical learning with project implementation on 

        <span className="text-[#ff0000] font-bold"> Machine Learning with AWS Cloud
        </span>
        </p>

        <div className="space-x-4 flex overflow-hidden ">
        <a href="#liveProjects">
        <Button 
        // bg-[#DC2626] text-white rounded-lg text-sm font-semibold hover:bg-[#-[#DC2626]/90
          className="bg-[#ff0000] mb-3 hover:bg-[#ff0000] hover:shadow-white hover:shadow-md pt-4 text-white py-6 text-md rounded-md"
        >
                        Project Details
        </Button>
        </a>

        <a href="#mentorsection">
        <Button 
        // bg-[#DC2626] text-white rounded-lg text-sm font-semibold hover:bg-[#-[#DC2626]/90
          className="bg-[#25262B]   pt-4 text-white py-6 px-4 text-md rounded-md"
        >
Know Your Mentor

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

