'use client'

import { motion } from 'framer-motion'
import {
  Calculator,
  ReceiptText,
  Users,
  ShieldCheck,
  BarChart3,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import { SectionHeading, Reveal } from '@/components/section-heading'

const steps = [
  { icon: Calculator, label: 'Accounting', desc: 'Real-time ledgers' },
  { icon: ReceiptText, label: 'GST', desc: 'Auto reconciliation' },
  { icon: Users, label: 'Payroll', desc: 'Salary & statutory' },
  { icon: ShieldCheck, label: 'Compliance', desc: 'Always audit-ready' },
  { icon: BarChart3, label: 'Reporting', desc: 'Live MIS dashboards' },
  { icon: TrendingUp, label: 'Growth', desc: 'Data-driven decisions' },
]

export function AutomationFlow() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="pointer-events-none absolute -right-20 top-10 size-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 size-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-xs font-semibold tracking-wide text-accent uppercase">
              Business Automation
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              How Monetta improves your business operations
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/70">
              A connected, automated workflow that turns everyday accounting
              into a continuous engine for growth.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          {steps.map((s, i) => (
            <div key={s.label} className="flex flex-1 items-center gap-4 lg:flex-col">
              <Reveal delay={i * 0.1} className="w-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="flex items-center gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 backdrop-blur lg:flex-col lg:text-center"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <s.icon className="size-6" />
                  </span>
                  <span className="lg:mt-2">
                    <span className="block font-heading text-base font-bold">
                      {s.label}
                    </span>
                    <span className="block text-xs text-primary-foreground/60">
                      {s.desc}
                    </span>
                  </span>
                </motion.div>
              </Reveal>
              {i < steps.length - 1 && (
                <ArrowRight className="size-5 shrink-0 rotate-90 text-accent lg:rotate-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
