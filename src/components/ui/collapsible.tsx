import * as React from "react";
import { ChevronDown, FileText, Play } from "lucide-react";

interface CollapsibleProps {
  title: string;
  topics: { title: string; lectures: number; isHandsOn?: boolean }[];
  isOpen: boolean;
  onToggle: () => void;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, topics, isOpen, onToggle }) => {
  return (
    <div className="border rounded-lg">
      <div className="flex items-center justify-between w-full p-4 hover:bg-gray-50 cursor-pointer" onClick={onToggle}>
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-gray-500" />
          <span className="font-medium">{title}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">{topics.length} topics</span>
          <ChevronDown className={`h-5 w-5 transform ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </div>
      {isOpen && (
        <div className="border-t">
          <ul className="divide-y">
            {topics.map((topic, index) => (
              <li key={index} className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {topic.isHandsOn ? (
                    <span className="flex items-center text-green-600 text-sm">
                      <Play className="h-4 w-4 mr-1" />
                      Hands-on
                    </span>
                  ) : (
                    <Play className="h-4 w-4 text-gray-400" />
                  )}
                  <span>{topic.title}</span>
                </div>
                <span className="text-sm text-gray-500">{topic.lectures} lectures</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Collapsible;
