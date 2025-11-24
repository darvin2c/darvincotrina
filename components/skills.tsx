"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Shield, Target, TrendingUp, Users, Zap } from "lucide-react"

export function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const skills = [
    {
      icon: Lightbulb,
      category: "Liderazgo Digital",
      items: ["Transformación digital", "Gestión del cambio organizacional", "Innovación tecnológica"],
    },
    {
      icon: Shield,
      category: "Gobernanza",
      items: ["Gobernanza tecnológica", "Ciberseguridad", "Cumplimiento normativo"],
    },
    {
      icon: Target,
      category: "Gestión de Proyectos",
      items: ["Dirección de proyectos estratégicos", "Metodologías ágiles", "Supervisión técnica"],
    },
    {
      icon: TrendingUp,
      category: "Analítica",
      items: ["Analítica avanzada", "Entornos data-driven", "Inteligencia de negocios"],
    },
    {
      icon: Zap,
      category: "Innovación",
      items: ["Iniciativas digitales", "Eficiencia operativa", "Optimización de procesos"],
    },
    {
      icon: Users,
      category: "Comunicación",
      items: ["Comunicación ejecutiva", "Influencia en Alta Dirección", "Alineación estratégica"],
    },
  ]

  const technicalSkills = [
    "Inteligencia Artificial",
    "Machine Learning",
    "Deep Learning",
    "RPA",
    "ERP (SAP Business One)",
    "CRM (Zoho)",
    "E-commerce",
    "Cloud Computing",
    "Data Analytics",
    "Python",
    "SQL",
    "Git",
  ]

  return (
    <section id="habilidades" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header minimalista */}
          <div className="mb-16">
            <div className="inline-block font-mono text-sm text-muted-foreground mb-2">
              <span className="text-primary">{">"}</span> skills.display()
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
              Habilidades
            </h2>
            <div className="w-20 h-1 bg-primary mb-4" />
            <p className="text-muted-foreground">
              Competencias estratégicas en transformación digital
            </p>
          </div>

          {/* Grid limpio */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              const isHovered = hoveredIndex === index

              return (
                <Card
                  key={index}
                  className={`group relative bg-card/50 backdrop-blur-sm border transition-all duration-300 ${isHovered
                    ? 'border-primary shadow-lg shadow-primary/20'
                    : 'border-border hover:border-primary/50'
                    }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative p-6">
                    {/* Icono minimalista */}
                    <div className={`inline-flex p-3 mb-4 rounded-lg border transition-all duration-300 ${isHovered
                      ? 'border-primary bg-primary/10'
                      : 'border-border bg-background'
                      }`}>
                      <Icon className={`w-6 h-6 transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-foreground'
                        }`} />
                    </div>

                    {/* Título */}
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      {skill.category}
                    </h3>

                    {/* Items con bullets minimalistas */}
                    <ul className="space-y-2">
                      {skill.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground group/item"
                        >
                          <span className={`mt-1.5 w-1 h-1 rounded-full bg-muted-foreground transition-all duration-300 ${isHovered ? 'bg-primary scale-150' : ''
                            }`} />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Línea decorativa inferior */}
                    <div className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-500 ${isHovered ? 'w-full' : 'w-0'
                      }`} />
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Stack Tecnológico minimalista */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-primary" />
              <h3 className="text-2xl font-semibold text-foreground">
                Stack Tecnológico
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 bg-background/50 border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
