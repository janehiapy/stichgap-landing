import * as React from "react";
import { cn } from "@/lib/utils";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn("text-[11px] font-medium uppercase tracking-[0.18em] text-[#A8E6CF]", className)}
      {...props}
    />
  );
}
