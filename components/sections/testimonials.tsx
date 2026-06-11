'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    name: 'Rajesh Khanna',
    role: 'Director, Shree Balaji Industries',
    photo: '/clients/client-1.png',
    rating: 5,
    quote:
      'Monetta transformed how we manage accounting across our plants. Their team understood our manufacturing workflow and delivered a solution that just works. Monthly closing is now effortless.',
  },
  {
    name: 'Priya Sharma',
    role: 'CFO, Metro Retail Chain',
    photo: '/clients/client-2.png',
    rating: 5,
    quote:
      'The Tally on Cloud setup gave us real-time visibility across all 12 stores. Support is incredibly responsive — issues are resolved the same day, every time. A genuine growth partner.',
  },
  {
    name: 'Anil Mehta',
    role: 'Owner, CareFirst Diagnostics',
    photo: '/clients/client-3.png',
    rating: 5,
    quote:
      'We went from recurring GST penalties to zero in 18 months thanks to Monetta’s compliance automation. Their expertise and attention to detail are simply unmatched in the industry.',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    [],
  )
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[index]

  return (
    <section className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by businesses across India"
          description="Don't just take our word for it — hear from the leaders who trust Monetta every day."
        />

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-10">
            <Quote className="size-10 text-accent/30" />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mt-3 flex">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="size-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 text-pretty text-lg leading-relaxed text-foreground">
                  {t.quote}
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <Image
                    src={t.photo || '/placeholder.svg'}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="size-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-heading font-bold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-accent' : 'w-2 bg-border'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
