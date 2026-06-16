type GeometricMotifProps = {
  className?: string;
};

const shapes = [
  "left-0 top-0 h-20 w-20 bg-[#013774]",
  "left-20 top-0 h-20 w-20 bg-[#FB7D5D] [clip-path:polygon(0_0,100%_50%,0_100%)]",
  "left-40 top-0 h-20 w-20 bg-[#A8E6CF]",
  "left-60 top-0 h-20 w-20 rounded-b-full bg-white",
  "left-80 top-0 h-20 w-20 rounded-b-full bg-white",
  "left-[420px] top-0 h-20 w-8 bg-[#A8E6CF]",
  "left-[476px] top-0 h-20 w-8 bg-[#A8E6CF]",
  "left-[532px] top-0 h-20 w-8 bg-[#A8E6CF]",
  "left-0 top-28 h-7 w-56 bg-[#013774]",
  "left-0 top-[164px] h-7 w-56 bg-[#013774]",
  "left-0 top-[220px] h-32 w-32 rounded-br-full bg-[#A8E6CF]",
  "left-0 top-[348px] h-32 w-32 rounded-tr-full bg-[#0056FF]",
  "left-60 top-20 h-44 w-44 bg-[#FB7D5D] [clip-path:polygon(0_0,100%_0,100%_100%)]",
  "left-[440px] top-24 h-24 w-24 bg-[#0056FF] [clip-path:polygon(50%_0,100%_100%,0_100%)]",
  "left-[536px] top-24 h-24 w-24 bg-[#A8E6CF] [clip-path:polygon(50%_0,100%_100%,0_100%)]",
  "left-[360px] top-[188px] h-24 w-24 rounded-full bg-[#013774]",
  "left-[456px] top-[188px] h-24 w-24 rounded-full bg-[#FB7D5D]",
  "left-[552px] top-[188px] h-24 w-24 rounded-full bg-[#A8E6CF]",
  "left-[320px] top-[312px] h-44 w-44 rounded-tr-full bg-[#A8E6CF]",
  "left-[320px] top-[456px] h-32 w-32 bg-[#013774] [clip-path:polygon(100%_0,100%_100%,0_100%)]",
  "left-[452px] top-[456px] h-32 w-56 bg-[#A8E6CF]",
];

export function GeometricMotif({ className = "" }: GeometricMotifProps) {
  return (
    <div className={`pointer-events-none relative overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-white" />
      {shapes.map((shape, index) => (
        <span key={index} className={`absolute ${shape}`} />
      ))}
    </div>
  );
}
