'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading, Reveal } from '@/components/section-heading'
import { products } from '@/lib/site-data'

export function Products() {
  return (
    <section id="products" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Products"
          title="The right TallyPrime edition for every business"
          description="From single-user setups to enterprise cloud deployments — choose a solution that scales with you, backed by certified Monetta experts."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`group relative flex h-full flex-col rounded-3xl border p-6 transition-shadow hover:shadow-2xl hover:shadow-primary/10 ${
                  p.popular
                    ? 'border-accent bg-card'
                    : 'border-border bg-card'
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow">
                    Most Popular
                  </span>
                )}
                <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground dark:bg-accent/15 dark:text-accent dark:group-hover:bg-accent dark:group-hover:text-accent-foreground">
                  <p.icon className="size-6" />
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground">{p.tagline}</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-heading text-2xl font-extrabold text-foreground">
                    {p.price}
                  </span>
                </div>
                <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-success" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="mt-6">
                  <Button
                    variant={p.popular ? 'default' : 'outline'}
                    className={`h-10 w-full ${
                      p.popular
                        ? 'bg-accent text-accent-foreground [a]:hover:bg-accent/90'
                        : ''
                    }`}
                  >
                    Learn More
                    <ArrowRight className="size-4" />
                  </Button>
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
