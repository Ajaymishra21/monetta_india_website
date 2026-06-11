'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Search,
  Moon,
  Sun,
  ChevronDown,
  ArrowRight,
} from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme-provider'
import { SearchDialog } from '@/components/search-dialog'
import { navLinks, products, services } from '@/lib/site-data'

const megaMenus: Record<
  string,
  { title: string; href: string; desc: string }[]
> = {
  Products: products.map((p) => ({
    title: p.name,
    href: '#products',
    desc: p.tagline,
  })),
  Services: services.slice(0, 6).map((s) => ({
    title: s.name,
    href: '#services',
    desc: s.description,
  })),
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-x-0 top-0 z-[90] flex justify-center px-4"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div
          className={`mt-3 flex w-full max-w-7xl items-center justify-between rounded-2xl border border-border/60 px-4 transition-all duration-300 sm:px-6 ${
            scrolled
              ? 'glass h-14 shadow-lg shadow-primary/5'
              : 'h-16 bg-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
                <Image
                src="/logo-1-1-min-2.png"
                alt="Monetta India"
                width={240}
                height={60}
                priority
                className="h-10 md:h-11 lg:h-14 w-auto"
              />
            </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const hasMenu = link.label in megaMenus
              return (
                <div
                  key={link.label}
                  onMouseEnter={() =>
                    setActiveMenu(hasMenu ? link.label : null)
                  }
                  className="relative"
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                    {hasMenu && <ChevronDown className="size-3.5" />}
                  </a>
                </div>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex size-9 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Search"
            >
              <Search className="size-[18px]" />
            </button>
            <a
              href="https://wa.me/919582178907?text=Hi%20Monetta%2C%20I%27d%20like%20a%20consultation"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 rounded-md bg-success px-3 py-1 text-sm font-semibold text-success-foreground"
            >
              WhatsApp
            </a>
            <a
              href="tel:+919582178907"
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-secondary/10 px-3 py-1 text-sm font-medium text-foreground"
            >
              +91 95821 78907
            </a>
            <button
              onClick={toggleTheme}
              className="flex size-9 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="size-[18px]" />
              ) : (
                <Moon className="size-[18px]" />
              )}
            </button>
            <a href="/contact" className="hidden sm:block">
              <Button variant="outline" size="lg" className="h-9">
                Book Demo
              </Button>
            </a>
            <a href="/contact" className="hidden md:block">
              <Button
                size="lg"
                className="h-9 bg-accent text-accent-foreground [a]:hover:bg-accent/90"
              >
                Get Consultation
              </Button>
            </a>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="flex size-9 items-center justify-center rounded-lg text-foreground lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mega menu */}
        <AnimatePresence>
          {activeMenu && megaMenus[activeMenu] && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[4.5rem] hidden w-full max-w-3xl rounded-2xl border border-border glass-card p-4 shadow-xl lg:block"
            >
              <div className="grid grid-cols-2 gap-2">
                {megaMenus[activeMenu].map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-start justify-between rounded-xl p-3 transition-colors hover:bg-muted"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-foreground">
                        {item.title}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {item.desc}
                      </span>
                    </span>
                    <ArrowRight className="mt-0.5 size-4 shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-primary/30 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 flex h-full w-72 flex-col gap-1 bg-card p-6 pt-24 shadow-2xl"
            >
              <div className="absolute left-6 top-6 h-10 w-36">
                <Image src="/logo-1-1-min-2.png" alt="Monetta India" fill className="object-contain" />
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <a href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="h-10 w-full">
                    Book Demo
                  </Button>
                </a>
                <a href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="h-10 w-full bg-accent text-accent-foreground">
                    Get Consultation
                  </Button>
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
