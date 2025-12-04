"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    slug: "autoestima",
    title: "Autoestima",
    description: "Reconecte-se com seu valor e aprenda a se amar verdadeiramente.",
    coverImage: "/woman-self-love-mirror-reflection-empowerment-purp.jpg",
  },
  {
    slug: "relacoes-saudaveis",
    title: "Relações Saudáveis",
    description: "Como construir relacionamentos que nutrem e respeitam quem você é.",
    coverImage: "/healthy-relationship-couple-holding-hands-sunset.jpg",
  },
  {
    slug: "traumas-emocionais",
    title: "Traumas Emocionais",
    description: "Entenda como os traumas afetam sua vida e como iniciar o processo de cura.",
    coverImage: "/woman-healing-emotional-trauma-therapy-peaceful.jpg",
  },
  {
    slug: "dependencia-emocional",
    title: "Dependência Emocional",
    description: "Liberte-se de padrões que te prendem em relações que te diminuem.",
    coverImage: "/woman-breaking-free-chains-emotional-independence.jpg",
  },
  {
    slug: "machismo-e-misoginia",
    title: "Machismo e Misoginia",
    description: "Reconheça e enfrente as estruturas que limitam sua liberdade.",
    coverImage: "/woman-strength-feminism-empowerment-protest.jpg",
  },
  {
    slug: "relacionamento-abusivo",
    title: "Relacionamento Abusivo",
    description: "Identifique sinais e encontre caminhos para se proteger e se curar.",
    coverImage: "/woman-breaking-free-abuse-survivor-strength.jpg",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-16 sm:py-24 md:py-32 bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4 font-mono">Conteúdo</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground uppercase tracking-tight">Blog</h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl">
            Artigos e reflexões para apoiar sua jornada de autoconhecimento
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block bg-background border border-border hover:border-primary transition-all h-full flex flex-col overflow-hidden"
              >
                <div className="aspect-[16/10] relative bg-muted overflow-hidden">
                  <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt={`Imagem do artigo ${post.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{post.description}</p>
                  <span className="text-primary text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Ler artigo
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold uppercase tracking-widest text-xs transition-colors"
          >
            Ver todos os artigos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
