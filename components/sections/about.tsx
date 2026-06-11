'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { timeline, team } from '@/lib/site-data'
import { CountUp } from '@/components/count-up'

const aboutStats = [
  { value: 22, suffix: '+', label: 'Years in business' },
  { value: 5000, suffix: '+', label: 'Clients served' },
  { value: 50, suffix: '+', label: 'Team experts' },
  { value: 99, suffix: '%', label: 'Retention rate' },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Story"
          title="Two decades of trusted partnership"
          description="Since 2003, Monetta India has helped thousands of businesses run smarter with Tally and modern accounting solutions."
        />

        {/* Timeline */}
        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />
          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative flex flex-col gap-4 lg:w-1/2 ${
                  i % 2 === 0 ? 'lg:self-start lg:pr-12 lg:text-right' : 'lg:self-end lg:pl-12'
                }`}
              >
                <div
                  className={`absolute top-2 hidden size-4 rounded-full border-4 border-background bg-primary lg:block ${
                    i % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                  }`}
                />
                <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
                  <span className="text-sm font-bold text-primary">{item.year}</span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-6 rounded-3xl border border-border bg-card/60 p-8 backdrop-blur lg:grid-cols-4">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-foreground sm:text-4xl">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-semibold text-foreground">
            Meet the people behind Monetta
          </h3>
          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex flex-col items-center rounded-2xl border border-border bg-card/60 p-6 text-center backdrop-blur transition-colors hover:border-primary/40"
              >
                <div className="flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xl font-bold text-primary-foreground">
                  {member.initials}
                </div>
                <h4 className="mt-4 font-semibold text-foreground">{member.name}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
