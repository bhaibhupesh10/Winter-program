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
      <div className="bg-[#ff0000]  text-md rounded-full p-2 flex items-center justify-center">
        {icon}
      </div>
      {/* Text Content */}
      <div>
        <h3 className="text-md sm:text-md font-medium  text-white">{title}</h3>
        {/* <p className="text-sm sm:text-base text-white">{description}</p> */}
      </div>
    </div>
  );
};

// Main DataScienceTools Component
const Tools: React.FC = () => {
  return (
    <div className="bg-[#181A1B] pb-0 h-auto"> {/* Use h-auto to let content dictate height */}
    <div className="flex flex-col lg:flex-row pb-0 items-center max-w-6xl justify-between mx-auto p-4 sm:p-6 lg:p-8">
      {/* Left Text Content */}
      <div className="lg:w-1/2 space-y-6 sm:space-y-6">
        
        <h1 className="text-lg sm:text-2xl  text-white">

        Master 15+ Cutting-Edge  <span className="text-[#ff0000]"> AI and Cloud Tools 
          </span>

          {/* Master 15+ Cutting-Edge <span className="text-[#ff0000]">Data Science Tools</span> */}
        </h1>

        {/* <h2 className="text-gray-700 text-sm  sm:text-lg text-white">
          Most Hands-On Data Program
        </h2> */}

        {/* Tool Sections */}
        <Section
          icon={<TrendingUp size={24} color="white" />}
          title="Take your AI and data science skills to the next level with our industry-focused course. Learn to:
"
          description="Tools: Python, SQL"
        />
        <Section
          icon={<BarChart size={24} color="white" />}
          title="Build AI Models: Use Python, scikit-learn, and AWS SageMaker for machine learning and deployment."
          description="Tools: Excel, Power BI, Tableau, Matplotlib, Seaborn, NumPy, Pandas"
        />
        <Section
          icon={<Cpu size={24} color="white" />}
          title="Analyze and Visualize Data: Master Pandas, NumPy, Matplotlib, Seaborn, and AWS Comprehend for insights."
          description="Tools: Statsmodels, Sklearn, TensorFlow, Keras, NLTK, OpenAI, MLflow"
        />

<Section
          icon={<TrendingUp size={24} color="white" />}
          title="Leverage Cloud Services: Implement AI-powered applications using AWS Rekognition, Polly, and Lex."
          description="Tools: Statsmodels, Sklearn, TensorFlow, Keras, NLTK, OpenAI, MLflow"
        />


      <Section
          icon={<BarChart size={24} color="white" />}
          title="Create Scalable Solutions: Develop serverless systems with AWS Lambda and manage data with S3 and DynamoDB."
          description="Tools: Statsmodels, Sklearn, TensorFlow, Keras, NLTK, OpenAI, MLflow"
        />
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 flex items-center justify-center pt-2 pb-2  p-4 lg:pt-0"> {/* Removed pt-8 */}
        <div className="relative p-4 sm:p-8 rounded-lg shadow-lg bg-[#242526]">
          <img
            src="/tools.png"
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
