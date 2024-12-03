"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import healthCare from "../../../public/assets/healthcare.png";
import customerSupport from "../../../public/assets/customerSupport.png"
import finnance from "../../../public/assets/finence.png"
import ecommerce from "../../../public/assets/ecommerce.png"
// import { Motion, Spring } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

// Dynamic imports for Tooltip components
const TooltipProvider = dynamic(
  () => import("@/components/ui/tooltip").then((mod) => mod.TooltipProvider),
  { ssr: false }
);
const Tooltip = dynamic(
  () => import("@/components/ui/tooltip").then((mod) => mod.Tooltip),
  { ssr: false }
);
const TooltipTrigger = dynamic(
  () => import("@/components/ui/tooltip").then((mod) => mod.TooltipTrigger),
  { ssr: false }
);
const TooltipContent = dynamic(
  () => import("@/components/ui/tooltip").then((mod) => mod.TooltipContent),
  { ssr: false }
);

const courseData = [
    {
      id: "course1",
      title: "Healthcare AI: Diagnostic Tool with Amazon Rekognition",
      description: "Using Amazon Rekognition for analyzing medical images and identifying conditions such as tumors or anomalies in X-rays or MRIs. The AI model can be trained using SageMaker, integrating the images stored in AWS S3 and running real-time analysis through Rekognition for object and anomaly detection. The use of Lambda can automate workflows for real-time processing.",
      imageSrc: "/assets/healthcare.png",
      duration: "8 weeks",
      difficulty: "Advanced",
      technologies: ["AWS", "Rekognition", "SageMaker", "Lambda"],
      progress: 65,
      points: [
        "Use Rekognition for image analysis (detecting anomalies in medical images).",
        "Build and train models on SageMaker for disease prediction.",
        "Store medical images in AWS S3 and process them automatically.",
        "Use AWS Lambda for seamless automation of analysis tasks."
      ],
      realWorldExample: "AI-powered diagnostic tools that help doctors detect early signs of diseases like cancer in radiology images.",
      mentor: {
        name: "Mr. Vimal Daga",
        profile: "https://www.linkedin.com/in/vimaldaga/",
        imageSrc: "/assets/mentor.jpeg",
        expertise: "AI/ML Expert",
        experience: "15+ years"
      }
    },
    {
      id: "course2",
      title: "Retail AI: Personalized Product Recommendations",
      description: "Using AWS SageMaker to build machine learning models that predict what products a customer might be interested in based on past purchase history and browsing behavior. AWS Lex can be used to build a conversational chatbot for interacting with customers, while AWS Polly can convert recommendations into natural-sounding speech for voice-enabled shopping experiences.",
      imageSrc: "/assets/ecommerse.png",
      duration: "6 weeks",
      difficulty: "Intermediate",
      technologies: ["AWS", "SageMaker", "Lex", "Polly", "Comprehend"],
      progress: 0,
      points: [
        "Use SageMaker for product recommendation algorithms.",
        "Integrate Lex to build a conversational interface for interacting with customers.",
        "Use Polly to convert recommendations to speech.",
        "Perform sentiment analysis of customer feedback using Comprehend."
      ],
      realWorldExample: "Online retailers like Amazon use similar recommendation engines to suggest products based on user behavior.",
      mentor: {
        name: "TBD",
        profile: "https://www.linkedin.com/in/vimaldaga/",
        imageSrc: "/assets/mentor.jpeg",
        expertise: "Data Science Expert",
        experience: "10+ years"
      }
    },
    {
      id: "course3",
      title: "Finance AI: Fraud Detection System",
      description: "Using AWS SageMaker to train models for fraud detection by analyzing transaction data and customer behavior. AWS Lambda is used for real-time processing of incoming transactions, and AWS Comprehend is utilized for analyzing customer communication and sentiment to detect potential fraud patterns.",
      imageSrc: "/assets/finence.png",
      duration: "8 weeks",
      difficulty: "Advanced",
      technologies: ["AWS", "SageMaker", "Lambda", "Comprehend"],
      progress: 0,
      points: [
        "Use SageMaker for building fraud detection models.",
        "Automate fraud detection with AWS Lambda for real-time data processing.",
        "Analyze customer communications using Comprehend to detect suspicious activities."
      ],
      realWorldExample: "PayPal and Stripe use AI models to identify and prevent fraudulent transactions in real-time.",
      mentor: {
        name: "TBD",
        profile: "https://www.linkedin.com/in/vimaldaga/",
        imageSrc: "/assets/vimalsir.png",
        expertise: "AI/ML Security Expert",
        experience: "12+ years"
      }
    },
    {
      id: "course4",
      title: "Customer Support Automation: AI-Powered Chatbots",
      description: "Building a customer support chatbot using Amazon Lex, which interacts with customers in a natural, conversational manner. AWS Polly can be integrated to provide text-to-speech functionality for voice-based interactions. AWS Lambda automates backend processes such as handling customer queries and retrieving information from the AWS S3 storage.",
      imageSrc: "/assets/technicalSupport.png",
      duration: "5 weeks",
      difficulty: "Advanced",
      technologies: ["AWS", "Lex", "Polly", "Lambda", "S3"],
      progress: 0,
      points: [
        "Build a conversational chatbot using Amazon Lex.",
        "Convert text responses to speech with AWS Polly.",
        "Use AWS Lambda to automate support workflows.",
        "Store and manage customer data and queries in AWS S3."
      ],
      realWorldExample: "H&M and Sephora have implemented chatbots to automate customer service and provide instant answers to customer queries.",
      mentor: {
        name: "TBD",
        profile: "https://www.linkedin.com/in/vimaldaga/",
        imageSrc: "/path/to/placeholder-mentor.jpg",
        expertise: "AI Conversational Designer",
        experience: "8+ years"
      }
    }
  ];
  

  const CourseDetails = () => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div className="space-y-6 pt-4 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen" id="liveProjects">
        <div className="p-2">
        {/* text-lg sm:text-2xl */}
          <h1 className="text-center  text-lg sm:text-2xl text-white pb-4">
            Build Live Project:{" "}
            <span className="text-[#DC2626]">From Learning to Implementation</span>
          </h1>
        </div>
  
        {courseData.map((course) => (
  <Card
    key={course.id}
    className="max-w-3xl mx-auto shadow-xl rounded-xl border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 transform transition-all duration-300 hover:scale-[1.02]"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div className="p-6 sm:p-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-6 items-start">
        {/* Course Image with Glow Effect */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20"></div>
          <Image
            src={course.imageSrc}
            alt={course.title}
            width={64}
            height={64}
            className="rounded-full inline relative z-10 border-2 border-blue-400"
          />
        </div>

        {/* Title and Metadata */}
        <div className="flex-1 w-full sm:w-auto">
          <h3 className="text-sm sm:text-lg text-white mb-2">{course.title}</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge
              variant="secondary"
              className="bg-purple-500/20 text-sm sm:text-base text-purple-300"
            >
              {course.difficulty}
            </Badge>
          </div>
          
          {/* Description */}
          <div className="z-40 w-full mt-4 sm:mt-0">
            <p className="text-gray-300 text-sm sm:text-base leading-normal sm:leading-relaxed">
              {course.description}
            </p>
          </div>
        </div>

        {/* Mentor Card */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex-shrink-0 group w-16 h-16 sm:w-20 sm:h-20">
                <Link href={course.mentor.profile} target="_blank">
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img
                      src="/mentor.jpeg"
                      alt="Mr. Vimal Daga"
                      className="rounded-full border-2 border-yellow-400 p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent className="w-full max-w-xs p-4 bg-gray-800 border border-gray-700">
              <div className="space-y-2">
                <p className="font-semibold text-white">{course.mentor.name}</p>
                <p className="text-sm text-gray-300">{course.mentor.expertise}</p>
                <p className="text-sm text-gray-400">{course.mentor.experience} experience</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Technology Stack */}
      <div className="mt-6">
        <p className="text-sm text-gray-400 mb-2 text-sm sm:text-base">Technologies Used:</p>
        <div className="flex flex-wrap gap-2">
          {course.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-gray-800/50 text-sm sm:text-base border-gray-700 text-gray-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Real-World Example */}
      <div className="mt-6 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
        <p className="text-sm sm:text-base text-green-400 mb-2">Real-World Application</p>
        <p className="text-sm sm:text-base text-gray-300">{course.realWorldExample}</p>

        {/* Key Features */}
        <div className="mt-4">
          <p className="text-sm sm:text-base text-white mb-3">Key Features</p>
          <ul className="space-y-3">
            {course.points.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-300">
                <span className="inline-block w-1.5 h-1.5 text-sm sm:text-base rounded-full bg-blue-400 mt-2"></span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Card>
))}



      </div>
    );
  };
  

export default CourseDetails;