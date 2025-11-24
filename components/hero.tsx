"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, MapPin, Phone, Terminal } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "const digitalTransformation = new Leader();"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])



  const scrollToContact = () => {
    const element = document.querySelector("#contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>



      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg p-4 shadow-2xl animate-pulse-glow">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground font-mono">~/profile/darvin-cotrina</span>
              </div>
              <div className="font-mono text-left text-sm">
                <span className="text-secondary">const</span> <span className="text-primary">profile</span>{" "}
                <span className="text-muted-foreground">=</span> <span className="text-accent">{"{"}</span>
                <br />
                <span className="ml-4 text-muted-foreground">name:</span>{" "}
                <span className="text-accent">"Darvin Cotrina"</span>,
                <br />
                <span className="ml-4 text-muted-foreground">role:</span>{" "}
                <span className="text-accent">"Digital Transformation"</span>,
                <br />
                <span className="ml-4 text-muted-foreground">experience:</span>{" "}
                <span className="text-secondary">15+</span>
                <br />
                <span className="text-accent">{"}"}</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance relative">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-float">
              Darvin Cotrina Cervera
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-2xl -z-10" />
          </h1>

          <div className="mb-6 font-mono text-primary text-xl md:text-2xl">
            <span className="text-muted-foreground">{">"}</span> {text}
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
            Más de 15 años de experiencia liderando la modernización tecnológica en entornos corporativos. Especializado
            en inteligencia artificial, integración de ecosistemas digitales y gobierno digital.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-3 py-2 rounded-full border border-primary/20">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-foreground">Lima, Perú</span>
            </div>
            <a
              href="mailto:cc.darvin@gmail.com"
              className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-3 py-2 rounded-full border border-primary/20 hover:border-primary transition-colors"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-foreground">cc.darvin@gmail.com</span>
            </a>
            <a
              href="tel:+51948269619"
              className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-3 py-2 rounded-full border border-primary/20 hover:border-primary transition-colors"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-foreground">+51 948 269 619</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="shadow-lg bg-primary hover:bg-primary/90 relative group overflow-hidden"
            >
              <span className="relative z-10">Contactar</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="shadow-lg bg-transparent border-primary hover:bg-primary/10"
            >
              <a
                href="https://www.linkedin.com/in/darvin-cotrina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                Ver LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
