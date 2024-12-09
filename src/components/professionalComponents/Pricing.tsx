import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  Coffee, 
  Box, 
  Mail, 
  Briefcase, 
  Github, 
  LinkedinIcon,
  MessageSquare
} from 'lucide-react';
import lwlogo from "../../../public/assets/LW-white.png";
const Pricing = () => {
  return (
    <div className="bg-[#181A1B]  overflow-x-hidden" id="bookyourseat">
  <h2 className="text-lg pl-4 pr-4  sm:text-2xl text-white text-center mb-4 pt-8 ">
    Real Skills, Real Projects:{" "}
    <span className="text-[#ff0000]">7 days Bootcamp Training You Need</span>
  </h2>

  <div className="w-full bg-[#181A1B] max-w-6xl mx-auto pt-10 pb-10 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Left Column */}
    <div className="space-y-6">
      {/* Learning Platform Card */}
      <Card className="bg-gray-900 text-white p-6">
        <CardContent className="space-y-4">
          <img 
            src="/bta2.png" 
            alt="Basic to Advance" 
            className="w-24 sm:w-36 h-10 sm:h-20"
          />
          <h3 className="text-md sm:text-lg font-bold">From Basic to Advance
            <br></br>
             Level</h3>
          <p className="text-gray-300 text-sm sm:text-base">
            Best part about this 7 days Bootcamp Training Program, no prior knowledge required, learn from the Best Mentor & 100% practical training
          </p>
        </CardContent>
      </Card>

      {/* Career Blueprint Card */}
      <Card className="bg-gray-900 text-white p-6">
        <CardContent className="space-y-4">
          <h3 className="text-md sm:text-lg font-bold">Build Live Technical
            <br></br>
             Project</h3>
          <p className="text-gray-300 text-sm sm:text-base">
            Learn, Research, Implement & Build a Live project with IT Professionals from across India using Cloud with AI, the most demanded technologies
          </p>
          <img 
            src="/liveProjects.png" 
            alt="Live Projects" 
            className="w-full h-32 sm:h-40 object-cover rounded-lg"
          />
        </CardContent>
      </Card>
    </div>

    {/* Center Column */}
    <div className="flex flex-col items-center justify-center">
      <Card className="bg-gray-900 text-white p-6 sm:p-8 relative">
        <CardContent className="space-y-6 text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-[#111827] p-2 rounded-2xl flex items-center justify-center">
            <img src={lwlogo.src.toString()} width={110} height={48} alt="Logo" />
          </div>
          <h2 className="text-lg sm:text-2xl font-bold">
            By <span className="text-[#ff0000]">Mr Vimal Daga</span>
          </h2>
          <h3 className="text-md sm:text-lg font-bold text-white">
            7 days Bootcamp Training Program
          </h3>
          <p className="text-gray-300 text-sm sm:text-base">
            Best Industry Relevant Training Content with real use case based application. In just 7 days with 50+ hours of learning, get to learn what industry is looking for
          </p>
          <a href="https://rzp.io/rzp/qwKtMRFD" target="_blank">
            <button className="bg-[#ff0000] mt-2 font-bold text-sm text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#ff0000] hover:shadow-white shadow-md transition-colors">
              Just @ INR 5,000 + Taxes
            </button>
          </a>
        </CardContent>
        {/* Background Circle */}
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full border-4 border-gray-800 rounded-full transform scale-125 sm:scale-150" />
        </div>
      </Card>
    </div>

    {/* Right Column */}
    <div className="space-y-6">
      {/* Assignments Card */}
      <Card className="bg-gray-900 text-white p-6">
        <CardContent className="space-y-4">
          <img 
            src="/getcirtified.png" 
            alt="Get Certified" 
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
          <h4 className="text-md sm:text-lg font-bold text-white">Get Certified & 
            <br></br>
            Recognised</h4>
          <p className="text-gray-300 text-sm sm:text-base">
            Acquire Industry Relevant Project & Bootcamp Training Certificate once you complete your live project at LW Informatics Pvt Ltd which will help you secure your job
          </p>
        </CardContent>
      </Card>

      {/* Community Card */}
      <Card className="bg-gray-900 text-white p-6">
        <CardContent className="space-y-4">
          <img 
            src="/discord.png" 
            alt="Discord Logo" 
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
          <h3 className="text-md sm:text-lg font-bold text-white">Premium Discord Community</h3>
          <p className="text-gray-300 text-sm sm:text-base">
            A community where you meet people from various companies to interact & technical team members to help you solve your doubts
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</div>


  );
};

export default Pricing;