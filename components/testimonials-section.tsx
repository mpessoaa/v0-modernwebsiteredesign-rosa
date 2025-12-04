"use client"

import { motion } from "framer-motion"
import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4 font-mono">Depoimentos</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground uppercase tracking-tight">O que dizem</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-8 relative"
            >
              <span className="absolute top-4 right-6 text-8xl font-bold text-border leading-none">"</span>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? "text-primary fill-primary" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-primary/30 bg-primary/5 flex items-center justify-center rounded-full p-2">
                  <Image
                    src="/images/psi-symbol.png"
                    alt="Símbolo Psi"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-foreground uppercase tracking-wider text-sm">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Link
            href="/depoimentos"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold uppercase tracking-widest text-xs transition-colors"
          >
            Ver todos os depoimentos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
