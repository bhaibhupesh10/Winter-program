"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import Collapsible from "@/components/ui/collapsible";

interface CollapsibleProps {
  // ...
  topics: { title: string; lectures?: number; isHandsOn?: boolean }[];
}

const sections = [
  {
    title: "Module 1: Python for AI ",
    topics: [
      { title: "1.1 Python Fundamentals",isHandsOn: true },
      { title: "Syntax, variables, data types", lectures: 2 },
      { title: "Conditional statements, loops, functions, modules", lectures: 4 ,},
      { title: "1.2 Data Handling",isHandsOn: true },
      { title: "Advanced data structures: Lists, Tuples, Dictionaries, Sets", lectures: 5, },
      { title: "File handling: Reading, writing, manipulating files", lectures: 2,  },
      { title: "Data analysis using Pandas, NumPy", lectures: 4,  },

      { title: "1.3 Data Visualization ",isHandsOn: true },
      { title: "Advanced visualizations with Matplotlib, Seaborn, Plotly", lectures: 5, },

      { title: "1.4 Machine Learning with Python ",isHandsOn: true },
      { title: "Supervised and unsupervised learning", lectures: 5, },
      { title: "Implementing models with scikit-learn", lectures: 5, },

    ],
  },
  {
    title: "Module 2: AWS Cloud AI Services ",
    topics: [
      { title: "2.1 AWS AI Services", lectures: 3,isHandsOn: true },
      { title: "Overview of AWS AI tools: Amazon SageMaker, Rekognition, Polly, Lex, Comprehend", lectures: 4 },
      { title: "Using AWS cloud services for AI model development and deployment", lectures: 4 },

      { title: "2.2 Cloud Storage and Databases", lectures: 3,isHandsOn: true },
      { title: "AWS S3 for data storage", lectures: 4 },
      { title: "DynamoDB, Amazon RDS for cloud databases", lectures: 4 },
      { title: "Security and access control with IAM", lectures: 4 },


      { title: "2.3 Serverless Computing for AI", lectures: 3,isHandsOn: true },
      { title: "AWS Lambda for serverless architecture", lectures: 4 },
      { title: "Integration with AI services like Rekognition and Lex", lectures: 4 },

      { title: "2.4 Cloud Environment Setup ", lectures: 3,isHandsOn: true },
      { title: "Setting up AWS environment for AI project development", lectures: 4 },
      { title: "Accessing and managing AWS services via the CLI and AWS Console", lectures: 4 },

      { title: "2.4 Cloud Environment Setup ", lectures: 3,isHandsOn: true },
      { title: "Setting up AWS environment for AI project development", lectures: 4 },
      { title: "Accessing and managing AWS services via the CLI and AWS Console", lectures: 4 },
     
    ],
  },
  {
    title: "Module 3: Amazon Rekognition",
    topics: [
      { title: "3.1 Image and Video Analysis", lectures: 3,isHandsOn: true },
      { title: "Object detection, facial recognition, sentiment analysis", lectures: 4 },
      { title: "Video moderation, content analysis", lectures: 4 },

      { title: "3.2 Advanced Features of Rekognition", lectures: 3,isHandsOn: true },
      { title: "Custom labels for image recognition", lectures: 4 },
      { title: "Real-time video processing for security", lectures: 4 },
    ],
  },
  {
    title: "Module 4: Amazon Polly and Lex ",
    topics: [
      { title: "4.1 Amazon Polly ", lectures: 3,isHandsOn: true },
      { title: "Text-to-Speech conversion with custom voices", lectures: 4 },
      { title: "Integrating Polly with cloud applications", lectures: 4 },

      { title: "4.2 Amazon Lex ", lectures: 3,isHandsOn: true },
      { title: "Building conversational bots with Lex", lectures: 4 },
      { title: "Integration with Lambda and S3 for chatbot functionality", lectures: 4 },
    ],
  },
  {
    title: "Module 5: Amazon SageMaker",
    topics: [
      { title: "5.1 SageMaker Overview ", lectures: 3,isHandsOn: true },
      { title: "Features of SageMaker: Data Wrangler, Experiments, Pipelines", lectures: 4 },
      { title: "Creating and managing SageMaker notebooks", lectures: 4 },

      { title: "5.2 Machine Learning with SageMaker  ", lectures: 3,isHandsOn: true },
      { title: "Model training and evaluation using SageMaker built-in algorithms", lectures: 4 },
      { title: "Hyperparameter tuning with SageMaker Automatic Model Tuning", lectures: 4 },

      { title: "5.3 Model Deployment  ", lectures: 3,isHandsOn: true },
      { title: "Deploying machine learning models with SageMaker endpoints", lectures: 4 },
      { title: "Real-time inference and batch processing", lectures: 4 },

      { title: "5.4 Advanced Topics in SageMaker  ", lectures: 3,isHandsOn: true },
      { title: "SageMaker Studio for end-to-end model development", lectures: 4 },
      { title: "Using SageMaker for AutoML workflows.", lectures: 4 },
    ],
  },
  {
    title: "Module 6: Real-World Use Cases with AWS AI Services ",
    topics: [
      { title: "6.1 Healthcare AI ", lectures: 3,isHandsOn: true },
      { title: "AI for diagnostic tools using Amazon Rekognition", lectures: 4 },
      { title: "Building predictive models for healthcare with SageMaker", lectures: 4 },

      { title: "6.2 Retail AI ", lectures: 3,isHandsOn: true },
      { title: "Personalized product recommendations using SageMaker and Lex", lectures: 4 },
      { title: "Sentiment analysis for customer feedback using Comprehend", lectures: 4 },



      { title: "6.3 Finance AI", lectures: 3,isHandsOn: true },
      { title: "Fraud detection with SageMaker and AWS Lambda", lectures: 4 },
      { title: "Risk management through AI-driven insights using Comprehend", lectures: 4 },

      { title: "6.4 Customer Support Automation ", lectures: 3,isHandsOn: true },
      { title: "Chatbots for customer service using Amazon Lex and Polly", lectures: 4 },
      { title: "Integrating chatbots with CRM systems", lectures: 4 },

      { title: "2.4 Cloud Environment Setup ", lectures: 3,isHandsOn: true },
      { title: "Setting up AWS environment for AI project development", lectures: 4 },
      { title: "Accessing and managing AWS services via the CLI and AWS Console", lectures: 4 },
     
    ],
  },
];

