import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogSection } from "@/components/blog-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Artigos | Cristiane Melo",
  description: "Leia artigos sobre psicologia, saúde mental, relacionamentos e empoderamento feminino.",
}

export default function ArtigosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-24 md:py-32 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4 font-mono">Conteúdo</p>
            <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-8 uppercase tracking-tight">Artigos</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Reflexões, insights e conhecimento sobre psicologia, saúde mental e bem-estar feminino.
            </p>
          </div>

          <BlogSection showTitle={false} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
