import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact & Réservation — King Aqua Lounge, Bamako',
  description:
    'Contactez King Aqua Lounge à Baco-Djicoroni, Bamako via WhatsApp ou email. Adresse, horaires, plan d\'accès et formulaire de contact.',
  alternates: { canonical: 'https://www.king-aqualounge.com/contact' },
  openGraph: {
    title: 'Contact — King Aqua Lounge à Baco-Djicoroni, Bamako',
    description: 'Réservez votre table ou organisez votre événement au King Aqua Lounge, restaurant à Baco-Djicoroni, Bamako.',
    url: 'https://www.king-aqualounge.com/contact',
  },
};

const WHATSAPP_NUMBER = '22377777477';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const contactInfos = [
  {
    Icon: MapPin,
    title: 'Adresse',
    href: 'https://maps.google.com/?q=King+Aqua+Lounge+Baco-Djicoroni+Bamako',
    lines: ['Baco-Djicoroni, Bamako', 'Mali'],
  },
  {
    Icon: Phone,
    title: 'Téléphone',
    href: 'tel:+22377777477',
    lines: ['+223 77 77 74 77'],
  },
  {
    Icon: MessageCircle,
    title: 'WhatsApp',
    href: WHATSAPP_LINK,
    lines: ['+223 77 77 74 77'],
  },
  {
    Icon: Mail,
    title: 'Email',
    href: 'mailto:kingaqualounge1@gmail.com',
    lines: ['kingaqualounge1@gmail.com'],
  },
  {
    Icon: Clock,
    title: 'Horaires',
    href: undefined,
    lines: ['Ouvert 7j/7', '12h00 — 04h00 du matin'],
  },
] as const;

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Restaurant',
            name: 'King Aqua Lounge',
            telephone: '+223-77-77-74-77',
            email: 'kingaqualounge1@gmail.com',
            url: 'https://www.king-aqualounge.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Baco-Djicoroni',
              addressLocality: 'Bamako',
              addressCountry: 'ML',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '12.600141253488838',
              longitude: '-8.032088474221514',
            },
            openingHours: 'Mo-Su 12:00-04:00',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '12:00',
                closes: '04:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday', 'Sunday'],
                opens: '12:00',
                closes: '04:00',
              },
            ],
            hasMap: 'https://maps.google.com/?q=King+Aqua+Lounge+Baco-Djicoroni+Bamako',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.king-aqualounge.com' },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.king-aqualounge.com/contact' },
            ],
          }),
        }}
      />

      {/* Banner */}
      <div className="gold-bg-center pt-32 pb-16 text-center relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4">
          <p
            className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-4"
            style={{ letterSpacing: '0.2em' }}
          >
            King Aqua Lounge — Restaurant à Baco-Djicoroni, Bamako
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light">
            Contact &amp; Accès
          </h1>
          <div className="divider-gold max-w-xs mx-auto my-6">
            <span className="text-[var(--color-gold)] px-3 text-sm">◆</span>
          </div>
          <p className="text-white/60 text-sm max-w-sm mx-auto leading-relaxed">
            Au bord du fleuve Niger — ouvert 7j/7 de 12h à 04h du matin.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" fill="oklch(97.5% 0.008 85)" />
          </svg>
        </div>
      </div>

      {/* Contenu principal */}
      <section className="bg-[var(--color-cream)] py-16 lg:py-24" aria-labelledby="contact-title">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Infos contact */}
            <div>
              <h2
                id="contact-title"
                className="font-serif text-3xl sm:text-4xl text-[oklch(12%_0.005_60)] leading-tight mb-3"
              >
                Venez nous<br />
                <span className="italic font-light">rendre visite</span>
              </h2>
              <p className="text-[var(--color-text-muted-kal)] mb-10 leading-relaxed text-sm">
                Situé à Baco-Djicoroni, au bord du fleuve Niger, King Aqua Lounge vous accueille
                dans un cadre d&apos;exception.
              </p>

              <div className="space-y-8">
                {contactInfos.map(({ Icon, title, href, lines }) => (
                  <div key={title} className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} className="text-[var(--color-gold)]" strokeWidth={1.5} />
                    </div>
                    <div className="pt-0.5">
                      <p className="text-[0.65rem] tracking-[0.2em] uppercase font-semibold text-[var(--color-gold)] mb-1.5">
                        {title}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-[oklch(12%_0.005_60)] text-sm leading-relaxed hover:text-[var(--color-gold)] transition-colors duration-200"
                        >
                          {lines.map((l, i) => (
                            <span key={i} className="block">{l}</span>
                          ))}
                        </a>
                      ) : (
                        <div className="text-[oklch(12%_0.005_60)] text-sm leading-relaxed">
                          {lines.map((l, i) => (
                            <span key={i} className={`block ${i === 0 ? 'font-semibold' : 'text-[var(--color-text-muted-kal)] mt-0.5'}`}>{l}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center gap-2 bg-[oklch(48%_0.18_145)] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-[oklch(43%_0.18_145)] transition-[background-color] duration-200"
                  style={{ letterSpacing: '0.12em' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nous contacter sur WhatsApp"
                >
                  <MessageCircle size={13} strokeWidth={2} />
                  Nous écrire sur WhatsApp
                </a>
                <a
                  href="https://maps.google.com/?q=King+Aqua+Lounge+Baco-Djicoroni+Bamako"
                  className="inline-flex items-center gap-2 border border-[var(--color-gold)]/40 text-[oklch(12%_0.005_60)] px-6 py-3 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-[var(--color-gold)]/5 transition-[background-color] duration-200"
                  style={{ letterSpacing: '0.12em' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Obtenir l'itinéraire vers King Aqua Lounge sur Google Maps"
                >
                  <MapPin size={13} strokeWidth={2} />
                  Itinéraire
                </a>
              </div>
            </div>

            {/* Formulaire */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Carte — pleine largeur en bas */}
      <div className="w-full h-80 lg:h-96 border-t border-[var(--color-gold)]/10">
        <iframe
          src="https://maps.google.com/maps?q=12.600141253488838,-8.032088474221514&z=16&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation King Aqua Lounge à Baco-Djicoroni, Bamako sur Google Maps"
        />
      </div>

      <Link href="/menu" className="fab" aria-label="Voir la carte">
        La carte
      </Link>
    </>
  );
}
