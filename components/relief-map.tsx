import { FadeIn } from "@/components/fade-in";

const reliefPoints = [
  "See where margin is leaking before month-end closes",
  "Prioritise the fixes that matter this week, not next quarter",
  "Get a clear path forward while StitchGap is still in development",
];

export function ReliefMap() {
  return (
    <section id="relief-map" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
      <FadeIn>
        <div className="grid gap-10 border-t border-[#013774]/12 pt-5 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#013774]">Need help now</p>
            <h2 className="mt-6 max-w-lg text-5xl font-medium leading-[1.06] tracking-[-0.065em] text-[#013774] sm:text-6xl">
              Jane Hia and the Relief Map
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.45] tracking-[-0.03em] text-[#707070]">
              Jane Hia is building StitchGap from hands-on F&B operations work — the kind of daily pressure owners
              feel when sales, labour, and supplier costs do not line up.
            </p>
            <p className="mt-4 max-w-xl text-[16px] leading-[1.45] tracking-[-0.03em] text-[#707070]">
              The Relief Map is for owners who cannot wait for the product. It is practical support to find where the
              business is bleeding, what to fix first, and how to steady things while StitchGap takes shape.
            </p>
            <a
              href="https://janehia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-[#013774]/20 px-5 text-sm font-medium text-[#013774] transition hover:border-[#0056FF] hover:bg-[#0056FF] hover:text-white"
            >
              Visit janehia.com
            </a>
          </div>

          <ul className="grid gap-4 rounded-[10px] border border-[#013774]/12 bg-white p-5 shadow-[0_12px_40px_rgba(1,55,116,0.06)] sm:p-7">
            {reliefPoints.map((point) => (
              <li key={point} className="flex gap-3 text-[15px] leading-[1.35] tracking-[-0.02em] text-[#707070]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0056FF]" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  );
}
