import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer
      className="bg-[oklch(8.5%_0_0)] text-white"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Grille 3 colonnes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">

          {/* Colonne marque */}
          <div>
            <p
              className="font-serif text-xl text-white tracking-widest mb-3"
              style={{ letterSpacing: '0.1em' }}
            >
              King Aqua Lounge
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Restaurant, grillades &amp; loisirs à Baco-Djicoroni, Bamako.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.tiktok.com/@kingaqualounge"
                className="w-8 h-8 rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[oklch(8.5%_0_0)] hover:border-[var(--color-gold)] transition-all duration-200"
                aria-label="TikTok King Aqua Lounge"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.95a8.16 8.16 0 0 0 4.77 1.52V7.03a4.85 4.85 0 0 1-1-.34z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-[var(--color-gold)] text-xs tracking-widest uppercase font-semibold mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/#a-propos', label: 'À propos' },
                { href: '/#activites', label: 'Activités' },
                { href: '/menu', label: 'La carte' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[var(--color-gold)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Horaires fusionnés */}
          <div>
            <h3
              className="text-[var(--color-gold)] text-xs tracking-widest uppercase font-semibold mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Infos pratiques
            </h3>
            <div className="text-sm text-white/60 space-y-1 mb-3">
              <p className="text-white/80 font-medium">Ouvert 7j/7 — 12h00 à 04h00</p>
              <p>Baco-Djicoroni, Bamako, Mali</p>
              <a
                href="tel:+22377777477"
                className="hover:text-[var(--color-gold)] transition-colors block"
              >
                +223 77 77 74 77
              </a>
              <a
                href="mailto:adouflaws@gmail.com"
                className="hover:text-[var(--color-gold)] transition-colors block"
              >
                adouflaws@gmail.com
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>© 2026 King Aqua Lounge — Baco-Djicoroni, Bamako. Tous droits réservés.</span>
          <div className="flex gap-4">
            <Link href="/legal" className="hover:text-white/60 transition-colors">Mentions légales</Link>
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
