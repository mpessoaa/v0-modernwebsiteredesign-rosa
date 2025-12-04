"use client"

import type React from "react"

import { motion } from "framer-motion"
import { User, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: "psicoterapia",
    icon: User,
    title: "Psicoterapia Individual",
    description:
      "Sessões online individuais focadas no seu processo de autoconhecimento e cura emocional. Um espaço seguro para você se reconectar consigo mesma.",
    features: ["Sessões de 50 minutos", "Online ou Presencial", "Horários flexíveis"],
    href: "/servicos/psicoterapia",
    image: "/images/cristiane-therapy-office.jpg",
  },
  {
    id: "vivencia",
    icon: Users,
    title: "Vivência em Grupo",
    description:
      "Encontros em grupo para mulheres que desejam compartilhar experiências e crescer juntas. O poder da coletividade na cura.",
    features: ["Grupos reduzidos", "Temas específicos", "Conexão entre mulheres"],
    href: "/servicos/vivencia-em-grupo",
    image: "/images/111.jpg",
  },
]

export function ServicesSection() {
  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <section id="servicos" className="py-24 md:py-32 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4 font-mono">Como posso te ajudar</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground uppercase tracking-tight">Serviços</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-8 md:p-10 group hover:bg-secondary transition-colors"
            >
              {service.image ? (
                <div className="relative aspect-[16/10] mb-6 overflow-hidden border border-border">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 border border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                  <service.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1 h-1 bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="ghost"
                className="text-primary hover:text-primary hover:bg-transparent p-0 uppercase tracking-widest text-xs group/btn"
                asChild
              >
                <Link href={service.href} onClick={(e) => handleServiceClick(e, service.href)}>
                  Saiba mais
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
