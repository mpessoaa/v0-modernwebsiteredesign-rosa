"use client"

import { Heart, Mail, Phone, Instagram } from "lucide-react"

const EMAIL = "crismelopsico@gmail.com"
const WHATSAPP_NUMBER = "5519981382425"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão.`
const INSTAGRAM_URL = "https://www.instagram.com/psicrismelo?igsh=aGNwam56c2g0a3F4"

const footerLinks = [
  {
    title: "Serviços",
    links: [
      { label: "Psicoterapia Individual", href: "/servicos/psicoterapia" },
      { label: "Vivências em Grupo", href: "/servicos/vivencia-em-grupo" },
      { label: "E-books e Guias", href: "/ebooks" },
    ],
  },
  {
    title: "Conteúdo",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Depoimentos", href: "/depoimentos" },
      { label: "Instagram", href: INSTAGRAM_URL },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "WhatsApp", href: WHATSAPP_URL },
      { label: "(19) 98138-2425", href: `tel:+${WHATSAPP_NUMBER}` },
      { label: EMAIL, href: `mailto:${EMAIL}` },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-foreground">Cristiane Melo</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Psicóloga humanista e feminista dedicada a ajudar mulheres a romperem ciclos emocionais, se fortalecerem e
              ocuparem seu lugar no mundo.
            </p>
            <p className="text-muted-foreground text-xs uppercase tracking-widest font-mono">CRP 06/134855</p>
            <div className="flex gap-2 mt-4">
              <a
                href={`mailto:${EMAIL}`}
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = `mailto:${EMAIL}`
                }}
                title={`Enviar email para ${EMAIL}`}
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"
                aria-label={`Enviar email para ${EMAIL}`}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir WhatsApp"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"
                aria-label="Contato via WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Ver perfil no Instagram"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"
                aria-label="Instagram @psicrismelo"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {footerLinks.map((group, index) => (
            <div key={index}>
              <h4 className="font-bold uppercase tracking-wider text-sm mb-4 text-foreground">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs uppercase tracking-widest font-mono">
            © {new Date().getFullYear()} Cristiane Melo
          </p>
          <p className="text-muted-foreground text-xs flex items-center gap-2 uppercase tracking-widest font-mono">
            Feito com <Heart className="w-3 h-3 text-primary fill-primary" /> para mulheres que se curam
          </p>
          <p className="text-muted-foreground text-xs flex items-center gap-2 uppercase tracking-widest font-mono">
            Desenvolvido por HubNeoSoma
          </p>
        </div>
      </div>
    </footer>
  )
}
