'use client'

import { Check, X } from 'lucide-react'
import { SectionHeading, Reveal } from '@/components/section-heading'

const rows = [
  'Experience since 2003',
  'Dedicated account team',
  'Same-day remote assistance',
  'Custom TDL development',
  'Certified Tally experts',
  'Proactive compliance updates',
  'Transparent fixed pricing',
]

export function WhyChoose() {
  return (
    <section className="relative scroll-mt-24 bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Monetta"
          title="The difference is in the details"
          description="See how a true partnership with Monetta compares to working with an ordinary reseller."
        />

        <Reveal>
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
            {/* header row */}
            <div className="grid grid-cols-[1fr_auto_auto]">
              <div className="bg-muted/60 p-5 text-sm font-semibold text-muted-foreground">
                Capability
              </div>
              <div className="flex w-28 items-center justify-center bg-muted/60 p-5 text-sm font-semibold text-muted-foreground sm:w-32">
                Others
              </div>
              <div className="flex w-28 items-center justify-center bg-primary p-5 text-sm font-bold text-primary-foreground sm:w-36">
                Monetta
              </div>
            </div>
            {rows.map((r, i) => (
              <div
                key={r}
                className={`grid grid-cols-[1fr_auto_auto] items-center border-t border-border ${
                  i % 2 === 1 ? 'bg-muted/20' : ''
                }`}
              >
                <div className="p-4 text-sm font-medium text-foreground sm:p-5">
                  {r}
                </div>
                <div className="flex w-28 items-center justify-center p-4 sm:w-32 sm:p-5">
                  <span className="flex size-7 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <X className="size-4" />
                  </span>
                </div>
                <div className="flex w-28 items-center justify-center bg-success/5 p-4 sm:w-36 sm:p-5">
                  <span className="flex size-7 items-center justify-center rounded-full bg-success/15 text-success">
                    <Check className="size-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
