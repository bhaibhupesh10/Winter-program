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

const Pricing = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 grid grid-cols-3 gap-6">
      {/* Left Column */}
      <div className="space-y-6">
        {/* Learning Platform Card */}
        <Card className="bg-gray-900 text-white p-6">
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-lg">TS</span>
              </div>
              <div className="p-2 bg-gray-700 rounded-lg flex items-center justify-center">
                <Coffee className="w-5 h-5" />
              </div>
              <div className="p-2 bg-blue-500 rounded-lg flex items-center justify-center">
                <Box className="w-5 h-5" />
              </div>
            </div>
            <div className="p-4 bg-emerald-400 rounded-lg w-12 h-12 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold">Custom Learning Platform</h3>
            <p className="text-gray-300 text-sm">
              Detailed instructions and easy-to-follow strategies.
            </p>
          </CardContent>
        </Card>

        {/* Career Blueprint Card */}
        <Card className="bg-gray-900 text-white p-6">
          <CardContent className="space-y-4">
            <h3 className="text-xl font-bold">Dev Career Blueprint</h3>
            <p className="text-gray-300 text-sm">
              Access proven strategies that will increase your chances of landing a dev job faster and with less effort.
            </p>
            <img 
              src="/manrun.webp" 
              alt="Career Growth" 
              className="w-full h-40 object-cover rounded-lg"
            />
          </CardContent>
        </Card>
      </div>

      {/* Center Column */}
      <div className="flex flex-col items-center justify-center">
        <Card className="bg-gray-900 text-white p-8 relative">
          <CardContent className="space-y-6 text-center">
            <div className="w-24 h-24 mx-auto bg-white rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">{`{L.W}`}</span>
            </div>
            <h2 className="text-2xl font-bold">Linux World</h2>
            <h3 className="text-xl text-emerald-400 text-[#DC2626]">Dev Career Accelerator</h3>
            <p className="text-gray-300 text-sm">
              Comprehensive career support including resume reviews, interview preparation, and job placement assistance.
            </p>
            <button className="bg-[#DC2626] text-white px-6 py-3 rounded-lg hover:bg-bg-[#DC2626] transition-colors">
            Participate 3500+Tax ↓
            </button>
          </CardContent>
          {/* Background Circle */}
          <div className="absolute inset-0 -z-10">
            <div className="w-full h-full border-4 border-gray-800 rounded-full transform scale-150" />
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
                <Mail className="w-5 h-5" />
              </div>
            <a href="https://www.linkedin.com/company/linuxworld-informatics-pvt-ltd/?originalSubdomain=in" target='__blank'>  <div className="p-2 bg-blue-600 rounded-lg flex items-center justify-center">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              </a>
              <div className="p-2 bg-purple-500 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
            </div>
            <div className="p-4 bg-emerald-400 rounded-lg w-12 h-12 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-3xl font-bold text-[#DC2626]">30+</h3>
            <h4 className="text-xl font-bold">Assignments with Reviews</h4>
            <p className="text-gray-300 text-sm">
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
              className="w-16 h-16"
            />
            <h3 className="text-xl font-bold">Active Community</h3>
            <p className="text-gray-300 text-sm">
              Connect with Adrian, the JSM team and other developers
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;