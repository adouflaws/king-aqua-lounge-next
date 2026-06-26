import Link from 'next/link';

const faqs = [
  {
    q: 'Quelles activités propose King Aqua Lounge à Bamako ?',
    a: 'King Aqua Lounge propose du jet ski sur le fleuve Niger, des balades en bateau, une salle de billard, des grillades à la braise et des cocktails — tout au bord du fleuve à Baco-Djicoroni, Bamako. Ouvert 7j/7 de 12h à 04h.',
  },
  {
    q: 'Où faire du jet ski à Bamako ?',
    a: 'King Aqua Lounge est l\'adresse de référence pour le jet ski à Bamako. Situé à Baco-Djicoroni au bord du fleuve Niger, nous proposons des sessions encadrées. Contactez-nous au +223 77 77 74 77 pour réserver.',
  },
  {
    q: 'Que faire à Bamako le week-end ?',
    a: 'King Aqua Lounge est la sortie idéale le week-end à Bamako : jet ski, balade en bateau sur le fleuve Niger, billard, grillades et cocktails dans un cadre unique à Baco-Djicoroni. Ouvert samedi et dimanche de 12h à 04h.',
  },
  {
    q: 'Où jouer au billard à Bamako ?',
    a: 'La salle de billard de King Aqua Lounge à Baco-Djicoroni est ouverte 7j/7. Tables professionnelles, ambiance lounge et cocktails — la meilleure adresse pour le billard à Bamako et en bord du fleuve Niger.',
  },
  {
    q: 'Où manger des grillades à Bamako ?',
    a: 'King Aqua Lounge propose les meilleures grillades à Bamako : viandes et poissons braisés à la braise, marinades maison et épices du terroir malien, servis au bord du fleuve Niger à Baco-Djicoroni.',
  },
  {
    q: 'Où faire une balade en bateau sur le fleuve Niger à Bamako ?',
    a: 'Depuis King Aqua Lounge à Baco-Djicoroni, Bamako, vous embarquez pour une balade en bateau sur le fleuve Niger. Couchers de soleil exceptionnels, excursions privatisables sur demande.',
  },
  {
    q: 'Peut-on privatiser une salle pour un événement à Bamako ?',
    a: 'Oui. King Aqua Lounge propose la privatisation totale ou partielle pour anniversaires, mariages, événements d\'entreprise et soirées privées à Bamako. Contactez-nous pour un devis sur mesure.',
  },
  {
    q: 'Quels sont les horaires et l\'adresse de King Aqua Lounge ?',
    a: 'King Aqua Lounge est situé à Baco-Djicoroni, au bord du fleuve Niger, à Bamako (Mali). Ouvert 7 jours sur 7 de 12h00 à 04h00 du matin. Tél. : +223 77 77 74 77.',
  },
];

export default function FaqSection() {
  return (
    <section
      className="bg-[oklch(8.5%_0_0)] py-20 lg:py-28"
      aria-labelledby="faq-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 reveal-up">
          <p
            className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-3"
            style={{ letterSpacing: '0.2em' }}
          >
            Informations pratiques
          </p>
          <h2
            id="faq-title"
            className="font-serif text-4xl sm:text-5xl text-white font-light mb-4"
          >
            Questions <span className="italic">fréquentes</span>
          </h2>
          <div className="divider-gold max-w-xs mx-auto my-5">
            <span className="text-[var(--color-gold)] px-3 text-sm">◆</span>
          </div>
        </div>

        {/* Grille Q&A */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-gold)]/8 rounded-2xl overflow-hidden reveal-up">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[oklch(10%_0_0)] p-7 hover:bg-[oklch(11.5%_0_0)] transition-colors duration-200"
            >
              <p className="text-[var(--color-gold)] font-serif text-base font-medium leading-snug mb-3">
                {faq.q}
              </p>
              <p className="text-white/55 text-sm leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-white/40 text-sm mb-5">
            Une autre question ? Contactez-nous directement.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-[var(--color-gold)]/50 text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[oklch(8.5%_0_0)] tracking-widest uppercase text-xs px-8 py-3.5 rounded-full transition-all duration-300"
            style={{ letterSpacing: '0.15em' }}
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
