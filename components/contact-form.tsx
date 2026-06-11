'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    industry: '',
    service: '',
    message: '',
    location: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (status) setStatus(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSubmitting) return

    const trimmed = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      industry: form.industry.trim(),
      service: form.service.trim(),
      message: form.message.trim(),
      location: form.location.trim(),
    }

    if (!trimmed.name || !trimmed.phone || !trimmed.email || !trimmed.industry || !trimmed.service || !trimmed.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' })
      return
    }

    if (!emailPattern.test(trimmed.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...trimmed,
          submittedAt: new Date().toISOString(),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send your enquiry right now.')
      }

      setStatus({ type: 'success', message: 'Thank you — your enquiry has been sent successfully.' })
      setForm({
        name: '',
        phone: '',
        email: '',
        company: '',
        industry: '',
        service: '',
        message: '',
        location: '',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong while sending your enquiry.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form id="form" onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2" noValidate>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="rounded-md border p-3" required />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="rounded-md border p-3" required />
      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="rounded-md border p-3" required />
      <input name="company" value={form.company} onChange={handleChange} placeholder="Company" className="rounded-md border p-3" />
      <select name="industry" value={form.industry} onChange={handleChange} className="rounded-md border p-3" required>
        <option value="">Select Industry</option>
        <option>Manufacturing</option>
        <option>Retail</option>
        <option>Wholesale</option>
        <option>Distribution</option>
        <option>Healthcare</option>
        <option>Education</option>
        <option>Logistics</option>
        <option>Services</option>
        <option>E-Commerce</option>
      </select>
      <select name="service" value={form.service} onChange={handleChange} className="rounded-md border p-3" required>
        <option value="">Service Required</option>
        <option>Tally Implementation</option>
        <option>Cloud Accounting</option>
        <option>Business Automation</option>
        <option>Support & Maintenance</option>
        <option>Consultation</option>
      </select>
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="col-span-2 rounded-md border p-3" rows={5} required />
      <input name="location" value={form.location} onChange={handleChange} placeholder="Office Location" className="rounded-md border p-3 col-span-2" />

      <div className="col-span-2 flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={isSubmitting} className="bg-accent text-accent-foreground disabled:cursor-not-allowed disabled:opacity-70">
          {isSubmitting ? 'Sending…' : 'Submit Enquiry'}
        </Button>
        {status && (
          <p className={`text-sm ${status.type === 'success' ? 'text-emerald-600' : 'text-red-600'}`}>{status.message}</p>
        )}
        <a href="tel:+919582178907" className="ml-auto text-sm font-semibold text-foreground">Call: +91 95821 78907</a>
      </div>
    </form>
  )
}
