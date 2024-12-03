"use client";
import { Card,CardHeader,CardTitle,CardContent } from "@/components/ui/card";
import { MailCheck } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PhoneCall } from 'lucide-react';
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function SupportContact() {
  return (
    <>
      <div className="w-full min-h-[20rem] bg-[#181A1B] font-sans p-8 shadow-lg border-0 rounded-none" id="Inquire">
      <h1 className="text-center mb-4  text-lg sm:text-2xl text-white pb-4">
      {/* Connect with  */}
      Connect with : <span className="text-[#ff0000]"> Linux World </span>
          </h1>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
    {/* Left Section */}
    <div className="flex-1 space-y-4">
      {/* Management Queries */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          {/* <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#FF9933" />
            <circle cx="16" cy="16" r="5.33333" fill="white" />
            <circle cx="16" cy="16" r="2.66667" fill="#000080" />
            <rect y="21.3333" width="10" height="10" fill="#138808" />
          </svg> */}
          {/* <span className="text-[1.275rem] text-white font-semibold">Management Queries</span> */}
         <div>

         <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-3">
                <Phone className="w-6 h-6 text-zinc-900" />
              </div>
              <div className="pt-4">
                <h3 className="text-cyan-400 text-xl font-semibold mb-1">Phone</h3>
                <a href="tel:+919773353561" className="text-white hover:underline">
                  +91 9773353561
                </a>
                <br />
                <a href="tel:+919829105960" className="text-white hover:underline">
                  +91 9829105960
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="bg-white rounded-full p-3">
                <Mail className="w-6 h-6 text-zinc-900" />
              </div>
              <div>
                <h3 className="text-cyan-400 text-xl font-semibold mb-1">Email</h3>
                <a href="mailto:preeti@lwindia.com" className="text-white hover:underline">
                  preeti@lwindia.com
                </a>
              </div>
            </div>
          </div>
         </div>

        
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          {/* <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#34D399" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28ZM16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26Z"
              fill="#059669"
            />
          </svg> */}
          {/* <span className="text-[1.275rem] text-white font-semibold">Technical Queries</span> */}

          {/* <PhoneCall size={24}  className="bg-[#181A1B] text-xl text-white "/> */}
        </div>
        {/* <a
          href="tel:+918045604032"
          className="inline-flex items-center gap-3 px-4 py-2 rounded-[0.375rem] text-[1.375rem] font-semibold text-white hover:bg-[#3D0707] transition-colors"
        >
          +91 97722 01449
        </a> */}

        
      </div>
    </div>

    {/* Right Section */}
    <div className="flex-1 sticky top-20 h-fit bg-[#181A1B] max-h-[calc(100vh-4rem)]">
      <Card className="bg-[#181A1B]">
        <CardHeader>
          <CardTitle className="text-lg sm:text-2xl text-white">Confused 🤔 about Winter Training?</CardTitle>
          <p className="text-sm sm:text-lg text-white">Speak to our Counsellor for guidance</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Input className="text-white" placeholder="Name" />
            </div>
            <div className="space-y-2">
              <Input className="text-white" placeholder="WhatsApp No" />
            </div>
            <div className="space-y-2">
              <Input className="text-white" placeholder="College Name" />
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-700">Submit</Button>
            <p className="text-xs text-white text-center">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="text-blue-600 hover:underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</div>

    </>

  );
}
