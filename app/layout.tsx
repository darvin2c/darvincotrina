import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Darvin Cotrina - Experto en Transformación Digital",
  description:
    "Ejecutivo en Transformación Digital con más de 15 años de experiencia liderando la modernización tecnológica en entornos corporativos. Especializado en IA, ecosistemas digitales y gobierno digital.",
  generator: "v0.app",
  keywords: ["Transformación Digital", "Inteligencia Artificial", "Liderazgo Tecnológico", "IA", "Digitalización"],
  authors: [{ name: "Darvin Cotrina Cervera" }],
  openGraph: {
    title: "Darvin Cotrina - Experto en Transformación Digital",
    description:
      "Líder en transformación digital con experiencia en IA, integración de ecosistemas digitales y gobierno digital",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
