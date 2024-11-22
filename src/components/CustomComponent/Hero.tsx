export default function HeroSection() {
    return (
      <div className="min-h-screen bg-[#1A1B1E] flex items-center px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Launch Your{" "}
              <span className="text-[#FF9776]">Dev</span>
              {" "}Career with{" "}
              <span className="text-[#4DFFD1]">Expert Guidance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Receive job offers within weeks with our proven curriculum,
              market-leading strategies, and expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#1A91FF] text-white rounded-lg text-lg font-semibold hover:bg-[#1A91FF]/90 transition-colors">
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
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="Golden Trophy"
              className="w-full max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    )
  }
  
  