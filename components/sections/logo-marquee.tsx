'use client'

const partners = [
  'TallyPrime',
  'GSTN',
  'Microsoft',
  'AWS Cloud',
  'NSDL',
  'ICAI',
  'Razorpay',
  'Zoho',
]

export function LogoMarquee() {
  return (
    <section className="border-y border-border bg-muted/40 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Trusted technology &amp; compliance partners
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12">
            {[...partners, ...partners].map((p, i) => (
              <span
                key={i}
                className="font-heading text-xl font-bold text-foreground/40 transition-colors hover:text-foreground/70"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
