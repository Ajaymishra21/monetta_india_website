import { ContactCards } from '@/components/contact-cards'
import { ContactForm } from '@/components/contact-form'

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <section className="mb-12">
        <h1 className="font-heading text-3xl font-extrabold">Contact Monetta India</h1>
        <p className="mt-2 text-muted-foreground">Connect directly with our experts for TallyPrime, Cloud Accounting, Automation, Implementation and Support.</p>
      </section>

      <section className="mb-12">
        <ContactCards />
      </section>

      <section className="mb-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold">Get in touch</h3>
          <p className="mt-2 text-sm text-muted-foreground">Fill the form and our team will reach out within one business day.</p>

          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Our Office</h3>
          <p className="mt-2 text-sm text-muted-foreground">Monetta India<br/>3rd Floor, C, 7/75, Pocket 7, Sector 7, Rohini, Delhi, 110085</p>

          <div className="mt-4">
            <iframe
              title="Monetta India Office Map"
              src="https://www.google.com/maps?q=3rd+Floor,+C,+7/75,+Pocket+7,+Sector+7,+Rohini,+Delhi,+110085&output=embed"
              className="h-64 w-full rounded-lg border"
            />

            <div className="mt-4 text-sm text-muted-foreground">
              <h4 className="font-semibold">Business Hours</h4>
              <p>Mon - Fri: 9:30 AM – 6:30 PM</p>
              <p>Sat: 10:00 AM – 2:00 PM</p>
              <p>Sun: Closed</p>

              <h4 className="mt-3 font-semibold">Response Time</h4>
              <p>We typically respond within 1 business day. Priority support available via WhatsApp and phone.</p>

              <div className="mt-4 flex gap-3">
                <a href="tel:+919582178907" className="rounded-md bg-secondary/10 px-4 py-2 font-semibold">Call Now</a>
                <a href="https://wa.me/919582178907" target="_blank" rel="noreferrer" className="rounded-md bg-success px-4 py-2 font-semibold text-success-foreground">WhatsApp Now</a>
                <a href="mailto:s.patel@monettaindia.com" className="rounded-md bg-card px-4 py-2 font-semibold">Email Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold">Frequently Asked Questions</h3>
        <div className="mt-4 space-y-3 text-sm text-muted-foreground">
          <div>
            <strong>How quickly will you respond?</strong>
            <p>Our sales team responds within one business day; support responses are immediate during business hours.</p>
          </div>
          <div>
            <strong>Do you offer remote implementation?</strong>
            <p>Yes — we provide remote Tally implementations, data migration and training across India.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
