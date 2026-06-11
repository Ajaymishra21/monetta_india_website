'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, TrendingUp } from 'lucide-react'
import { SectionHeading, Reveal } from '@/components/section-heading'

const cases = [
  {
    client: 'Shree Balaji Industries',
    industry: 'Manufacturing',
    problem: 'Fragmented stock data across 3 plants caused costly delays.',
    solution: 'Unified TallyPrime Server with custom BOM & costing modules.',
    result: '42% faster monthly closing',
    metric: '42%',
  },
  {
    client: 'Metro Retail Chain',
    industry: 'Retail',
    problem: 'Slow billing and reconciliation across 12 store outlets.',
    solution: 'POS-integrated Tally on Cloud with centralized reporting.',
    result: '3x faster checkout & live sales view',
    metric: '3x',
  },
  {
    client: 'CareFirst Diagnostics',
    industry: 'Healthcare',
    problem: 'Manual GST filing led to recurring compliance penalties.',
    solution: 'Automated GST reconciliation and TDS workflow setup.',
    result: 'Zero penalties in 18 months',
    metric: '0',
  },
]

export function CaseStudies() {
  return (
    <section className="relative scroll-mt-24 bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Success Stories"
          title="Real businesses, measurable results"
          description="A look at how Monetta helps companies across industries operate smarter and grow faster."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary dark:bg-accent/15 dark:text-accent">
                    {c.industry}
                  </span>
                  <ArrowUpRight className="size-5 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  {c.client}
                </h3>
                <dl className="mt-4 flex flex-1 flex-col gap-3 text-sm">
                  <div>
                    <dt className="font-semibold text-foreground">Challenge</dt>
                    <dd className="text-muted-foreground">{c.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Solution</dt>
                    <dd className="text-muted-foreground">{c.solution}</dd>
                  </div>
                </dl>
                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-success/10 p-3">
                  <span className="font-heading text-2xl font-extrabold text-success">
                    {c.metric}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-foreground">
                    <TrendingUp className="size-4 text-success" />
                    {c.result}
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
