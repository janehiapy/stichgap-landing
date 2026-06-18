"use client";

import { type FormEvent, useState } from "react";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { type WaitlistPayload, waitlistSchema } from "@/lib/validations";

type Status = "idle" | "loading" | "success" | "error";

const roles: WaitlistPayload["role"][] = ["Owner", "Manager", "Operations", "Finance", "Investor", "Other"];
const businessTypes: WaitlistPayload["businessType"][] = [
  "Restaurant",
  "Cafe",
  "Bar",
  "Hawker / stall",
  "Cloud kitchen",
  "Multi-outlet group",
  "Other",
];

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("Join the waitlist for early access and live build updates.");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setMessage("Checking your details...");

    const formData = new FormData(form);
    const payload = {
      email: String(formData.get("email") ?? ""),
      name: String(formData.get("name") ?? ""),
      role: String(formData.get("role") ?? ""),
      businessType: String(formData.get("businessType") ?? ""),
    };

    const parsed = waitlistSchema.safeParse(payload);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0]?.message ?? "Please check the form fields.";
      setStatus("error");
      setMessage(firstIssue);
      return;
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Submission failed.");
      }

      form.reset();
      setStatus("success");
      setMessage("You are on the list. We will email you as StitchGap ships.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="waitlist" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
      <FadeIn>
        <div className="grid gap-10 rounded-[10px] border border-[#A8E6CF]/30 bg-[#0056FF] p-5 shadow-[0_30px_120px_rgba(0,86,255,0.32)] sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#A8E6CF]">Early access</p>
            <h2 className="mt-6 max-w-lg text-5xl font-medium leading-[1.06] tracking-[-0.065em] text-white sm:text-6xl">
              Build with us while StitchGap takes shape
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-[1.3] tracking-[-0.03em] text-white/76">
              This product is currently in the making. Subscribe to follow the build, express interest, and get live updates as we shape the first F&B owner dashboard.
            </p>
          </div>

          <form onSubmit={onSubmit} className="grid gap-4" noValidate>
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Jane Tan" autoComplete="name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="jane@restaurant.com" autoComplete="email" required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <Select id="role" name="role" defaultValue="" required>
                  <option value="" disabled>Choose role</option>
                  {roles.map((role) => <option key={role} value={role}>{role}</option>)}
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="businessType">Business type</Label>
                <Select id="businessType" name="businessType" defaultValue="" required>
                  <option value="" disabled>Choose type</option>
                  {businessTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </Select>
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
                {status === "loading" ? "Submitting..." : "Join waitlist"}
              </Button>
              <p className={status === "error" ? "text-sm text-[#FB7D5D]" : "text-sm text-white/76"} aria-live="polite">
                {message}
              </p>
            </div>
          </form>
        </div>
      </FadeIn>
    </section>
  );
}
