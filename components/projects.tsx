import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Terminal } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Área de Transformación Digital",
      year: "2025",
      description: "Formalicé y posicioné el área como eje estratégico validado por la Alta Dirección",
      tags: ["Estrategia", "Liderazgo"],
      code: "strategy.init()",
    },
    {
      title: "Automatización con RPA",
      year: "2021",
      description: "Implementé la digitalización de facturación y aprobaciones, optimizando eficiencia",
      tags: ["RPA", "Automatización"],
      code: "automate.process()",
    },
    {
      title: "E-commerce Corporativo",
      year: "2019",
      description: "Dirigí la expansión de canales digitales de venta",
      tags: ["E-commerce", "Digital"],
      code: "ecommerce.deploy()",
    },
    {
      title: "Facturación Electrónica",
      year: "2018",
      description: "Introduje un sistema que redujo significativamente los tiempos operativos",
      tags: ["Facturación", "Eficiencia"],
      code: "invoice.digitize()",
    },
    {
      title: "Planillas Electrónicas",
      year: "2017",
      description: "Automaticé procesos clave de gestión de personal",
      tags: ["RRHH", "Automatización"],
      code: "hr.automate()",
    },
    {
      title: "Migración a SAP Business One",
      year: "2015",
      description: "Conduje la modernización de procesos financieros y administrativos",
      tags: ["ERP", "SAP"],
      code: "erp.migrate()",
    },
  ]

  return (
    <section id="proyectos" className="py-20 bg-muted/30 relative">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0, 255, 255, 0.3) 2px, transparent 2px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block font-mono text-sm text-muted-foreground mb-2">
              <span className="text-secondary">{">"}</span> projects.showcase()
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Proyectos Destacados
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-2xl hover:shadow-secondary/20 transition-all group bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/50 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors border border-secondary/30">
                      <Rocket className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-lg leading-tight">{project.title}</h3>
                        <Badge
                          variant="outline"
                          className="shrink-0 bg-secondary/10 text-secondary border-secondary/30"
                        >
                          {project.year}
                        </Badge>
                      </div>

                      <div className="mb-3 font-mono text-xs bg-background/50 border border-primary/20 rounded px-2 py-1 inline-flex items-center gap-1">
                        <Terminal className="h-3 w-3 text-primary" />
                        <span className="text-accent">{project.code}</span>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
