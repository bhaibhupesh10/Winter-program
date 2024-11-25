import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, LineChart, MessageCircle, Users, Github, Video } from 'lucide-react';

interface Project {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

const projects: Project[] = [
  {
    icon: <Code className="w-8 h-8 text-red-600" />,
    title: "Healthcare AI",
    subtitle: "(Healthcare  & Diagnostic )",
    description: "Using Amazon Rekognition for analyzing medical images and identifying conditions such as tumors or anomalies in X-rays or MRIs.",
  },
  {
    icon: <LineChart className="w-8 h-8 text-red-600" />,
    title: "Retail AI",
    subtitle: "(Ecommerce &Recommendation )",
    description: "Using AWS SageMaker to build machine learning models that predict what products a customer might be interested in based on past purchase history and browsing behavior.",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-red-600" />,
    title: " Finance AI:",
    subtitle: "( Fraud Detection )",
    description: "Using AWS SageMaker to train models for fraud detection by analyzing transaction data and customer behavior. AWS Lambda is used for real-time processing of incoming transactions",
  },
  {
    icon: <Users className="w-8 h-8 text-red-600" />,
    title: "AI-Powered Chatbots",
    subtitle: "(chatbot & AI)",
    description: "Building a customer support chatbot using Amazon Lex, which interacts with customers in a natural, conversational manner.",
  },
  {
    icon: <Github className="w-8 h-8 text-red-600" />,
    title: "Github",
    subtitle: "(Version Control)",
    description: "We'll attempt to implement our own version control system in the form of a full stack project.",
  },
  {
    icon: <Video className="w-8 h-8 text-red-600" />,
    title: "Zoom",
    subtitle: "(Live Video Streaming)",
    description: "Build a video conferencing solution using socket.io & WebRTC.",
  },
];

const ProjectsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gray-50">
      <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-8">
      From Learning to <span className='text-[#DC2626]'>Implementation:</span>Capstone Projects That <span className='text-[#DC2626]'>Matter</span> 
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <Card 
            key={index}
            className="bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-100 rounded-lg"
          >
            <CardContent className="p-6">
              <div className="w-16 h-16 rounded-full bg-[#FEE2E2] mx-auto flex items-center justify-center mb-4 shadow-sm text-center">
                {project.icon}
              </div>
              <h3 className="text-lg text-center font-bold text-gray-800 mb-2">
                {project.title}
                <span className="block text-sm text-gray-600">
                  {project.subtitle}
                </span>
              </h3>
              <p className="text-sm text-center text-gray-500 leading-relaxed">
                {project.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
