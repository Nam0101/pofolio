"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface LiquidContainerProps extends HTMLMotionProps<"div"> {
  intensity?: "low" | "medium" | "high";
  children?: React.ReactNode;
}

import { useMotionValue, useSpring, useTransform } from "framer-motion";

export const LiquidContainer = ({ 
  children, 
  className, 
  intensity = "medium",
  ...props 
}: LiquidContainerProps) => {
    // Shared 3D tilt logic (simpler config for larger containers)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 }); // Softer for large containers
    const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]); // Subtle tilt
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
    
    // Liquid slosh effect
    // Move the liquid background slightly opposite to the tilt for depth
    const liquidX = useTransform(mouseXSpring, [-0.5, 0.5], ["-2%", "2%"]);
    const liquidY = useTransform(mouseYSpring, [-0.5, 0.5], ["-2%", "2%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
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
          transformStyle: "preserve-3d"
      }}
      className={cn(
        "relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-xl perspective-1000",
        className
      )}
      {...props}
    >
      {/* Liquid Distortion Layer */}
      <motion.div 
        className="absolute inset-[-10%] z-0 pointer-events-none opacity-50 mix-blend-overlay max-w-[120%] max-h-[120%]"
        style={{ 
            x: liquidX,
            y: liquidY,
            filter: "url(#liquid-distortion)",
            background: "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)"
        }} 
      />
      
      {/* Glass Reflection */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-20" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
};
