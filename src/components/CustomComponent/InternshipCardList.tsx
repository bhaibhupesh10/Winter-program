import React from "react";

const EmployeeCards = () => {
  // Sample data
  const employees = [
    {
      name: "Arpit Jindal",
      college: "VIT Vellore",
      designation: "DevOps Consultant",
      package: "12 LPA",
      companyLogo: "/mercedes-benz-logo.png", // Replace with the actual path
    },
    {
      name: "Akansh Agarwal",
      college: "BITS Pilani",
      designation: "Framework Engineer",
      package: "8.5 LPA",
      companyLogo: "/quantiphi-logo.png",
    },
    {
      name: "Sahil Gulhane",
      college: "IIT Delhi",
      designation: "DevOps Engineer",
      package: "7.5 LPA",
      companyLogo: "/unthinkable-logo.png",
    },
    {
      name: "Akshit Saini",
      college: "Delhi University",
      designation: "Associate MLOPS Engineer",
      package: "9 LPA",
      companyLogo: "/npci-logo.png",
    },
    {
      name: "Rahul Kumar",
      college: "IIIT Bangalore",
      designation: "DevSecOps Engineer",
      package: "10 LPA",
      companyLogo: "/paytm-logo.png",
    },
    {
      name: "Kuldeep Kumawat",
      college: "IIT Messa",
      designation: "DevOps Engineer",
      package: "5 LPA",
      companyLogo: "/peerxp-logo.png",
    },
  ];

  return (

    <div className="flex justify-center items-center min-h-screen p-12 bg-gray-100">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {employees.map((employee, index) => (
          <div
            key={index}
            className="relative border-2 rounded-lg shadow-lg bg-pink-100 w-[300px] h-[320px] flex flex-col items-center"
          >
            {/* Pin Icon */}
            <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
              📌
            </div>

            {/* Profile Image and Name */}
            <div className="flex items-center gap-4 mt-6">
              {/* Profile Image */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-red-600">
                <img
                  src="/profile-placeholder.png" // Replace with dynamic image
                  alt={employee.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and College */}
              <div>
                <h3 className="text-lg font-bold text-red-600">
                  {employee.name}
                </h3>
                <p className="text-sm text-gray-600">{employee.college}</p>
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
