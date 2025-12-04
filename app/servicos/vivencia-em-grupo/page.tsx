"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { MessageCircle, ArrowLeft, Flame, Heart, Users, Calendar, Sparkles, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

const WHATSAPP_NUMBER = "5519981382425"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre a Vivência em Grupo.`
const GRUPO_IMAGE = "/images/111.jpg"

const benefits = [
  "Libertar o que estava preso e resgatar o que estava perdido",
  "Dar espaço à presença, ao gesto, ao fogo que aquece e transforma",
  "Compartilhar experiências em um círculo seguro entre mulheres",
  "Fortalecer-se através da coletividade e da sororidade",
]

export default function VivenciaEmGrupoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-background" />
          <div className="absolute top-20 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="pt-4">
                <Link
                  href="/#servicos"
                  scroll={false}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar
                </Link>
              </div>

              <span className="text-primary uppercase tracking-widest text-sm font-medium">Vivência em Grupo</span>
              <h1 className="font-serif text-4xl md:text-6xl font-medium text-foreground mt-4 mb-6">
                Vivência em Grupo para Mulheres
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Psicólogas: Cristiane Melo e Priscila Alves
              </p>
            </motion.div>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={GRUPO_IMAGE || "/placeholder.svg"}
                alt="Grupo de mulheres reunidas na vivência em grupo"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Date Banner */}
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-6 mb-10 flex items-center gap-4">
                  <Calendar className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-foreground font-medium text-lg">Próxima data</p>
                    <p className="text-muted-foreground">À confirmar</p>
                  </div>
                </div>

                {/* Main Question */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Flame className="w-8 h-8 text-primary" />
                    <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                      Você sente que foi oprimida e que sua voz foi calada?
                    </h2>
                  </div>
                </div>

                {/* Poetic Description */}
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
                  <p>
                    Há histórias que ainda moram no corpo. Verdades que nunca foram ditas. Segredos jamais revelados.
                    Partes de você que aprenderam a se anular e a se esconder.
                  </p>
                  <p className="text-foreground font-medium">
                    Essa vivência não é sobre falar, apenas. É sobre libertar o que estava preso e resgatar o que estava
                    perdido. Dar espaço à presença. Ao gesto. Ao fogo que aquece e transforma.
                  </p>
                  <p className="italic">Se você sentiu algo vibrar aí dentro... esse pode ser o seu chamado.</p>
                </div>

                {/* Benefits */}
                <div className="bg-card rounded-3xl p-8 border border-border/50">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-6 flex items-center gap-3">
                    <Heart className="w-5 h-5 text-primary" />O que você encontrará
                  </h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Circle Description */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/10">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h3 className="font-serif text-2xl font-medium text-foreground">
                      Um círculo seguro, profundo e transformador
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Entre mulheres. Com raízes, coragem e o coração aberto.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    As vivências em grupo são encontros onde mulheres se reúnem para compartilhar, se acolher e
                    fortalecer umas às outras em um espaço seguro e transformador.
                  </p>
                </div>

                {/* What it is */}
                <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-6 h-6 text-primary" />
                    <h3 className="font-serif text-2xl font-medium text-foreground">Como funcionam</h3>
                  </div>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Grupos reduzidos para maior intimidade e conexão</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Temas específicos voltados para a cura feminina</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Rituais de integração corpo, alma e palavra</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Espaço de partilha, libertação e reconstrução</span>
                    </li>
                  </ul>
                </div>

                {/* Quote */}
                <div className="bg-secondary/50 rounded-2xl p-6 text-center">
                  <p className="text-foreground italic text-lg leading-relaxed">
                    "Porque nenhuma caminhada precisa ser feita sozinha."
                  </p>
                </div>

                {/* CTA */}
                <div className="bg-primary rounded-3xl p-8 text-center">
                  <Sparkles className="w-8 h-8 text-primary-foreground mx-auto mb-4" />
                  <p className="text-primary-foreground text-lg font-medium mb-2">As inscrições estão abertas!</p>
                  <p className="text-primary-foreground/80 text-sm mb-6">
                    Vem com a gente. Esse pode ser o seu chamado.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary rounded-full w-full"
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Quero participar
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
