"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor, Smartphone, Volume2, Wifi } from "lucide-react";
// import { Switch } from "@/components/ui/switch"; // Need switch component or simple version

// Simple switch for now to avoid dep
const SimpleSwitch = ({ checked, onCheckedChange }: { checked: boolean, onCheckedChange: (c: boolean) => void }) => (
    <button 
        onClick={() => onCheckedChange(!checked)}
        className={`w-11 h-6 rounded-full transition-colors flex items-center px-1 ${checked ? 'bg-blue-500' : 'bg-slate-200 dark:bg-slate-700'}`}
    >
        <div className={`w-4 h-4 rounded-full bg-white shadow transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
    </button>
)

export default function SettingsApp() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="w-full h-full bg-slate-50 dark:bg-black overflow-y-auto"
    >
      <div className="p-4 pt-12 pb-6">
          <h1 className="text-3xl font-light">Settings</h1>
      </div>

      <div className="mx-4 bg-white dark:bg-zinc-900 rounded-xl overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500 rounded-lg text-white">
                      <Wifi className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Wi-Fi</span>
              </div>
              <span className="text-muted-foreground mr-2">Connected</span>
          </div>
          <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500 rounded-lg text-white">
                      <Volume2 className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Sound</span>
              </div>
          </div>
      </div>

      <div className="mx-4 mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Appearance
      </div>
      <div className="mx-4 bg-white dark:bg-zinc-900 rounded-xl overflow-hidden mb-6">
          <button onClick={() => setTheme("dark")} className="w-full p-4 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
              <div className="flex items-center gap-3">
                  <Moon className="w-5 h-5" />
                  <span className="font-medium">Dark Mode</span>
              </div>
              {resolvedTheme === "dark" && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
          </button>
          <button onClick={() => setTheme("light")} className="w-full p-4 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
              <div className="flex items-center gap-3">
                  <Sun className="w-5 h-5" />
                  <span className="font-medium">Light Mode</span>
              </div>
              {resolvedTheme === "light" && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
          </button>
      </div>

      <div className="mx-4 mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          About
      </div>
      <div className="mx-4 bg-white dark:bg-zinc-900 rounded-xl overflow-hidden mb-6 p-4">
          <div className="flex items-center gap-3 mb-2">
               <Smartphone className="w-5 h-5 text-gray-400" />
               <span className="font-medium">Device Name</span>
               <span className="ml-auto text-muted-foreground">Portfolio Phone</span>
          </div>
          <div className="flex items-center gap-3">
               <Monitor className="w-5 h-5 text-gray-400" />
               <span className="font-medium">OS Version</span>
               <span className="ml-auto text-muted-foreground">Web 1.0</span>
          </div>
      </div>
    </motion.div>
  );
}
