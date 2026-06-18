import { Benefits } from "@/components/benefits";
import { DashboardMock } from "@/components/dashboard-mock";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Nav } from "@/components/nav";
import { ReliefMap } from "@/components/relief-map";
import { WaitlistForm } from "@/components/waitlist-form";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-[#013774]">
      <Nav />
      <Hero />
      <DashboardMock />
      <Benefits />
      <HowItWorks />
      <WaitlistForm />
      <ReliefMap />
      <Footer />
    </main>
  );
}
