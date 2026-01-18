"use client";

import { motion } from "framer-motion";
import { User, Briefcase, BookOpen, Settings } from "lucide-react";
import { useOS, AppId } from "@/context/OSContext";
import { cn } from "@/lib/utils";

const ICONS = [
  { id: "profile", label: "Profile", icon: User, color: "from-blue-500 to-blue-600 shadow-blue-500/40" },
  { id: "projects", label: "Projects", icon: Briefcase, color: "from-green-500 to-green-600 shadow-green-500/40" },
  { id: "blog", label: "Blog", icon: BookOpen, color: "from-orange-500 to-orange-600 shadow-orange-500/40" },
  { id: "settings", label: "Settings", icon: Settings, color: "from-zinc-500 to-zinc-600 shadow-zinc-500/40" },
];

export function Launcher() {
  const { openApp } = useOS();

  return (
    <div className="w-full h-full flex flex-col p-6">
      {/* Clock Widget */}
      <div className="mt-12 mb-auto">
        <div className="flex flex-col drop-shadow-lg">
           <h1 className="text-6xl font-thin text-white tracking-tighter">
             10:30
           </h1>
           <span className="text-lg font-medium text-white/90">Sunday, Jan 18</span>
        </div>
      </div>

      {/* App Grid */}
      <div className="grid grid-cols-4 gap-4 mt-auto mb-8">
        {ICONS.map((app, i) => (
          <div key={app.id} className="flex flex-col items-center gap-2 group relative">
             <motion.button
               whileTap={{ scale: 0.9, rotate: -5 }}
               whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
               transition={{ type: "spring", stiffness: 300, damping: 15 }}
               onClick={() => openApp(app.id as AppId)}
               className={cn(
                 "w-[60px] h-[60px] rounded-[18px] flex items-center justify-center shadow-lg transition-all duration-300",
                 "bg-gradient-to-br border border-white/20 backdrop-blur-md relative overflow-hidden",
                 app.color
               )}
             >
                {/* Glossy sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-50" />
                
                <app.icon className="w-7 h-7 text-white drop-shadow-md relative z-10" />
             </motion.button>
             <span className="text-[11px] font-medium text-white drop-shadow-md tracking-tight">{app.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
