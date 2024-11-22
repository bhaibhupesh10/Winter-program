"use client";
import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component



const MentorFeatured = () => {
  const logos = [
    { src: "/assets/companyLogo/google.png", alt: "Google" },
    { src: "/assets/companyLogo/tcs.png", alt: "TCS" },
    { src: "/assets/companyLogo/infosys.png", alt: "Infosys" },
    { src: "/assets/companyLogo/salesforce.png", alt: "Salesforce" },
    { src: "/assets/companyLogo/intel.png", alt: "Intel" },
    { src: "/assets/companyLogo/redhat.png", alt: "RedHat" },
    { src: "/assets/companyLogo/razorpay.png", alt: "Razorpay" },
    { src: "/assets/companyLogo/wipro.png", alt: "Wipro" },
    { src: "/assets/companyLogo/zoho.png", alt: "Zoho" },
    { src: "/assets/companyLogo/oracle.png", alt: "Oracle" },
    { src: "/assets/companyLogo/searce.png", alt: "Searce" },
    { src: "/assets/companyLogo/syfe.png", alt: "Syfe" },
    { src: "/assets/companyLogo/paytm.png", alt: "Paytm" },
    { src: "/assets/companyLogo/pwc.png", alt: "PWC" },
    { src: "/assets/companyLogo/nykaa.png", alt: "Nykaa" },
    { src: "/assets/companyLogo/npci.png", alt: "NPCI" },
    { src: "/assets/companyLogo/accenture.png", alt: "Accenture" },
    { src: "/assets/companyLogo/jpmorgan.png", alt: "JPMorgan" },
    { src: "/assets/companyLogo/mircosoft.png", alt: "Microsoft" },
    { src: "/assets/companyLogo/deloitte.png", alt: "Deloitte" },
    { src: "/assets/companyLogo/dell.png", alt: "Dell" },
    { src: "/assets/companyLogo/ibm.png", alt: "IBM" },
  ];
  

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="w-full overflow-hidden whitespace-nowrap">
        {/* Animated scrolling container */}
        <div className="inline-flex items-center animate-scroll w-max">
          {logos.map((logo, index) => (
            <div key={index} className="mx-4 w-32 flex-shrink-0">
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
        {/* Duplicate list for seamless scrolling */}
        <div className="inline-flex items-center animate-scroll w-max" aria-hidden="true">
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="mx-4 w-32 flex-shrink-0">
              <div className="w-28 h-12 flex items-center justify-center">
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

export default MentorFeatured;
