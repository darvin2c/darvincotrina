import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, Code2 } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "TDP CORP S.A.",
      location: "Lima, Perú",
      positions: [
        {
          title: "Gerente de Transformación Digital",
          period: "Oct 2025 – Presente",
          responsibilities: [
            "Dirijo la estrategia y ejecución de la Transformación Digital de la organización",
            "Lidero proyectos de innovación basados en IA, automatización y análisis de datos",
            "Coordino la implementación del Plan Estratégico de Transformación Digital",
          ],
        },
        {
          title: "Jefe de Desarrollo e Innovación",
          period: "Ago 2014 – Presente",
          responsibilities: [
            "Creé el área de Transformación Digital, validada por la Alta Dirección",
            "Lideré la integración de ERP, Zoho CRM e inteligencia artificial",
            "Dirigí la implementación de e-commerce corporativo",
            "Introduje la facturación electrónica, reduciendo en más del 60% los tiempos operativos",
            "Conduje la migración a SAP Business One",
          ],
        },
        {
          title: "Analista de Sistemas",
          period: "Mar 2012 – Sep 2014",
          responsibilities: ["Coordiné la migración a G Suite", "Optimicé y administré sistemas de gestión internos"],
        },
        {
          title: "Analista Programador",
          period: "Ago 2011 – Mar 2012",
          responsibilities: ["Colaboré en el diseño y desarrollo de un Punto de Venta y Sistema de Gestión Interno"],
        },
      ],
    },
    {
      company: "PRODUCTOS AVON S.A.",
      location: "Lima, Perú",
      positions: [
        {
          title: "Programador de Software",
          period: "Sep 2008 – Abr 2009",
          responsibilities: ["Diseñé y programé un sistema propio que redujo el cruce de datos de 2 días a 10 minutos"],
        },
      ],
    },
    {
      company: "UNIVERSIDAD DE LIMA",
      location: "Lima, Perú",
      positions: [
        {
          title: "Soporte Técnico",
          period: "Ene 2008 – Sep 2008",
          responsibilities: ["Desarrollé utilitarios en C#, VB y Java para laboratorios académicos"],
        },
      ],
    },
  ]

  return (
    <section id="experiencia" className="py-20 relative">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 255, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block font-mono text-sm text-foreground/70 mb-2">
              <span className="text-secondary">{">"}</span> experience.fetch()
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Experiencia Profesional
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, expIndex) => (
              <Card
                key={expIndex}
                className="p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all !bg-black/20 backdrop-blur-sm border-white/10 hover:border-primary/50 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors border border-primary/30">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      {exp.company}
                      <Code2 className="h-4 w-4 text-primary opacity-50" />
                    </h3>
                    <p className="text-foreground/70 font-mono text-sm">{exp.location}</p>
                  </div>
                </div>

                <div className="space-y-6 ml-16">
                  {exp.positions.map((position, posIndex) => (
                    <div key={posIndex}>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h4 className="font-semibold text-lg">{position.title}</h4>
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1 bg-primary/10 text-primary border border-primary/30"
                        >
                          <Calendar className="h-3 w-3" />
                          {position.period}
                        </Badge>
                      </div>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, respIndex) => (
                          <li
                            key={respIndex}
                            className="text-foreground/90 text-sm leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5 font-mono">{">"}</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
