"use client";

import { Container } from "@/components/ui/Container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { PROJECTS } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { useTranslation } from "@/context/LanguageContext";

export function PortfolioMasonry() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20">
      <Container>
        <SectionReveal className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">{t.projects.title}</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl">
            {t.projects.subtitle}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <SectionReveal key={project.id} delay={index * 0.08}>
              <Card className="h-full flex flex-col bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-700 hover:border-aurora-blue/60 transition-all duration-300 group aurora-border">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-zinc-900 dark:text-zinc-100 group-hover:text-aurora-blue transition-colors">{project.title}</CardTitle>
                    <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">{project.type}</span>
                  </div>
                  <CardDescription className="text-zinc-500 dark:text-zinc-400">{project.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400 ring-1 ring-inset ring-zinc-200 dark:ring-zinc-700">
                         {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="w-full justify-between group/btn text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {t.projects.explore}
                      <ExternalLink className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover/btn:text-zinc-900 dark:group-hover/btn:text-zinc-100 transition-colors" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
