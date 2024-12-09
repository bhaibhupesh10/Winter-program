import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";

// Define the structure for the request body
interface ContactFormData {
  fullName: string;
  whatsappNumber: string;
  collegeName: string;
}

// Define the structure of the API response
interface ResponseData {
  success?: boolean;
  message?: string;
  error?: string;
  info?: string;
}

export async function POST(request: NextRequest) {
  // Retrieve and validate environment variables
  const smtpUser: string = process.env.SMTP_USER || "linuxworld.certificates@gmail.com";
  const smtpPass: string = process.env.EMAIL_PASS || "";
  const smtpHost: string = "smtp.gmail.com";
  const smtpPort: number = 587;
  const recipientEmail: string = "chandak.preeti@gmail.com";

  if (!smtpUser || !smtpPass || !recipientEmail) {
    console.error("Server misconfiguration: Missing email credentials.");
    return NextResponse.json<ResponseData>(
      { error: "Server misconfiguration: Missing email credentials." },
      { status: 500 }
    );
  }

  // Parse request body
  let body: ContactFormData;
  try {
    body = await request.json();
  } catch (err) {
    console.log(err);
    return NextResponse.json<ResponseData>(
      { error: "Invalid JSON payload in the request body." },
      { status: 400 }
    );
  }

  const { fullName, whatsappNumber, collegeName } = body;

  // Validate required fields
  if (!fullName || !whatsappNumber) {
    return NextResponse.json<ResponseData>(
      { error: "Full name and WhatsApp number are required." },
      { status: 400 }
    );
  }

  if (!/^\d{10,15}$/.test(whatsappNumber)) {
    return NextResponse.json<ResponseData>(
      { error: "WhatsApp number must be a valid numeric string between 10 and 15 digits." },
      { status: 400 }
    );
  }

  // Create nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    // Email options
    const mailOptions = {
      from: `"${fullName}" <${smtpUser}>`,
      to: recipientEmail,
      subject: `New Query for Winter Training from ${fullName}`,
      text: `
        You have received a new message:

        Full Name: ${fullName}
        WhatsApp Number: ${whatsappNumber}
        College Name: ${collegeName}
      `.trim(),
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json<ResponseData>(
      {
        success: true,
        message: "Email sent successfully!",
        info: info.messageId,
      },
      { status: 200 }
    );
  } catch (error:any) {
    console.error("Error sending email:", error.message);
    return NextResponse.json<ResponseData>(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
