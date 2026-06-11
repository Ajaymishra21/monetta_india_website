'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Check,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading, Reveal } from '@/components/section-heading'
import { products } from '@/lib/site-data'

const renewalPlans = [
  {
    name: 'TallyPrime Silver Renewal',
    validity: '1 Year',
    basePrice: 4500,
    gstRate: 18,
    total: 5310,
    badges: ['Genuine Tally Renewal', 'Instant Activation', 'GST Invoice', 'Monetta Expert Support'],
  },
  {
    name: 'TallyPrime Gold Renewal',
    validity: '1 Year',
    basePrice: 13500,
    gstRate: 18,
    total: 15930,
    badges: ['Genuine Tally Renewal', 'Instant Activation', 'GST Invoice', 'Monetta Expert Support'],
  },
  {
    name: 'TallyPrime Silver Renewal',
    validity: '2 Years',
    basePrice: 8100,
    gstRate: 18,
    total: 9558,
    badges: ['Genuine Tally Renewal', 'Instant Activation', 'GST Invoice', 'Monetta Expert Support'],
  },
  {
    name: 'TallyPrime Gold Renewal',
    validity: '2 Years',
    basePrice: 24300,
    gstRate: 18,
    total: 28614,
    badges: ['Genuine Tally Renewal', 'Instant Activation', 'GST Invoice', 'Monetta Expert Support'],
  },
]

const comparisonRows = [
  ['Latest TallyPrime Updates', 'Yes', 'Always current with genuine renewal'],
  ['GST Compliance Updates', 'Yes', 'Stay compliant with latest statutory changes'],
  ['Product Enhancements', 'Yes', 'Unlock new features and improvements'],
  ['Security Updates', 'Yes', 'Keep your software secure and stable'],
  ['Remote Access Features', 'Yes', 'Access and manage your accounting environment with ease'],
  ['Technical Support', 'Yes', 'Dedicated Monetta expert support'],
  ['Business Reports', 'Yes', 'Timely reports, analysis and workflow support'],
  ['Connected Services', 'Yes', 'Cloud, automation and implementation support available'],
]

