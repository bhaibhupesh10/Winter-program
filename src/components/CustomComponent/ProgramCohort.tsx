import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, GraduationCap, Briefcase, Code } from 'lucide-react'

export default function ProgramCohorts() {
  return (
    <div className="bg-[#181A1B] pt-4" id="programcohorts">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Headers */}
        <div className="space-y-2">
          <h1 className="text-lg sm:text-2xl font-semibold text-white">
            Winter Industrial{" "}
            <span className="text-[#ff0000]">Training Program Details</span>
          </h1>
          <h2 className="text-sm sm:text-lg text-white">
            Chance to learn in person with{" "}
            <span className="text-[#ff0000]">Mr Vimal Daga</span>
          </h2>
        </div>

        {/* Cohort Card */}
        <Card className="p-6 bg-[#181A1B]">
          <div className="space-y-6">

            {/* Card Header */}
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-sm sm:text-lg text-white ">
                LW Winter Industrial Training Program 2024
              </h3>
              <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">
                Limited Seats available
              </span>
            </div>

            {/* Schedule Table */}
            <div className="space-y-4">
              {/* Header row - hidden on mobile, visible on desktop */}
              <div className="hidden sm:grid sm:grid-cols-4 text-sm text-gray-500 pb-2">
                <div className="flex items-center text-sm text-white gap-2">Duration</div>
                <div className="flex text-white items-center gap-2">Time</div>
                <div className="text-white text-sm">Location</div>
                <div className="text-white text-sm">Action</div>
              </div>

              {/* Program Induction Rows with different date ranges */}
              {[
                {
                  date: "26th Dec, 2024 - 1st Jan, 2025",
                  time: "10:00 am - 07:00 pm IST",
                },
                {
                  date: "3rd Jan, 2025 - 9th Jan, 2025",
                  time: "10:00 am - 07:00 pm IST",
                },
              ].map((program, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:grid sm:grid-cols-4 text-sm border-b pb-4 gap-y-2 sm:gap-y-0"
                >
                  {/* Mobile: Stacked layout */}
                  <div className="flex flex-col sm:hidden">
                    <div className="font-medium text-sm text-white">Duration</div>
                    <div className="text-white text-sm mb-2">{program.date}</div>
                    
                    <div className="font-medium text-sm text-white">Time</div>
                    <div className="text-white text-sm mb-2">{program.time}</div>
                    
                    <div className="font-medium text-sm text-white">Location</div>
                    <div className="text-white text-sm mb-2">Jaipur</div>
                  </div>

                  {/* Desktop: Grid layout (unchanged) */}
                  <div className="hidden sm:block">
                    <div className="font-medium text-sm text-white">{program.date}</div>
                  </div>
                  <div className="hidden sm:block text-white text-sm">{program.time}</div>
                  <div className="hidden sm:block text-white text-sm">Jaipur</div>
                  
                  {/* Action button - same for both mobile and desktop */}
                  <div>
                    <a href="#bookyourseat">
                      <Button className="w-full sm:w-auto bg-[#ff0000] hover:shadow-white hover:shadow-md hover:bg-[#ff0000]">
                        Book your Seat 
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Eligibility Criteria */}
          <Card className="p-6 bg-[#181A1B]">
            <h3 className="text-lg text-white font-medium mb-4">
              Eligibility Criteria
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <GraduationCap className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-sm text-white">
                  Any technical student who is undergoing a degree : BTech | BCA
                  | MCA | MTech | BScIT
                </p>
              </div>
              <div className="flex gap-3">
                <Briefcase className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-sm text-white">
                  No prior knowledge required : Learn from Basic to Advance
                  Level
                </p>
              </div>
              <div className="flex gap-3">
                <Code className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-sm text-white">
                  Curious to learn something new & build an industry level
                  project
                </p>
              </div>
            </div>
          </Card>

          {/* Best Suited For */}
          <Card className="p-6 bg-[#181A1B]">
            <h3 className="text-lg font-medium mb-4 text-white">Deliverables</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Get Winter Industrial Training Certificate from LW Informatics Pvt Ltd",
                "Industry Recognised Project Certificate signed by Mr Vimal Daga",
                "Learn from The World Record Holder, Mr Vimal Daga",
              ].map((role, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span className="text-sm text-white">{role}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
