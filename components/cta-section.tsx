"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Instagram, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"

const WHATSAPP_NUMBER = "5519981382425"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar uma sessão.`

export function CTASection() {
  return (
    <section
      id="contato"
      className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden border-t border-primary"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 border border-primary-foreground/10" />
        <div className="absolute bottom-10 left-10 w-60 h-1 bg-primary-foreground/10" />
        <div className="absolute top-1/2 left-20 w-1 h-32 bg-primary-foreground/10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-foreground/60 uppercase tracking-[0.3em] text-xs mb-4 font-mono">
              Sua jornada começa aqui
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tight">
              Pronta para dar o primeiro passo?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed max-w-xl">
              Se você sente que é hora de se escutar, estou aqui. Agende sua primeira sessão e comece sua jornada de
              retorno para você mesma.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-sm uppercase tracking-widest"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Agendar via WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex gap-2">
              <a
                href="https://instagram.com/psicrismelo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 hover:border-primary-foreground/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:crismelopsico@gmail.com"
                className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 hover:border-primary-foreground/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 hover:border-primary-foreground/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            <p className="mt-8 text-primary-foreground/40 text-xs uppercase tracking-widest font-mono">
              WhatsApp: (19) 98138-2425
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative aspect-[3/4] max-w-sm ml-auto border-2 border-primary-foreground/20 overflow-hidden">
              <Image
                src="/images/cristiane-therapy-office.jpg"
                alt="Cristiane Melo - Psicóloga em consultório acolhedor"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
