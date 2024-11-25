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
    title: "Airbnb",
    subtitle: "(Travel & Listing)",
    description: "Build your own version of full stack Airbnb with user authentication, property listings, and more.",
  },
  {
    icon: <LineChart className="w-8 h-8 text-red-600" />,
    title: "Zerodha",
    subtitle: "(Investing & Stocks)",
    description: "Build your own version of MERN stack Zerodha with Restful APIs & AWS Deployment.",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-red-600" />,
    title: "ChatGPT",
    subtitle: "(OpenAI APIs)",
    description: "We'll explore the OpenAI APIs to build our own chatbot.",
  },
  {
    icon: <Users className="w-8 h-8 text-red-600" />,
    title: "Linkedin",
    subtitle: "(Social Media)",
    description: "Build a MERN stack social media platform to connect & share with your network.",
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
    <div className=" mx-auto px-4  max-w-6xl py-12 bg-gray-50">
      <h1 className="text-center  text-3xl font-extrabold text-gray-800 mb-8">
        Build Industry Grade{" "}
        <span className="text-[#ff0000]">Projects</span>
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
