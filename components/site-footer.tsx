import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-background/50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3">
            <div className="relative h-10 w-28">
              <Image src="/logo-1-1-min-2.png" alt="Monetta India" fill className="object-contain" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold">Monetta India</h4>
              <p className="mt-2 text-sm text-muted-foreground">3rd Floor, C, 7/75, Pocket 7, Sector 7, Rohini, Delhi, 110085</p>
            </div>
          </div>
          <div>
            <h5 className="font-semibold">Contact</h5>
            <div className="mt-2 text-sm">
              <a href="tel:+919582178907" className="flex items-center gap-2"><Phone className="size-4"/> +91 95821 78907</a>
              <a href="tel:+919582178940" className="flex items-center gap-2 mt-1"><Phone className="size-4"/> +91 95821 78940</a>
                  <a href="mailto:s.patel@monettaindia.com" className="flex items-center gap-2 mt-1"><Mail className="size-4"/> s.patel@monettaindia.com</a>
            </div>
          </div>
          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li><a href="/industries">Industries</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/#services">Services</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Follow Us</h5>
            <div className="mt-2 flex gap-3">
              <a href="https://www.instagram.com/monetta_india" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md px-3 py-1 text-sm">
                <span className="text-lg">📸</span> Instagram
              </a>
              <a href="https://www.linkedin.com/company/monetta-software-solutions-pvt-ltd/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md px-3 py-1 text-sm">
                <span className="text-sm font-semibold">in</span> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Monetta India. All rights reserved.</div>
      </div>
    </footer>
  )
}
