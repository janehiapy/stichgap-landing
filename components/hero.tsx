import { BrandMotif } from "@/components/brand-motif";
import { FadeIn } from "@/components/fade-in";

const meta = ["In development", "F&B AI", "Singapore-first"];

export function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-[86vh] w-full max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 lg:px-12">
      <BrandMotif className="right-0 top-24 hidden h-48 w-96 opacity-90 lg:block" />
      <FadeIn>
        <div className="mb-8 flex flex-wrap gap-2">
          {meta.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#013774]/12 bg-[#A8E6CF]/45 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[#013774]"
            >
              {item}
            </span>
          ))}
        </div>
        <h1 className="max-w-6xl text-balance text-[clamp(3rem,8vw,7.2rem)] font-medium leading-[1.06] tracking-[-0.065em] text-[#013774]">
          Daily cost control for F&B owners
        </h1>
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-end">
          <p className="max-w-2xl text-balance text-[17px] leading-[1.45] tracking-[-0.03em] text-[#013774]/72 sm:text-xl">
            StitchGap is an AI-powered operating control room that shows where money is leaking and what to do about it, starting with daily prime cost.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <a
              href="#waitlist"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#A8E6CF] bg-[#A8E6CF] px-5 text-sm font-medium text-[#013774] transition hover:border-[#0056FF] hover:bg-[#0056FF] hover:text-white"
            >
              Join the build list
            </a>
            <a
              href="#snapshot"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#013774]/20 px-5 text-sm font-medium text-[#013774] transition hover:border-[#FB7D5D] hover:bg-[#FB7D5D] hover:text-white"
            >
              View snapshot
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
