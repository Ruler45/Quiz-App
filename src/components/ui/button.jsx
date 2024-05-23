import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "Yinline-flex Yitems-center Yjustify-center Ywhitespace-nowrap Yrounded-md Ytext-sm Yfont-medium Yring-offset-background Ytransition-colors focus-visible:Youtline-none focus-visible:Yring-2 focus-visible:Yring-ring focus-visible:Yring-offset-2 disabled:Ypointer-events-none disabled:Yopacity-50",
  {
    variants: {
      variant: {
        default: "Ybg-primary Ytext-primary-foreground hover:Ybg-primary/90",
        destructive:
          "Ybg-destructive Ytext-destructive-foreground hover:Ybg-destructive/90",
        outline:
          "Yborder Yborder-input Ybg-background hover:Ybg-accent hover:Ytext-accent-foreground",
        secondary:
          "Ybg-secondary Ytext-secondary-foreground hover:Ybg-secondary/80",
        ghost: "hover:Ybg-accent hover:Ytext-accent-foreground",
        link: "Ytext-primary Yunderline-offset-4 hover:Yunderline",
      },
      size: {
        default: "Yh-10 Ypx-4 Ypy-2",
        sm: "Yh-9 Yrounded-md Ypx-3",
        lg: "Yh-11 Yrounded-md Ypx-8",
        icon: "Yh-10 Yw-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
