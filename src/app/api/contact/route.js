import { NextResponse } from "next/server";
import { portfolioData } from "@/data/portfolioData";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, website } = body || {};

    // Honeypot spam protection
    if (website && website.trim() !== "") {
      return NextResponse.json({
        success: true,
        message: "Message processed.",
      });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a message of at least 10 characters.",
        },
        { status: 400 }
      );
    }

    // Log structured inquiry on server (can be connected to Resend / SMTP env key)
    console.info("[PORTFOLIO CONTACT INQUIRY]", {
      recipient: portfolioData.owner.email,
      senderName: name.trim(),
      senderEmail: email.trim(),
      subject: subject || "General Inquiry",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: `Thank you, ${name.trim()}! Your inquiry has been recorded for ${
        portfolioData.owner.fullName
      } (${portfolioData.owner.email}).`,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process contact request. Please try again.",
      },
      { status: 500 }
    );
  }
}

