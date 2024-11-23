import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Linkedin, 
  Github, 
  Briefcase, 
  FileText, 
  Mail,
  Crown
} from 'lucide-react';

const Roadmap = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gray-900 text-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-2">
          Career Assignments with Personalized Reviews
        </h2>
        <p className="text-gray-300">
          Your <span className="text-purple-400">submissions</span> will be{' '}
          <span className="text-blue-400">reviewed</span> and{' '}
          <span className="text-green-400">optimized</span> by{' '}
          <span className="text-yellow-400">expert mentors</span>.
        </p>
      </div>

      {/* Icons Row and Vector Lines */}
      <div className="relative mb-16">
        {/* Icons */}
        <div className="flex justify-between mb-4">
          {[
            { icon: Linkedin, label: 'LinkedIn', color: 'bg-blue-500' },
            { icon: Github, label: 'GitHub', color: 'bg-gray-700' },
            { icon: Briefcase, label: 'Portfolio', color: 'bg-emerald-500' },
            { icon: FileText, label: 'Resume', color: 'bg-yellow-500' },
            { icon: Mail, label: 'Cover Letter', color: 'bg-red-500' }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`p-4 ${item.color} rounded-lg mb-2`}>
                <item.icon className="w-6 h-6" />
              </div>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Vector Lines Image */}
        <div className="absolute top-12 left-0 w-full h-24 z-0">
          <img
            src="/lines.svg"
            alt="Connecting Lines"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* JSM Mentor Logo */}
      <div className="flex flex-col items-center mb-16">
        <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-2">
          <span className="text-2xl font-bold text-blue-600">{`{JS}`}</span>
        </div>
        <span className="text-gray-300">JSM Mentor</span>
      </div>

      {/* Review Card */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center gap-2">
            <Crown className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl font-bold">Detailed review</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-yellow-400 font-semibold mb-2">
                Experience Section Detailing:
              </h4>
              <p className="text-gray-300">
                Each role should have a detailed description that includes the{' '}
                <span className="text-blue-400">context of work</span>. 
                Mention the team size, the approach you took, the{' '}
                <span className="text-green-400">technologies</span> you used, 
                and the outcome. For instance, "Led a team of 5 developers in 
                migrating a legacy monolithic application to a microservice architecture 
                using Docker and Kubernetes, resulting in a 40% reduction in deployment 
                time and improved system scalability."
              </p>
            </div>

            <div>
              <h4 className="text-yellow-400 font-semibold mb-2">
                Skill Endorsements and Validations:
              </h4>
              <p className="text-gray-300">
                Go beyond the basic skills list. Add niche and advanced skills like{' '}
                <span className="text-purple-400">"System Design"</span> and{' '}
                <span className="text-green-400">"CI/CD pipelines"</span> and 
                ensure they are endorsed by reputable figures in your network. 
                Validate these skills through LinkedIn's skill assessments to stand out.
              </p>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mt-6">
            Enroll now to get your career profiles reviewed ↓
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Roadmap;