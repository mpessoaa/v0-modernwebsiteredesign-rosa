"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, X, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClient } from "@/lib/supabase/client"

interface EbookData {
  id: string
  title: string
  subtitle: string
  description: string
  fullDescription: string[]
  closingNote: string | null
  coverImage: string
}

export function EbookModalV2({ ebook, isOpen, onClose }: { ebook: EbookData; isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const supabase = createClient()

      const { error: insertError } = await supabase.from("ebook_leads").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        ebook_title: ebook.title,
      })

      if (insertError) throw insertError

      setIsSuccess(true)
    } catch (err) {
      console.error(err)
      setError("Ocorreu um erro. Por favor, tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setFormData({ name: "", email: "", phone: "" })
    setIsSuccess(false)
    setError(null)
    setIsDownloading(false)
    onClose()
  }

  const handleDownload = async () => {
    setIsDownloading(true)
    setError(null)

    try {
      const pdfPath =
        ebook.id === "violencia-psicologica"
          ? "/ebooks/desvendando-violencia-psicologica.pdf"
          : "/ebooks/quando-amor-adoece.pdf"

      const fileName =
        ebook.id === "violencia-psicologica" ? "Desvendando-Violencia-Psicologica.pdf" : "Quando-Amor-Adoece.pdf"

      const link = document.createElement("a")
      link.href = pdfPath
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err) {
      console.error(err)
      setError("Erro ao baixar o e-book. Por favor, tente novamente.")
    } finally {
      setIsDownloading(false)
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-start sm:items-center justify-center p-4 overflow-y-auto"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-card border border-border max-w-lg w-full my-8 sm:my-0 max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-secondary p-4 sm:p-6 flex items-start sm:items-center justify-between border-b border-border flex-shrink-0">
            <div className="flex-1 pr-4">
              <h3 className="text-base sm:text-lg font-bold text-foreground uppercase tracking-tight">{ebook.title}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{ebook.subtitle}</p>
            </div>
            <button
              onClick={handleClose}
              className="w-10 h-10 border border-border flex items-center justify-center hover:bg-background hover:border-primary transition-colors flex-shrink-0"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 sm:p-6 overflow-y-auto flex-1">
            {isSuccess ? (
              <div className="text-center py-4 sm:py-8">
                <div className="w-16 h-16 border border-primary flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 uppercase">Cadastro Realizado!</h4>
                <p className="text-sm sm:text-base text-muted-foreground mb-6">
                  Obrigada por se cadastrar! Clique no botão abaixo para baixar seu e-book agora mesmo.
                </p>
                {error && (
                  <div className="bg-primary/10 border border-primary p-3 mb-4">
                    <p className="text-sm text-primary">{error}</p>
                  </div>
                )}
                <div className="space-y-3">
                  <Button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="w-full bg-primary hover:bg-primary/80 text-primary-foreground uppercase tracking-widest text-xs py-5"
                  >
                    {isDownloading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Gerando Download...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Baixar E-book Agora
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={handleClose}
                    variant="outline"
                    className="w-full uppercase tracking-widest text-xs py-5 bg-transparent"
                  >
                    Fechar
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-sm sm:text-base text-muted-foreground mb-6">
                  Preencha seus dados para receber o e-book gratuitamente:
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="uppercase text-xs tracking-widest">
                      Nome completo *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-border bg-background"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="uppercase text-xs tracking-widest">
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-border bg-background"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="uppercase text-xs tracking-widest">
                      WhatsApp *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-border bg-background"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  {error && <p className="text-sm text-primary bg-primary/10 p-3 border border-primary">{error}</p>}

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/80 text-primary-foreground uppercase tracking-widest text-xs py-5"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Baixar E-book Grátis
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
