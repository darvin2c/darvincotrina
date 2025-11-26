"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Terminal } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre Mí" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#educacion", label: "Educación" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#contacto", label: "Contacto" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const [logoText, setLogoText] = useState({ first: "D", last: "C" })
  const [isLogoHovered, setIsLogoHovered] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    const targetFirst = "Darvin"
    const targetLast = "Cotrina"

    if (isLogoHovered) {
      interval = setInterval(() => {
        setLogoText((prev) => {
          const nextFirst = targetFirst.slice(0, Math.max(1, prev.first.length + 1))
          const nextLast = targetLast.slice(0, Math.max(1, prev.last.length + 1))

          if (nextFirst === targetFirst && nextLast === targetLast) {
            clearInterval(interval)
          }
          return { first: nextFirst, last: nextLast }
        })
      }, 50)
    } else {
      interval = setInterval(() => {
        setLogoText((prev) => {
          const nextFirst = prev.first.slice(0, Math.max(1, prev.first.length - 1))
          const nextLast = prev.last.slice(0, Math.max(1, prev.last.length - 1))

          if (nextFirst === "D" && nextLast === "C") {
            clearInterval(interval)
          }
          return { first: nextFirst, last: nextLast }
        })
      }, 30)
    }

    return () => clearInterval(interval)
  }, [isLogoHovered])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-primary/20" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("#inicio")}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            className="flex items-center gap-2 text-xl font-bold text-primary font-mono transition-colors group"
          >
            <Terminal className="h-5 w-5 group-hover:animate-pulse" />
            <span className="relative">
              {`<${logoText.first}${logoText.first.length > 1 || logoText.last.length > 1 ? ' ' : ''}${logoText.last}/>`}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group font-mono"
              >
                <span className="text-secondary">//</span> {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden border border-primary/30 hover:border-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 bg-card/50 backdrop-blur-xl rounded-lg p-4 border border-primary/20">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-md transition-colors font-mono border border-transparent hover:border-primary/30"
              >
                <span className="text-secondary">//</span> {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
