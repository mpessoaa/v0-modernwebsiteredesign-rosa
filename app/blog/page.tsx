"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { blogPages } from "@/lib/blog-data"

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24">
        {/* Hero */}
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 sm:mb-8 transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para o início
              </Link>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4 sm:mb-6">
                Blog
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed">
                Artigos e reflexões para apoiar sua jornada de autoconhecimento, cura emocional e empoderamento
                feminino.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogPages.map((page, index) => (
                <motion.div
                  key={page.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={`/blog/${page.slug}`}
                    className="block bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 group h-full"
                  >
                    <div className="aspect-[16/10] relative bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                      <Image
                        src={page.image || "/placeholder.svg"}
                        alt={page.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index < 3}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-medium text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                        {page.title}
                      </h2>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3 mb-3 sm:mb-4">
                        {page.description}
                      </p>
                      <span className="text-primary font-medium text-xs sm:text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        Ler artigo
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
