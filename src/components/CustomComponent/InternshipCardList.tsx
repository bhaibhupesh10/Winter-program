// import React from "react";

// const EmployeeCards = () => {
//   // Sample data
//   const employees = [
    
//       {
//         "name": "Arpit Jindal",
//         "college": "Gautam Buddha University",
//         "designation": "DevOps Consultant",
//         "package": "12 LPA",
//         "companyLogo": "/company-logo.png"
//       },
//       {
//         "name": "Akansh Agarwal",
//         "college": "Shri Ram Murti Smarak College of Engineering and Technology, Bareilly",
//         "designation": "Framework Engineer",
//         "package": "8.5 LPA",
//         "companyLogo": "/company-logo.png"
//       },
//       {
//         "name": "Mohit Vyas",
//         "college": "Madhyanchal Professional University Bhopal",
//         "designation": "Associate Software Engineer",
//         "package": "10 LPA",
//         "companyLogo": "/company-logo.png"
//       },
//       {
//         "name": "Mannan Siddiqui",
//         "college": "VIT Vellore",
//         "designation": "Associate MLOPS Engineer",
//         "package": "9.4 LPA",
//         "companyLogo": "/company-logo.png"
//       },
//       {
//         "name": "Sahil Gulghane",
//         "college": "Shri Ramdeobaba College of Engineering and Technology, Nagpur",
//         "designation": "DevOps Engineer",
//         "package": "7.5 LPA",
//         "companyLogo": "/company-logo.png"
//       },
//       {
//         "name": "Akshit Saini",
//         "college": "Vellore Institute of Technology, Chennai",
//         "designation": "Associate MLOPS Engineer",
//         "package": "9 LPA",
//         "companyLogo": "/company-logo.png"
//       },
//       {
//         "name": "Kishan Ray",
//         "college": "IMS Engineering College, Ghaziabad",
//         "designation": "Technology Specialist",
//         "package": "7 LPA",
//         "companyLogo": "/company-logo.png"
//       },
//       {
//         "name": "Aman Dev Verma",
//         "college": "UPES, Uttarakhand",
//         "designation": "Associate Technical Engineer",
//         "package": "9 LPA",
//         "companyLogo": "/company-logo.png"
//       },
//       {
//         "name": "Rahul Kumar",
//         "college": "Revo University, Bangalore",
//         "designation": "DevSecOps Engineer",
//         "package": "10 LPA",
//         "companyLogo": "/company-logo.png"
//       },
//       {
//         "name": "Kuldeep Kumawat",
//         "college": "BIT Mesra",
//         "designation": "Junior DevOps Engineer",
//         "package": "5 LPA",
//         "companyLogo": "/company-logo.png"
//       },
//       {
//         "name": "Ishita Singhal",
//         "college": "Uttaranchal University, Dehradun",
//         "designation": "System Engineer",
//         "package": "8 LPA",
//         "companyLogo": "/company-logo.png"
//       },
//       {
//         "name": "Mohak Gund",
//         "college": "LNCT University, Bhopal",
//         "designation": "System Engineer",
//         "package": "6 LPA",
//         "companyLogo": "/company-logo.png"
//       },
//       {
//         "name": "Nischay Mehrotra",
//         "college": "Indian Institute of Information Technology & Research Center, Nashik",
//         "designation": "DevOps Consultant",
//         "package": "10.5 LPA",
//         "companyLogo": "/company-logo.png"
//       },
//       {
//         "name": "Krushna",
//         "college": "KIIT University, Bhubaneswar, Odisha",
//         "designation": "DevOps Consultant",
//         "package": "8 LPA",
//         "companyLogo": "/company-logo.png"
//       },
//       {
//         "name": "Akshansh Kumar Singh",
//         "college": "Gautam Buddha University",
//         "designation": "DevOps Engineer",
//         "package": "10 LPA",
//         "companyLogo": "/company-logo.png"
//       },
//       {
//         "name": "Aditya Joshi",
//         "college": "Shri Ram Murti Smarak College of Engineering and Technology, Bareilly",
//         "designation": "Framework Engineer",
//         "package": "8.5 LPA",
//         "companyLogo": "/company-logo.png"
//       }

    
//   ];

//   return (

//     <div className="flex justify-center items-center min-h-screen p-12 bg-gray-100">
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//         {employees.map((employee, index) => (
//           <div
//             key={index}
//             className="relative border-2 rounded-lg shadow-lg bg-pink-100 w-[300px] h-[300px] flex flex-col items-center"
//           >
//             {/* Pin Icon */}
//             <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
//               📌
//             </div>

//             {/* Profile Image and Name */}
//             <div className="flex items-center gap-4 mt-6">
//               {/* Profile Image */}
//               <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-red-600">
//                 <img
//                   src="/profile-placeholder.png" // Replace with dynamic image
//                   alt={employee.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Name and College */}
//               <div>
//                 <h3 className="text-lg font-bold text-red-600">
//                   {employee.name}
//                 </h3>
//                 <p className="text-sm text-gray-600">{employee.college}</p>
//               </div>
//             </div>

//             {/* Designation */}
//             <div className="mt-4 text-center text-gray-800 font-semibold">
//               <p>Got Selected as</p>
//               <p className="text-red-600">{employee.designation}</p>
//             </div>

