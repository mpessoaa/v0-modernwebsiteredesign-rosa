"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const WHATSAPP_NUMBER = "5519981382425"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar uma sessão.`

const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "E-books", href: "/#ebooks" },
  { label: "Blog", href: "/blog" },
  { label: "Depoimentos", href: "/depoimentos" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHomePage = pathname === "/"

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push("/")
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background border-border py-4"
          : "bg-gradient-to-b from-background/95 via-background/70 to-transparent border-transparent py-6 backdrop-blur-[2px]",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          onClick={handleLogoClick}
          className="text-xl font-bold uppercase tracking-wider text-foreground hover:text-muted-foreground transition-colors cursor-pointer"
        >
          Cristiane Melo
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isHashLink = item.href.includes("#") && item.href !== "/"

            if (isHashLink && !isHomePage) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )
            }

            if (isHashLink && isHomePage) {
              return (
                <a
                  key={item.href}
                  href={item.href.replace("/", "")}
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            className="bg-primary hover:bg-primary/80 text-primary-foreground uppercase tracking-wider text-xs px-6 py-5 rounded-none"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Agendar
            </a>
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground hover:text-muted-foreground transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background transition-all duration-300 overflow-hidden border-b border-border",
          isMobileMenuOpen ? "max-h-[500px]" : "max-h-0 border-transparent",
        )}
      >
        <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => {
            const isHashLink = item.href.includes("#") && item.href !== "/"

            if (isHashLink && isHomePage) {
              return (
                <a
                  key={item.href}
                  href={item.href.replace("/", "")}
                  className="text-foreground py-2 hover:text-primary transition-colors uppercase tracking-widest text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground py-2 hover:text-primary transition-colors uppercase tracking-widest text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
          <Button
            asChild
            className="bg-primary hover:bg-primary/80 text-primary-foreground uppercase tracking-wider text-xs mt-2 rounded-none"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Agendar Sessão
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
