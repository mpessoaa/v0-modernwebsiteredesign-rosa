"use client"

import { motion } from "framer-motion"
import { Star, Quote, ArrowLeft, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "5519981382425"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar uma sessão.`

const testimonials = [
  {
    name: "C.S.M.",
    text: "O trabalho da Cris é incrível! Excelente, muito capacitada. Fazer psicoterapia com ela é transformador. A forma como ela conduz as sessões é leve e ao mesmo tempo profundo. Te leva ao encontro de partes suas que você nem sabia que estavam perdidas e amplia a sua consciência em 360 graus. Minha vida melhorou em todos os sentidos.",
    rating: 5,
  },
  {
    name: "Cris L.",
    text: "Conheci a Cris em um momento que precisava de suporte emocional para superar um trauma pontual mas, através do processo terapêutico com ela, (re) conheci a mim mesma. Esse processo é um percurso cheio de descobertas, superações, aprendizado, crescimento e, principalmente, auto conhecimento.",
    rating: 5,
  },
  {
    name: "Marina S.",
    text: "A Cristiane me ajudou a entender padrões que eu repetia há anos sem perceber. Hoje me sinto mais livre, mais eu mesma. Recomendo para todas as mulheres que buscam um espaço seguro e acolhedor para se reconectar.",
    rating: 5,
  },
  {
    name: "Ana P.",
    text: "Encontrei na Cris uma profissional extremamente competente e humana. Ela me ajudou a ressignificar experiências dolorosas e a construir uma relação mais saudável comigo mesma. Sou muito grata por cada sessão.",
    rating: 5,
  },
  {
    name: "Juliana R.",
    text: "A terapia com a Cristiane mudou minha vida. Aprendi a me ouvir, a colocar limites e a me valorizar. O espaço que ela cria é verdadeiramente acolhedor e seguro. Recomendo de olhos fechados.",
    rating: 5,
  },
  {
    name: "Fernanda M.",
    text: "Cheguei na terapia completamente perdida e hoje me sinto inteira. A Cris tem uma sensibilidade única para nos guiar nesse processo de autoconhecimento. Ela é simplesmente incrível.",
    rating: 5,
  },
  {
    name: "Patricia B.",
    text: "Fazer terapia com a Cris foi uma das melhores decisões que tomei. Ela me ajudou a sair de um relacionamento abusivo e a reconstruir minha autoestima. Sou outra pessoa hoje.",
    rating: 5,
  },
  {
    name: "Luciana T.",
    text: "A forma como a Cristiane conduz as sessões é única. Ela consegue trazer leveza para assuntos pesados e profundidade para questões que pareciam simples. Evoluo a cada encontro.",
    rating: 5,
  },
]

export default function DepoimentosPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para o início
              </Link>

              <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">Depoimentos</h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Histórias de mulheres que passaram pelo processo terapêutico e transformaram suas vidas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-3xl relative border border-border/50 shadow-sm"
                >
                  <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? "text-primary fill-primary" : "text-border"}`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border border-primary/30 bg-primary/5 rounded-full flex items-center justify-center p-2">
                      <Image
                        src="/images/psi-symbol.png"
                        alt="Símbolo Psi"
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="font-medium text-foreground">{testimonial.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
                Você também pode transformar sua história
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Se você sente que chegou o momento de cuidar de si, de se ouvir e de se fortalecer, estou aqui para
                caminhar ao seu lado.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Agendar via WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
