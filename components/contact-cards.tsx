'use client'

import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Card = {
  title: string
  phone: string
  whatsapp: string
  email: string
  role: string
}

const cards: Card[] = [
  {
    title: 'Sales Team',
    phone: '+91 9582178907',
    whatsapp: '919582178907',
    email: 's.patel@monettaindia.com',
    role: 'Sales',
  },
  {
    title: 'Support Team',
    phone: '+91 9582178940',
    whatsapp: '919582178940',
    email: 's.patel@monettaindia.com',
    role: 'Support',
  },
  {
    title: 'Consultation Team',
    phone: '+91 9999618101',
    whatsapp: '919999618101',
    email: 's.patel@monettaindia.com',
    role: 'Consultation',
  },
  {
    title: 'Business Solutions',
    phone: '+91 9999145789',
    whatsapp: '919999145789',
    email: 's.patel@monettaindia.com',
    role: 'Business Solutions',
  },
]

export function ContactCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c) => (
        <div key={c.title} className="rounded-2xl border border-border bg-card p-6">
          <h4 className="text-lg font-semibold">{c.title}</h4>
          <p className="mt-2 text-sm text-muted-foreground">{c.role}</p>

          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a className="inline-flex items-center gap-2" href={`tel:${c.phone.replace(/ /g, '')}`}>
              <Phone className="size-4 text-secondary" /> {c.phone}
            </a>
            <a className="inline-flex items-center gap-2" href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4 text-success" /> WhatsApp
            </a>
            <a className="inline-flex items-center gap-2" href={`mailto:${c.email}`}>
              <Mail className="size-4 text-foreground" /> {c.email}
            </a>
          </div>

          <div className="mt-4">
            <a href="/contact#form">
              <Button size="sm" className="w-full">Quick Contact</Button>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
