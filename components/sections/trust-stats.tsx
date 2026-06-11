'use client'

import { Reveal } from '@/components/section-heading'
import { CountUp } from '@/components/count-up'
import { Users, CalendarRange, FolderCheck, Smile } from 'lucide-react'

const stats = [
  { icon: Users, end: 5000, suffix: '+', label: 'Happy Clients' },
  { icon: CalendarRange, end: 20, suffix: '+', label: 'Years Experience' },
  { icon: Smile, end: 99, suffix: '%', label: 'Client Satisfaction' },
]

export function TrustStats() {
  return (
    <section className="relative -mt-px bg-primary py-14 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center">
                <span className="mb-3 flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/10 text-accent">
                  <s.icon className="size-6" />
                </span>
                <p className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
                  <CountUp end={s.end} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
