"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data"; // Reuse data
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export default function ProjectsApp() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-full h-full bg-slate-50 dark:bg-zinc-900 overflow-y-auto"
    >
      <div className="sticky top-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-4 border-b z-20">
          <h2 className="text-xl font-bold">App Store</h2>
      </div>

      <div className="p-4 flex flex-col gap-4 pb-20">
        <div className="relative rounded-xl overflow-hidden h-40 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center p-6 text-white mb-2">
            <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-80">Featured</span>
                <h3 className="text-2xl font-bold">Android MCP Toolkit</h3>
                <p className="opacity-90 text-sm mt-1">Figma-to-XML + Gradle insights</p>
            </div>
        </div>

        {PROJECTS.map((project) => (
             <div key={project.id} className="bg-white dark:bg-zinc-800 rounded-xl p-4 shadow-sm flex gap-4 items-center">
                 <div className="w-16 h-16 rounded-xl bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs font-semibold text-zinc-600 dark:text-zinc-200">
                    {project.type}
                 </div>
                 <div className="flex-1 min-w-0">
                     <h4 className="font-semibold truncate">{project.title}</h4>
                     <p className="text-xs text-muted-foreground line-clamp-1">{project.tagline}</p>
                     <div className="flex gap-1 mt-1">
                        {project.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[10px] bg-secondary px-1.5 py-0.5 rounded">{tag}</span>
                        ))}
                     </div>
                 </div>
                 <Button size="sm" variant="secondary" className="rounded-full h-8 px-4 font-bold text-blue-600" asChild>
                    <a href={project.link} target="_blank" rel="noreferrer">GET</a>
                 </Button>
             </div>
        ))}
      </div>
    </motion.div>
  );
}
