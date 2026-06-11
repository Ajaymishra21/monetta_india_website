'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Clock, ArrowRight } from 'lucide-react'
import { SectionHeading, Reveal } from '@/components/section-heading'

const categories = [
  'All',
  'GST',
  'Accounting',
  'Tally',
  'Payroll',
  'Taxation',
  'Business Tips',
] as const

type Category = (typeof categories)[number]

const posts: { title: string; category: Exclude<Category, 'All'>; read: string; excerpt: string }[] = [
  {
    title: 'GSTR-3B filing: a complete 2026 checklist',
    category: 'GST',
    read: '6 min',
    excerpt:
      'Avoid penalties with our step-by-step guide to error-free monthly GST returns.',
  },
  {
    title: 'Closing your books faster with TallyPrime',
    category: 'Accounting',
    read: '5 min',
    excerpt:
      'Five workflow tweaks that cut month-end closing time dramatically.',
  },
  {
    title: 'Tally on Cloud vs on-premise: which is right?',
    category: 'Tally',
    read: '7 min',
    excerpt:
      'A practical comparison to help you choose the best deployment model.',
  },
  {
    title: 'Automating payroll & statutory compliance',
    category: 'Payroll',
    read: '4 min',
    excerpt:
      'How to run PF, ESI and PT compliance without the monthly headache.',
  },
  {
    title: 'Understanding TDS sections for SMEs',
    category: 'Taxation',
    read: '8 min',
    excerpt:
      'Decode the most common TDS provisions every growing business should know.',
  },
  {
    title: '7 metrics every business owner should track',
    category: 'Business Tips',
    read: '5 min',
    excerpt:
      'Turn your accounting data into decisions that drive real growth.',
  },
]

export function Resources() {
  const [active, setActive] = useState<Category>('All')
  const [query, setQuery] = useState('')

  const filtered = posts.filter(
    (p) =>
      (active === 'All' || p.category === active) &&
      p.title.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <section
      id="resources"
      className="relative scroll-mt-24 bg-muted/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resources Center"
          title="Insights to run a smarter business"
          description="Expert guides on GST, accounting, Tally, payroll and taxation — updated for 2026."
        />

        {/* search + filters */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-4">
            <Search className="size-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles…"
              className="h-12 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              aria-label="Search articles"
            />
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  active === c
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border bg-card text-foreground hover:bg-muted'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: (i % 3) * 0.05 }}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-secondary/10 px-2.5 py-1 font-semibold text-secondary dark:bg-accent/15 dark:text-accent">
                    {p.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="size-3.5" />
                    {p.read}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {p.excerpt}
                </p>
                <a
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary dark:text-accent"
                >
                  Read article
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            No articles found. Try a different search or category.
          </p>
        )}
      </div>
    </section>
  )
}
