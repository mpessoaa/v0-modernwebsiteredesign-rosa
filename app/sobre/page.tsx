import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { MessageCircle, Heart, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "5519981382425"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar uma sessão.`

export const metadata = {
  title: "Sobre | Cristiane Melo - Psicóloga",
  description:
    "Conheça Cristiane Melo, psicóloga humanista e feminista especializada em violências contra a mulher e traumas emocionais.",
}

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-24 md:py-32 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4 font-mono">Sobre mim</p>
            <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-12 uppercase tracking-tight">
              Cristiane Melo
            </h1>

            <div className="grid lg:grid-cols-5 gap-12 items-start mb-20">
              <div className="lg:col-span-2">
                <div className="aspect-[3/4] relative border border-border overflow-hidden sticky top-24">
                  <Image
                    src="/images/cristiane-melo-profile.jpg"
                    alt="Cristiane Melo - Psicóloga"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-3 space-y-8">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-xl text-foreground font-medium">
                    Psicóloga, psicoterapeuta humanista e feminista. Especializada em violências contra a mulher e
                    traumas emocionais.
                  </p>

                  <p>
                    Por muito tempo, estar em silêncio parecia mais seguro do que dizer "não". Colocar o outro em
                    primeiro lugar parecia amor. Aceitar o mínimo parecia maturidade.
                  </p>

                  <p>
                    Mas chega um momento em que o corpo começa a sinalizar. O coração pesa. A presença se esvazia. E a
                    sensação de estar desconectada de si mesma grita mais alto.
                  </p>

                  <p>
                    Foi nesse ponto de virada que começou um caminho de retorno para mim. Retorno à escuta interna, aos
                    limites esquecidos, ao valor que nunca deveria ter sido perdido.
                  </p>

                  <p className="text-foreground font-medium border-l-4 border-primary pl-6 py-2">
                    Hoje, como psicóloga (CRP 06/134855), atuo com mulheres que estão nesse mesmo ponto. Que já
                    entenderam que precisam de mudança, mas ainda se sentem presas a velhos ciclos.
                  </p>

                  <p>
                    Meu trabalho é facilitar esse processo de transformação. Com escuta ética, sensível e comprometida,
                    acompanho mulheres em sua jornada de autoconhecimento, cura e empoderamento.
                  </p>

                  <p>
                    Acredito que cada mulher traz consigo a força necessária para sua própria libertação. Meu papel é
                    criar um espaço seguro onde essa força possa emergir, se fortalecer e se manifestar plenamente.
                  </p>
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="text-sm uppercase tracking-widest font-mono text-muted-foreground mb-6">
                    Formação e Especializações
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-foreground font-medium">CRP 06/134855</p>
                        <p className="text-sm text-muted-foreground">Conselho Regional de Psicologia</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-foreground font-medium">Especialização em Violências contra a Mulher</p>
                        <p className="text-sm text-muted-foreground">
                          Foco em traumas emocionais e relacionamentos abusivos
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-foreground font-medium">Abordagem Humanista</p>
                        <p className="text-sm text-muted-foreground">
                          Centrada na pessoa e em seu potencial de crescimento
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-foreground font-medium">Perspectiva Feminista</p>
                        <p className="text-sm text-muted-foreground">
                          Comprometida com a liberdade e autonomia das mulheres
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 pt-8">
                  <div className="border border-border p-6">
                    <Heart className="w-8 h-8 text-primary mb-4" />
                    <h4 className="text-foreground font-bold mb-2 uppercase text-sm tracking-tight">Humanista</h4>
                    <p className="text-xs text-muted-foreground">Abordagem centrada no ser humano e seu potencial</p>
                  </div>
                  <div className="border border-border p-6">
                    <Users className="w-8 h-8 text-primary mb-4" />
                    <h4 className="text-foreground font-bold mb-2 uppercase text-sm tracking-tight">Feminista</h4>
                    <p className="text-xs text-muted-foreground">Comprometida com a liberdade das mulheres</p>
                  </div>
                  <div className="border border-border p-6">
                    <Sparkles className="w-8 h-8 text-primary mb-4" />
                    <h4 className="text-foreground font-bold mb-2 uppercase text-sm tracking-tight">Mariposa</h4>
                    <p className="text-xs text-muted-foreground">Símbolo de transformação e renascimento</p>
                  </div>
                </div>

                <div className="pt-8">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
