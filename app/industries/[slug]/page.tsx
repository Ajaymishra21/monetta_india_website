import { notFound } from 'next/navigation'
import { industriesContent } from '@/lib/industry-content'

type PageProps = {
  params: { slug: string }
}

export default function IndustryPage({ params }: PageProps) {
  const item = industriesContent.find((i) => i.slug === params.slug)
  if (!item) return notFound()

  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <section className="mb-8">
        <h1 className="font-heading text-3xl font-extrabold">{item.name}</h1>
        <p className="mt-2 text-muted-foreground">{item.overview}</p>
      </section>

      <section className="mb-8 grid gap-6 lg:grid-cols-3">
        <div className="col-span-2">
          <h3 className="text-lg font-semibold">Industry Challenges</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {item.challenges.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-semibold">Monetta Solutions</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {item.solutions.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-semibold">Recommended Products</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {item.products.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-semibold">Benefits</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {item.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-semibold">Case Studies</h3>
          <p className="mt-2 text-sm text-muted-foreground">Selected case studies and results are available on request. Contact our Sales team for industry-specific examples.</p>

          <h3 className="mt-6 text-lg font-semibold">FAQs</h3>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            {item.faqs.length ? (
              item.faqs.map((f) => (
                <div key={f.q}>
                  <strong>{f.q}</strong>
                  <p>{f.a}</p>
                </div>
              ))
            ) : (
              <p>No frequently asked questions for this industry. Contact us for details.</p>
            )}
          </div>
        </div>

        <aside className="rounded-2xl border border-border bg-card p-6">
          <h4 className="text-lg font-semibold">Contact for {item.name}</h4>
          <p className="mt-2 text-sm text-muted-foreground">Speak with our industry experts for a customised demo and pricing.</p>
          <div className="mt-4 flex flex-col gap-3">
            <a href="tel:+919582178907" className="rounded-md bg-secondary/10 px-4 py-2 font-semibold">Call: +91 95821 78907</a>
            <a href="https://wa.me/919582178907" target="_blank" rel="noreferrer" className="rounded-md bg-success px-4 py-2 font-semibold text-success-foreground">WhatsApp</a>
            <a href="/contact" className="rounded-md bg-accent px-4 py-2 font-semibold text-accent-foreground">Request Demo</a>
          </div>
        </aside>
      </section>
    </main>
  )
}
