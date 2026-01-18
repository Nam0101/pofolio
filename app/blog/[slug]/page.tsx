"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { FluidBackground } from "@/components/ui/FluidBackground";
import { LiquidContainer } from "@/components/ui/LiquidContainer";
import { useTranslation } from "@/context/LanguageContext";
import { use } from "react";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { t } = useTranslation();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <FluidBackground>
      <div className="min-h-screen py-24 relative z-10 transition-all duration-500">
        <Container className="max-w-3xl">
          <Button variant="ghost" asChild className="mb-8 pl-0 hover:pl-2 transition-all text-zinc-400 hover:text-white">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> {t.blog.backToBlog}
            </Link>
          </Button>

          <LiquidContainer className="p-8 md:p-12 mb-12" intensity="high">
            <article className="prose prose-invert prose-lg max-w-none">
              <div className="mb-8 not-prose border-b border-white/10 pb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                     <span key={tag} className="text-xs font-mono uppercase tracking-wider bg-aurora-blue/20 text-aurora-blue px-2 py-1 rounded border border-aurora-blue/30">
                       {tag}
                     </span>
                  ))}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent mb-4">
                    {post.title}
                </h1>
                <time className="text-zinc-500 font-mono text-sm block">
                  {post.date}
                </time>
              </div>

              <div className="text-zinc-300 leading-relaxed space-y-6">
                 <p className="text-xl font-light text-white/90 leading-relaxed border-l-4 border-aurora-purple pl-6 py-2 bg-white/5 rounded-r-lg">
                    {post.excerpt}
                 </p>
                 <hr className="border-white/10 my-8" />
                 <div className="whitespace-pre-line">
                    {post.content}
                 </div>
              </div>
            </article>
          </LiquidContainer>
        </Container>
      </div>
    </FluidBackground>
  );
}
