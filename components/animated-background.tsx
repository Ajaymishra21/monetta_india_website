'use client'

import { useEffect, useState } from 'react'
import {
  TrendingUp,
  IndianRupee,
  PieChart,
  BarChart3,
  Calculator,
  Percent,
  LineChart,
  Receipt,
} from 'lucide-react'

const ICONS = [
  TrendingUp,
  IndianRupee,
  PieChart,
  BarChart3,
  Calculator,
  Percent,
  LineChart,
  Receipt,
]

type Particle = {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  Icon: (typeof ICONS)[number]
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const items: Particle[] = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 14,
      duration: 16 + Math.random() * 16,
      size: 18 + Math.random() * 22,
      Icon: ICONS[i % ICONS.length],
    }))
    setParticles(items)
  }, [])

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* gradient orbs */}
      <div className="absolute -left-24 top-10 size-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute right-0 top-40 size-80 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 size-72 rounded-full bg-success/10 blur-3xl" />

      {/* floating financial icons */}
      {particles.map((p) => {
        const Icon = p.Icon
        return (
          <span
            key={p.id}
            className="absolute bottom-[-60px] text-secondary/20 dark:text-accent/20"
            style={{
              left: `${p.left}%`,
              animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
            }}
          >
            <Icon style={{ width: p.size, height: p.size }} />
          </span>
        )
      })}
    </div>
  )
}
