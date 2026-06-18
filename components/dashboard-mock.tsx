import { FadeIn } from "@/components/fade-in";

const metrics = [
  { label: "Sales", value: "$5,420", note: "8% below last Tuesday" },
  { label: "Food cost", value: "33.8%", note: "target 31%" },
  { label: "Labour", value: "29.6%", note: "target 28%" },
  { label: "Prime cost", value: "63.4%", note: "watch zone", accent: true },
];

export function DashboardMock() {
  return (
    <section id="snapshot" className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
      <FadeIn>
        <div className="overflow-hidden rounded-[10px] border border-white/25 bg-[#0056FF] p-3 text-[#061226] shadow-[0_30px_120px_rgba(0,86,255,0.38)]">
          <div className="rounded-[8px] bg-white p-4 sm:p-6 lg:p-8">
            <div className="flex flex-wrap items-start justify-between gap-5 border-b border-[#013774]/15 pb-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#0056FF]">Owner daily snapshot</p>
                <h2 className="mt-3 text-3xl font-medium tracking-[-0.055em] text-[#013774] sm:text-5xl">Yesterday, in one page.</h2>
              </div>
              <div className="rounded-full border border-[#013774]/15 bg-[#A8E6CF] px-4 py-2 text-xs text-[#013774]">As of 14 May, 11:59pm</div>
            </div>

            <div className="grid gap-3 py-5 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-[10px] border border-[#013774]/12 bg-[#A8E6CF]/35 p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#013774]/70">{metric.label}</p>
                  <p className={metric.accent ? "mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#FB7D5D]" : "mt-4 text-4xl font-medium tracking-[-0.06em] text-[#013774]"}>
                    {metric.value}
                  </p>
                  <p className="mt-3 text-sm tracking-[-0.02em] text-[#013774]/70">{metric.note}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[10px] border border-[#FB7D5D]/30 bg-[#FB7D5D]/40 p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#013774]/80">Red flags</p>
                <ul className="mt-5 space-y-4 text-lg leading-[1.1] tracking-[-0.04em] text-[#013774]">
                  <li>Seafood cost is up against your 4-week average.</li>
                  <li>3pm-5pm had low sales with 4 staff on shift.</li>
                  <li>Vongole contribution margin dropped this week.</li>
                </ul>
              </div>
              <div className="rounded-[10px] bg-[#013774] p-5 text-white">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#A8E6CF]">Recommended actions</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {["Reduce one Tuesday afternoon PT shift", "Raise vongole price by $1", "Reorder chicken from Supplier B"].map((action) => (
                    <div key={action} className="rounded-[10px] border border-[#A8E6CF]/30 bg-white/[0.04] p-4 text-sm leading-[1.2] text-white">
                      {action}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
