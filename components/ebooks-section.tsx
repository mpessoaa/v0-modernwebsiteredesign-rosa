"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EbookModalV2 } from "@/components/ebook-modal-v2"
import Image from "next/image"

const ebooks = [
  {
    id: "violencia-psicologica",
    title: "Desvendando a Violência Psicológica",
    subtitle: "Um guia para entender, superar e prevenir",
    description:
      "Um guia essencial para mulheres que desejam compreender, romper e se curar de relações marcadas pela violência emocional.",
    fullDescription: [
      "Neste eBook, você vai descobrir o que é a violência psicológica, como ela se manifesta nas palavras, silêncios e atitudes, e por que é tão difícil reconhecê-la quando se está envolvida.",
      "A partir de uma abordagem sensível e informativa, este material ajuda você a identificar sinais de abuso, entender seus efeitos na saúde mental e retomar sua força interior para recomeçar com mais consciência, proteção e amor-próprio.",
    ],
    closingNote:
      "Um presente em formato de informação, acolhimento e empoderamento para quem já sofreu demais tentando ser amada.",
    coverImage: "/images/des.png",
  },
  {
    id: "quando-amor-adoece",
    title: "Quando o Amor Adoece",
    subtitle: "Um livro-ritual para mulheres em travessia",
    description:
      "Nasceu da necessidade de nomear violências sutis, despertar consciências adormecidas e guiar mulheres de volta para si mesmas.",
    fullDescription: [
      "Com uma linguagem simbólica, poética e visceral, o livro conduz a leitora por um caminho de conscientização, reconhecimento das feridas, desconstrução de papéis impostos, fortalecimento emocional e rituais de resgate e reconexão.",
      "Mais do que leitura, ele é uma vivência. Mais do que conteúdo, ele é espelho e convite.",
    ],
    closingNote: null,
    coverImage: "/images/image.png",
  },
]

export function EbooksSection() {
  const [selectedEbook, setSelectedEbook] = useState<(typeof ebooks)[0] | null>(null)

  return (
    <section id="ebooks" className="py-16 sm:py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4 font-mono">Materiais gratuitos</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground uppercase tracking-tight">
            E-books
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl">
            Conteúdos criados com carinho para apoiar sua jornada de autoconhecimento e cura
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {ebooks.map((ebook, index) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border group flex flex-col"
            >
              <div className="aspect-[3/4] relative bg-muted overflow-hidden">
                <Image
                  src={ebook.coverImage || "/placeholder.svg"}
                  alt={`Capa do e-book ${ebook.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
              <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 uppercase tracking-tight">
                  {ebook.title}
                </h3>
                <p className="text-xs text-primary mb-3 uppercase tracking-widest">{ebook.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{ebook.description}</p>
                <Button
                  onClick={() => setSelectedEbook(ebook)}
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground uppercase tracking-widest text-xs py-4 sm:py-5"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Grátis
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedEbook && (
        <EbookModalV2 ebook={selectedEbook} isOpen={!!selectedEbook} onClose={() => setSelectedEbook(null)} />
      )}
    </section>
  )
}
