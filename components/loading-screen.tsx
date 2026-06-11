'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-primary"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative flex h-16 w-40 items-center justify-center">
              <motion.span
                className="absolute inset-0 rounded-2xl border-2 border-accent/40"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <div className="relative h-12 w-36">
                <Image
                  src="/logo-1-1-min-2.png"
                  alt="Monetta India"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="font-heading text-lg font-bold tracking-tight text-primary-foreground">
                Monetta India
              </span>
              <span className="text-xs tracking-widest text-primary-foreground/60 uppercase">
                Smart Business Solutions
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
