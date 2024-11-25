"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import { Circle } from "lucide-react"; 

interface Status {
  success: boolean;
  message: string;
}

export default function Component() {
  // Step 1: State variables with types
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [whatsappNumber, setWhatsappNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<Status | null>(null); // Status can be null or an object
  const [loading, setLoading] = useState<boolean>(false); // Add loading state

  // Step 2: Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    // Validate input
    if (!fullName || !email || !whatsappNumber || !message) {
      setStatus({ success: false, message: "All fields are required." });
      return;
    }

    // Set loading state to true before submitting
    setLoading(true);

    try {
      // Send POST request to the API
      const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          whatsappNumber,
          message,
        }),
      });

      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
        // Clear the form
        setFullName("");
        setEmail("");
        setWhatsappNumber("");
        setMessage("");
      } else {
        const errorData: { error?: string } = await response.json();
        setStatus({
          success: false,
          message: errorData.error || "Failed to send message.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      // Reset loading state after submission (success or failure)
      setLoading(false);
    }
  };

  return (
    <div className="bg-white px-4 py-12" id="contact">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-3xl font-bold text-[#000000] mb-2">
            Connect with <span className="text-[#ff0000]"> Linux World</span>
          </h1>
          <div className="h-1 w-16 bg-red-500 mb-2 mx-auto"></div>
          <p className="text-gray-900 max-w-3xl mx-auto text-md">
            Curious about Winter Program? Let&apos;s talk! Fill out the form or contact us — we&apos;re excited to help you take the next step in your journey!
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-0 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
      

            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-3">
                <Phone className="w-6 h-6 text-zinc-900" />
              </div>
              <div>
                <h3 className="text-black text-xl font-semibold mb-1">Phone</h3>
                <a href="tel:+919773353561" className="text-blackhover:underline">
                  +91 9773353561
                </a>
                <br />
                <a href="tel:+919829105960" className="text-blackhover:underline">
                  +91 9829105960
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-3">
                <Mail className="w-6 h-6 text-zinc-900" />
              </div>
              <div>
                <h3 className="text-black text-xl font-semibold mb-1">Email</h3>
                <a href="mailto:preeti@lwindia.com" className="text-black hover:underline">
                  preeti@lwindia.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white m-4">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-black">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="border-0 border-b border-zinc-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black text-black"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-black">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-0 border-b border-zinc-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black text-black"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="text-sm font-medium text-black">
                    WhatsApp No.
                  </label>
                  <Input
                    id="whatsapp"
                    type="text"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    className="border-0 border-b border-zinc-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black text-black"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[100px] border-0 border-b border-zinc-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black resize-none text-black"
                    placeholder="Type your message"
                  />
                </div>
                <Button
                  type="submit"
                  className={`w-full bg-[#ff0000] hover:bg-red-500 text-black text-lg ${loading ? "cursor-wait" : ""}`}
                  style={{ letterSpacing: "2px" }}
                  disabled={loading} // Disable the button while loading
                >
                  {loading ? (
                    <Circle className="w-5 h-5 animate-spin" /> // Spinner icon
                  ) : (
                    "Send"
                  )}
                </Button>
              </form>
              {status && (
                <p
                  className={`mt-4 text-center text-lg ${
                    status.success ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
