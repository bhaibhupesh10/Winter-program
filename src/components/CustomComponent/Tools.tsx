import React from "react";
import { TrendingUp, BarChart, Cpu } from "lucide-react"; // Import specific icons

// Section Component
interface SectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      {/* Icon with red background */}
      <div className="bg-[#ff0000]  rounded-full p-2 flex items-center justify-center">
        {icon}
      </div>
      {/* Text Content */}
      <div>
        <h3 className="text-lg sm:text-xl font-medium text-white">{title}</h3>
        <p className="text-sm sm:text-base text-white">{description}</p>
      </div>
    </div>
  );
};

// Main DataScienceTools Component
const Tools: React.FC = () => {
  return (
    <div className="bg-[#181A1B] h-auto"> {/* Use h-auto to let content dictate height */}
    <div className="flex flex-col lg:flex-row items-center max-w-6xl justify-between mx-auto p-4 sm:p-6 lg:p-8">
      {/* Left Text Content */}
      <div className="lg:w-1/2 space-y-6 sm:space-y-8">
        <h2 className="text-gray-700 text-sm font-semibold text-white">
          Most Hands-On Data Program
        </h2>
        <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-white">
          Master 15+ Cutting-Edge <span className="text-[#ff0000]">Data Science Tools</span>
        </h1>

        {/* Tool Sections */}
        <Section
          icon={<TrendingUp size={24} color="white" />}
          title="Data Management and Development Tools"
          description="Tools: Python, SQL"
        />
        <Section
          icon={<BarChart size={24} color="white" />}
          title="Data Analysis and Visualization"
          description="Tools: Excel, Power BI, Tableau, Matplotlib, Seaborn, NumPy, Pandas"
        />
        <Section
          icon={<Cpu size={24} color="white" />}
          title="Machine Learning and AI Frameworks"
          description="Tools: Statsmodels, Sklearn, TensorFlow, Keras, NLTK, OpenAI, MLflow"
        />
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 flex items-center justify-center lg:pt-0"> {/* Removed pt-8 */}
        <div className="relative p-4 sm:p-8 rounded-lg shadow-lg bg-[#242526]">
          <img
            src="/tools.jpeg"
            alt="Data Science Tools"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>


  );
};

export default Tools;
