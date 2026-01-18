"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/context/LanguageContext";
import { PROFILE } from "@/lib/data";
import { Github, ArrowRight } from "lucide-react";

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Blobs for Glassmorphism */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {t.hero.greeting} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{PROFILE.name.split(" ").pop()}</span>.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-8">
              {t.hero.role}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            {t.hero.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
              <a href="#projects">
                {t.hero.exploreProjects} <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full backdrop-blur-sm bg-background/30 border-border/50" asChild>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 w-4 h-4" /> {t.hero.sourceCode}
              </a>
            </Button>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