//             {/* Salary Package */}
//             <div className="mt-4 bg-red-600 text-white py-2 px-4 w-full text-center text-lg font-bold">
//               {employee.package}
//             </div>

//             {/* Company Logo */}
//             <div className="mt-4">
//               <img
//                 src={employee.companyLogo}
//                 alt="Company Logo"
//                 className="w-20 h-auto"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EmployeeCards;



import React from "react";

const EmployeeCards = () => {
  // Sample data
  const employees = [
    {
              "name": "Arpit Jindal",
              "college": "Gautam Buddha University",
              "designation": "DevOps Consultant",
              "package": "12 LPA",
              "companyLogo": "/company-logo.png"
            },
            {
              "name": "Akansh Agarwal",
              "college": "Shri Ram Murti Smarak College of Engineering and Technology, Bareilly",
              "designation": "Framework Engineer",
              "package": "8.5 LPA",
              "companyLogo": "/company-logo.png"
            },
            {
              "name": "Mohit Vyas",
              "college": "Madhyanchal Professional University Bhopal",
              "designation": "Associate Software Engineer",
              "package": "10 LPA",
              "companyLogo": "/company-logo.png"
            },
            {
              "name": "Mannan Siddiqui",
              "college": "VIT Vellore",
              "designation": "Associate MLOPS Engineer",
              "package": "9.4 LPA",
              "companyLogo": "/company-logo.png"
            },
            {
              "name": "Sahil Gulghane",
              "college": "Shri Ramdeobaba College of Engineering and Technology, Nagpur",
              "designation": "DevOps Engineer",
              "package": "7.5 LPA",
              "companyLogo": "/company-logo.png"
            },
            {
              "name": "Akshit Saini",
              "college": "Vellore Institute of Technology, Chennai",
              "designation": "Associate MLOPS Engineer",
              "package": "9 LPA",
              "companyLogo": "/company-logo.png"
            },
            {
              "name": "Kishan Ray",
              "college": "IMS Engineering College, Ghaziabad",
              "designation": "Technology Specialist",
              "package": "7 LPA",
              "companyLogo": "/company-logo.png"
            },
            {
              "name": "Aman Dev Verma",
              "college": "UPES, Uttarakhand",
              "designation": "Associate Technical Engineer",
              "package": "9 LPA",
              "companyLogo": "/company-logo.png"
            },
            {
              "name": "Rahul Kumar",
              "college": "Revo University, Bangalore",
              "designation": "DevSecOps Engineer",
              "package": "10 LPA",
              "companyLogo": "/company-logo.png"
            },
            {
              "name": "Kuldeep Kumawat",
              "college": "BIT Mesra",
              "designation": "Junior DevOps Engineer",
              "package": "5 LPA",
              "companyLogo": "/company-logo.png"
            },
            {
              "name": "Ishita Singhal",
              "college": "Uttaranchal University, Dehradun",
              "designation": "System Engineer",
              "package": "8 LPA",
              "companyLogo": "/company-logo.png"
            },
            {
              "name": "Mohak Gund",
              "college": "LNCT University, Bhopal",
              "designation": "System Engineer",
              "package": "6 LPA",
              "companyLogo": "/company-logo.png"
            },
            {
              "name": "Nischay Mehrotra",
              "college": "Indian Institute of Information Technology & Research Center, Nashik",
              "designation": "DevOps Consultant",
              "package": "10.5 LPA",
              "companyLogo": "/company-logo.png"
            },
            {
              "name": "Krushna",
              "college": "KIIT University, Bhubaneswar, Odisha",
              "designation": "DevOps Consultant",
              "package": "8 LPA",
              "companyLogo": "/company-logo.png"
            },
            {
              "name": "Akshansh Kumar Singh",
              "college": "Gautam Buddha University",
              "designation": "DevOps Engineer",
              "package": "10 LPA",
              "companyLogo": "/company-logo.png"
            },
            {
              "name": "Aditya Joshi",
              "college": "Shri Ram Murti Smarak College of Engineering and Technology, Bareilly",
              "designation": "Framework Engineer",
              "package": "8.5 LPA",
              "companyLogo": "/company-logo.png"
            }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen p-12 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {employees.map((employee, index) => (
          <div
            key={index}
            className="relative border-2 rounded-lg shadow-lg bg-pink-100 w-[300px] h-[360px] flex flex-col items-center"
          >
            {/* Pin Icon */}
            <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
              📌
            </div>

            {/* Profile Image and Name */}
            <div className="flex flex-col items-center mt-6">
              {/* Profile Image */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-red-600 flex-shrink-0">
                <img
                  src="/profile-placeholder.png" // Replace with dynamic image
                  alt={employee.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and College */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-red-600 break-words">
                  {employee.name}
                </h3>
                <p className="text-sm text-gray-600 break-words">
                  {employee.college}
                </p>
              </div>
            </div>

            {/* Designation */}
            <div className="mt-4 text-center text-gray-800 font-semibold">
              <p>Got Selected as</p>
              <p className="text-red-600">{employee.designation}</p>
            </div>

            {/* Salary Package */}
            <div className="mt-4 bg-red-600 text-white py-2 px-4 w-full text-center text-lg font-bold">
              {employee.package}
            </div>

            {/* Company Logo */}
            <div className="mt-4">
              <img
                src={employee.companyLogo}
                alt="Company Logo"
                className="w-20 h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeCards;
