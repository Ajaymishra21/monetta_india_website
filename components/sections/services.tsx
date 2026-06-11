'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading, Reveal } from '@/components/section-heading'
import { services } from '@/lib/site-data'

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-muted/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need, under one trusted roof"
          description="A full spectrum of implementation, customization, compliance and support services designed to keep your business running flawlessly."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-xl hover:shadow-primary/5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-all group-hover:scale-110 group-hover:bg-secondary group-hover:text-secondary-foreground dark:bg-accent/15 dark:text-accent dark:group-hover:bg-accent dark:group-hover:text-accent-foreground">
                  <s.icon className="size-5" />
                </span>
                <div>
                  <h3 className="flex items-center gap-1 font-heading text-base font-bold text-foreground">
                    {s.name}
                    <ArrowUpRight className="size-4 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
