
import React from "react";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  textClassName?: string;
  variant?: 'dark' | 'light';
};

const Logo = ({ className, textClassName, variant = 'light' }: LogoProps) => {
  const isLight = variant === 'light';
  
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className={cn(
        "w-8 h-8 rounded-full", 
        isLight ? "bg-white" : "bg-blue-600"
      )}></div>
      <span className={cn(
        "font-bold text-xl", 
        isLight ? "text-white" : "text-blue-600",
        textClassName
      )}>MobiusEngine</span>
    </div>
  );
};

export default Logo;
