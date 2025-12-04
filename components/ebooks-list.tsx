"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, BookOpen, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EbookModal } from "@/components/ebook-modal"
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
      "O guia aborda temas como: o que é violência psicológica, sinais de red flags, efeitos na saúde mental, o fator D na personalidade dos agressores, passos para buscar ajuda e como se recuperar dos abusos.",
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
      "Dividido em três partes - A mulher que espera, A mulher que desperta e A mulher que escolhe - o livro é uma jornada de transformação profunda.",
      "Mais do que leitura, ele é uma vivência. Mais do que conteúdo, ele é espelho e convite para você voltar para si mesma.",
    ],
    closingNote: "Que este livro te faça companhia na travessia.",
    coverImage: "/images/image.png",
  },
]

export function EbooksList() {
  const [selectedEbook, setSelectedEbook] = useState<(typeof ebooks)[0] | null>(null)

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {ebooks.map((ebook, index) => (
          <motion.div
            key={ebook.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border border-border group hover:border-primary transition-colors"
          >
            <div className="aspect-[4/5] relative bg-card border-b border-border overflow-hidden">
              <Image
                src={ebook.coverImage || "/placeholder.svg"}
                alt={`Capa do e-book ${ebook.title}`}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-12 h-12 border-2 border-primary bg-background flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">
                {ebook.title}
              </h3>
              <p className="text-xs text-primary mb-4 uppercase tracking-widest font-mono">{ebook.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{ebook.description}</p>

              <div className="space-y-3">
                <Button
                  onClick={() => setSelectedEbook(ebook)}
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground uppercase tracking-widest text-xs py-6"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Grátis
                </Button>
                <button
                  onClick={() => setSelectedEbook(ebook)}
                  className="w-full text-xs text-muted-foreground hover:text-primary uppercase tracking-widest transition-colors flex items-center justify-center gap-2 py-2"
                >
                  <Heart className="w-3 h-3" />
                  Ver mais detalhes
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedEbook && (
        <EbookModal ebook={selectedEbook} isOpen={!!selectedEbook} onClose={() => setSelectedEbook(null)} />
      )}
    </>
  )
}
