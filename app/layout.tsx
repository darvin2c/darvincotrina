import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { VectorizedBackground } from "@/components/vectorized-background"
import { GravityBackground } from "@/components/gravity-background"

const _inter = Inter({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://darvincotrina.com"),
  title: {
    default: "Darvin Cotrina - Experto en Transformación Digital",
    template: "%s | Darvin Cotrina",
  },
  description:
    "Ejecutivo en Transformación Digital con más de 15 años de experiencia liderando la modernización tecnológica en entornos corporativos. Especializado en IA, ecosistemas digitales y gobierno digital.",
  keywords: [
    "Transformación Digital",
    "Inteligencia Artificial",
    "Liderazgo Tecnológico",
    "IA",
    "Digitalización",
    "Gobierno Digital",
    "Innovación Corporativa",
  ],
  authors: [{ name: "Darvin Cotrina Cervera", url: "https://darvincotrina.com" }],
  creator: "Darvin Cotrina Cervera",
  publisher: "Darvin Cotrina Cervera",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Darvin Cotrina - Experto en Transformación Digital",
    description:
      "Líder en transformación digital con experiencia en IA, integración de ecosistemas digitales y gobierno digital",
    url: "https://darvincotrina.com",
    siteName: "Darvin Cotrina",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Darvin Cotrina - Transformación Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darvin Cotrina - Experto en Transformación Digital",
    description:
      "Ejecutivo en Transformación Digital especializado en IA y modernización tecnológica.",
    creator: "@darvincotrina", // Placeholder, user can update later
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://darvincotrina.com",
  },
  category: "technology",
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
        <GravityBackground />
        <VectorizedBackground />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
