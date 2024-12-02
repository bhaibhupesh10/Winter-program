import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, GraduationCap, Briefcase, Code } from 'lucide-react'

export default function ProgramCohorts() {
  return (
    <div className="bg-[#181A1B]" id="programcohorts">
    <div className="container max-w-6xl mx-auto p-6 space-y-6">
      {/* Headers */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-white"> 
        Winter Industrial <span className="text-[#ff0000]"> Training Program Details
        </span>
          {/* Program <span className="text-[#ff0000]">Cohorts</span> */}
          
          </h1>
        <h2 className="text-xl text-white">
        {/* Chance to learn in person with Mr Vimal Daga  */}

        Chance to learn in person with  <span className="text-[#ff0000]">Mr Vimal Daga </span> 

          {/* Next Cohort */}
          
          </h2>
      </div>

      {/* Cohort Card */}
      <Card className="p-6 bg-[#181A1B]">
        <div className="space-y-6">
          {/* Card Header */}
          <div className="flex items-center gap-3">
            <h3 className="text-lg  text-white font-medium">LW Winter Industrial Training Program 2024</h3>
            <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">
            Limited Seats available
            </span>
          </div>

          {/* Schedule Table */}
          <div className="space-y-4">
            <div className="grid grid-cols-3 text-sm text-gray-500 pb-2">
              <div className="flex items-center text-white gap-2">
              Duration 
              </div>
              <div className="flex text-white items-center gap-2">
                <Clock className="w-4 text-white h-4" />
                Time
              </div>
              <div className="text-white">Location </div>


            </div>

            {/* Program Induction Row */}
            <div className="grid grid-cols-3 text-sm border-b pb-4">
              <div>
                <div className="font-medium text-white"> 26th Dec, 2024 - 5th Jan, 2025
                </div>

              </div>
              <div className="text-white">10:00 am - 3:00 pm IST 
              </div>
              <div className="text-white">Jaipur
             
              </div>
              <div className="flex  mt-4 flex-col sm:flex-row items-center sm:items-center">
               
               <Button className="bg-red-500   hover:bg-red-600 mt-2 sm:mt-0 sm:ml-4">
                 Apply Now
               </Button>
             

             </div>
             
              {/* <div className="w-1/2 mx-auto">
              <Button className="bg-red-500  hover:bg-red-600 mt-2 sm:mt-0 sm:ml-4">
                  Apply Now
                </Button>
              </div> */}
              {/* <div>df</div> */}
            </div>
          
           

            

            {/* <div className="grid grid-cols-3 text-sm items-center">
              <div>
                <div className="font-medium text-white">Regular Classes</div>
                <div className="text-white">14 Dec, 2024 - 30 Sep, 2025</div>
              </div>
              <div className="text-white">19:30 - 23:30 IST</div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <span>Weekend (Sat - Sun)</span>
                <Button className="bg-red-500 hover:bg-red-600 mt-2 sm:mt-0 sm:ml-4">
                  Apply Now
                </Button>
              

              </div>
            </div> */}

<div className="grid grid-cols-3 text-sm text-gray-500 pb-2">
              <div className="flex items-center text-white gap-2">
              Duration 
              </div>
              <div className="flex text-white items-center gap-2">
                <Clock className="w-4 text-white h-4" />
                Time
              </div>
              <div className="text-white">Location </div>
             
            </div>

            {/* Program Induction Row */}
            <div className="grid grid-cols-3 text-sm border-b pb-4">
              <div>
                <div className="font-medium text-white"> 26th Dec, 2024 - 5th Jan, 2025
                </div>

              </div>
              <div className="text-white">4:00 pm - 9:00 pm IST 

              </div>
              <div className="text-white">Jaipur
              </div>
              <div className="flex  mt-4 flex-col sm:flex-row items-center sm:items-center">
               
               <Button className="bg-red-500   hover:bg-red-600 mt-2 sm:mt-0 sm:ml-4">
                 Apply Now
               </Button>
             

             </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Bottom Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Eligibility Criteria */}
        <Card className="p-6 bg-[#181A1B]">
          <h3 className="text-lg text-white font-medium mb-4">Eligibility Criteria</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <GraduationCap className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <p className="text-sm text-white">
              Any technical student who is undergoing a degree : BTech | BCA | MCA | MTech | BScIT

              </p>
            </div>
            <div className="flex gap-3">
              <Briefcase className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <p className="text-sm text-white">
              No prior knowledge required : Learn from Basic to Advance Level
              </p>
            </div>
            <div className="flex gap-3">
              <Code className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <p className="text-sm text-white">
              Curious to learn something new & build an industry level project
              </p>
            </div>
          </div>
        </Card>

        {/* Best Suited For */}
        <Card className="p-6 bg-[#181A1B]">
          <h3 className="text-lg font-medium mb-4 text-white">Deliverables 
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Get Winter Industrial Training Certificate from LW Informatics Pvt Ltd",
              "Industry Recognised Project Certificate signed by Mr Vimal Daga",
              "Learn from The World Record Holder, Mr Vimal Daga",
              // "Site Reliability Engineers",
              // "Release Managers",
              // "DevOps Cloud Engineers"
            ].map((role, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span className="text-sm text-gray-600 text-white">{role}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
    </div>
  )
}

