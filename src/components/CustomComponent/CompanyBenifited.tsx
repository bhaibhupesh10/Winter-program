"use client";
import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component

const CompaniesBefefited = () => {
  const logos = [
    { src: "/assets/companyLogo/google.png", alt: "Google" },
    { src: "/assets/companyLogo/tcs.png", alt: "TCS" },
    { src: "/assets/companyLogo/infosys.png", alt: "Infosys" },
    { src: "/assets/companyLogo/salesforce.png", alt: "Salesforce" },
    { src: "/assets/companyLogo/intel.png", alt: "Intel" },
    { src: "/assets/companyLogo/razorpay.png", alt: "Razorpay" },
    { src: "/assets/companyLogo/wipro.png", alt: "Wipro" },
    { src: "/assets/companyLogo/zoho.png", alt: "Zoho" },
    { src: "/assets/companyLogo/oracle.png", alt: "Oracle" },
    { src: "/assets/companyLogo/syfe.png", alt: "Syfe" },
    { src: "/assets/companyLogo/paytm.png", alt: "Paytm" },
    { src: "/assets/companyLogo/nykaa.png", alt: "Nykaa" },
    { src: "/assets/companyLogo/npci.png", alt: "NPCI" },
    
    { src: "/assets/companyLogo/deloitte.png", alt: "Deloitte" },
    { src: "/assets/companyLogo/dell.png", alt: "Dell" },
    { src: "/assets/companyLogo/ibm.png", alt: "IBM" },
  ];

  return (
    <div className="relative bg-blue-50 overflow-hidden "> {/* Unified background */}
      <div className="flex w-full align-center justify-left mx-auto">

        <h1 className="text-sm font-bold text-black mb-4">
Companies benefited with his <span className='text-[#ff0000]'>trainings & consultancy</span> 
          
        </h1>
      </div>
      <div className="w-full overflow-hidden whitespace-nowrap">
        {/* Animated scrolling container */}
        <div className="inline-flex items-center animate-scroll w-max">
          {logos.map((logo, index) => (
            <div key={index} className="mx-4 w-32 flex-shrink-0">
              <div className="w-28 h-16 flex items-center justify-center">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={100}   
                  height={20} 
                  objectFit="contain" 
                />
              </div>
            </div>
          ))}
        </div>
        {/* Duplicate list for seamless scrolling */}
        <div
          className="inline-flex items-center animate-scroll w-max"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="mx-4 w-32 flex-shrink-0">
              <div className="w-28 h-16 flex items-center justify-center">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={112} 
                  height={64} 
                  objectFit="contain" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CompaniesBefefited;
