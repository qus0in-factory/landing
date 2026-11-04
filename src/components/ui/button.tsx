import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button-variants";

type Props = ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
};

export function Button({ asChild, variant, size, className, ...props }: Props) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
