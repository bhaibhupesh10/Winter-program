"use client";
import React, { useEffect, useState, useRef } from 'react';
import { Youtube, Instagram, Linkedin } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import MentorFeatured from './MentorFeatured';
import CompaniesBefefited from './CompanyBenifited';

import { CircleCheck } from 'lucide-react';
import mentor1 from "../../../public/assets/mentor-with-VIPS/mentor-gallery-1.jpeg";
import mentor2 from "../../../public/assets/mentor-with-VIPS/mentor-gallery-2.jpeg";
import mentor3 from "../../../public/assets/mentor-with-VIPS/mentor-gallery-3.jpeg";
import mentor4 from "../../../public/assets/mentor-with-VIPS/mentor-gallery-4.jpeg";
import mentor5 from "../../../public/assets/mentor-with-VIPS/mentor-gallery-5.jpeg";
import mentor6 from "../../../public/assets/mentor-with-VIPS/techie1.png";
import mentor7 from "../../../public/assets/mentor-with-VIPS/techie2.png";
import mentor8 from "../../../public/assets/mentor-with-VIPS/techie3.png";

const MentorProfile = () => {
  const mentorImages = [
    mentor1.src.toString(),
    mentor2.src.toString(),
    mentor6.src.toString(),
    mentor3.src.toString(),
    mentor7.src.toString(),
    mentor4.src.toString(),
    mentor8.src.toString(),
    mentor5.src.toString(),
  ];

  // State to track if the component is in view
  const [isVisible, setIsVisible] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Use Intersection Observer to set isVisible to true when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.4 } // 40% of the component in view to trigger
    );

    if (profileRef.current) observer.observe(profileRef.current);
    return () => observer.disconnect();
  }, []);

  // Counter function to animate each number
  const useCounter = (target: number, duration: number, start: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return; // Only start if the component is visible
      let startValue = 0;
      const increment = Math.ceil(target / (duration / 16)); // Calculate increment

      const counter = setInterval(() => {
        startValue += increment;
        if (startValue >= target) {
          setCount(target); // Snap to target count
          clearInterval(counter);
        } else {
          setCount(startValue);
        }
      }, 16); // Update every 16ms for 60fps

      return () => clearInterval(counter);
    }, [target, duration, start]);

    return count;
  };

  // Create separate counter states for each social stat
  const youtubeCount = useCounter(300000, 2000, isVisible);
  const instagramCount = useCounter(1100000, 2000, isVisible);
  const linkedinCount = useCounter(60000, 2000, isVisible);

  // Social stats data with URLs and counter values
  const socialStats = [
    { 
      icon: <Youtube className="w-6 h-6 text-red-600" />, 
      count: youtubeCount,
      label: "subscribers", 
      url: "https://www.youtube.com/@IIECconnect"
    },
    { 
      icon: <Instagram className="w-6 h-6 text-pink-600" />, 
      count: instagramCount,
      label: "followers", 
      url: "https://www.instagram.com/vimaldaga.india/?hl=en"
    },
    { 
      icon: <Linkedin className="w-6 h-6 text-blue-600" />, 
      count: linkedinCount,
      label: "followers", 
      url: "https://www.linkedin.com/in/vimaldaga/"
    }
  ];

  return (
    <div className='bg-[#181A1B]'  id="mentorsection">

    <div ref={profileRef} className="max-w-6xl pt-12 mx-auto p-6 lg:px-8">

    <h1 className="text-center mb-4  text-lg sm:text-2xl text-white pb-4">
    Know Your Mentor for 7 Days Bootcamp : <span className="text-[#ff0000]"> Mr Vimal Daga </span>
          </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Image Carousel and Mentor Details */}
        <div className="space-y-6">
          <div className="rounded-xl overflow-hidden border-2 border-gray-100 shadow-lg bg-white p-1">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="w-full md:h-[500px] rounded-lg overflow-hidden sm:h-[450px]"
            >
              {mentorImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Mentor Image ${index + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Mentor Details Card */}
          {/* <div className="bg-blue-50 rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-blue-800 md:text-sm   font-medium bg-blue-100/50 px-3 py-1 rounded-full">
                Internationally Recognised Industry Expert
              </span>
            </div>
            <div className="space-y-1 pl-5">
              <h2 className="md:text-2xl  font-bold text-gray-900">Mr. Vimal Daga</h2>
              <p className="text-gray-600 font-sm">Founder of LinuxWorld | #13 | IIEC | JAZBAA </p>
            </div>
          </div> */}
          <div className="grid grid-cols-3 gap-4">
            {socialStats.map((stat, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-2 text-center border border-blue-100 shadow-sm hover:shadow-md transition-all duration-200 -mb-2">
                <a href={stat.url} target="_blank" rel="noopener noreferrer">
                  <div className="flex justify-center">{stat.icon}</div>
                </a>
                <div className="font-bold text-md text-gray-900">
                  {stat.count.toLocaleString()}+
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8">
       
          <div className="space-y-6 -mb-3">
            {/* <h1 className="text-3xl font-bold text-white leading-extra-tight -mb-4">
            Know Your Mentor for Winter Training : <span className="text-[#ff0000]"> Mr Vimal Daga </span>
              The Visionary Behind <span className="text-[#ff0000]">Winter Program</span> 
            </h1> */}
            <div className="space-y-4 text-black-800">
             

              <p className="text-white text-md text-md -mb-2 pl-6">
              Mr. Vimal Daga, a World Record Holder, Technologist, Philanthropist, and 2x TEDx Speaker, is passionately dedicated to his vision of “Making India Future-Ready.
              </p>

              <ul className="grid md:grid-cols-1 gap-y-2 list-disc pl-5 text-black -mb-1 list-none sm:grid-cols-1">
                <li className="leading-relaxed text-sm text-white leading-tight">
                  
                  <CircleCheck className='inline text-green-400 ml-2 h-5' />

                <div className='p-2 inline text-sm border-lg border-red inline flext item-center '>
RedHat Certified Architect Level 25 and Enterprise Application Level 11 a global first.

                </div>

                </li>

                <li className="leading-relaxed text-sm text-white leading-tight">
                  
                  <CircleCheck className='inline text-green-400 ml-2 h-5' />

                <div className='p-2 inline text-sm border-lg border-red inline flext item-center '>
                Achieved 11 AWS Global Certifications in just 11 days, a feat others take years to accomplish.

                </div>

                </li>

                
                <li className="leading-relaxed text-sm text-white leading-tight">
                  
                  <CircleCheck className='inline text-green-400 ml-2 h-5' />

                <div className='p-2 text-sm inline border-lg border-red inline flext item-center '>
                Known as the “Integration Guru,” mastering 152+ tools and technologies with unmatched expertise in integrating them seamlessly.


                </div>

                </li>

                <li className="leading-relaxed text-sm text-white leading-tight">
                  
                  <CircleCheck className='inline text-green-400 ml-2 h-5' />

                <div className='p-2 text-sm inline border-lg border-red inline flext item-center'>
                A mentor and consultant to Fortune 500 companies, having trained CIOs and CTOs in cutting-edge technologies.



                </div>

                </li>
               
                

              </ul>

              <p className="text-white text-md pl-6">
              His expertise spans Machine Learning, Deep Learning, Delphix, AppDynamics, Docker, DevOps, Cloud Computing, AWS, and more ensuring that every learner is equipped to tackle real-world challenges.
              </p>

              <p className="text-white text-md pb-2 pl-6">
              Join Mr. Vimal Daga in this life-changing 7 days Bootcamp Training Program and experience firsthand how he transforms potential into industry-ready excellence
              </p>
            </div>
          </div>

          {/* Social Stats with Counter */}
          

          {/* Enhanced Featured Section */}
          <div className="border   bg-blue-50 border-gray-700 rounded-xl p-4 shadow-sm">

  <CompaniesBefefited  />
  {/* <MentorFeatured /> */}
</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MentorProfile;