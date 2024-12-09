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
          <BookOpen className="w-5 h-5 text-[#ff0000]" />
        </div>
        <span className="text-white font-medium text-md">{title}</span>
      </div>
   
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
    "title": "Module 1: Cloud Computing",
    "topics": [
      {
        "title": "1.1 Introduction to Cloud Computing",
        "isHandsOn": true,
        "subtopics": [
          {
            "title": "Key concepts: Scalability, Reliability, Elasticity, Cost Efficiency",
            "lectures": 2
          },
          {
            "title": "Cloud Deployment Models: Public, Private, Hybrid",
            "lectures": 4
          },
          {
            "title": "Cloud Service Models: IaaS, PaaS, SaaS",
            "lectures": 4
          }
        ]
      },
      {
        "title": "1.2 Core AWS Cloud Services",
        "subtopics": [
          {
            "title": "Compute Services: Introduction to Amazon EC2",
            "lectures": 3
          },
          {
            "title": "Storage Services: AWS S3",
            "lectures": 3
          },
          {
            "title": "Networking Basics: Virtual Private Cloud (VPC), Elastic Load Balancing (ELB), AWS CloudFront",
            "lectures": 4
          }
        ]
      }
    ]
  },
  {
    "title": "Module 2: Python for AI",
    "topics": [
      {
        "title": "2.1 Python Fundamentals",
        "subtopics": [
          {
            "title": "Syntax, variables, data types",
            "lectures": 3
          },
          {
            "title": "Conditional statements, loops, functions, modules",
            "lectures": 4
          }
        ]
      },
      {
        "title": "2.2 Data Handling",
        "subtopics": [
          {
            "title": "Advanced data structures: Lists, Tuples, Dictionaries, Sets",
            "lectures": 4
          },
          {
            "title": "File handling: Reading, writing, manipulating files",
            "lectures": 3
          },
          {
            "title": "Data analysis using Pandas, NumPy",
            "lectures": 5
          }
        ]
      },
      {
        "title": "2.3 Data Visualization",
        "subtopics": [
          {
            "title": "Advanced visualizations with Matplotlib, Seaborn, Plotly",
            "lectures": 4
          }
        ]
      }
    ]
  },
  {
    "title": "Module 3: Machine Learning (ML)",
    "topics": [
      {
        "title": "3.1 Foundations of Machine Learning",
        "subtopics": [
          {
            "title": "ML Workflow: Data Collection, Preprocessing, Model Building, and Deployment",
            "lectures": 5
          },
          {
            "title": "Types of ML: Supervised, Unsupervised, and Reinforcement Learning",
            "lectures": 4
          },
          {
            "title": "Core Algorithms: Linear Regression, Logistic Regression, K-Means, Decision Trees",
            "lectures": 6
          }
        ]
      },
      {
        "title": "3.2 Deep Learning Essentials",
        "subtopics": [
          {
            "title": "Neural Networks: Structure, Activation Functions, and Training Techniques",
            "lectures": 5
          },
          {
            "title": "Popular Frameworks: TensorFlow, PyTorch",
            "lectures": 4
          }
        ]
      },
      {
        "title": "3.3 Advanced Topics in ML",
        "subtopics": [
          {
            "title": "Hyperparameter Optimization: Grid Search, Random Search",
            "lectures": 4
          },
          {
            "title": "Ensemble Methods: Random Forest, Gradient Boosting",
            "lectures": 5
          },
          {
            "title": "Model Evaluation: Accuracy, Precision, Recall, F1 Score",
            "lectures": 4
          }
        ]
      }
    ]
  },
  {
    "title": "Module 4: Generative AI (GenAI)",
    "topics": [
      {
        "title": "4.1 Introduction to Generative AI",
        "subtopics": [
          {
            "title": "Generative Models: VAEs, GANs",
            "lectures": 4
          },
          {
            "title": "Transformers and Attention Mechanisms",
            "lectures": 4
          },
          {
            "title": "Use Cases: Text Generation, Image Synthesis, Audio Creation",
            "lectures": 5
          }
        ]
      },
      {
        "title": "4.2 Large Language Models (LLMs)",
        "subtopics": [
          {
            "title": "Overview of GPT, BERT, and other foundation models",
            "lectures": 4
          },
          {
            "title": "Techniques for Fine-tuning and Customization",
            "lectures": 5
          }
        ]
      },
      {
        "title": "4.3 Advanced Applications",
        "subtopics": [
          {
            "title": "Text-to-Image Models: DALL·E, Stable Diffusion",
            "lectures": 5
          },
          {
            "title": "Real-world Use Cases: Chatbots, Creative Content Generation",
            "lectures": 4
          }
        ]
      }
    ]
  },
  {
    "title": "Module 5: AWS AI/ML Core Services",
    "topics": [
      {
        "title": "5.1 Amazon SageMaker",
        "subtopics": [
          {
            "title": "Model Building, Training, and Deployment",
            "lectures": 6
          },
          {
            "title": "AutoML (Autopilot), Feature Store, Data Wrangler, Pipelines",
            "lectures": 5
          },
          {
            "title": "Real-time inference with endpoints",
            "lectures": 4
          }
        ]
      },
      {
        "title": "5.2 Amazon Rekognition",
        "subtopics": [
          {
            "title": "Image and video analysis (e.g., object detection, facial recognition)",
            "lectures": 4
          },
          {
            "title": "Custom labels for specialized image recognition tasks",
            "lectures": 4
          }
        ]
      },
      {
        "title": "5.3 Amazon Polly",
        "subtopics": [
          {
            "title": "Text-to-Speech (TTS) service with customizable voice options",
            "lectures": 4
          }
        ]
      },
      {
        "title": "5.4 Amazon Lex",
        "subtopics": [
          {
            "title": "Conversational AI for building chatbots",
            "lectures": 4
          },
          {
            "title": "Integration with Lambda and S3 for advanced workflows",
            "lectures": 5
          }
        ]
      },
      {
        "title": "5.5 Amazon Comprehend",
        "subtopics": [
          {
            "title": "Natural Language Processing (NLP) for sentiment analysis, topic modeling, and entity recognition",
            "lectures": 4
          }
        ]
      },
      {
        "title": "5.6 Amazon Translate",
        "subtopics": [
          {
            "title": "Language translation for multilingual applications",
            "lectures": 4
          }
        ]
      },
      {
        "title": "5.7 Amazon Transcribe",
        "subtopics": [
          {
            "title": "Automatic Speech Recognition (ASR) for audio-to-text conversion",
            "lectures": 4
          }
        ]
      },
      {
        "title": "5.8 Amazon Forecast",
        "subtopics": [
          {
            "title": "Time series forecasting for demand planning, financial projections, etc.",
            "lectures": 5
          }
        ]
      },
      {
        "title": "5.9 Amazon Personalize",
        "subtopics": [
          {
            "title": "Machine learning-based personalization and recommendation system",
            "lectures": 5
          }
        ]
      },
      {
        "title": "5.10 Amazon Textract",
        "subtopics": [
          {
            "title": "Extract text and data from scanned documents using OCR (Optical Character Recognition)",
            "lectures": 4
          }
        ]
      },
      {
        "title": "5.11 AWS DeepLens",
        "subtopics": [
          {
            "title": "AI-powered video camera for deep learning at the edge",
            "lectures": 4
          }
        ]
      }
    ]
  },
  {
    "title": "Module 6: AWS SageMaker",
    "topics": [
      {
        "title": "6.1 Introduction to SageMaker",
        "subtopics": [
          {
            "title": "Key Features and Tools",
            "lectures": 4
          },
          {
            "title": "SageMaker for Model Building: Data Wrangler, Feature Store, AutoML",
            "lectures": 5
          },
          {
            "title": "Deployment with SageMaker Endpoints",
            "lectures": 5
          }
        ]
      },
      {
        "title": "6.2 Advanced Topics",
        "subtopics": [
          {
            "title": "Hyperparameter Tuning with SageMaker Automatic Model Tuning",
            "lectures": 5
          },
          {
            "title": "End-to-End AI/ML Pipelines with SageMaker Studio",
            "lectures": 5
          }
        ]
      }
    ]
  },
  {
    "title": "Module 7: AWS Bedrock",
    "topics": [
      {
        "title": "7.1 Introduction to Bedrock",
        "subtopics": [
          {
            "title": "Accessing Foundation Models via API",
            "lectures": 4
          },
          {
            "title": "Supported Models and Use Cases: Text Summarization, Sentiment Analysis, Creative Writing",
            "lectures": 4
          },
          {
            "title": "Integration with Other AWS Services: Lambda, S3, SageMaker",
            "lectures": 5
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
    if (!fullName || !whatsappNumber ) {
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
              <div className="  pt-4 rounded-xl shadow-white">

              {/* text-lg sm:text-2xl */}
              <h1 className="text-lg sm:text-2xl  text-white font-semibold leading-snug">

              What will you learn in the <span className="text-[#ff0000]">ML with AWS Cloud  </span>  Program ?
              

                {/* From  <span className="text-[#ff0000]"> Fundamentals </span> to Building a <span className="text-[#ff0000]">Live Project:</span>Your 10-Day Technical Learning    <span className="text-[#ff0000]">Journey </span>  */}
              </h1>
              {/* text-sm sm:text-lg */}
              <h1 className="text-sm  sm:text-lg  text-white pt-2  leading-snug">From Fundamentals to Building a Live Project:  <span className="text-[#ff0000]"> 7-Day Technical Learning </span>Your Journey</h1>
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
            Confused 🤔 about 7 days Technical Bootcamp ?
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
                required
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Input
                className="text-white"
                placeholder="WhatsApp No"
                value={whatsappNumber}
                required
                onChange={(e) => setWhatsappNumber(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Input
                className="text-white"
                placeholder="Query (if Any)"
                value={collegeName}
                
                onChange={(e) => setCollegeName(e.target.value)}
              />
            </div>
            <Button className="w-full bg-[#ff0000] hover:shadow-white hover:shadow-md hover:bg-[#ff0000]" type="submit">
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
