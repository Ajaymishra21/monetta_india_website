import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import { SiteFooter } from '@/components/site-footer'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
})
const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = 'https://monetta.in'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Monetta India — Smart Business Accounting & TallyPrime Solutions',
    template: '%s | Monetta India',
  },
  description:
    'Trusted Tally partner since 2003. Monetta India delivers TallyPrime, cloud accounting, business automation, payroll, TDS, compliance, customization, training and support for growing businesses.',
  keywords: [
    'TallyPrime',
    'Tally partner India',
    'cloud accounting',
    'business automation',
    'payroll software',
    'TDS solutions',
    'GST compliance',
    'Tally on cloud',
    'Monetta India',
  ],
  authors: [{ name: 'Monetta India' }],
  creator: 'Monetta India',
  generator: 'Next.js',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Monetta India',
    title: 'Monetta India — Smart Business Accounting & TallyPrime Solutions',
    description:
      'Trusted Tally partner since 2003. TallyPrime, cloud accounting, automation, payroll, compliance and expert support for growing businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monetta India — Smart Business Accounting Solutions',
    description:
      'Trusted Tally partner since 2003. TallyPrime, cloud accounting, automation and compliance solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#08111F' },
  ],
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Monetta India',
  url: siteUrl,
  foundingDate: '2003',
  description:
    'Trusted Tally partner and business software solutions company providing TallyPrime, cloud accounting, automation, payroll and compliance solutions.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Monetta India, 3rd Floor, C, 7/75, Pocket 7, Sector 7, Rohini, Delhi, 110085',
    addressLocality: 'Delhi',
    postalCode: '110085',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: '+91-9582178907',
    email: 's.patel@monettaindia.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${jakarta.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
