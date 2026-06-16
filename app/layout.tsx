import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, VT323 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stichgap.com"),
  title: "StichGap - AI F&B Profit Control (Coming Soon)",
  description:
    "Daily prime cost visibility and AI-recommended actions for F&B owners. Join the StichGap waitlist.",
  applicationName: "StichGap",
  keywords: [
    "StichGap",
    "F&B dashboard",
    "restaurant profit control",
    "prime cost",
    "AI dashboard",
    "food cost",
    "labour cost",
  ],
  openGraph: {
    title: "StichGap - AI F&B Profit Control",
    description:
      "A daily profit control room for F&B owners, currently in development.",
    url: "https://stichgap.com",
    siteName: "StichGap",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StichGap - AI F&B Profit Control",
    description:
      "Daily prime cost visibility and AI-recommended actions for F&B owners.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${vt323.variable}`}>
      <body className="antialiased">
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
