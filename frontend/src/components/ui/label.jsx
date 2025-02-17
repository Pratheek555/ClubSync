import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

// Utility function to combine class names
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Label = React.forwardRef(({ className, ...props }, ref) => (
    <LabelPrimitive.Root
        ref={ref}
        className={cn(
            "text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            className
        )}
        {...props}
    />
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
