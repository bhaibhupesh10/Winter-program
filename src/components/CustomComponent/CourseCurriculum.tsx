"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import Collapsible from "@/components/ui/collapsible";

const sections = [
  {
    title: "Overview of DevOps and Version Control",
    topics: [
      { title: "Introduction to DevOps", lectures: 3 },
      { title: "Benefits of working in a DevOps environment", lectures: 2 },
      { title: "DevOps Pipeline", lectures: 4 },
      { title: "Version Control", lectures: 3 },
      { title: "Git Introduction", lectures: 5, isHandsOn: true },
      { title: "Git Installation", lectures: 2, isHandsOn: true },
      { title: "Working with Remote Repository", lectures: 4, isHandsOn: true },
    ],
  },
  {
    title: "Git, Jenkins & Maven Integration",
    topics: [
      { title: "Jenkins Introduction", lectures: 3 },
      { title: "Maven Build Tool", lectures: 4 },
    ],
  },
  {
    title: "Continuous Integration using Jenkins",
    topics: [
      { title: "CI/CD Pipeline Setup", lectures: 5 },
      { title: "Jenkins Plugins", lectures: 3 },
    ],
  },
  {
    title: "Configuration Management Using Ansible",
    topics: [
      { title: "Ansible Basics", lectures: 4 },
      { title: "Playbooks", lectures: 5 },
    ],
  },
  {
    title: "Containerization using Docker",
    topics: [
      { title: "Docker Fundamentals", lectures: 4 },
      { title: "Container Management", lectures: 6 },
    ],
  },
];

export default function DevOpsCurriculum() {
  const [openSection, setOpenSection] = React.useState(0); // Keeps track of which section is open

  const handleCollapsibleToggle = (index: number) => {
    setOpenSection(index === openSection ? -1 : index); // Toggles section open/closed
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-[2fr,1fr] gap-6">
        {/* Left Side - Curriculum */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Curriculum Designed by Experts</h1>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download Curriculum
            </Button>
          </div>

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
