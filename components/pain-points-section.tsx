"use client"

import { motion } from "framer-motion"

const painPoints = [
  {
    number: "01",
    title: "Você está cansada de repetir os mesmos ciclos?",
    description:
      "De se perder de você mesma, de se sentir vazia, de viver no silêncio ou na culpa. De carregar dores de relações que machucaram.",
  },
  {
    number: "02",
    title: "Há uma voz dentro de você",
    description:
      "Sussurrando que a vida pode ser diferente. Que você merece se libertar de padrões que não te pertencem mais.",
  },
  {
    number: "03",
    title: "Aqui você é vista",
    description:
      "Aqui você pode começar a se libertar. Para mulheres que desejam sair do automático e construir uma existência com mais liberdade.",
  },
]

export function PainPointsSection() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4 font-mono">Você não está sozinha</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground uppercase tracking-tight">Reconheça-se</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 border border-border">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-border last:border-r-0 last:border-b-0 hover:bg-card transition-colors"
            >
              <span className="text-6xl font-bold text-primary/20 font-mono">{point.number}</span>
              <h3 className="text-xl font-bold text-foreground mt-4 mb-4 uppercase tracking-tight">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 border-l-4 border-primary pl-8"
        >
          <p className="text-2xl md:text-3xl text-foreground max-w-3xl leading-relaxed">
            "Meu trabalho é te ajudar a se ver. E a partir desse olhar, escolher."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
