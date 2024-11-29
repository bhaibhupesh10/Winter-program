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
    <div className="relative w-full bg-gradient-to-b from-purple-50/50 to-white dark:from-purple-950/10 dark:to-background min-h-screen py-16">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
        {/* Modern Header with Gradient Text */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-sm font-medium text-purple-600 dark:text-purple-400 tracking-wider uppercase">
            Your Transformative Journey
          </p>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-red-500 text-transparent bg-clip-text">
            The PGP ML & AI Journey
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Embark on a transformative learning experience that will shape your future in AI
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Modern Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
            <div className="w-1 bg-gradient-to-b from-purple-500 to-red-500 h-full absolute left-1/2 transform -translate-x-1/2 rounded-full opacity-20" />
            <div className="w-0.5 bg-gradient-to-b from-purple-500 to-red-500 h-full absolute left-1/2 transform -translate-x-1/2" />
          </div>

          {/* Timeline Markers */}
          {[1, 2, 3, 4].map((num) => (
            <div 
              key={num}
              className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center"
              style={{ top: `${(num - 1) * 33}%` }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-red-500 p-0.5">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-lg font-bold bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text">
                    {num}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Cards Container */}
          <div className="space-y-32">
            {/* Step 1 */}
            <div className="grid grid-cols-2 gap-24">
              <Card className="group relative overflow-hidden border-none bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-6 relative">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-red-500 text-transparent bg-clip-text">
                      Start Your Journey
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Begin your transformative path in a cutting edge domain.
                  </p>
                </CardContent>
              </Card>
              <div /> {/* Empty space for alignment */}
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-2 gap-24">
              <div /> {/* Empty space for alignment */}
              <Card className="group relative overflow-hidden border-none bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-6 relative">
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
              <Card className="group relative overflow-hidden border-none bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-6 relative">
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
              <Card className="group relative overflow-hidden border-none bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-6 relative">
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
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <button className="group bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
          Talk to a Career Expert
          <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default RoadMap2;