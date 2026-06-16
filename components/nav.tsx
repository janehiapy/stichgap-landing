export function Nav() {
  return (
    <header className="fixed left-0 right-0 top-5 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-[760px] items-center justify-between rounded-full border border-[#013774]/10 bg-white/92 px-3 py-2 text-sm shadow-[0_18px_70px_rgba(1,55,116,0.16)] backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2 rounded-full px-3 py-2 font-semibold tracking-[-0.03em] text-[#013774]">
          <span className="relative h-6 w-6 overflow-hidden rounded-full bg-[#0056FF]">
            <span className="absolute inset-y-0 left-0 w-1/2 bg-[#A8E6CF]" />
            <span className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-[#FB7D5D]" />
          </span>
          StitchGap
        </a>
        <div className="hidden items-center gap-6 text-xs font-medium text-[#013774]/70 sm:flex">
          <a href="#snapshot" className="transition hover:text-[#0056FF]">Snapshot</a>
          <a href="#how" className="transition hover:text-[#0056FF]">How it works</a>
        </div>
        <a
          href="#waitlist"
          className="rounded-full border border-[#0056FF] bg-[#0056FF] px-4 py-2 text-xs font-medium text-white transition hover:border-[#013774] hover:bg-[#013774]"
        >
          Join waitlist
        </a>
      </nav>
    </header>
  );
}
