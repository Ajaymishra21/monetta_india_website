'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Building2,
  Briefcase,
  Globe2,
  Landmark,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { timeline, team } from '@/lib/site-data'

const pillars = [
  {
    title: 'Who We Are',
    copy: 'Monetta India is a business solutions partner focused on accounting, implementation, automation and technology-enabled support for growing organizations.',
  },
  {
    title: 'What We Do',
    copy: 'We support TallyPrime deployments, cloud accounting, data migration, training, compliance guidance and ongoing technical assistance.',
  },
  {
    title: 'Why Businesses Choose Us',
    copy: 'Our approach combines practical implementation, reliable support and a premium client experience built for modern operations.',
  },
]

const recognitionPlaceholders = [
  'Awards — Placeholder for future recognition details',
  'Certifications — Placeholder for verified certifications',
  'Recognition Badges — Placeholder for partner or industry badges',
  'Partner Accreditations — Placeholder for official accreditations',
]

export function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-border bg-card/85 p-6 shadow-2xl shadow-primary/5 backdrop-blur sm:p-8 lg:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">About Monetta India</p>
            <h1 className="mt-3 max-w-2xl font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Tally certified business solutions company built for modern finance and operations teams.</h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">Monetta India brings together implementation expertise, cloud-ready systems, ongoing support and a consultative approach for companies that want dependable accounting and business workflows.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact"><Button className="h-10 bg-accent text-accent-foreground">Request Consultation</Button></a>
              <a href="https://wa.me/919582178907" target="_blank" rel="noreferrer"><Button variant="outline" className="h-10">WhatsApp Now</Button></a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-[28px] border border-border bg-background/95 p-6 shadow-xl shadow-primary/5"
          >
            <div className="rounded-[24px] border border-dashed border-border bg-gradient-to-br from-accent/8 via-background to-secondary/8 p-6">
              <div className="flex items-center gap-3 text-accent"><Sparkles className="size-5" /> <span className="text-sm font-semibold uppercase tracking-[0.25em]">Company Overview</span></div>
              <p className="mt-4 text-sm text-muted-foreground">Monetta India is dedicated to helping business teams run efficient accounting and reporting operations through reliable software, expert implementation and responsive support.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card/80 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Mission</p>
                  <p className="mt-2 text-sm text-foreground">Deliver trusted, practical and scalable business solutions that simplify operations and strengthen performance.</p>
                </div>
                <div className="rounded-2xl border border-border bg-card/80 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Vision</p>
                  <p className="mt-2 text-sm text-foreground">Be the preferred partner for modern accounting, compliance and business automation across fast-growing organizations.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        {pillars.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="rounded-[28px] border border-border bg-card/85 p-6 shadow-xl shadow-primary/5 backdrop-blur"
          >
            <div className="flex items-center gap-3 text-accent"><Building2 className="size-5" /> <span className="text-sm font-semibold uppercase tracking-[0.25em]">{item.title}</span></div>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">{item.copy}</p>
          </motion.article>
        ))}
      </section>

      <section className="mt-12 rounded-[32px] border border-border bg-card/85 p-6 shadow-2xl shadow-primary/5 backdrop-blur sm:p-8 lg:p-10">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Our Journey</p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-foreground">A professional timeline of company growth and milestones</h2>
          </div>
          <p className="max-w-2xl text-sm text-muted-foreground">The timeline below reflects the current business story in the project and can be updated with future milestones as verified information becomes available.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {timeline.map((item, index) => (
            <motion.article
              key={item.year}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="rounded-[28px] border border-border bg-background/90 p-5 shadow-lg shadow-primary/5"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-accent">{item.year}</p>
              <h3 className="mt-3 text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[32px] border border-border bg-card/85 p-6 shadow-2xl shadow-primary/5 backdrop-blur sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Leadership</p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-foreground">Founder & Director</h2>
          <div className="mt-6 rounded-[28px] border border-border bg-background/95 p-6 shadow-xl shadow-primary/5">
            <div className="flex items-center gap-4">
              <div className="flex size-20 items-center justify-center rounded-3xl border border-dashed border-border bg-gradient-to-br from-accent/10 to-secondary/10 text-xl font-bold text-foreground">SP</div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Sandeep Patel</h3>
                <p className="text-sm text-muted-foreground">Founder & Director — Placeholder leadership profile</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Professional biography and verified leadership background will be added here once approved information is available. The current profile card is intentionally structured as a placeholder.</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="rounded-full border border-border bg-muted/40 px-3 py-1.5">Tally Expertise</span>
              <span className="rounded-full border border-border bg-muted/40 px-3 py-1.5">Business Consulting</span>
              <span className="rounded-full border border-border bg-muted/40 px-3 py-1.5">Client Support</span>
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[32px] border border-border bg-card/85 p-6 shadow-2xl shadow-primary/5 backdrop-blur sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Our Team</p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-foreground">Meet the people behind the business</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-[28px] border border-border bg-background/95 p-5 shadow-lg shadow-primary/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-16 items-center justify-center rounded-3xl border border-dashed border-border bg-gradient-to-br from-primary/10 to-accent/10 text-base font-bold text-foreground">{member.initials}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.article>
      </section>

      <section className="mt-12 rounded-[32px] border border-border bg-card/85 p-6 shadow-2xl shadow-primary/5 backdrop-blur sm:p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Achievements & Recognition</p>
        <h2 className="mt-2 font-heading text-3xl font-extrabold text-foreground">Premium placeholders for future achievements</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">The cards below are intentionally set up as professional placeholders so real awards, certifications and partner accreditations can be added later without redesigning the page.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {recognitionPlaceholders.map((item) => (
            <article key={item} className="rounded-[28px] border border-border bg-background/95 p-5 shadow-lg shadow-primary/5">
              <div className="flex items-center gap-2 text-accent"><ShieldCheck className="size-4" /> <span className="text-xs uppercase tracking-[0.25em]">Placeholder</span></div>
              <p className="mt-3 text-sm text-foreground">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 xl:grid-cols-[1fr_1fr]">
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[32px] border border-border bg-card/85 p-6 shadow-2xl shadow-primary/5 backdrop-blur sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Office & Work Culture</p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-foreground">Office gallery and workplace culture</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {['Office Photo Placeholder', 'Team Photo Placeholder', 'Workspace Placeholder', 'Client Collaboration Placeholder'].map((label) => (
              <div key={label} className="rounded-[24px] border border-dashed border-border bg-gradient-to-br from-background to-accent/5 p-6 text-sm text-muted-foreground">{label} — replace with real office or team images later.</div>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[32px] border border-border bg-card/85 p-6 shadow-2xl shadow-primary/5 backdrop-blur sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Why It Matters</p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-foreground">What makes Monetta India different</h2>
          <ul className="mt-6 space-y-3 text-sm text-foreground/85">
            <li className="flex items-start gap-3 rounded-2xl border border-border bg-background/95 p-4"><Users className="mt-0.5 size-4 text-accent" /> Professional support and guidance for accounting and business operations.</li>
            <li className="flex items-start gap-3 rounded-2xl border border-border bg-background/95 p-4"><Briefcase className="mt-0.5 size-4 text-accent" /> Practical implementation tailored to your industry and business size.</li>
            <li className="flex items-start gap-3 rounded-2xl border border-border bg-background/95 p-4"><Globe2 className="mt-0.5 size-4 text-accent" /> Cloud-ready and scalable business solutions with future-ready support.</li>
            <li className="flex items-start gap-3 rounded-2xl border border-border bg-background/95 p-4"><Landmark className="mt-0.5 size-4 text-accent" /> A premium client experience rooted in accountability and consistency.</li>
          </ul>
        </motion.article>
      </section>

      <section className="mt-12 rounded-[32px] border border-border bg-gradient-to-br from-accent/8 via-card to-card p-6 shadow-2xl shadow-accent/10 backdrop-blur sm:p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Contact</p>
        <h2 className="mt-2 font-heading text-3xl font-extrabold text-foreground">Ready to connect with Monetta India?</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">Use the existing Monetta contact details for a fast consultation, WhatsApp support or a callback request.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="tel:+919582178907" className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"><PhoneCall className="size-4" /> Call Now</a>
          <a href="https://wa.me/919582178907" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-sm font-semibold text-foreground"><MessageCircle className="size-4" /> WhatsApp Now</a>
          <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-sm font-semibold text-foreground">Get Expert Assistance <ArrowRight className="size-4" /></a>
        </div>
      </section>
    </main>
  )
}
