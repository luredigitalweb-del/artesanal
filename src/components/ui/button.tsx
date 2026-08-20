import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.15em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        gold: "shimmer bg-gold-grad text-ink shadow-[0_10px_30px_-12px_rgba(217,182,78,0.75)] hover:shadow-[0_16px_44px_-12px_rgba(217,182,78,0.95)] hover:-translate-y-0.5",
        outlineGold:
          "shimmer shimmer-dark border border-gold-400/60 bg-transparent text-gold-200 hover:border-gold-300 hover:bg-gold-400/10 hover:-translate-y-0.5",
        outlineDark:
          "shimmer shimmer-dark border border-ink/25 bg-transparent text-ink hover:border-gold-700 hover:bg-gold-700/5 hover:-translate-y-0.5",
        dark: "shimmer shimmer-dark bg-ink text-gold-200 border border-gold-700/40 hover:-translate-y-0.5",
        whatsapp:
          "shimmer bg-[#1FA855] text-white shadow-[0_10px_30px_-12px_rgba(31,168,85,0.8)] hover:-translate-y-0.5",
      },
      size: {
        default: "h-12 px-7 text-sm",
        sm: "h-10 px-5 text-xs",
        lg: "h-14 px-9 text-base",
        xl: "h-16 px-10 text-base sm:text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "gold", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
