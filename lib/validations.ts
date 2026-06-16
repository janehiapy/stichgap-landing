import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
  name: z.string().trim().min(2, "Tell us your name."),
  role: z.enum(["Owner", "Manager", "Operations", "Finance", "Investor", "Other"], {
    error: "Select your role.",
  }),
  businessType: z.enum([
    "Restaurant",
    "Cafe",
    "Bar",
    "Hawker / stall",
    "Cloud kitchen",
    "Multi-outlet group",
    "Other",
  ], {
    error: "Select your business type.",
  }),
});

export type WaitlistPayload = z.infer<typeof waitlistSchema>;
