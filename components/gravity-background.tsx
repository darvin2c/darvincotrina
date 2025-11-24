"use client"

import { useEffect, useRef } from "react"

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    color: string
}

export function GravityBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []
        const mouse = { x: -1000, y: -1000, radius: 250 } // Increased radius for stronger effect

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initParticles()
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }

        const handleMouseLeave = () => {
            mouse.x = -1000
            mouse.y = -1000
        }

        const initParticles = () => {
            particles = []
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 10000) // More particles

            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 2 + 1
                const color = `rgba(0, 255, 255, ${Math.random() * 0.4 + 0.1})`

                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 2, // Random velocity
                    vy: (Math.random() - 0.5) * 2,
                    size,
                    color,
                })
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((particle) => {
                // Calculate distance between particle and mouse
                const dx = mouse.x - particle.x
                const dy = mouse.y - particle.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                // Attraction to mouse
                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance
                    const forceDirectionY = dy / distance
                    const force = (mouse.radius - distance) / mouse.radius

                    // Stronger attraction force
                    const attractionStrength = 0.8
                    particle.vx += forceDirectionX * force * attractionStrength
                    particle.vy += forceDirectionY * force * attractionStrength
                }

                // Limit speed
                const maxSpeed = 5
                const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
                if (speed > maxSpeed) {
                    particle.vx = (particle.vx / speed) * maxSpeed
                    particle.vy = (particle.vy / speed) * maxSpeed
                }

                // Apply velocity
                particle.x += particle.vx
                particle.y += particle.vy

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.vx = -particle.vx
                if (particle.y < 0 || particle.y > canvas.height) particle.vy = -particle.vy

                // Draw particle
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fillStyle = particle.color
                ctx.fill()
            })

            // Draw connecting lines
            connectParticles()

            animationFrameId = requestAnimationFrame(animate)
        }

        const connectParticles = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 120) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(0, 255, 255, ${0.15 - distance / 800})`
                        ctx.lineWidth = 0.5
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }
            }
        }

        window.addEventListener("resize", handleResize)
        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseleave", handleMouseLeave)

        handleResize()
        animate()

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseleave", handleMouseLeave)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-[-1]" />
}
