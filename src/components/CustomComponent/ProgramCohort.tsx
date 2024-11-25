import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, GraduationCap, Briefcase, Code } from 'lucide-react'

export default function ProgramCohorts() {
  return (
    <div className="container max-w-6xl mx-auto p-6 space-y-6">
      {/* Headers */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900">Program Cohorts</h1>
        <h2 className="text-xl text-gray-700">Next Cohort</h2>
      </div>

      {/* Cohort Card */}
      <Card className="p-6">
        <div className="space-y-6">
          {/* Card Header */}
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-medium">PGP DO DEC 2024 Cohort 1</h3>
            <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">
              Limited Seats Left
            </span>
          </div>

          {/* Schedule Table */}
          <div className="space-y-4">
            <div className="grid grid-cols-3 text-sm text-gray-500 pb-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Time
              </div>
              <div>Batch Type</div>
            </div>

            {/* Program Induction Row */}
            <div className="grid grid-cols-3 text-sm border-b pb-4">
              <div>
                <div className="font-medium">Program Induction</div>
                <div>27 Nov, 2024</div>
              </div>
              <div>19:00 IST</div>
              <div></div>
            </div>

            {/* Regular Classes Row */}
            <div className="grid grid-cols-3 text-sm items-center">
              <div>
                <div className="font-medium">Regular Classes</div>
                <div>14 Dec, 2024 - 30 Sep, 2025</div>
              </div>
              <div>19:30 - 23:30 IST</div>
              <div className="flex items-center justify-between">
                <span>Weekend (Sat - Sun)</span>
                <Button className="bg-red-500 hover:bg-red-600">
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
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Eligibility Criteria</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <GraduationCap className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <p className="text-sm text-gray-600">
                Bachelor's degree with an average of 50% or higher marks
              </p>
            </div>
            <div className="flex gap-3">
              <Briefcase className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <p className="text-sm text-gray-600">
                One year of prior work experience (preferred)
              </p>
            </div>
            <div className="flex gap-3">
              <Code className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <p className="text-sm text-gray-600">
                Can be from a programming or non-programming background
              </p>
            </div>
          </div>
        </Card>

        {/* Best Suited For */}
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Best Suited For</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "DevOps Engineers",
              "DevsecOps Architects",
              "Software Engineers",
              "Site Reliability Engineers",
              "Release Managers",
              "DevOps Cloud Engineers"
            ].map((role, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                <span className="text-sm text-gray-600">{role}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

