"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, BookOpen, Clock, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import type { BlogPage } from "@/lib/blog-data"

interface BlogPageContentProps {
  page: BlogPage
  relatedPages: BlogPage[]
}

export function BlogPageContent({ page, relatedPages }: BlogPageContentProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: page.title,
          description: page.description,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    }
  }

  const formatContent = (content: string) => {
    const sections = content.split("\n\n").filter(Boolean)

    return sections.map((section, index) => {
      // Headings
      if (section.startsWith("## ")) {
        return (
          <h2 key={index} className="font-serif text-2xl sm:text-3xl font-medium text-foreground mt-12 mb-6 first:mt-0">
            {section.replace("## ", "")}
          </h2>
        )
      }

      // Lists
      if (section.includes("\n- ")) {
        const items = section.split("\n- ").filter(Boolean)
        const hasIntro = !section.startsWith("- ")

        return (
          <div key={index} className="my-6">
            {hasIntro && <p className="text-muted-foreground leading-relaxed mb-4">{items[0]}</p>}
            <ul className="space-y-3 ml-6">
              {items.slice(hasIntro ? 1 : 0).map((item, i) => (
                <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong class="text-foreground font-semibold">$1</strong>',
                      ),
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        )
      }

      // Horizontal rules
      if (section.trim() === "---") {
        return <hr key={index} className="my-12 border-border/50" />
      }

      // Regular paragraphs
      return (
        <p
          key={index}
          className="text-muted-foreground leading-relaxed mb-6 text-base sm:text-lg"
          dangerouslySetInnerHTML={{
            __html: section.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>'),
          }}
        />
      )
    })
  }

  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24">
        {/* Hero */}
        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 sm:mb-8 transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para o blog
              </Link>

              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <span className="text-primary font-medium text-sm sm:text-base">Artigo</span>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 sm:mb-6 leading-tight">
                {page.title}
              </h1>

              <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
                {page.description}
              </p>

              <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  15 min
                </span>
                <button onClick={handleShare} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  Compartilhar
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-8 sm:pb-12">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="aspect-[16/9] sm:aspect-[21/9] relative rounded-lg sm:rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src={page.image || "/placeholder.svg"}
                  alt={page.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              {formatContent(page.content)}
            </motion.article>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-3 sm:mb-4">
                Precisa de apoio profissional?
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 px-4">
                Se você se identificou com este conteúdo, saiba que não precisa enfrentar isso sozinha. Agende uma
                sessão e dê o primeiro passo para a sua transformação.
              </p>
              <Button asChild size="lg" className="rounded-full px-6 sm:px-8">
                <Link href="/contato">Agendar consulta</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Related Pages */}
        {relatedPages.length > 0 && (
          <section className="py-12 sm:py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-6 sm:mb-8">
                  Continue explorando
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {relatedPages.map((relatedPage, index) => (
                    <motion.div
                      key={relatedPage.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Link
                        href={`/blog/${relatedPage.slug}`}
                        className="block bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 group h-full"
                      >
                        <div className="aspect-[16/10] relative bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                          <Image
                            src={relatedPage.image || "/placeholder.svg"}
                            alt={relatedPage.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <h3 className="font-serif text-base sm:text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                            {relatedPage.title}
                          </h3>
                          <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
                            {relatedPage.description}
                          </p>
                          <span className="text-primary font-medium text-xs sm:text-sm inline-flex items-center gap-2 mt-3 sm:mt-4 group-hover:gap-3 transition-all">
                            Ler artigo
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
