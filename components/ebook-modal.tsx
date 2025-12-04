"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, X, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClient } from "@/lib/supabase/client"

interface Ebook {
  id: string
  title: string
  subtitle: string
  description: string
  fullDescription: string[]
  closingNote: string | null
  coverImage: string
  downloadUrl: string
}

interface EbookModalProps {
  ebook: Ebook
  isOpen: boolean
  onClose: () => void
}

export function EbookModal({ ebook, isOpen, onClose }: EbookModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)

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

      console.log("[v0] Lead registered successfully, starting download")

      const response = await fetch("/api/ebooks/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          ebookId: ebook.id,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        console.error("[v0] Failed to download:", data.error)
        throw new Error(data.error || "Erro ao baixar o e-book")
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `${ebook.title}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      console.log("[v0] Download completed successfully")
      setIsSuccess(true)
    } catch (err) {
      console.error("[v0] Error in form submission:", err)
      setError(err instanceof Error ? err.message : "Ocorreu um erro. Por favor, tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setFormData({ name: "", email: "", phone: "" })
    setIsSuccess(false)
    setError(null)
    setIsDownloading(false)
    setDownloadUrl(null)
    onClose()
  }

  const handleDownload = () => {
    console.log("[v0] Restarting download")
    handleSubmit(new Event("submit") as any)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-card border-2 border-border max-w-2xl w-full my-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-secondary p-8 flex items-start justify-between border-b-2 border-border">
            <div className="flex-1 pr-4">
              <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight mb-2">{ebook.title}</h3>
              <p className="text-xs text-primary uppercase tracking-widest font-mono">{ebook.subtitle}</p>
            </div>
            <button
              onClick={handleClose}
              className="w-10 h-10 border-2 border-border flex items-center justify-center hover:bg-background hover:border-primary transition-colors flex-shrink-0"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-8 max-h-[60vh] overflow-y-auto">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 border-2 border-primary flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-3 uppercase tracking-tight">
                  Cadastro Realizado!
                </h4>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Obrigada por se cadastrar! Clique no botão abaixo para baixar seu e-book agora mesmo.
                </p>
                {error && (
                  <div className="bg-primary/10 border-2 border-primary p-4 mb-6">
                    <p className="text-sm text-primary">{error}</p>
                  </div>
                )}
                <div className="space-y-3">
                  <Button
                    onClick={handleDownload}
                    disabled={!downloadUrl}
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/80 text-primary-foreground uppercase tracking-widest text-xs py-6"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Baixar E-book Agora
                  </Button>
                  <Button
                    onClick={handleClose}
                    variant="outline"
                    size="lg"
                    className="w-full uppercase tracking-widest text-xs py-6 bg-transparent"
                  >
                    Fechar
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-8 space-y-4 text-muted-foreground leading-relaxed">
                  {ebook.fullDescription.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  {ebook.closingNote && (
                    <p className="text-foreground font-medium border-l-4 border-primary pl-4 py-2 mt-6">
                      {ebook.closingNote}
                    </p>
                  )}
                </div>

                <div className="border-t-2 border-border pt-8">
                  <h4 className="text-sm uppercase tracking-widest font-mono text-muted-foreground mb-6">
                    Preencha seus dados para download gratuito
                  </h4>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="uppercase text-xs tracking-widest font-mono">
                        Nome completo *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="border-2 border-border focus:border-primary h-12"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="uppercase text-xs tracking-widest font-mono">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border-2 border-border focus:border-primary h-12"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="uppercase text-xs tracking-widest font-mono">
                        WhatsApp *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="border-2 border-border focus:border-primary h-12"
                        placeholder="(00) 00000-0000"
                      />
                    </div>

                    {error && (
                      <div className="bg-primary/10 border-2 border-primary p-4">
                        <p className="text-sm text-primary">{error}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isLoading}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/80 text-primary-foreground uppercase tracking-widest text-xs py-6"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5 mr-2" />
                          Baixar E-book Grátis
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
