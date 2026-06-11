'use client'

import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, ShieldCheck, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedBackground } from '@/components/animated-background'

const badges = ['Since 2003', 'Trusted Partner', '5000+ Clients', 'Expert Support']

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-muted/40 to-background pt-28 pb-16"
    >
      <AnimatedBackground />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-1 lg:gap-8 lg:px-8">
        {/* Left */}
        <motion.div variants={container} initial="hidden" animate="show" className="mx-auto w-full max-w-3xl">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-semibold text-secondary backdrop-blur dark:text-accent">
              <span className="flex size-2 rounded-full bg-success" />
              Trusted Tally Partner Since 2003
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-5 text-balance font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Transform Your Business Accounting with{' '}
            <span className="text-gradient">Smart Digital Solutions</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Trusted by thousands of businesses for TallyPrime, Cloud Accounting,
            Compliance, Automation and Business Growth Solutions.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <a href="/contact">
              <Button
                size="lg"
                className="h-12 w-full px-6 text-base bg-accent text-accent-foreground [a]:hover:bg-accent/90 sm:w-auto"
              >
                Get Free Demo
                <ArrowRight className="size-4" />
              </Button>
            </a>
            <a href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full px-6 text-base sm:w-auto"
              >
                <PlayCircle className="size-4" />
                Talk To Expert
              </Button>
            </a>
          </motion.div>

          {/* trust badges */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {badges.map((b) => (
              <span
                key={b}
                className="flex items-center gap-2 text-sm font-medium text-foreground/80"
              >
                <ShieldCheck className="size-4 text-success" />
                {b}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 flex items-center gap-3"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-4 fill-accent text-accent"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.9/5</span> from
              1,200+ verified reviews
            </span>
          </motion.div>
        </motion.div>

        {/* Right dashboard removed per request */}
      </div>
    </section>
  )
}
