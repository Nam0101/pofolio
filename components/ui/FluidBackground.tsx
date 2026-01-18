"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const FluidBackground = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer to avoid synchronous layout effect warning
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return <>{children}</>;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background selection:bg-aurora-purple/20">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] h-[70vh] w-[70vw] rounded-full bg-aurora-purple/25 blur-[120px] animate-float opacity-70 mix-blend-multiply" />
        <div className="absolute top-[30%] right-[-20%] h-[80vh] w-[80vw] rounded-full bg-aurora-blue/20 blur-[140px] animate-float opacity-60 mix-blend-multiply" style={{ animationDelay: "2s", animationDuration: "10s" }} />
        <div className="absolute bottom-[-30%] left-[10%] h-[90vh] w-[90vw] rounded-full bg-aurora-green/15 blur-[160px] animate-float opacity-50 mix-blend-multiply" style={{ animationDelay: "4s", animationDuration: "12s" }} />
        <div className="absolute top-[40%] left-[30%] h-[50vh] w-[50vw] rounded-full bg-aurora-orange/20 blur-[120px] animate-pulse opacity-40 mix-blend-multiply" style={{ animationDuration: "8s" }} />
      </div>

      {/* Noise Texture Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-10 mix-blend-soft-light" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
