import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "Yflex Yh-10 Yw-full Yrounded-md Yborder Yborder-input Ybg-background Ypx-3 Ypy-2 Ytext-sm Yring-offset-background file:Yborder-0 file:Ybg-transparent file:Ytext-sm file:Yfont-medium placeholder:Ytext-muted-foreground focus-visible:Youtline-none focus-visible:Yring-2 focus-visible:Yring-ring focus-visible:Yring-offset-2 disabled:Ycursor-not-allowed disabled:Yopacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
