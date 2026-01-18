"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FluidBackground } from "@/components/ui/FluidBackground";
import { LiquidContainer } from "@/components/ui/LiquidContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { useTranslation } from "@/context/LanguageContext";

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <FluidBackground>
      <div className="min-h-screen py-24 relative z-10">
        <Container>
          <LiquidContainer className="p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
               <div>
                 <Button variant="ghost" asChild className="mb-4 pl-0 hover:pl-2 transition-all text-zinc-400 hover:text-white">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" /> {t.blog.backToHome}
                    </Link>
                </Button>
                <h1 className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    {t.blog.title}
                </h1>
               </div>
               <p className="text-zinc-400 text-lg max-w-md text-right md:text-left">
                   {t.blog.subtitle}
               </p>
            </div>
          </LiquidContainer>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group h-full">
                <GlassCard variant="default" className="h-full flex flex-col p-6 hover:border-aurora-blue/50 transition-colors group-hover:bg-white/10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-mono text-aurora-blue">{post.date}</span>
                      <div className="flex gap-1 flex-wrap justify-end">
                          {post.tags.map(tag => (
                               <span key={tag} className="text-[10px] uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-full text-zinc-300 border border-white/5">{tag}</span>
                          ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-aurora-blue transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="text-zinc-400 text-sm line-clamp-3 mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors mt-auto">
                        {t.blog.readMore} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </FluidBackground>
  );
}
