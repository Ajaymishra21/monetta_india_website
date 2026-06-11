'use client'

import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, FileCheck2, MessageCircle } from 'lucide-react'

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent/20 to-secondary/10 px-3 py-1 text-xs font-semibold text-foreground">
      {children}
    </span>
  )
}

export function DashboardMockup() {
  const bars = [56, 72, 48, 80, 66, 92, 78]

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-br from-white/60 to-muted/5 p-5 shadow-2xl">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent/5 via-transparent to-transparent blur-2xl opacity-60" />

      <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground font-semibold">
                T
              </span>
              <div>
                <div className="text-sm font-semibold text-foreground">TallyPrime & Cloud</div>
                <div className="text-xs text-muted-foreground">Secure accounting on-premise & cloud</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge>TallyPrime</Badge>
              <Badge>GST Compliance</Badge>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background/60 p-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-muted-foreground">Monthly Revenue</div>
                <div className="mt-1 text-xl font-heading font-bold text-foreground">₹ 48.6 L</div>
              </div>
              <div className="text-success inline-flex items-center gap-1 font-semibold">
                <TrendingUp className="size-4" /> +18.2%
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background/60 p-3">
            <div className="text-sm font-semibold text-foreground">Business Analytics</div>
            <div className="mt-3 flex items-end gap-2">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.06 }}
                  className={`w-full rounded-t-md ${i === bars.length - 1 ? 'bg-accent' : 'bg-secondary/70'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-3">
          <div className="rounded-xl border border-border bg-gradient-to-tr from-white/50 to-muted/10 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-foreground">Automation</div>
                <div className="text-xs text-muted-foreground">Bank reconciliation, invoicing, and GST filing</div>
              </div>
              <FileCheck2 className="size-6 text-success" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-card p-3 text-sm">
                <div className="font-semibold">Cloud Accounting</div>
                <div className="text-xs text-muted-foreground">Access from any device</div>
              </div>
              <div className="rounded-lg bg-card p-3 text-sm">
                <div className="font-semibold">Business Analytics</div>
                <div className="text-xs text-muted-foreground">Real-time MIS reports</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border bg-success/5 p-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-success/20 text-success">
                <BarChart3 className="size-5" />
              </span>
              <div>
                <div className="text-sm font-semibold text-foreground">GST Filing & Compliance</div>
                <div className="text-xs text-muted-foreground">GSTR, e-invoicing & returns</div>
              </div>
            </div>
            <a href="/contact" className="text-sm font-semibold text-accent">Contact Sales</a>
          </div>

          <div className="mt-auto flex items-center gap-3 rounded-lg bg-card p-3">
            <MessageCircle className="size-5 text-accent" />
            <div>
              <div className="text-sm font-semibold text-foreground">Premium Support</div>
              <div className="text-xs text-muted-foreground">WhatsApp & Phone support — 24/5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
