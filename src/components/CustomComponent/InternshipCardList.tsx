import React from "react";
import arpitJindal from "../../../public/assets/placed-students-photos/arpitJindal.png";
import akanshAgarwal from "../../../public/assets/placed-students-photos/akanshagarwal.png";
import tcs from "../../../public/assets/companyLogo/tcs.png"
import mannansiddiqui from "../../../public/assets/placed-students-photos/mannansiddhiqui.png";
import NPCI from "../../../public/assets/companyLogo/npci.png"
import redhat from "../../../public/assets/companyLogo/redhat.png"
import mercedes from "../../../public/assets/companyLogo/mercedes.png"
import paytm from "../../../public/assets/companyLogo/paytm.png"
import searce from "../../../public/assets/companyLogo/searce.png"



const EmployeeCards = () => {
  
  const employees = [
    {
      name: "Arpit Jindal",
      college: "Gautam Buddha University",
      designation: "DevOps Consultant",
      package: "12 LPA",
      companyLogo: mercedes.src.toString(),
      photo: arpitJindal.src.toString(), // Image path
    },
    {
      name: "Akansh Agarwal",
      college: "Shri Ram Murti Smarak College of Engineering and Technology, Bareilly",
      designation: "Framework Engineer",
      package: "8.5 LPA",
      companyLogo: "/company-logo.png",
      photo: akanshAgarwal.src.toString(), // Image path  
        },
    {
      name: "Mohit Vyas",
      college: "Madhyanchal Professional University Bhopal",
      designation: "Associate Software Engineer",
      package: "10 LPA",
      companyLogo: redhat.src.toString(),
      photo: "https://media.licdn.com/dms/image/v2/D4D03AQFOm1Et-F6_Zg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696063474166?e=1738195200&v=beta&t=3jQQM1IkM4arj9WBwEAg3WlUKDVW3DIhNNxZk2SWMag"
    },
    {
      name: "Mannan Siddiqui",
      college: "Gautam Buddha University Uttar Pradesh",
      designation: "Associate MLOPS Engineer",
      package: "9.4 LPA",
      companyLogo: NPCI.src.toString(),
      photo: mannansiddiqui.src.toString(), // Image path
    },
    {
              name: "Sahil Gulghane",
              college: "Shri Ramdeobaba College of Engineering and Technology, Nagpur",
              designation: "DevOps Engineer",
              package: "7.5 LPA",
              companyLogo: "/company-logo.png",
              photo: "https://media.licdn.com/dms/image/v2/D5603AQHCe2C0VAqF4w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1679854491156?e=1738195200&v=beta&t=Lx7_ESqT3nc8oHH1EXzjBf9_wK-NlrQn3w9s45mAsmM"
              
            },
            {
              "name": "Akshit Saini",
              "college": "Vellore Institute of Technology, Chennai",
              "designation": "Associate MLOPS Engineer",
              "package": "9 LPA",
              "companyLogo": NPCI.src.toString(),
              photo: "https://media.licdn.com/dms/image/v2/D4D03AQGpO7_jFVxiGA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1679605109003?e=1738195200&v=beta&t=nZBL6-aL-gPe7gg8jiT8iBeKIEW-NXhoSzKHyOBcE_Q"
            },
            {
              "name": "Kishan Ray",
              "college": "IMS Engineering College, Ghaziabad",
              "designation": "Technology Specialist",
              "package": "7 LPA",
              "companyLogo": "/company-logo.png",
              photo: "https://media.licdn.com/dms/image/v2/C5603AQG-a3gziucysg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1610085567306?e=1738195200&v=beta&t=HK-iN4_jFwzU4kf8_0eiC1lskZHQz9eAg4BieYxK8tU"
            },
            {
              "name": "Aman Dev Verma",
              "college": "UPES, Uttarakhand",
              "designation": "Associate Technical Engineer",
              "package": "9 LPA",
              "companyLogo":redhat.src.toString(),
              photo: "https://media.licdn.com/dms/image/v2/C4E03AQG80zPrzb5DNA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1632662096352?e=1738195200&v=beta&t=nlQWrEjHRlYAobCUHM_pYxFr4nonJmY62N1kp4vY3D4"
            },
            {
              "name": "Rahul Kumar",
              "college": "Revo University, Bangalore",
              "designation": "DevSecOps Engineer",
              "package": "10 LPA",
              "companyLogo": paytm.src.toString(),
              photo: arpitJindal.src.toString(),
            },
            {
              "name": "Kuldeep Kumawat",
              "college": "BIT Mesra",
              "designation": "Junior DevOps Engineer",
              "package": "5 LPA",
              "companyLogo": "/company-logo.png",
              photo: "https://media.licdn.com/dms/image/v2/C5603AQEFEK6AZezq1w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1648188295791?e=1738195200&v=beta&t=QFSeJo0EGvNeyZ8S9zyqb-WPKVd7HK689wODXv-Mb1Q"
            },
            {
              "name": "Ishita Singhal",
              "college": "Uttaranchal University, Dehradun",
              "designation": "System Engineer",
              "package": "8 LPA",
              "companyLogo": NPCI.src.toString(),
              photo: "https://media.licdn.com/dms/image/v2/D4D03AQHQEAr_DO0Hyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681472849074?e=1738195200&v=beta&t=xoZ1ojHtcQK9lnZff6lY0XoVJa2QW2DrFn_-6n-htF0"
            },
            {
              "name": "Mohak Gund",
              "college": "LNCT University, Bhopal",
              "designation": "System Engineer",
              "package": "6 LPA",
              "companyLogo": searce.src.toString(),
              photo: "https://media.licdn.com/dms/image/v2/D4D03AQEJreXf2bPQ2Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700913649608?e=1738195200&v=beta&t=LVGismW4SsIq7RUkktttzQPmpYXk-HcfvZnhrU7sWGk"
            },
            {
              "name": "Nischay Mehrotra",
              "college": "Indian Institute of Information Technology & Research Center, Nashik",
              "designation": "DevOps Consultant",
              "package": "10.5 LPA",
              "companyLogo": NPCI.src.toString(),
              photo: "https://media.licdn.com/dms/image/v2/D5603AQH0C8r82a1VGw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724256924576?e=1738195200&v=beta&t=PQ8-fL_hftJPh3DySigC9QETC_sRTQfF-c2hvDrhEBE"
            },
            {
              "name": "Krushna",
              "college": "KIIT University, Bhubaneswar, Odisha",
              "designation": "DevOps Consultant",
              "package": "8 LPA",
              "companyLogo": redhat.src.toString(),
              photo: "https://media.licdn.com/dms/image/v2/D5603AQFY_HUQibo-0Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708231242198?e=1738195200&v=beta&t=QabBi1UJbpFrq96QIDgYatSx7w7JoPp1V36JtSGAaqo"
            },
            {
              "name": "Akshansh Kumar Singh",
              "college": "Gautam Buddha University",
              "designation": "DevOps Engineer",
              "package": "10 LPA",
              "companyLogo": tcs.src.toString(),
              photo: "https://media.licdn.com/dms/image/v2/D5603AQHdz88Mb13AyQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1678216176636?e=1738195200&v=beta&t=zqzFzpfnTiT-8zJkx1EvfBfKtH5vCmiLIZoKYr5QjsU"
            } ,
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
                  src={employee.photo} // Dynamic photo
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
            <div className="mt-4 bg-[#ffffff] m-4">
              <img
                src={employee.companyLogo}
                alt="Company Logo"
                className="w-20 h-auto "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeCards;
