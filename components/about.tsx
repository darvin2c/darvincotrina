import { Card } from "@/components/ui/card"
import { Brain, Database, Shield, Zap } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "Inteligencia Artificial",
      description: "Implementación de soluciones basadas en IA para optimizar procesos",
      code: "ai.optimize()",
    },
    {
      icon: Database,
      title: "Ecosistemas Digitales",
      description: "Integración de plataformas empresariales y sistemas complejos",
      code: "integrate()",
    },
    {
      icon: Shield,
      title: "Gobierno Digital",
      description: "Estrategias de gobernanza tecnológica y ciberseguridad",
      code: "secure.gov()",
    },
    {
      icon: Zap,
      title: "Transformación Ágil",
      description: "Organizaciones data-driven, ágiles y seguras",
      code: "transform()",
    },
  ]

  return (
    <section id="sobre-mi" className="py-20 relative">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0, 255, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block font-mono text-sm text-muted-foreground mb-2">
              <span className="text-secondary">{">"}</span> about.query()
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-balance bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Sobre Mí
            </h2>
          </div>

          <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed max-w-3xl mx-auto text-balance">
            Ejecutivo con más de 15 años de experiencia liderando la modernización tecnológica en entornos corporativos.
            Reconocido por diseñar e implementar estrategias que convierten la tecnología en ventaja competitiva,
            impulsando organizaciones data-driven, ágiles y seguras.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all hover:border-primary/50 !bg-black/5 backdrop-blur-sm group relative overflow-hidden border-white/10"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors border border-primary/30">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <div className="font-mono text-xs text-secondary mb-2">{item.code}</div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
