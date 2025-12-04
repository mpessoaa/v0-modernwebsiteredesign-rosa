"use client"

import { motion } from "framer-motion"
import { ArrowDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { FlyingButterflies } from "@/components/flying-butterflies"

const GL = dynamic(() => import("./gl").then((mod) => ({ default: mod.GL })), { ssr: false })

const ParticleWaveBackground = dynamic(
  () => import("./particle-wave-background").then((mod) => mod.ParticleWaveBackground),
  { ssr: false },
)

const WHATSAPP_NUMBER = "5519981382425"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar uma sessão.`

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col items-center justify-center relative bg-white pt-20">
      <GL />
      <FlyingButterflies />

      {/* Content */}
      <div className="w-full max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 border border-primary/40 px-4 py-2 mb-8 bg-white/80 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-primary rounded-full" />
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
            Psicoterapia Online para Mulheres
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.9] tracking-tight mb-8"
        >
          Mulher, é hora de <span className="block mt-2 italic font-light text-muted-foreground">voltar pra você</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Psicoterapia para mulheres que desejam romper ciclos, curar feridas emocionais e ocupar, com coragem, o seu
          lugar no mundo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-6 text-sm uppercase tracking-widest rounded-none"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-3" />
              Agendar via WhatsApp
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-6 text-sm uppercase tracking-widest border-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-muted-foreground rounded-none"
          >
            <a href="#sobre">Conheça meu trabalho</a>
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none z-[5]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <ArrowDown className="w-6 h-6 text-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
