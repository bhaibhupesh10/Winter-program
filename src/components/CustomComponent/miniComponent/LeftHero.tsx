import HeroImage from "../../../public/vimalsir.png"
export default function LeftHero() {
    return (
        <>
        <div className="overflow-hidden">
        <div className="flex-1 space-y-8">
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
              Launch Your{" "}
              <span className="text-[#DC2626]">Dev</span>
              {" "}Career with{" "}
              <span className="text-[#DC2626]">Expert Guidance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            Learn, <span className="text-[#DC2626] text-bold">Innovate,</span>  and  <span className="text-[#DC2626] text-bold">Create </span>  with Indias Most <span className="text-[#DC2626]">Visionary Mentor </span> 
In person after 5 years Offline Winter Industrial Training Program

            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#DC2626] text-white rounded-lg text-lg font-semibold hover:bg-[#-[#DC2626]/90 transition-colors">
                Enroll now
              </button>
              <button className="px-8 py-4 bg-[#25262B] text-white rounded-lg text-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#25262B]/90 transition-colors">
                Learn more
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>

        </div>
        
        </>

    )
  }
  
  