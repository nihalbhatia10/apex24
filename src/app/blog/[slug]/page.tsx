import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import { FadeIn } from "@/components/animations/FadeIn"
import ReactMarkdown from "react-markdown"
import Link from "next/link"
import { Calendar, User } from "lucide-react"
import type { Metadata } from "next"

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | APEX 24',
    };
  }
  
  return {
    title: `${post.title} | APEX 24 Insights`,
    description: post.description,
    alternates: {
      canonical: `https://apex24consultancy.com/blog/${post.slug}`
    }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://apex24consultancy.com/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "APEX 24 Recruitment & Talent Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://apex24consultancy.com/icon.jpg"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <article className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn direction="up">
            <div className="mb-10">
              <Link href="/blog" className="text-accent text-sm font-semibold hover:underline mb-8 inline-block">
                &larr; Back to all articles
              </Link>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
                {post.title}
              </h1>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-accent hover:prose-a:text-accent/80 prose-img:rounded-sm">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </FadeIn>
        </div>
      </article>
    </div>
  )
}
