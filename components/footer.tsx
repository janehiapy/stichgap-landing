export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col gap-3 border-t border-[#013774]/10 px-5 pb-8 pt-12 text-xs text-[#013774]/62 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
      <p>&copy; {new Date().getFullYear()} StitchGap. Currently in development.</p>
      <p>We only use your details to send product updates and early access notes.</p>
    </footer>
  );
}
