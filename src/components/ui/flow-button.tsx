'use client';
import { ArrowRight } from 'lucide-react';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';


interface FlowButtonProps extends HTMLAttributes<HTMLButtonElement> {
    text?: string;
}

export function FlowButton({ text = "Modern Button", className, ...props }: FlowButtonProps) {
  return (
    <button 
        className={cn(
            "group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-primary/40 bg-card/50 px-8 py-4 text-lg font-semibold text-foreground cursor-pointer transition-all duration-flow ease-flow-in-out hover:border-transparent hover:text-primary-foreground hover:rounded-[12px] active:scale-[0.95] hover:bg-primary",
            className
        )}
        {...props}
    >
      {/* Left arrow (arr-2) */}
      <ArrowRight
        className="absolute w-5 h-5 left-[-25%] stroke-foreground fill-none z-[9] group-hover:left-4 group-hover:stroke-primary-foreground transition-all duration-flow-long ease-flow-bounce"
      />
      {/* Text */}
      <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-flow-long ease-out">
        {text}
      </span>
      {/* Circle */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-flow-long ease-flow-out"></span>
      {/* Right arrow (arr-1) */}
      <ArrowRight
        className="absolute w-5 h-5 right-4 stroke-foreground fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-primary-foreground transition-all duration-flow-long ease-flow-bounce"
      />
    </button>
  );
}
