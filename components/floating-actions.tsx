'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, X, CalendarCheck } from 'lucide-react'

export function FloatingActions() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="flex flex-col gap-3"
          >
            <a
              href="https://wa.me/919582178907?text=Hi%20Monetta%2C%20I'd%20like%20a%20consultation"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-full bg-success px-4 py-2.5 text-sm font-semibold text-success-foreground shadow-lg shadow-success/30 transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-5" />
              WhatsApp Us
            </a>
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5"
            >
              <CalendarCheck className="size-5" />
              Book Consultation
            </a>
            <a
              href="tel:+919582178907"
              className="flex items-center gap-3 rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/30 transition-transform hover:-translate-y-0.5"
            >
              <Phone className="size-5" />
              Call Expert
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileTap={{ scale: 0.92 }}
        className="relative flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/40"
        aria-label={open ? 'Close quick actions' : 'Open quick actions'}
      >
        {!open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-success/40" />
        )}
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="size-6" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="size-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
