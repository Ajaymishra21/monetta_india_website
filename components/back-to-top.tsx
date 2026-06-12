'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export function BackToTop() {
  const pathname = usePathname()
  const router = useRouter()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    sessionStorage.setItem('monetta-scroll-home', '1')
    router.push('/')
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 18, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.92 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={handleClick}
          className="fixed bottom-5 right-5 z-[70] flex items-center gap-2 rounded-full border border-border/80 bg-background/95 px-3.5 py-3 text-sm font-semibold text-foreground shadow-xl shadow-primary/10 backdrop-blur-xl transition-transform hover:-translate-y-0.5 hover:bg-muted md:bottom-6 md:right-6 md:px-4"
          aria-label="Back to home"
        >
          <ArrowUp className="size-4 md:size-5" />
          <span className="hidden sm:inline">Back to Home</span>
          <span className="sm:hidden">Home</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
