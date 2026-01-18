"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { StatusBar, NavigationBar } from "@/components/os/SystemUI";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-zinc-900 md:bg-zinc-950 overflow-hidden">
      {/* Phone Bezel */}
      <div 
        className={cn(
          "relative w-full max-w-[380px] h-[844px] bg-black rounded-[55px] border-[8px] border-zinc-800 ring-4 ring-zinc-700/50 md:max-w-[400px] md:h-[889px]",
          "transition-all duration-500 ease-in-out aspect-[9/20]",
          "shadow-[0_0_50px_-10px_rgba(0,0,0,0.5),0_0_20px_-5px_rgba(255,255,255,0.1)_inset]", // Enhanced shadow & glow
          className
        )}
      >
        {/* Reflection Highlight */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-white/5 to-transparent rounded-[46px] pointer-events-none z-50 mix-blend-overlay" />
        {/* Notch Area (Dynamic Island style) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50 flex items-center justify-center">
             <div className="w-16 h-4 bg-zinc-900 rounded-full flex items-center justify-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-900/50"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-900/30"></div>
             </div>
        </div>

        {/* Screen Content */}
        <div className="w-full h-full bg-background rounded-[46px] overflow-hidden flex flex-col relative text-foreground">
           {/* Wallpaper/Background */}
           <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-90 dark:opacity-40"></div>
           <div className="absolute inset-0 z-0 bg-background/50 backdrop-blur-sm"></div>

           {/* System UI & App Layer */}
           <div className="relative z-10 flex flex-col w-full h-full">
              <StatusBar />
              <div className="flex-1 w-full overflow-hidden relative">
                  {children}
              </div>
              <NavigationBar />
           </div>
        </div>

        {/* Side Buttons */}
        <div className="absolute top-32 -right-[10px] w-1 h-16 bg-zinc-700 rounded-r-md"></div> {/* Volume */}
        <div className="absolute top-56 -right-[10px] w-1 h-24 bg-zinc-700 rounded-r-md"></div> {/* Power */}
      </div>
    </div>
  );
}
