"use client";

import { cn } from "@/lib/utils";

import { HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "heavy" | "colored";
  hoverEffect?: boolean;
  children?: React.ReactNode;
}

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const GlassCard = ({ 
  children, 
  className, 
  variant = "default", 
  hoverEffect = true,
  ...props 
}: GlassCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 }); // Tighter spring
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  // Map mouse position to rotation degrees (max 12 degrees)
  // Note: RotateX depends on Y axis movement, RotateY depends on X axis movement
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  
  // Reflection opacity based on tilt intensity
  const glossOpacity = useTransform(mouseYSpring, [-0.5, 0.5], [0, 0.4]);
  const glossX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverEffect) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize values between -0.5 and 0.5 (center is 0)
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 shadow-lg backdrop-blur-xl group perspective-1000",
        {
          "bg-white/5": variant === "default",
          "bg-white/10 border-white/20 shadow-xl": variant === "heavy",
          "bg-gradient-to-br from-white/10 to-white/5 border-white/20": variant === "colored",
          "hover:shadow-2xl transition-shadow duration-300": hoverEffect, // Removed transform transition as motion handles it
        },
        className
      )}
      // Pass props to motion.div appropriately? 
      // Typescript might complain if we pass HTML props to motion.div without casting, 
      // but usually custom components wrap it. Let's assume standard div props are fine.
      {...props}
    >
      {/* Glossy Reflection that moves with the tilt */}
      <motion.div 
        style={{ opacity: glossOpacity, x: glossX }}
        className="pointer-events-none absolute -inset-[100%] z-0 block bg-gradient-to-br from-transparent via-white/30 to-transparent transform rotate-45" 
      />
      
      {/* Standard Reflection (fallback/base) */}
      <div className="pointer-events-none absolute -inset-[100%] z-0 block opacity-10 bg-gradient-to-br from-transparent via-white/10 to-transparent transform rotate-45 translate-x-[-100%] transition-transform duration-1000 group-hover:translate-x-[100%] group-hover:duration-[2000ms]" />
      
      <div className="relative z-10 p-1" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
};
