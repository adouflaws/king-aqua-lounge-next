import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact & Réservation — King Aqua Lounge, Restaurant à Baco-Djicoroni, Bamako',
  description:
    'Contactez King Aqua Lounge à Baco-Djicoroni, Bamako pour une réservation, un événement privé ou toute question. Adresse, horaires, formulaire de contact.',
  alternates: { canonical: 'https://www.king-aqualounge.com/contact' },
  openGraph: {
    title: 'Contact — King Aqua Lounge à Baco-Djicoroni, Bamako',
    description: 'Réservez votre table ou organisez votre événement au King Aqua Lounge, restaurant à Baco-Djicoroni, Bamako.',
    url: 'https://www.king-aqualounge.com/contact',
  },
};

const contactInfos = [
  {
    icon: '📍',
    title: 'Adresse',
    content: (
      <address className="not-italic text-[var(--color-text-muted-kal)] text-sm leading-relaxed">
        <strong className="text-[oklch(12%_0.005_60)]">King Aqua Lounge</strong>
        <br />
        Baco-Djicoroni, Bamako
        <br />
        Mali
      </address>
    ),
  },
  {
    icon: '📞',
    title: 'Téléphone',
    content: (
      <a
        href="tel:+22377777477"
        className="text-[var(--color-text-muted-kal)] text-sm hover:text-[var(--color-gold)] transition-colors"
      >
        +223 77 77 74 77
      </a>
    ),
  },
  {
    icon: '✉',
    title: 'Email',
    content: (
      <a
        href="mailto:adouflaws@gmail.com"
        className="text-[var(--color-text-muted-kal)] text-sm hover:text-[var(--color-gold)] transition-colors"
      >
        adouflaws@gmail.com
      </a>
    ),
  },
  {
    icon: '🕐',
    title: "Horaires d'ouverture",
    content: (
      <div className="text-[var(--color-text-muted-kal)] text-sm space-y-1">
        <p className="font-semibold text-[oklch(12%_0.005_60)]">Ouvert 7j/7</p>
        <p>12h00 – 04h00 du matin</p>
      </div>
    ),
  },
];

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
            email: 'adouflaws@gmail.com',
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
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: 'https://www.king-aqualounge.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Contact',
                item: 'https://www.king-aqualounge.com/contact',
              },
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
          <h1 className="font-serif text-3xl sm:text-5xl sm:text-6xl text-white font-light">
            Contact &amp; Accès
          </h1>
          <div className="divider-gold max-w-xs mx-auto my-6">
            <span className="text-[var(--color-gold)] px-3 text-sm">◆</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Contenu */}
      <section className="bg-white py-16 lg:py-24" aria-labelledby="contact-title">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Infos contact */}
            <div>
              <h2
                id="contact-title"
                className="font-serif text-3xl text-[oklch(12%_0.005_60)] mb-3"
              >
                Venez nous rendre visite
              </h2>
              <p className="text-[var(--color-text-muted-kal)] mb-10 leading-relaxed">
                Au bord du fleuve Niger à Baco-Djicoroni, King Aqua Lounge vous accueille dans un cadre
                d&apos;exception du mardi au dimanche.
              </p>

              <div className="space-y-7">
                {contactInfos.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center text-xl shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p
                        className="text-xs tracking-widest uppercase font-semibold text-[oklch(12%_0.005_60)] mb-1.5"
                        style={{ letterSpacing: '0.15em' }}
                      >
                        {info.title}
                      </p>
                      {info.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://maps.google.com/?q=King+Aqua+Lounge+Baco-Djicoroni+Bamako"
                  className="inline-flex items-center gap-2 bg-[var(--color-gold)] text-[oklch(8.5%_0_0)] px-6 py-3 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-[background-color] duration-200"
                  style={{ letterSpacing: '0.12em' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Obtenir l'itinéraire vers King Aqua Lounge sur Google Maps"
                >
                  Obtenir l&apos;itinéraire
                </a>
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJXxHNUQ7cotoGRynCEA"
                  className="inline-flex items-center gap-2 border border-[var(--color-gold)]/40 text-[var(--color-gold)] px-6 py-3 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-[var(--color-gold)]/5 transition-[background-color,border-color] duration-200"
                  style={{ letterSpacing: '0.12em' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Laisser un avis Google pour King Aqua Lounge"
                >
                  ★ Laisser un avis Google
                </a>
              </div>
            </div>

            {/* Carte + Formulaire */}
            <div className="flex flex-col gap-8">
              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden border border-[var(--color-gold)]/10 shadow-sm h-64">
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

              {/* Formulaire */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAB */}
      <Link href="/menu" className="fab" aria-label="Voir la carte">
        <span aria-hidden="true">✦</span>
        La carte
      </Link>
    </>
  );
}
