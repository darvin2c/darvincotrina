"use client"

import { useEffect, useRef, useState } from "react"

interface TypedTextProps {
  text: string
  className?: string
  speed?: number
}

export function TypedText({ text, className = "", speed = 50 }: TypedTextProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started || count >= text.length) return
    const timer = setTimeout(() => setCount((c) => c + 1), speed)
    return () => clearTimeout(timer)
  }, [started, count, text, speed])

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {/* sizer: reserva el ancho final para evitar salto de layout */}
      <span className="invisible">{text}</span>
      <span className="absolute inset-0">
        {text.slice(0, count)}
        <span className="animate-pulse">|</span>
      </span>
    </span>
  )
}
