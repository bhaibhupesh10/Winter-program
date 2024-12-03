"use client";
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import Collapsible from "@/components/ui/collapsible";
import { BeakerIcon, BookOpen, Clock, Sparkles, GraduationCap } from "lucide-react";

interface SubtopicProps {
  title: string;
  lectures?: number;
}

interface TopicProps {
  title: string;
  isHandsOn?: boolean;
  subtopics: SubtopicProps[];
}

const SubtopicItem = ({ title, lectures }: SubtopicProps) => (
  <div className="ml-10 mb-4">
    <div className="flex items-center justify-between group hover:bg-black p-3.5 rounded-xl transition-all duration-200 border border-gray-100 hover:border-gray-200 hover:shadow-sm">
      <div className="flex items-center gap-3">
        <div className="bg-gray-100 p-2 rounded-lg group-hover:shadow-sm transition-all duration-200">
          <BookOpen className="w-5 h-5 text-white" />
        </div>
        <span className="text-white font-medium text-md">{title}</span>
      </div>
      {/* {lectures && (
        <div className="flex items-center gap-2 text-sm text-white bg-gray-800 py-1.5 px-4 rounded-full group-hover:shadow-sm transition-all duration-200">
          <Clock className="w-4 h-4" />
          <span>{lectures} lectures</span>
        </div>
      )} */}
    </div>
  </div>
);

const TopicItem = ({ topic }: { topic: TopicProps }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mb-6">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 bg-[#1F1F1F] p-4 rounded-xl border-l-4 border-[#ff0000] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
      >
        <div className="bg-[#2A2A2A] p-2.5 rounded-lg">
          <BeakerIcon className="w-6 h-6 text-[#ff0000]" />
        </div>
        <div>
          <h4 className="font-semibold text-white text-md">{topic.title}</h4>
          <div className="flex items-center gap-2 text-white mt-1">
            <Sparkles className="w-4 h-4 text-[#ff0000]" />
            <p className="text-sm">Click to view subtopics</p>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 bg-[#1F1F1F] p-4 rounded-lg shadow-inner">
          {topic.subtopics.map((subtopic, index) => (
            <SubtopicItem key={index} {...subtopic} />
          ))}
        </div>
      )}
    </div>
  );
};

const ModuleBox = ({ section }: { section: any }) => (
  <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-200">
    <h3 className="text-lg font-semibold text-white mb-6">{section.title}</h3>
    <div className="space-y-4">
      {section.topics.map((topic: TopicProps, index: number) => (
        <TopicItem key={index} topic={topic} />
      ))}
    </div>
  </div>
);

const sections =[
  {
    "title": "Module 1: Python for AI",
    "topics": [
      {
        "title": "1.1 Python Fundamentals",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "Syntax, variables, data types",
            "lectures": 2
          },
          {
            "title": "Conditional statements, loops, functions, modules",
            "lectures": 4
          }
        ]
      },
      {
        "title": "1.2 Data Handling",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "Advanced data structures: Lists, Tuples, Dictionaries, Sets",
            "lectures": 5
          },
          {
            "title": "File handling: Reading, writing, manipulating files",
            "lectures": 2
          },
          {
            "title": "Data analysis using Pandas, NumPy",
            "lectures": 4
          }
        ]
      },
      {
        "title": "1.3 Data Visualization",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "Advanced visualizations with Matplotlib, Seaborn, Plotly",
            "lectures": 5
          }
        ]
      },
      {
        "title": "1.4 Machine Learning with Python",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "Supervised and unsupervised learning",
            "lectures": 5
          },
          {
            "title": "Implementing models with scikit-learn",
            "lectures": 5
          }
        ]
      }
    ]
  },
  {
    "title": "Module 2: AWS Cloud AI Services",
    "topics": [
      {
        "title": "2.1 AWS AI Services",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "Overview of AWS AI tools: Amazon SageMaker, Rekognition, Polly, Lex, Comprehend",
            "lectures": 4
          },
          {
            "title": "Using AWS cloud services for AI model development and deployment",
            "lectures": 4
          }
        ]
      },
      {
        "title": "2.2 Cloud Storage and Databases",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "AWS S3 for data storage",
            "lectures": 4
          },
          {
            "title": "DynamoDB, Amazon RDS for cloud databases",
            "lectures": 4
          },
          {
            "title": "Security and access control with IAM",
            "lectures": 4
          }
        ]
      },
      {
        "title": "2.3 Serverless Computing for AI",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "AWS Lambda for serverless architecture",
            "lectures": 4
          },
          {
            "title": "Integration with AI services like Rekognition and Lex",
            "lectures": 4
          }
        ]
      },
      {
        "title": "2.4 Cloud Environment Setup",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "Setting up AWS environment for AI project development",
            "lectures": 4
          },
          {
            "title": "Accessing and managing AWS services via the CLI and AWS Console",
            "lectures": 4
          }
        ]
      }
    ]
  },
  {
    "title": "Module 3: Amazon Rekognition",
    "topics": [
      {
        "title": "3.1 Image and Video Analysis",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "Object detection, facial recognition, sentiment analysis",
            "lectures": 4
          },
          {
            "title": "Video moderation, content analysis",
            "lectures": 4
          }
        ]
      },
      {
        "title": "3.2 Advanced Features of Rekognition",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "Custom labels for image recognition",
            "lectures": 4
          },
          {
            "title": "Real-time video processing for security",
            "lectures": 4
          }
        ]
      }
    ]
  },
  {
    "title": "Module 4: Amazon Polly and Lex",
    "topics": [
      {
        "title": "4.1 Amazon Polly",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "Text-to-Speech conversion with custom voices",
            "lectures": 4
          },
          {
            "title": "Integrating Polly with cloud applications",
            "lectures": 4
          }
        ]
      },
      {
        "title": "4.2 Amazon Lex",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "Building conversational bots with Lex",
            "lectures": 4
          },
          {
            "title": "Integration with Lambda and S3 for chatbot functionality",
            "lectures": 4
          }
        ]
      }
    ]
  },
  {
    "title": "Module 5: Amazon SageMaker",
    "topics": [
      {
        "title": "5.1 SageMaker Overview",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "Features of SageMaker: Data Wrangler, Experiments, Pipelines",
            "lectures": 4
          },
          {
            "title": "Creating and managing SageMaker notebooks",
            "lectures": 4
          }
        ]
      },
      {
        "title": "5.2 Machine Learning with SageMaker",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "Model training and evaluation using SageMaker built-in algorithms",
            "lectures": 4
          },
          {
            "title": "Hyperparameter tuning with SageMaker Automatic Model Tuning",
            "lectures": 4
          }
        ]
      },
      {
        "title": "5.3 Model Deployment",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "Deploying machine learning models with SageMaker endpoints",
            "lectures": 4
          },
          {
            "title": "Real-time inference and batch processing",
            "lectures": 4
          }
        ]
      },
      {
        "title": "5.4 Advanced Topics in SageMaker",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "SageMaker Studio for end-to-end model development",
            "lectures": 4
          },
          {
            "title": "Using SageMaker for AutoML workflows.",
            "lectures": 4
          }
        ]
      }
    ]
  },
  {
    "title": "Module 6: Real-World Use Cases with AWS AI Services",
    "topics": [
      {
        "title": "6.1 Healthcare AI",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "AI for diagnostic tools using Amazon Rekognition",
            "lectures": 4
          },
          {
            "title": "Building predictive models for healthcare with SageMaker",
            "lectures": 4
          }
        ]
      },
      {
        "title": "6.2 Retail AI",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "Personalized product recommendations using SageMaker and Lex",
            "lectures": 4
          },
          {
            "title": "Sentiment analysis for customer feedback using Comprehend",
            "lectures": 4
          }
        ]
      },
      {
        "title": "6.3 Finance AI",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "Fraud detection with SageMaker and AWS Lambda",
            "lectures": 4
          },
          {
            "title": "Risk management through AI-driven insights using Comprehend",
            "lectures": 4
          }
        ]
      },
      {
        "title": "6.4 Customer Support Automation",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "Chatbots for customer service using Amazon Lex and Polly",
            "lectures": 4
          },
          {
            "title": "Integrating chatbots with CRM systems",
            "lectures": 4
          }
        ]
      }
    ]
  }
];

