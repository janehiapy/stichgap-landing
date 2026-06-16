import { FadeIn } from "@/components/fade-in";

const benefits = [
  {
    title: "Daily profit visibility",
    body: "See sales, food cost, labour cost, and prime cost without waiting for month-end accounts.",
    tone: "navy" as const,
  },
  {
    title: "Leakage detection",
    body: "Find the outlet, SKU, supplier, shift, or campaign that is quietly hurting margin.",
    tone: "blue" as const,
  },
  {
    title: "AI-recommended actions",
    body: "Get plain-English red flags and next steps, not another wall of charts.",
    tone: "coral" as const,
  },
  {
    title: "Works with your tools",
    body: "Start with POS exports, timesheets, recipes, and supplier invoices before heavy integrations.",
    tone: "aqua" as const,
  },
];

const toneStyles = {
  navy: {
    card: "bg-[#013774] text-white",
    title: "text-white",
    body: "text-white/72",
  },
  blue: {
    card: "bg-[#0056FF] text-white",
    title: "text-white",
    body: "text-white/76",
  },
  coral: {
    card: "bg-[#FB7D5D] text-[#013774]",
    title: "text-[#013774]",
    body: "text-[#013774]/75",
  },
  aqua: {
    card: "bg-[#A8E6CF] text-[#013774]",
    title: "text-[#013774]",
    body: "text-[#013774]/72",
  },
};

export function Benefits() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
      <FadeIn>
        <div className="mb-10 border-t border-[#013774]/12 pt-5 text-[11px] uppercase tracking-[0.22em] text-[#0056FF]">
          What it controls
        </div>
      </FadeIn>
      <div className="grid gap-px overflow-hidden rounded-[10px] border border-[#013774]/12 bg-[#013774]/12 md:grid-cols-2">
        {benefits.map((benefit) => {
          const styles = toneStyles[benefit.tone];
          return (
            <FadeIn key={benefit.title} className={`${styles.card} p-6 sm:p-8 lg:p-10`}>
              <h3 className={`text-3xl font-medium leading-[1] tracking-[-0.055em] sm:text-4xl ${styles.title}`}>
                {benefit.title}
              </h3>
              <p className={`mt-5 max-w-md text-[16px] leading-[1.25] tracking-[-0.03em] ${styles.body}`}>
                {benefit.body}
              </p>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
