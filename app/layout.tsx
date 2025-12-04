import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Cristiane Melo | Psicóloga - Psicoterapia Online para Mulheres",
  description:
    "Psicoterapia online para mulheres que querem romper ciclos emocionais e se reencontrar. Agende sua sessão com Cristiane Melo, psicóloga humanista e feminista. CRP 06/134855",
  generator: "v0.app",
  keywords: ["psicóloga", "psicoterapia", "mulheres", "terapia online", "Campinas", "CRP 06/134855"],
  authors: [{ name: "Cristiane Melo" }],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Cristiane Melo | Psicóloga",
    description: "Psicoterapia online para mulheres que querem romper ciclos emocionais e se reencontrar.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#f5eff9",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  )
}
