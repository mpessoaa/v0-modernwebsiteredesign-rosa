import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getBlogPageBySlug, getAllBlogPages } from "@/lib/blog-data"
import { BlogPageContent } from "@/components/blog-page-content"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getBlogPageBySlug(slug)

  if (!page) {
    return {
      title: "Página não encontrada",
    }
  }

  return {
    title: page.title,
    description: page.description,
  }
}

export async function generateStaticParams() {
  const pages = getAllBlogPages()
  return pages.map((page) => ({
    slug: page.slug,
  }))
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const page = getBlogPageBySlug(slug)

  if (!page) {
    notFound()
  }

  // Get other pages for related content
  const otherPages = getAllBlogPages()
    .filter((p) => p.slug !== slug)
    .slice(0, 3)

  return <BlogPageContent page={page} relatedPages={otherPages} />
}
