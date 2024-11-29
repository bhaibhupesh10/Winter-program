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
    <div className='bg-[#181A1B]'>
    <div className="w-full bg-[#181A1B] max-w-6xl mx-auto pt-20 pb-20 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Left Column */}
  <div className="space-y-6">
    {/* Learning Platform Card */}
    <Card className="bg-gray-900 text-white p-6">
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-sm sm:text-lg">TS</span>
          </div>
          <div className="p-2 bg-gray-700 rounded-lg flex items-center justify-center">
            <Coffee className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="p-2 bg-blue-500 rounded-lg flex items-center justify-center">
            <Box className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
        <div className="p-4 bg-emerald-400 rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
          <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold">Custom Learning Platform</h3>
        <p className="text-gray-300 text-xs sm:text-sm">
          Detailed instructions and easy-to-follow strategies.
        </p>
      </CardContent>
    </Card>

    {/* Career Blueprint Card */}
    <Card className="bg-gray-900 text-white p-6">
      <CardContent className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold">Dev Career Blueprint</h3>
        <p className="text-gray-300 text-xs sm:text-sm">
          Access proven strategies that will increase your chances of landing a dev job faster and with less effort.
        </p>
        <img 
          src="/manrun.webp" 
          alt="Career Growth" 
          className="w-full h-32 sm:h-40 object-cover rounded-lg"
        />
      </CardContent>
    </Card>
  </div>

  {/* Center Column */}
  <div className="flex flex-col items-center justify-center">
    <Card className="bg-gray-900 text-white p-6 sm:p-8 relative">
      <CardContent className="space-y-6 text-center">
        <div className="w-20 h-20  sm:w-24 sm:h-24 mx-auto bg-black p-2 rounded-2xl flex items-center justify-center">
          <span className="text-lg bg-black sm:text-2xl font-bold text-blue-600">

          <span className='bg-black'>  <img src={lwlogo.src.toString()} width={110} height={48} alt="Logo" /></span>
          </span>
        </div>
        <h2 className="text-lg sm:text-2xl font-bold">Linux World</h2>
        <h3 className="text-md sm:text-xl text-emerald-400 text-[#DC2626]">Dev Career Accelerator</h3>
        <p className="text-gray-300 text-xs sm:text-sm">
          Comprehensive career support including resume reviews, interview preparation, and job placement assistance.
        </p>
        <button className="bg-[#DC2626] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#DC2626] transition-colors">
          Participate 3500+Tax ↓
        </button>
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
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 bg-pink-500 rounded-lg flex items-center justify-center">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <a href="https://www.linkedin.com/company/linuxworld-informatics-pvt-ltd/?originalSubdomain=in" target="__blank">
            <div className="p-2 bg-blue-600 rounded-lg flex items-center justify-center">
              <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </a>
          <div className="p-2 bg-purple-500 rounded-lg flex items-center justify-center">
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
        <div className="p-4 bg-emerald-400 rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
          <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#DC2626]">30+</h3>
        <h4 className="text-lg sm:text-xl font-bold">Assignments with Reviews</h4>
        <p className="text-gray-300 text-xs sm:text-sm">
          Receive detailed feedback on your dev portfolio and all career profiles by industry professionals.
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
        <h3 className="text-lg sm:text-xl font-bold">Active Community</h3>
        <p className="text-gray-300 text-xs sm:text-sm">
          Connect with Adrian, the JSM team and other developers.
        </p>
      </CardContent>
    </Card>
  </div>
</div>
</div>

  );
};

export default Pricing;