import { getBlogPosts } from "@/lib/blog"
import { FadeIn } from "@/components/animations/FadeIn"
import { SectionHeading } from "@/components/ui/SectionHeading"
import Link from "next/link"
import { Calendar, User } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog & Insights | APEX 24 Recruitment',
  description: 'Read the latest insights on recruitment trends, hiring strategies, and career advice across India from APEX 24.',
  alternates: {
    canonical: 'https://apex24consultancy.com/blog'
  }
}

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-32 pb-20 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="up">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Insights</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Expert perspectives on recruitment trends, employer strategies, and candidate advice for the Indian talent market.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary/5 flex-grow">
        <div className="container mx-auto px-6 md:px-12">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No blog posts published yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <FadeIn key={post.slug} delay={index * 0.1} direction="up" className="h-full">
                  <Link href={`/blog/${post.slug}`} className="block h-full group">
                    <article className="flex flex-col h-full bg-background border border-border rounded-sm p-8 hover:border-accent hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-IN', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                        </div>
                      </div>
                      
                      <h2 className="text-2xl font-bold font-heading mb-4 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-muted-foreground line-clamp-3 mb-6 flex-grow">
                        {post.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-accent font-semibold text-sm mt-auto">
                        <span>Read Article</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                      </div>
                    </article>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
