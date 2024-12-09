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
      <div className="w-full min-h-[20rem] bg-[#181A1B] font-sans p-8 shadow-lg border-0 rounded-none" id="contactus">
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
          
        </div>
    
        
      </div>
    </div>

    {/* Right Section */}
    <div className="flex-1 sticky top-20 h-fit bg-[#181A1B] max-h-[calc(100vh-4rem)]">
      <Card className="bg-[#181A1B]">
        <CardHeader>
          <CardTitle className="text-lg sm:text-2xl text-white">Confused 🤔 about 7 days Technical Bootcamp ?</CardTitle>
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
              <Input className="text-white" placeholder="Query (if Any)" />
            </div>
            <Button className="w-full bg-[#ff0000] hover:bg-[#ff0000] hover:shadow-white hover:shadow-md">Submit</Button>
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
