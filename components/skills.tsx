import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Shield, Target, TrendingUp, Users, Zap } from "lucide-react"

export function Skills() {
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
    <section id="habilidades" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Habilidades</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3">{skill.category}</h3>
                      <ul className="space-y-1.5">
                        {skill.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-accent mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <Card className="p-6">
            <h3 className="font-semibold text-xl mb-4">Competencias Técnicas</h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((tech, index) => (
                <Badge key={index} variant="outline" className="text-sm">
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
