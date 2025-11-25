"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "cc.darvin@gmail.com",
      href: "mailto:cc.darvin@gmail.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+51 948 269 619",
      href: "tel:+51948269619",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Lima, Perú",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/darvin-cotrina",
      href: "https://www.linkedin.com/in/darvin-cotrina",
    },
  ]

  return (
    <section id="contacto" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-block font-mono text-sm text-muted-foreground mb-2">
              <span className="text-primary">{">"}</span> contact.connect()
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Contacto
            </h2>
          </div>

          <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed max-w-md mx-auto">
            Interesado en colaborar o discutir oportunidades de transformación digital. No dudes en contactarme.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              const content = (
                <Card className="p-6 hover:shadow-lg transition-all h-full !bg-black/60 backdrop-blur-sm border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                </Card>
              )

              if (info.href) {
                return (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                )
              }

              return <div key={index}>{content}</div>
            })}
          </div>

          <div className="text-center">
            <Button size="lg" className="shadow-lg" asChild>
              <a href="mailto:cc.darvin@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Enviar Email
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Darvin Cotrina Cervera. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </section>
  )
}
