import { FadeIn } from "@/components/fade-in";

const outcomes = [
  {
    number: "01",
    body: "What is weighing the business down",
  },
  {
    number: "02",
    body: "The 3 practical fixes to consider first",
  },
  {
    number: "03",
    body: "Whether to reset, simplify, systemize, or make a hard decision",
  },
];

export function ReliefMap() {
  return (
    <section id="relief-map" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
      <FadeIn>
        <div className="grid gap-10 border-t border-[#013774]/12 pt-5 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#013774]">Need help now</p>
            <h2 className="mt-6 max-w-lg text-5xl font-medium leading-[1.06] tracking-[-0.065em] text-[#013774] sm:text-6xl">
              The Relief Map with Jane Hia
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.45] tracking-[-0.03em] text-[#707070]">
              Jane Hia, ex-Founder and CEO of Kith Cafe, a pioneer in Singapore&apos;s cafe industry is building
              StitchGap from hands-on F&B operations work — the kind of daily pressure owners feel when sales, labour,
              and supplier costs do not line up.
            </p>
            <p className="mt-4 max-w-xl text-[16px] leading-[1.45] tracking-[-0.03em] text-[#707070]">
              The Relief Map is for owners who need urgent help with your F&B business now. It is practical support to
              find where the business is bleeding, what to fix immediately, and how to steady things while StitchGap
              takes shape.
            </p>
            <a
              href="https://janehia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-[#A8E6CF] bg-[#A8E6CF] px-5 text-sm font-medium text-[#013774] transition hover:border-[#0056FF] hover:bg-[#0056FF] hover:text-white"
            >
              Visit janehia.com
            </a>
          </div>

          <div className="rounded-[10px] border border-[#013774]/12 bg-white p-5 shadow-[0_12px_40px_rgba(1,55,116,0.06)] sm:p-7">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#013774]">Simple outcome</p>
            <p className="mt-3 text-lg font-medium tracking-[-0.04em] text-[#013774]">You leave with three things</p>
            <ul className="mt-6 grid gap-5">
              {outcomes.map((item) => (
                <li key={item.number} className="grid gap-3 sm:grid-cols-[56px_1fr] sm:items-start">
                  <span className="text-3xl font-semibold tracking-[-0.06em] text-[#FB7D5D]">{item.number}</span>
                  <p className="text-[15px] leading-[1.35] tracking-[-0.02em] text-[#707070] sm:pt-1">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
