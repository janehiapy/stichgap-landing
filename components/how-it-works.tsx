import { FadeIn } from "@/components/fade-in";

const steps = [
  {
    number: "01",
    title: "Connect the daily data",
    body: "Bring in POS sales, staff timesheets, recipe costs, and supplier invoices. Start with CSVs before APIs.",
  },
  {
    number: "02",
    title: "Calculate prime cost",
    body: "StitchGap cleans, matches, and calculates food cost plus labour cost by day, hour, item, and outlet.",
  },
  {
    number: "03",
    title: "Act on the owner brief",
    body: "The system turns red flags into roster, pricing, purchase, and margin actions for the day ahead.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
      <FadeIn>
        <div className="grid gap-8 border-t border-[#013774]/12 pt-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#0056FF]">How it works</p>
            <h2 className="mt-6 max-w-lg text-5xl font-medium leading-[1.06] tracking-[-0.065em] text-[#013774] sm:text-6xl">
              From raw data to today&apos;s decision
            </h2>
          </div>
          <div className="grid gap-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid gap-5 rounded-[10px] border border-[#013774]/12 bg-white p-5 shadow-[0_12px_40px_rgba(1,55,116,0.06)] sm:grid-cols-[90px_1fr] sm:p-7"
              >
                <div className="text-4xl font-semibold tracking-[-0.06em] text-[#FB7D5D]">{step.number}</div>
                <div>
                  <h3 className="text-2xl font-medium leading-[1] tracking-[-0.05em] text-[#013774]">{step.title}</h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-[1.3] tracking-[-0.02em] text-[#013774]/72">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
