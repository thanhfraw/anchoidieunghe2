"use client";

import React from "react";
import { cn } from "../../lib/utils";

interface BaseProps {
  pulseColor?: string;
  duration?: string;
  className?: string;
  children: React.ReactNode;
}

type PulsatingButtonProps = BaseProps & {
  as?: React.ElementType; // Add `as` prop to dynamically render components
  href?: string; // For anchor tags
  to?: string; // For React Router's Link
} & React.ComponentPropsWithoutRef<"button">;

export default function PulsatingButton({
  as: Component = "button", // Default to rendering a <button>
  className,
  children,
  pulseColor = "#0096ff",
  duration = "1.5s",
  href,
  to,
  ...props
}: PulsatingButtonProps) {
  const commonClasses = cn(
    "relative text-center cursor-pointer flex justify-center items-center rounded-lg text-white dark:text-black bg-blue-500 dark:bg-blue-500 px-4 py-2",
    className
  );

  const commonStyles = {
    "--pulse-color": pulseColor,
    "--duration": duration,
  } as React.CSSProperties;

  return (
    <Component
      className={commonClasses}
      style={commonStyles}
      href={href} // For <a> tags
      to={to} // For React Router's Link
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute top-1/2 left-1/2 size-full rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
    </Component>
  );
}