export default function DevOpsCurriculum() {
  const [openSection, setOpenSection] = React.useState(0); // Keeps track of which section is open

  const handleCollapsibleToggle = (index: number) => {
    setOpenSection(index === openSection ? -1 : index); // Toggles section open/closed
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="grid md:grid-cols-[2fr,1fr] gap-6">
        {/* Left Side - Curriculum */}
        <div className="space-y-4">
  {/* Top Section with Heading and Button */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between space-y-4 sm:space-y-0">
    <h1 className="text-3xl sm:text-2xl md:text-3xl text-[#000000] font-semibold leading-snug">
      From Fundamentals to Building a <span className="text-[#ff0000]">Live Project:</span> Your 10-Day Technical Learning Journey
    </h1>
  </div>

  {/* Collapsible Sections */}
  <div className="space-y-2">
    {sections.map((section, index) => (
      <Collapsible
        key={index}
        title={section.title}
        topics={section.topics}
        isOpen={openSection === index}
        onToggle={() => handleCollapsibleToggle(index)}
      />
    ))}
    <Button variant="link" className="w-full mt-4">
      View More
    </Button>
  </div>
</div>


        {/* Right Side - Career Counselling Form */}
        <div className="sticky top-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Free Career Counselling</CardTitle>
              <p className="text-sm text-gray-500">We are happy to help you 24/7</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Phone Number" />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Submit
                </Button>
                <p className="text-xs text-gray-500 text-center">
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
  );
}
