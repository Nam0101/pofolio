"use client";

import { HeroPhone } from "@/components/sections/HeroPhone";
import { PortfolioMasonry } from "@/components/sections/PortfolioMasonry";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FluidBackground } from "@/components/ui/FluidBackground";
import { LiquidContainer } from "@/components/ui/LiquidContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, Download, Mail } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";
import { PROFILE } from "@/lib/data";

export default function Home() {
  const { t } = useTranslation();

  return (
    <FluidBackground>
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Hero Section */}
        <HeroPhone />
        <div className="flex justify-center pb-8">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
            <span className="h-px w-10 bg-zinc-200 dark:bg-zinc-700" />
            {t.explore}
            <span className="h-px w-10 bg-zinc-200 dark:bg-zinc-700" />
          </div>
        </div>

        {/* Portfolio Section */}
        <section className="py-24 relative">
          <Container>
            <LiquidContainer className="p-8 md:p-12 relative overflow-visible aurora-border">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-zinc-50/60 dark:from-zinc-900/60 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-zinc-900 dark:text-zinc-100">{t.projects.featuredTitle}</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
                      {t.projects.featuredSubtitle}
                    </p>
                  </div>
                  <Button variant="aurora" className="group" asChild>
                    <a href="#projects">
                      {t.projects.viewAll}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>

                <PortfolioMasonry />
              </div>
            </LiquidContainer>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative">
          <Container className="max-w-4xl">
             <GlassCard variant="colored" className="p-12 text-center relative overflow-hidden group aurora-border bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800">
                {/* Decoration */}
                <div className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] bg-aurora-purple/20 rounded-full blur-[100px] pointer-events-none transition-all duration-1000 group-hover:bg-aurora-purple/30" />
                <div className="absolute bottom-[-50%] right-[-20%] w-[500px] h-[500px] bg-aurora-blue/20 rounded-full blur-[100px] pointer-events-none transition-all duration-1000 group-hover:bg-aurora-blue/30" />

                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading tracking-tight text-zinc-900 dark:text-zinc-100">{t.contact.title}</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-10 text-lg max-w-xl mx-auto">
                      {t.contact.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                        <Button size="lg" variant="aurora" className="h-14 px-10 text-lg rounded-full shadow-xl shadow-aurora-blue/20" asChild>
                            <a href={`mailto:${PROFILE.email}`}>
                              <Mail className="mr-2 h-5 w-5" />
                              {t.contact.cta}
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-10 text-lg rounded-full border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800" asChild>
                            <a href={PROFILE.cv} target="_blank" rel="noreferrer">
                              <Download className="mr-2 h-5 w-5" />
                              {t.contact.viewCV}
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-10 text-lg rounded-full border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800" asChild>
                            <a href={PROFILE.cv} download>
                              <Download className="mr-2 h-5 w-5" />
                              {t.contact.downloadCV}
                            </a>
                        </Button>
                    </div>
                </div>
             </GlassCard>
          </Container>
        </section>

        <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl relative z-20">
          <Container className="flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 dark:text-zinc-400">
            <p>© {new Date().getFullYear()} Nam Nguyen. {t.footer.craftedWith} <span className="text-aurora-purple font-medium">Aurora UI</span>.</p>
            <div className="flex gap-8 mt-6 md:mt-0 font-medium">
               <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">GitHub</a>
               <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">LinkedIn</a>
               <a href={PROFILE.facebook} target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Facebook</a>
               <a href={`mailto:${PROFILE.email}`} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Email</a>
            </div>
          </Container>
        </footer>
      </main>
    </FluidBackground>
  );
}
