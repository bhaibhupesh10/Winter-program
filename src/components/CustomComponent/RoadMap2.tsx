import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Brain, 
  MessageSquare, 
  Users, 
  BarChart, 
  Bot,
  Activity,
  Globe,
  Clock,
  Trophy,
  Zap
} from 'lucide-react';

const RoadMap2 = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm text-gray-600 mb-2">Your Transformative Journey in ML & AI</p>
        <h1 className="text-3xl font-bold mb-1">The PGP ML & AI</h1>
        <h2 className="text-3xl font-bold text-red-500">Learning Journey</h2>
      </div>

      {/* Journey Steps */}
      <div className="relative">
        {/* Vertical dotted line with circles */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
          <div className="w-px border-l-2 border-dashed border-purple-600 h-full absolute left-1/2 transform -translate-x-1/2" />
          {[1, 2, 3, 4].map((num) => (
            <div 
              key={num}
              className="absolute w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white"
              style={{ top: `${(num - 1) * 33}%` }}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="space-y-32">
          {/* Step 1 */}
          <div className="grid grid-cols-2 gap-24">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Start Your PGP ML AI Journey</h3>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p>Begin your transformative path in a cutting edge domain.</p>
                </div>
              </CardContent>
            </Card>
            <div /> {/* Empty space for alignment */}
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-2 gap-24">
            <div /> {/* Empty space for alignment */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Complete Your Core Courses</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <Brain className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <p>Stats and EDA</p>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <Bot className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <p>Machine Learning - Supervised and Unsupervised</p>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <Activity className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <p>Deep Learning</p>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <MessageSquare className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <p>NLP</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-2 gap-24">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Choose your specialisation</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <BarChart className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <p>MLOps</p>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <Bot className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <p>Generative AI</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div /> {/* Empty space for alignment */}
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-2 gap-24">
            <div /> {/* Empty space for alignment */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Career Phase</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <Users className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <p>Personalized Career Mentorship Sessions</p>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <Globe className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <p>upGrad's Exclusive Job Portal Access</p>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <Clock className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <p>Just-in-Time Interviews</p>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <Trophy className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <p>High-Performance Coaching (1:1)</p>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <Zap className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <p>AI Powered Profile Builder</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors shadow-lg">
          Talk to a Career Expert
        </button>
      </div>
    </div>
  );
};

export default RoadMap2;