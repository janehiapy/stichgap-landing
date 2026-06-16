import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium tracking-[-0.02em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8E6CF] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ghost: "border border-[#A8E6CF] bg-[#A8E6CF] text-[#013774] hover:border-[#013774] hover:bg-[#013774] hover:text-white",
        inverse: "border border-[#013774] bg-[#013774] text-white hover:border-[#0056FF] hover:bg-[#0056FF]",
      },
    },
    defaultVariants: {
      variant: "ghost",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, className }))} {...props} />;
}
