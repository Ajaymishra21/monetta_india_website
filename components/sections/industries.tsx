'use client'

import { motion } from 'framer-motion'
import { SectionHeading, Reveal } from '@/components/section-heading'
import { industries } from '@/lib/site-data'

export function Industries() {
  return (
    <section id="industries" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industry Solutions"
          title="Tailored expertise for your sector"
          description="We understand the unique accounting and compliance challenges of every industry — and configure Tally to fit them perfectly."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-xl hover:shadow-primary/5"
              >
                <span className="absolute -right-6 -top-6 size-24 rounded-full bg-secondary/5 transition-transform duration-500 group-hover:scale-150 dark:bg-accent/10" />
                <span className="relative flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <ind.icon className="size-6" />
                </span>
                <h3 className="relative mt-4 font-heading text-lg font-bold text-foreground">
                  {ind.name}
                </h3>
                <p className="relative mt-1 text-sm text-muted-foreground">
                  {ind.description}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
