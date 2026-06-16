import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-12 w-full rounded-[10px] border border-white/24 bg-white/[0.13] px-4 text-sm text-white outline-none transition placeholder:text-white/52 focus:border-[#A8E6CF] focus:bg-white/[0.18]",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
