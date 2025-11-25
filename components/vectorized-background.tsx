"use client"

import { useEffect, useRef, useState } from "react"

interface Point {
    x: number
    y: number
    color: string
    size: number
    baseX: number
    baseY: number
    vx: number
    vy: number
    // Animation state for gravity effect
    currentX?: number
    currentY?: number
    animating?: boolean
    revealed?: boolean
}

export function VectorizedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [points, setPoints] = useState<Point[]>([])
    const [revealProgress, setRevealProgress] = useState(0) // Start at 0 for minimal points
    const animationFrameRef = useRef<number | undefined>(undefined)

    // Extract points from image
    useEffect(() => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const img = new Image()
        img.crossOrigin = "anonymous"
        img.src = "/profile.jpg"

        img.onload = () => {
            // Set canvas size to match image aspect ratio but scaled down for performance
            const maxWidth = 400
            const scale = maxWidth / img.width
            canvas.width = maxWidth
            canvas.height = img.height * scale

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
            const data = imageData.data

            const extractedPoints: Point[] = []
            const gap = 2 // Increased density for better detail

            for (let y = 0; y < canvas.height; y += gap) {
                for (let x = 0; x < canvas.width; x += gap) {
                    const i = (y * canvas.width + x) * 4
                    const r = data[i]
                    const g = data[i + 1]
                    const b = data[i + 2]
                    const a = data[i + 3]

                    // Strong background filtering - ONLY show the person
                    const brightness = (r + g + b) / 3
                    const colorVariance = Math.abs(r - g) + Math.abs(g - b) + Math.abs(r - b)

                    // Stricter background detection: light pixels with low color variation
                    const isBackground = brightness > 180 && colorVariance < 25
                    const isTransparent = a < 120

                    // Additional check: very light areas are likely background
                    const isTooLight = brightness > 210

                    if (!isBackground && !isTransparent && !isTooLight) {
                        // Convert to grayscale maintaining good contrast
                        const gray = Math.round(brightness)
                        const grayAlpha = Math.min((a / 255) * 0.85, 0.9)

                        // Consistent point size for clean appearance
                        const baseSize = 1.5
                        const randomVariation = Math.random() * 0.5

                        extractedPoints.push({
                            x: x,
                            y: y,
                            color: `rgba(${gray}, ${gray}, ${gray}, ${grayAlpha})`,
                            size: baseSize + randomVariation,
                            baseX: x,
                            baseY: y,
                            vx: (Math.random() - 0.5) * 0.08,
                            vy: (Math.random() - 0.5) * 0.08,
                        })
                    }
                }
            }

            setPoints(extractedPoints)
        }

        img.onerror = () => {
            console.error("Failed to load image")
        }
    }, [])

    // Handle scroll to reveal more points
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = window.scrollY
            const progress = Math.min(scrolled / scrollHeight, 1)

            // Map scroll progress: 0% initially, up to 100%
            setRevealProgress(progress)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Animate points
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        updateCanvasSize()
        window.addEventListener("resize", updateCanvasSize)

        let time = 0
        const animate = () => {
            if (!ctx || !canvas) return

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Position on the left side of the screen
            const leftMargin = canvas.width * 0.15 // 15% from left edge
            const centerY = canvas.height / 2
            const scale = Math.min(canvas.width / 800, canvas.height / 600) * 2.0

            time += 0.01

            // Loop through ALL points, but show them with probability based on scroll
            // This ensures the complete image is always visible, just with varying clarity
            for (let i = 0; i < points.length; i++) {
                const point = points[i]

                // Probability-based rendering: start with ~3% visible (very sparse), up to 100%
                // Each point has a chance to be rendered based on scroll progress
                const renderProbability = 0.03 + (revealProgress * 0.97)

                // Better pseudo-random hash to avoid vertical line patterns
                // Use multiple prime numbers and sine for truly random distribution
                const seed = point.baseX * 73856093 + point.baseY * 19349663 + i * 83492791
                const pointHash = Math.abs(Math.sin(seed * 0.0001) * 43758.5453123) % 1

                if (pointHash < renderProbability) {
                    // Calculate final position
                    const finalX = leftMargin + (point.x - 200) * scale
                    const finalY = centerY + (point.y - 250) * scale

                    // Gravity-style entrance animation for newly revealed points
                    if (!point.revealed) {
                        // First time this point is being revealed - initialize animation
                        point.revealed = true
                        point.animating = true
                        // Start from a random offset position (simulating "falling in" or dispersed)
                        const angleOffset = Math.random() * Math.PI * 2
                        const distanceOffset = 150 + Math.random() * 250
                        point.currentX = finalX + Math.cos(angleOffset) * distanceOffset
                        point.currentY = finalY + Math.sin(angleOffset) * distanceOffset
                    }

                    let renderX = finalX
                    let renderY = finalY

                    // If still animating, apply gravity-like attraction physics
                    if (point.animating) {
                        const dx = finalX - (point.currentX || finalX)
                        const dy = finalY - (point.currentY || finalY)
                        const distance = Math.sqrt(dx * dx + dy * dy)

                        if (distance > 1) {
                            // Attraction force - move toward final position with easing
                            const attractionStrength = 0.12
                            point.currentX = (point.currentX || finalX) + dx * attractionStrength
                            point.currentY = (point.currentY || finalY) + dy * attractionStrength
                            renderX = point.currentX
                            renderY = point.currentY
                        } else {
                            // Animation complete - settled at final position
                            point.animating = false
                            point.currentX = finalX
                            point.currentY = finalY
                        }
                    }

                    // Add subtle floating animation after settled
                    if (!point.animating) {
                        const offsetX = Math.sin(time + point.baseX * 0.01) * 0.6
                        const offsetY = Math.cos(time + point.baseY * 0.01) * 0.6
                        renderX += offsetX
                        renderY += offsetY
                    }

                    ctx.fillStyle = point.color
                    ctx.beginPath()
                    ctx.arc(renderX, renderY, point.size, 0, Math.PI * 2)
                    ctx.fill()
                } else {
                    // Point is no longer visible - reset for next time it appears
                    if (point.revealed) {
                        point.revealed = false
                        point.animating = false
                    }
                }
            }

            animationFrameRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", updateCanvasSize)
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [points, revealProgress])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
        />
    )
}
