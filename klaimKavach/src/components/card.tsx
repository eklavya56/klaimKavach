import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  interactive?: boolean;
}

export function Card({ children, className, glow = false, interactive = false, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={interactive ? { y: -2, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "bg-card border border-border rounded-xl shadow-sm overflow-hidden",
        interactive && "hover:border-muted-foreground/30 transition-colors cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
