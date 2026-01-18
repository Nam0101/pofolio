"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { PROFILE } from "@/lib/data";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; 
import { Mail, MapPin, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Shim Avatar for now to save tool calls
const AvatarShim = ({ src, fallback }: { src?: string, fallback: string }) => (
    <div className="h-24 w-24 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xl font-bold border-4 border-white dark:border-zinc-900 overflow-hidden">
        {fallback}
    </div>
)

export default function ProfileApp() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full h-full bg-background overflow-y-auto"
    >
      <div className="h-40 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        {/* Abstract shapes for detail */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl translate-y-10 -translate-x-5"></div>
      </div>
      <div className="px-6 -mt-16 relative z-10">
        <AvatarShim fallback="NV" />
        <div className="mt-4">
            <h2 className="text-2xl font-bold">{PROFILE.name}</h2>
            <p className="text-blue-600 font-medium">{PROFILE.handle}</p>
        </div>
        
        <div className="mt-6 flex flex-col gap-3">
             <div className="flex items-center gap-3 text-muted-foreground">
                 <MapPin className="w-4 h-4" /> {PROFILE.location}
             </div>
             <div className="flex items-center gap-3 text-muted-foreground">
                 <Mail className="w-4 h-4" /> {PROFILE.email}
             </div>
        </div>

        <div className="mt-8">
            <h3 className="font-semibold mb-2">Bio</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
                {PROFILE.bio}
            </p>
        </div>
        
        <div className="mt-8 pb-8">
             <Button className="w-full rounded-full" asChild>
                <a href={PROFILE.github} target="_blank">
                    <Github className="mr-2 h-4 w-4" /> Follow on GitHub
                </a>
             </Button>
        </div>
      </div>
    </motion.div>
  );
}
