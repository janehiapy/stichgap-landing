type BrandMotifProps = {
  className?: string;
};

export function BrandMotif({ className = "" }: BrandMotifProps) {
  return (
    <div
      className={`pointer-events-none absolute overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 480 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect x="0" y="0" width="120" height="120" fill="#A8E6CF" />
        <rect x="120" y="0" width="120" height="120" fill="#0056FF" />
        <path d="M240 0 L360 0 L360 120 L240 120 Z" fill="#013774" />
        <circle cx="300" cy="60" r="36" fill="#FFFFFF" />
        <circle cx="300" cy="60" r="14" fill="#A8E6CF" />
        <path d="M360 0 L480 0 L480 120 L360 120 Z" fill="#FB7D5D" />
        <path d="M0 120 A60 60 0 0 0 120 120 L0 120 Z" fill="#0056FF" />
        <rect x="120" y="120" width="60" height="60" fill="#013774" />
        <rect x="180" y="120" width="60" height="60" fill="#013774" />
        <rect x="240" y="120" width="60" height="60" fill="#013774" />
        <rect x="300" y="120" width="60" height="60" fill="#013774" />
        <path d="M360 120 L420 180 L360 240 L300 180 Z" fill="#FB7D5D" />
        <path d="M420 120 L480 180 L420 240 L360 180 Z" fill="#A8E6CF" />
        <circle cx="60" cy="180" r="48" fill="#FB7D5D" />
        <rect x="120" y="180" width="120" height="60" fill="#0056FF" />
        <path d="M240 180 L300 240 L240 240 Z" fill="#013774" />
      </svg>
    </div>
  );
}