export function Products() {
  const [licenseType, setLicenseType] = useState<'Silver' | 'Gold'>('Gold')
  const [renewalPeriod, setRenewalPeriod] = useState<'1 Year' | '2 Years'>('1 Year')

  const calculator = useMemo(() => {
    const basePrice = licenseType === 'Silver'
      ? renewalPeriod === '1 Year'
        ? 4500
        : 8100
      : renewalPeriod === '1 Year'
        ? 13500
        : 24300

    const gstAmount = Math.round(basePrice * 0.18)
    const total = basePrice + gstAmount

    return { basePrice, gstAmount, total }
  }, [licenseType, renewalPeriod])
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
                {p.name === 'TallyPrime Silver' ? (
                  <div className="mt-3 rounded-2xl border border-border bg-muted/30 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Base Price</p>
                    <p className="mt-1 text-sm text-foreground">₹22,500</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">GST (18%)</p>
                    <p className="mt-1 text-sm text-foreground">₹4,050</p>
                    <p className="mt-3 text-sm font-semibold text-muted-foreground">Final Price</p>
                    <p className="mt-1 font-heading text-3xl font-black text-accent">₹26,550</p>
                    <p className="text-xs text-muted-foreground">(Inclusive of GST)</p>
                  </div>
                ) : p.name === 'TallyPrime Gold' ? (
                  <div className="mt-3 rounded-2xl border border-border bg-muted/30 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Base Price</p>
                    <p className="mt-1 text-sm text-foreground">₹67,500</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">GST (18%)</p>
                    <p className="mt-1 text-sm text-foreground">₹12,150</p>
                    <p className="mt-3 text-sm font-semibold text-muted-foreground">Final Price</p>
                    <p className="mt-1 font-heading text-3xl font-black text-accent">₹79,650</p>
                    <p className="text-xs text-muted-foreground">(Inclusive of GST)</p>
                  </div>
                ) : (
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-heading text-2xl font-extrabold text-foreground">
                      {p.price}
                    </span>
                  </div>
                )}
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

        <section className="mt-16 rounded-[32px] border border-border/80 bg-card/90 p-6 shadow-2xl shadow-primary/5 backdrop-blur sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Tally Software Services</p>
              <h3 className="mt-2 font-heading text-3xl font-extrabold text-foreground">TallyPrime Renewal & Support Plans</h3>
              <p className="mt-3 max-w-3xl text-sm text-muted-foreground sm:text-base">Keep your TallyPrime license updated, secure and fully supported with genuine TSS renewals and expert assistance from Monetta India.</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <Sparkles className="size-4" /> Premium Renewal Suite
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-4">
            {renewalPlans.map((plan, index) => (
              <motion.article
                key={`${plan.name}-${plan.validity}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-border bg-background/90 p-5 transition-all hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">TSS Renewal</span>
                  <ShieldCheck className="size-5 text-success" />
                </div>
                <h4 className="mt-4 text-xl font-bold text-foreground">{plan.name}</h4>
                <p className="mt-1 text-sm text-muted-foreground">Validity: {plan.validity}</p>
                <div className="mt-5 rounded-2xl border border-border bg-card/80 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Base Price</p>
                  <p className="mt-1 font-heading text-2xl font-extrabold text-foreground">₹{plan.basePrice.toLocaleString('en-IN')}</p>
                  <p className="mt-1 text-xs text-muted-foreground">GST @ {plan.gstRate}%</p>
                  <p className="mt-2 text-sm text-muted-foreground">Total Payable Amount</p>
                  <p className="font-heading text-2xl font-extrabold text-accent">₹{plan.total.toLocaleString('en-IN')}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                  {plan.badges.map((badge) => (
                    <li key={badge} className="flex items-center gap-2"><BadgeCheck className="size-4 text-success" /> {badge}</li>
                  ))}
                </ul>
                <div className="mt-5 grid gap-2">
                  <a href="/contact" className="w-full"><Button className="h-10 w-full bg-accent text-accent-foreground">Renew Now</Button></a>
                  <a href="https://wa.me/919582178907" target="_blank" rel="noreferrer" className="w-full"><Button variant="outline" className="h-10 w-full"><MessageCircle className="mr-2 size-4" />WhatsApp Expert</Button></a>
                  <a href="/contact" className="w-full"><Button variant="ghost" className="h-10 w-full">Request Callback</Button></a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-border bg-gradient-to-br from-accent/8 via-card to-card p-6 shadow-xl shadow-accent/10"
            >
              <div className="flex items-center gap-2 text-accent">
                <Zap className="size-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.25em]">Interactive Calculator</p>
              </div>
              <h4 className="mt-3 font-heading text-2xl font-bold text-foreground">Renewal Price Calculator</h4>
              <p className="mt-2 text-sm text-muted-foreground">Choose your license type and renewal period to preview the pricing instantly.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="rounded-2xl border border-border bg-background/90 p-4 text-sm text-foreground">
                  <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">License Type</span>
                  <select value={licenseType} onChange={(e) => setLicenseType(e.target.value as 'Silver' | 'Gold')} className="w-full rounded-xl border border-border bg-transparent p-3 text-sm outline-none ring-0">
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                  </select>
                </label>
                <label className="rounded-2xl border border-border bg-background/90 p-4 text-sm text-foreground">
                  <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">Renewal Period</span>
                  <select value={renewalPeriod} onChange={(e) => setRenewalPeriod(e.target.value as '1 Year' | '2 Years')} className="w-full rounded-xl border border-border bg-transparent p-3 text-sm outline-none ring-0">
                    <option value="1 Year">1 Year</option>
                    <option value="2 Years">2 Years</option>
                  </select>
                </label>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-background/90 p-4"><p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Base Price</p><p className="mt-2 font-heading text-xl font-extrabold text-foreground">₹{calculator.basePrice.toLocaleString('en-IN')}</p></div>
                <div className="rounded-2xl border border-border bg-background/90 p-4"><p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">GST Amount</p><p className="mt-2 font-heading text-xl font-extrabold text-foreground">₹{calculator.gstAmount.toLocaleString('en-IN')}</p></div>
                <div className="rounded-2xl border border-accent/25 bg-accent/8 p-4"><p className="text-xs uppercase tracking-[0.25em] text-accent">Total Payable</p><p className="mt-2 font-heading text-xl font-extrabold text-accent">₹{calculator.total.toLocaleString('en-IN')}</p></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-border bg-background/90 p-6 shadow-xl shadow-primary/5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Why Renew with Monetta?</p>
              <h4 className="mt-3 font-heading text-2xl font-bold text-foreground">Need Help With Tally Renewal?</h4>
              <p className="mt-3 text-sm text-muted-foreground">Our expert renewal team helps you stay compliant, activate instantly and keep reporting workflows uninterrupted.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="tel:+919582178907" className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">Call Now</a>
                <a href="https://wa.me/919582178907" target="_blank" rel="noreferrer" className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground">WhatsApp Now</a>
                <a href="/contact" className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground">Get Expert Assistance</a>
              </div>
              <div className="mt-6 space-y-3 text-sm text-foreground/85">
                <a href="tel:+919582178907" className="flex items-center gap-3 rounded-2xl border border-border p-3 hover:bg-muted"><PhoneCall className="size-4 text-accent" /> +91 9582178907</a>
                <a href="tel:+919582178940" className="flex items-center gap-3 rounded-2xl border border-border p-3 hover:bg-muted"><PhoneCall className="size-4 text-accent" /> +91 9582178940</a>
                <a href="tel:+919999618101" className="flex items-center gap-3 rounded-2xl border border-border p-3 hover:bg-muted"><PhoneCall className="size-4 text-accent" /> +91 9999618101</a>
                <a href="tel:+919999145789" className="flex items-center gap-3 rounded-2xl border border-border p-3 hover:bg-muted"><PhoneCall className="size-4 text-accent" /> +91 9999145789</a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 overflow-hidden rounded-3xl border border-border bg-background/95"
          >
            <div className="border-b border-border p-5">
              <h4 className="font-heading text-xl font-bold text-foreground">Benefits of Active TSS</h4>
              <p className="mt-1 text-sm text-muted-foreground">Keep your TallyPrime environment current, compliant and supported with genuine renewal services.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border text-left text-sm">
                <thead className="bg-muted/40 text-muted-foreground">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Benefits</th>
                    <th className="px-5 py-3 font-semibold">Included</th>
                    <th className="px-5 py-3 font-semibold">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparisonRows.map(([benefit, included, why]) => (
                    <tr key={benefit} className="hover:bg-muted/30">
                      <td className="px-5 py-4 font-medium text-foreground">{benefit}</td>
                      <td className="px-5 py-4 text-accent">{included}</td>
                      <td className="px-5 py-4 text-muted-foreground">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>
      </div>
    </section>
  )
}
