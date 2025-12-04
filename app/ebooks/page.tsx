import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EbooksList } from "@/components/ebooks-list"

export const metadata = {
  title: "E-books Gratuitos | Cristiane Melo",
  description:
    "Baixe gratuitamente e-books sobre violência psicológica, relacionamentos abusivos e empoderamento feminino.",
}

export default function EbooksPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-24 md:py-32 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4 font-mono">Materiais gratuitos</p>
            <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-8 uppercase tracking-tight">E-books</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Conteúdos criados com carinho para apoiar sua jornada de autoconhecimento, cura e libertação.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Cada e-book é um presente em formato de informação, acolhimento e empoderamento para mulheres que já
              sofreram demais tentando ser amadas.
            </p>
          </div>

          <EbooksList />
        </div>
      </section>

      <Footer />
    </main>
  )
}
