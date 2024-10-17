import { cn } from "@/lib/utils";
import React from "react";

export const MarqueeLogos = ({ img = "" }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-24 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "flex justify-center"
      )}
    >
      <img className="" src={img} alt="foshtech" />
    </figure>
  );
};
