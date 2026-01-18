"use client";

import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function BlogApp() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const post = BLOG_POSTS.find(p => p.slug === selectedPost);

  if (selectedPost && post) {
      return (
        <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="w-full h-full bg-background overflow-y-auto absolute inset-0 z-30"
        >
            <div className="sticky top-0 bg-background/95 backdrop-blur border-b p-4 flex items-center gap-2">
                <button onClick={() => setSelectedPost(null)} className="font-bold text-blue-600">Back</button> 
            </div>
            <div className="p-6">
                <h1 className="text-2xl font-bold font-heading mb-2">{post.title}</h1>
                <p className="text-sm text-muted-foreground mb-6">{post.date}</p>
                <div className="prose prose-sm dark:prose-invert">
                    <p className="lead">{post.excerpt}</p>
                    <hr className="my-4"/>
                    <p>{post.content}</p>
                </div>
            </div>
        </motion.div>
      )
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full bg-background overflow-y-auto"
    >
      <div className="sticky top-0 bg-background/80 backdrop-blur-md p-4 border-b z-20">
          <h2 className="text-xl font-bold font-serif italic">My Stories</h2>
      </div>

      <div className="divide-y divide-border">
        {BLOG_POSTS.map((post) => (
             <button 
                key={post.slug} 
                onClick={() => setSelectedPost(post.slug)}
                className="w-full text-left p-4 hover:bg-secondary/50 transition-colors flex justify-between items-center group"
             >
                 <div>
                     <h3 className="font-semibold">{post.title}</h3>
                     <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{post.excerpt}</p>
                 </div>
                 <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground" />
             </button>
        ))}
        {/* Fillers to look populated */}
        {[1, 2, 3].map(i => (
             <div key={i} className="p-4 opacity-50">
                 <div className="h-4 bg-secondary w-3/4 rounded mb-2"></div>
                 <div className="h-3 bg-secondary w-full rounded"></div>
             </div>
        ))}
      </div>
    </motion.div>
  );
}
