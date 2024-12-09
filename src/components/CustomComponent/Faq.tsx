"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string | JSX.Element;
};

const faqContent: Record<string, FAQItem[]> = {
  generalInfo: [
    {
      question: "What is the Winter Training all about?",
      answer:
        "The Winter Training is a comprehensive program led by World Record Holder, Vimal Daga Sir, focused on AI, ML, and Cloud Services, designed to equip you with the latest skills in these high-demand fields.",
    },
    {
      question: "Who can participate in the Winter Training?",
      answer: "The training is open to pursuing graduation students only.",
    },
    {
      question: "What topics will be covered in the training?",
      answer:
        "The training covers a deep dive into Artificial Intelligence (AI), Machine Learning (ML), and Cloud Services, including practical applications and real-world scenarios.",
    },
    {
      question: "What is the duration of the Winter Training?",
      answer: "The training typically lasts 7 days.",
    },
    {
      question: "Is there a certification provided after completion?",
      answer:
        "Yes, a certificate of completion will be provided after successfully finishing the training.",
    },
  ],
  sessionDetails: [
    {
      question: "What is the schedule for the Winter Training?",
      answer: "Winter training will start from 26th December 2024.",
    },
    {
      question: "Will there be any projects or hands-on assignments?",
      answer: "Yes, multiple projects and hands-on tasks will be covered.",
    },
    {
      question: "What if I miss a session?",
      answer:
        "No recordings will be available, so attending on time is crucial to not miss valuable learning.",
    },
    {
      question: "Do I need any prerequisites to join the training?",
      answer: "There is no prerequisite for the training.",
    },
  ],
  postTrainingSupport: [
    {
      question: "How can I register for the Winter Training?",
      answer:
        "Registration details will be available on the official website —make sure to secure your spot.",
    },
    {
      question: "Is there any support or guidance available after the training?",
      answer:
        "Yes, you’ll have access to an Elite Discord community.",
    },
    {
      question: "What are the benefits of attending the Winter Training?",
      answer:
        "Gain in-depth knowledge, hands-on experience, and real-world insights into AI, ML, and Cloud Services to boost your career.",
    },
    {
      question: "How can I get more information about the Winter Training?",
      answer:
        "For more details, please visit the official website or follow us on social media for the latest updates.",
    },
  ],
};

export default function Faq() {
  const [selectedItem, setSelectedItem] = useState<keyof typeof faqContent>(
    "generalInfo"
  );

  return (
    <div className="bg-[#181A1B]">
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <h1 className="text-lg sm:text-2xl mb-8 sm:mb-12 text-center sm:text-left">
        <span className="text-white "> Frequently Asked </span>
        <span className="text-[#ff0000]">Questions</span>
      </h1>

      {/* Main Grid */}
      <div className="grid gap-8 lg:grid-cols-[300px,1fr] lg:gap-12">
        {/* Sidebar */}
        <div className="space-y-4">
          {Object.keys(faqContent).map((key) => (
            <div
              key={key}
              className={`p-4 rounded-lg border shadow-sm cursor-pointer transition-all duration-300 
              ${
                selectedItem === key
                  ? "bg-black-200 border-red-500 text-white"
                  : "bg-[#000000] text-white"
              }`}
              onClick={() => setSelectedItem(key as keyof typeof faqContent)}
            >
              <h2 className="text-sm md:text-sm font-medium">
                {key === "generalInfo"
                  ? "General Information"
                  : key === "sessionDetails"
                  ? "Session Details & Prerequisites"
                  : "Post-Training Support, Benefits & Registration"}
              </h2>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqContent[selectedItem].map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-[#000000]"
            >
              <AccordionTrigger className="text-white sm:text-sm text-left items-start font-semibold px-4 sm:px-6 py-3 sm:py-4 [&[data-state=open]]:text-[#ff0000]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-white px-4 sm:px-6 pb-3 sm:pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
    </div>
  );
}
