'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now simply log; integrate with backend or form handler later.
    console.log('Contact form submitted', form)
    alert('Thanks — we will contact you shortly.')
  }

  return (
    <form id="form" onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="rounded-md border p-3" required />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="rounded-md border p-3" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="rounded-md border p-3" required />
      <input name="company" value={form.company} onChange={handleChange} placeholder="Company" className="rounded-md border p-3" />
      <select name="industry" value={form.industry} onChange={handleChange} className="rounded-md border p-3">
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
      <select name="service" value={form.service} onChange={handleChange} className="rounded-md border p-3">
        <option value="">Service Required</option>
        <option>Tally Implementation</option>
        <option>Cloud Accounting</option>
        <option>Business Automation</option>
        <option>Support & Maintenance</option>
        <option>Consultation</option>
      </select>
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="col-span-2 rounded-md border p-3" rows={5} />
      <input name="location" value={form.location} onChange={handleChange} placeholder="Office Location" className="rounded-md border p-3 col-span-2" />

      <div className="col-span-2 flex items-center gap-3">
        <Button type="submit" className="bg-accent text-accent-foreground">Submit Enquiry</Button>
        <a href="tel:+919582178907" className="ml-auto text-sm font-semibold text-foreground">Call: +91 95821 78907</a>
      </div>
    </form>
  )
}
