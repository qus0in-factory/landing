import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
  {
    variants: {
      variant: {
        outline: "border border-white/20 hover:bg-white/10 hover:border-white/40",
        ghost: "text-neutral-400 hover:bg-white/5 hover:text-white",
      },
      size: { default: "h-12 px-6", icon: "size-11" },
    },
    defaultVariants: { variant: "outline", size: "default" },
  },
);
