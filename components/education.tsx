import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

export function Education() {
  const education = [
    {
      institution: "MIT Professional Education",
      credential: "Certificado Profesional en Transformación Digital",
      period: "2024–2025",
      featured: true,
    },
    {
      institution: "deeplearning.ai",
      credential: "Especialización en Inteligencia Artificial",
      period: "2023",
      featured: true,
    },
    {
      institution: "MITx on edX",
      credential: "MicroMasters en Statistics and Data Science",
      period: "2020–2021",
      featured: true,
    },
    {
      institution: "deeplearning.ai",
      credential: "Deep Learning Specialization",
      period: "2019–2020",
      featured: false,
    },
    {
      institution: "Universidad de Lima",
      credential: "Ingeniería de Sistemas",
      period: "2004–2009",
      featured: false,
    },
  ]

  return (
    <section id="educacion" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block font-mono text-sm text-muted-foreground mb-2">
              <span className="text-secondary">{">"}</span> education.load()
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Educación & Certificaciones
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all relative !bg-black/30 backdrop-blur-sm border-white/10">
                {edu.featured && (
                  <div className="absolute top-4 right-4">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{edu.credential}</h3>
                    <p className="text-muted-foreground font-medium mb-2">{edu.institution}</p>
                    <Badge variant="outline">{edu.period}</Badge>
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
