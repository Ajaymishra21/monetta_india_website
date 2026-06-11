'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { IndianRupee, Clock, TrendingUp, Sparkles } from 'lucide-react'
import { SectionHeading, Reveal } from '@/components/section-heading'
import { CountUp } from '@/components/count-up'

function Slider({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  unit: string
  onChange: (v: number) => void
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="rounded-lg bg-muted px-2.5 py-1 text-sm font-bold text-secondary dark:text-accent">
          {unit === '₹' ? '₹' : ''}
          {value.toLocaleString('en-IN')}
          {unit !== '₹' ? ` ${unit}` : ''}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-accent"
        aria-label={label}
      />
    </div>
  )
}

export function RoiCalculator() {
  const [employees, setEmployees] = useState(8)
  const [hours, setHours] = useState(20)
  const [rate, setRate] = useState(300)

  const { monthly, yearly, hoursSaved } = useMemo(() => {
    const automationFactor = 0.65
    const savedHours = hours * employees * automationFactor
    const monthlySaving = Math.round(savedHours * rate)
    return {
      monthly: monthlySaving,
      yearly: monthlySaving * 12,
      hoursSaved: Math.round(savedHours),
    }
  }, [employees, hours, rate])

  return (
    <section id="roi" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ROI Calculator"
          title="See how much you could save"
          description="Estimate the time and money you can reclaim by automating accounting and compliance with Monetta."
        />

        <Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8 lg:grid-cols-2">
            {/* inputs */}
            <div className="flex flex-col gap-6">
              <Slider
                label="Finance team size"
                value={employees}
                min={1}
                max={50}
                step={1}
                unit="people"
                onChange={setEmployees}
              />
              <Slider
                label="Manual hours / person / month"
                value={hours}
                min={5}
                max={80}
                step={1}
                unit="hrs"
                onChange={setHours}
              />
              <Slider
                label="Average hourly cost"
                value={rate}
                min={100}
                max={1500}
                step={50}
                unit="₹"
                onChange={setRate}
              />
            </div>

            {/* results */}
            <div className="flex flex-col justify-between gap-4 rounded-2xl bg-primary p-6 text-primary-foreground">
              <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                <Sparkles className="size-4" />
                Estimated savings with Monetta
              </div>
              <div>
                <p className="text-sm text-primary-foreground/70">
                  Annual cost savings
                </p>
                <p className="font-heading text-4xl font-extrabold sm:text-5xl">
                  <CountUp prefix="₹" end={yearly} key={yearly} />
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-primary-foreground/10 p-3">
                  <IndianRupee className="size-4 text-accent" />
                  <p className="mt-1 font-heading text-xl font-bold">
                    <CountUp prefix="₹" end={monthly} key={monthly} />
                  </p>
                  <p className="text-xs text-primary-foreground/60">
                    Saved / month
                  </p>
                </div>
                <div className="rounded-xl bg-primary-foreground/10 p-3">
                  <Clock className="size-4 text-success" />
                  <p className="mt-1 font-heading text-xl font-bold">
                    <CountUp end={hoursSaved} suffix=" hrs" key={hoursSaved} />
                  </p>
                  <p className="text-xs text-primary-foreground/60">
                    Saved / month
                  </p>
                </div>
              </div>
              <p className="flex items-center gap-1.5 text-xs text-primary-foreground/50">
                <TrendingUp className="size-3.5" />
                Based on average 65% automation across Monetta deployments.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
