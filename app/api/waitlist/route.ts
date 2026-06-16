import { NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { message: "Waitlist is not configured yet." },
      { status: 503 },
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON payload." }, { status: 400 });
  }

  const parsed = waitlistSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Please check the form fields.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        email: parsed.data.email,
        name: parsed.data.name,
        role: parsed.data.role,
        business_type: parsed.data.businessType,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "The waitlist could not be updated. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "You are on the list." });
  } catch {
    return NextResponse.json(
      { message: "The waitlist could not be updated. Please try again." },
      { status: 502 },
    );
  }
}
