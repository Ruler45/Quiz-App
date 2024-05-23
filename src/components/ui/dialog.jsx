import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "Yfixed Yinset-0 Yz-50 Ybg-black/80 Y data-[state=open]:Yanimate-in data-[state=closed]:Yanimate-out data-[state=closed]:Yfade-out-0 data-[state=open]:Yfade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "Yfixed Yleft-[50%] Ytop-[50%] Yz-50 Ygrid Yw-full Ymax-w-lg Ytranslate-x-[-50%] Ytranslate-y-[-50%] Ygap-4 Yborder Ybg-background Yp-6 Yshadow-lg Yduration-200 data-[state=open]:Yanimate-in data-[state=closed]:Yanimate-out data-[state=closed]:Yfade-out-0 data-[state=open]:Yfade-in-0 data-[state=closed]:Yzoom-out-95 data-[state=open]:Yzoom-in-95 data-[state=closed]:Yslide-out-to-left-1/2 data-[state=closed]:Yslide-out-to-top-[48%] data-[state=open]:Yslide-in-from-left-1/2 data-[state=open]:Yslide-in-from-top-[48%] sm:Yrounded-lg",
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="Yabsolute Yright-4 Ytop-4 Yrounded-sm Yopacity-70 Yring-offset-background Ytransition-opacity hover:Yopacity-100 focus:Youtline-none focus:Yring-2 focus:Yring-ring focus:Yring-offset-2 disabled:Ypointer-events-none data-[state=open]:Ybg-accent data-[state=open]:Ytext-muted-foreground">
          <X className="Yh-4 Yw-4" />
          <span className="Ysr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  ),
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }) => (
  <div
    className={cn(
      "Yflex Yflex-col Yspace-y-1.5 Ytext-center sm:Ytext-left",
      className,
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "Yflex Yflex-col-reverse sm:Yflex-row sm:Yjustify-end sm:Yspace-x-2",
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "Ytext-lg Yfont-semibold Yleading-none Ytracking-tight",
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("Ytext-sm Ytext-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
