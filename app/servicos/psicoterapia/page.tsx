"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import {
  MessageCircle,
  Monitor,
  Clock,
  Calendar,
  Heart,
  ArrowLeft,
  CheckCircle,
  MapPin,
  CreditCard,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

const WHATSAPP_NUMBER = "5519981382425"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar uma sessão de psicoterapia.`
const CRISTIANE_IMAGE = "/images/cristiane-therapy-office.jpg"

const howItWorks = [
  {
    icon: Monitor,
    title: "Formato",
    text: "Sessões online, por chamada de vídeo, em um espaço seguro, sigiloso e acolhedor. Sessões presenciais em dias específicos, na cidade de Campinas/SP.",
  },
  { icon: Clock, title: "Duração", text: "Cada encontro tem 50 minutos." },
  {
    icon: Calendar,
    title: "Frequência",
    text: "Atendimentos semanais, com possibilidade de ajustes conforme o processo.",
  },
]

const indicatedFor = [
  "Sentem que perderam o contato com sua voz e com sua essência",
  "Carregam dores emocionais antigas e querem compreendê-las",
  "Vivem sobrecarregadas, silenciadas ou em constante autoexigência",
  "Desejam se escutar com honestidade e construir uma relação mais cuidadosa consigo mesmas",
]

export default function PsicoterapiaPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 relative">
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
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 sm:mb-8 transition-colors bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm sm:text-base"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar
                </Link>
              </div>

              <span className="text-primary uppercase tracking-widest text-xs sm:text-sm font-medium">
                Psicoterapia Individual
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
                Um espaço de escuta, acolhimento e presença
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Um lugar onde sua história pode ser contada sem julgamentos, no seu tempo, respeitando o seu sentir.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-6 sm:py-8 md:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={CRISTIANE_IMAGE || "/placeholder.svg"}
                alt="Cristiane Melo - Psicóloga em consultório acolhedor e confortável"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
              />
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
              {/* Left - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="prose prose-lg max-w-none">
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4 sm:mb-6">
                    É um processo profundo e delicado que permite olhar para as feridas emocionais com mais clareza,
                    compreender repetições, reconhecer o que pesa e, aos poucos, abrir espaço para algo novo.
                  </p>

                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4 sm:mb-6">
                    Atendo mulheres que, em algum momento, sentiram-se perdidas de si mesmas, por silenciamentos,
                    sobrecargas, relações difíceis ou experiências que deixaram marcas profundas.
                  </p>

                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 my-8 sm:my-10">
                    <p className="text-foreground font-medium text-base sm:text-lg leading-relaxed italic">
                      "Minha escuta é afetiva, sensível e ética. Sustento um espaço seguro para que você possa se
                      reencontrar com sua voz, sua verdade e com o que deseja viver com mais inteireza."
                    </p>
                  </div>

                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4 sm:mb-6">
                    Aqui você encontra espaço para sentir, falar e ser ouvida. Eu caminho com você, oferecendo escuta e
                    presença acolhedora.
                  </p>
                </div>

                {/* Indicated For */}
                <div className="mt-8 sm:mt-12">
                  <h2 className="font-serif text-xl sm:text-2xl font-medium text-foreground mb-4 sm:mb-6 flex items-center gap-3">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    Indicado para mulheres que:
                  </h2>
                  <ul className="space-y-3 sm:space-y-4">
                    {indicatedFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 sm:gap-4">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-base sm:text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 sm:mt-10 p-5 sm:p-6 bg-secondary/50 rounded-xl sm:rounded-2xl">
                  <p className="text-foreground text-base sm:text-lg flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    Se você sente que é hora de se escutar, estou aqui.
                  </p>
                </div>
              </motion.div>

              {/* Right - Cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4 sm:space-y-6"
              >
                {/* How it works */}
                <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-border/50">
                  <h2 className="font-serif text-xl sm:text-2xl font-medium text-foreground mb-6 sm:mb-8">
                    Como funciona o atendimento
                  </h2>
                  <div className="space-y-4 sm:space-y-6">
                    {howItWorks.map((item, i) => (
                      <div key={i} className="flex gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground text-base sm:text-lg">{item.title}</h3>
                          <p className="text-muted-foreground text-sm sm:text-base">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Investment */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary/10">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    <h2 className="font-serif text-xl sm:text-2xl font-medium text-foreground">Investimento</h2>
                  </div>
                  <ul className="space-y-3 sm:space-y-4 text-muted-foreground mb-4 sm:mb-6">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-base sm:text-lg">
                        Sessão avulsa: <strong className="text-foreground">R$ 240,00</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-base sm:text-lg">
                        Pacote mensal (4 sessões): <strong className="text-foreground">R$ 720,00</strong>
                        <span className="block text-xs sm:text-sm text-muted-foreground mt-1">
                          *desconto válido apenas para sessões online
                        </span>
                      </span>
                    </li>
                  </ul>
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-primary italic text-xs sm:text-sm leading-relaxed">
                      Reconhecendo a falta de equidade e as desigualdades sociais em que vivemos, reservo parte da minha
                      agenda para atendimentos com valores sociais. Se precisar, me escreva, podemos conversar.
                    </p>
                  </div>
                </div>

                {/* Notes */}
                <div className="bg-secondary/50 p-5 sm:p-6 rounded-xl sm:rounded-2xl space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Atendimento presencial em Campinas/SP em dias específicos.
                    </p>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Não atendo planos de saúde, mas você pode verificar com seu convênio a possibilidade de reembolso.
                  </p>
                </div>

                {/* CTA */}
                <div className="bg-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
                  <p className="text-primary-foreground text-base sm:text-lg mb-2">
                    Agendamentos e dúvidas pelo WhatsApp
                  </p>
                  <p className="text-primary-foreground/80 text-xs sm:text-sm mb-4 sm:mb-6">
                    Se você sente o chamado, estou aqui. Vamos conversar.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary rounded-full w-full"
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Agendar via WhatsApp
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
