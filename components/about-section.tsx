"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "5519981382425"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar uma sessão.`

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative border-2 border-border overflow-hidden">
              <Image
                src="/images/cristiane-melo-profile.jpg"
                alt="Cristiane Melo - Psicóloga especializada em psicoterapia para mulheres"
                fill
                className="object-cover object-top transition-all duration-500"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4 font-mono">Quem sou eu</p>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 uppercase tracking-tight">
              Cristiane Melo
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Por muito tempo, estar em silêncio parecia mais seguro do que dizer "não". Colocar o outro em primeiro
                lugar parecia amor. Aceitar o mínimo parecia maturidade.
              </p>
              <p>
                Mas chega um momento em que o corpo começa a sinalizar. O coração pesa. A presença se esvazia. E a
                sensação de estar desconectada de si mesma grita mais alto.
              </p>
              <p>
                Foi nesse ponto de virada que começou um caminho de retorno para mim. Retorno à escuta interna, aos
                limites esquecidos, ao valor que nunca deveria ter sido perdido.
              </p>
              <p>
                Hoje, como <strong className="text-foreground">psicóloga (CRP 06/134855)</strong>, atuo com mulheres que
                estão nesse mesmo ponto. Que já entenderam que precisam de mudança, mas ainda se sentem presas a velhos
                ciclos.
              </p>
              <p className="font-medium text-foreground border-l-4 border-primary pl-6 py-2">
                Meu trabalho é facilitar esse processo. Com escuta ética, sensível e comprometida.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              <div className="border-2 border-border px-6 py-3">
                <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground">CRP 06/134855</span>
              </div>
              <div className="border-2 border-border px-6 py-3">
                <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground">Humanista</span>
              </div>
              <div className="border-2 border-border px-6 py-3">
                <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground">Feminista</span>
              </div>
            </div>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/80 text-primary-foreground uppercase tracking-widest text-xs px-8 py-6"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Agendar Sessão
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
