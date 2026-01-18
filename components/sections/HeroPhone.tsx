"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { OSProvider, useOS } from "@/context/OSContext";
import { PhoneFrame } from "@/components/os/PhoneFrame";
import { Launcher } from "@/components/os/Launcher";
import ProfileApp from "@/apps/Profile";
import ProjectsApp from "@/apps/Projects";
import BlogApp from "@/apps/Blog";
import SettingsApp from "@/apps/Settings";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RoleTypewriter } from "@/components/ui/TypewriterEffect";
import { Download, FileText, Github, Sparkles } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";
import { PROFILE } from "@/lib/data";

// The Manager component inside the provider
const OSManager = () => {
  const { currentApp, isHome } = useOS();

  return (
    <PhoneFrame className="scale-[0.85] sm:scale-100 origin-top md:origin-center shadow-2xl">
      <AnimatePresence mode="wait">
        {isHome && (
          <motion.div
            key="launcher"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="w-full h-full"
          >
            <Launcher />
          </motion.div>
        )}

        {currentApp === "profile" && <ProfileApp key="profile" />}
        {currentApp === "projects" && <ProjectsApp key="projects" />}
        {currentApp === "blog" && <BlogApp key="blog" />}
        {currentApp === "settings" && <SettingsApp key="settings" />}
      </AnimatePresence>
    </PhoneFrame>
  );
};

export function HeroPhone() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-28 overflow-hidden bg-background">
      {/* Abstract Background Elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/15 rounded-full blur-[140px] -z-10 animate-float-slow"></div>
      <div className="absolute bottom-24 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-[140px] -z-10 animate-float"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/12 rounded-full blur-[120px] -z-10 animate-pulse-soft"></div>

      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-black dark:text-zinc-400 shadow-sm backdrop-blur">
                      <Sparkles className="h-3.5 w-3.5 text-aurora-blue" />
                      {t.hero.badge}
                  </div>
                  <div className="flex items-center gap-4 justify-center lg:justify-start">
                    <div className="relative h-16 w-16 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-1">
                      <Image src="/avatar.jpg" alt="Nguyen Van Nam" fill className="rounded-full object-cover" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-black dark:text-zinc-400">Nguyen Van Nam</p>
                      <p className="text-lg font-semibold text-black dark:text-zinc-100">{t.hero.role}</p>
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:leading-[1.05] text-black dark:text-zinc-100">
                    <span className="block">{t.hero.greeting} <span className="text-gradient">{t.hero.name}</span>.</span>
                    <span className="block text-2xl md:text-3xl font-semibold mt-3">
                      <RoleTypewriter
                        roles={[
                          "Android Developer",
                          "Web Developer",
                          "AI Enthusiast",
                          "Software Engineer",
                          "Vibe Coder"
                        ]}
                        className="text-black dark:text-zinc-300"
                      />
                    </span>
                </h1>
                <p className="max-w-[42rem] leading-normal text-black dark:text-zinc-300 sm:text-xl sm:leading-8 mt-5">
                    {t.hero.bio}
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                    <Button size="lg" className="rounded-full px-8" asChild>
                         <a href="#projects">{t.hero.exploreProjects}</a>
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 gap-2 border-zinc-300 dark:border-zinc-700 text-black dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800" asChild>
                        <a href={PROFILE.github} target="_blank" rel="noreferrer">
                             <Github className="w-4 h-4" /> {t.hero.sourceCode}
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 gap-2 border-zinc-300 dark:border-zinc-700 text-black dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800" asChild>
                        <a href={PROFILE.cv} target="_blank" rel="noreferrer">
                             <FileText className="w-4 h-4" /> {t.hero.viewCV}
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 gap-2 border-zinc-300 dark:border-zinc-700 text-black dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800" asChild>
                        <a href={PROFILE.cv} download>
                             <Download className="w-4 h-4" /> {t.hero.downloadCV}
                        </a>
                    </Button>
                </div>
            </motion.div>
        </div>

        {/* Right Content - Phone Simulator */}
        <div className="relative flex justify-center lg:justify-end items-center">
             <div className="relative aurora-glow animate-tilt">
               <div className="absolute -top-6 -right-8 h-24 w-24 rounded-full bg-aurora-blue/30 blur-2xl animate-orbit"></div>
               <div className="absolute -bottom-8 -left-6 h-32 w-32 rounded-full bg-aurora-purple/30 blur-2xl animate-glow"></div>
               <OSProvider>
                   <OSManager />
               </OSProvider>
             </div>

             {/* Floating Badge */}
             <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 md:bottom-10 md:left-10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border border-zinc-200 dark:border-zinc-700 p-4 rounded-2xl shadow-xl max-w-[220px] hidden md:block aurora-border"
             >
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{t.hero.tryIt}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{t.hero.tryItDesc}</p>
             </motion.div>
        </div>
      </Container>
    </section>
  );
}
