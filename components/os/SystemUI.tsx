"use client";

import React, { useState, useEffect } from "react";
import { Wifi, Battery, Signal, ChevronLeft, Circle, Square } from "lucide-react";
import { useOS } from "@/context/OSContext";
import { cn } from "@/lib/utils";

export const StatusBar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setTime(date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-8 w-full flex items-center justify-between px-6 text-xs font-medium z-50 select-none text-foreground">
      <div className="flex items-center gap-2">
         <span>{time}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Signal className="w-3 h-3" />
        <Wifi className="w-3.5 h-3.5" />
        <Battery className="w-4 h-4" />
      </div>
    </div>
  );
};

export const NavigationBar = () => {
  const { goBack, goHome } = useOS();

  return (
    <div className="h-12 w-full flex items-center justify-evenly pb-2 z-50 select-none">
       <button onClick={goBack} className="p-4 active:scale-90 transition-transform hover:bg-white/10 rounded-full">
         <ChevronLeft className="w-5 h-5 text-foreground/80" />
       </button>
       <button onClick={goHome} className="p-4 active:scale-90 transition-transform hover:bg-white/10 rounded-full">
         <Circle className="w-4 h-4 fill-current text-foreground/80" />
       </button>
       <button className="p-4 active:scale-90 transition-transform hover:bg-white/10 rounded-full">
         <Square className="w-4 h-4 text-foreground/80" />
       </button>
    </div>
  );
};
