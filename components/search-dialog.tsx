'use client'

import { useEffect, useMemo, useState } from 'react'
import { Search, X, Sparkles, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { products, services, industries } from '@/lib/site-data'

type Result = { title: string; category: string; href: string }

const allResults: Result[] = [
  ...products.map((p) => ({
    title: p.name,
    category: 'Product',
    href: '/#products',
  })),
  ...services.map((s) => ({
    title: s.name,
    category: 'Service',
    href: '/#services',
  })),
  ...industries.map((i) => ({
    title: i.name,
    category: 'Industry',
    href: `/industries/${i.name.toLowerCase().replace(/ /g, '-')}`,
  })),
  { title: 'GST Filing & Compliance', category: 'Support', href: '/#resources' },
  { title: 'ROI Calculator', category: 'Tool', href: '/#roi' },
  { title: 'Book a Free Demo', category: 'Support', href: '/contact' },
  { title: 'Company Journey & Timeline', category: 'About', href: '/#about' },
]

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return allResults.slice(0, 6)
    return allResults.filter((r) =>
      r.title.toLowerCase().includes(query.toLowerCase()),
    )
  }, [query])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] flex items-start justify-center bg-primary/40 p-4 pt-24 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Sparkles className="size-5 shrink-0 text-accent" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask anything — products, services, support…"
                className="h-14 w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
                aria-label="Search"
              />
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Close search"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-muted-foreground">
                  No results for “{query}”. Try “Tally”, “payroll” or “GST”.
                </p>
              )}
              {filtered.map((r) => (
                <a
                  key={r.title}
                  href={r.href}
                  onClick={onClose}
                  className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-muted"
                >
                  <span className="flex items-center gap-3">
                    <Search className="size-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">
                      {r.title}
                    </span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-muted-foreground uppercase">
                      {r.category}
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