export default function DevOpsCurriculum() {
  const [fullName, setFullName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // Basic client-side validation
    if (!fullName || !whatsappNumber || !collegeName) {
      setStatusMessage("Please fill in all fields.");
      return;
    }

    const formData = {
      fullName,
      whatsappNumber,
      collegeName,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage("Your message was sent successfully!");
      } else {
        setStatusMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("Error sending message. Please try again later.");
    }
  };
  return (
    <div className="bg-[#181A1B]" id="trainingcontent">
      <div className="container mx-auto p-6 max-w-6xl bg-[#181A1B]">
        <div className="grid md:grid-cols-[2fr,1fr] gap-6">
          {/* Left Side - Curriculum */}
          <div className="space-y-6">
            {/* Top Section with Heading and Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="  p-4 rounded-xl shadow-white">

              {/* text-lg sm:text-2xl */}
              <h1 className="text-lg sm:text-2xl  text-white font-semibold leading-snug">

              What will you learn at the <span className="text-[#ff0000]">Winter Industrial Training </span>  Program ?
              

                {/* From  <span className="text-[#ff0000]"> Fundamentals </span> to Building a <span className="text-[#ff0000]">Live Project:</span>Your 10-Day Technical Learning    <span className="text-[#ff0000]">Journey </span>  */}
              </h1>
              {/* text-sm sm:text-lg */}
              <h1 className="text-sm  sm:text-lg  text-white pt-2  leading-snug">From Fundamentals to Building a Live Project:  <span className="text-[#ff0000]"> 10-Day Technical Learning </span>Your Journey</h1>
              </div>
            </div>

            {/* Collapsible Sections */}
            <div className="space-y-6">
              {sections.map((section, index) => (
                <ModuleBox key={index} section={section} />
              ))}
            </div>
          </div>

          {/* Right Side - Career Counselling Form */}
          <div className="sticky top-20 h-fit bg-[#181A1B] max-h-[calc(100vh-4rem)]">
      <Card className="bg-[#181A1B]">
        <CardHeader>
          <CardTitle className="text-lg sm:text-2xl text-white">
            Confused 🤔 about Winter Training?
          </CardTitle>
          <p className="text-sm sm:text-lg text-white">Speak to our Counsellor for guidance</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Input
                className="text-white"
                placeholder="Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Input
                className="text-white"
                placeholder="WhatsApp No"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Input
                className="text-white"
                placeholder="College Name"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
              />
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-700" type="submit">
              Submit
            </Button>
            {statusMessage && (
              <p className="text-xs text-white text-center">{statusMessage}</p>
            )}
            <p className="text-xs text-white text-center">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="text-blue-600 hover:underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
        </div>
      </div>
    </div>
  );
}
