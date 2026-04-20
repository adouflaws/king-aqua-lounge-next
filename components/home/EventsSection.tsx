import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const eventTypes = [
  {
    icon: '💍',
    title: 'Célébrations & Anniversaires',
    desc: "Dîner romantique, anniversaire, demande en mariage — chaque instant rendu inoubliable.",
  },
  {
    icon: '💼',
    title: "Dîners d'Affaires",
    desc: "Salon privé, équipement audiovisuel, service discret — le cadre idéal pour vos rencontres professionnelles.",
  },
  {
    icon: '🥂',
    title: 'Privatisation Totale',
    desc: "Soirée de gala, cocktail dînatoire, réception — nous mettons tout le restaurant à votre disposition.",
  },
];

export default function EventsSection() {
  return (
    <section
      className="section-cream py-20 lg:py-28"
      id="evenements"
      aria-labelledby="events-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Visuel */}
          <div className="relative reveal-up">
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[oklch(8.5%_0_0)]"
              role="img"
              aria-label="Salle privatisée du King Aqua Lounge pour un événement"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/10 to-[oklch(8.5%_0_0)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-serif text-7xl text-[var(--color-gold)]/20">◆</div>
                  <p className="text-white/20 text-sm mt-4 tracking-widest uppercase">Espace privatisable</p>
                </div>
              </div>
            </div>

            {/* Badge convives */}
            <div
              className="absolute -top-4 -right-4 sm:-right-6 bg-[var(--color-gold)] text-[oklch(8.5%_0_0)] rounded-xl px-5 py-4 shadow-xl"
              aria-label="Jusqu'à 80 convives"
            >
              <div className="font-serif text-4xl font-semibold leading-none">80</div>
              <div className="text-[oklch(8.5%_0_0)]/70 text-xs mt-1 leading-tight">Convives<br />max</div>
            </div>
          </div>

          {/* Contenu */}
          <div className="reveal-up">
            <p
              className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Sur mesure &amp; exclusif
            </p>
            <h2
              id="events-title"
              className="font-serif text-4xl sm:text-5xl text-[oklch(12%_0.005_60)] leading-tight mb-4"
            >
              Votre Événement,<br />
              <span className="italic font-light">Notre Savoir-Faire</span>
            </h2>
            <div className="divider-gold max-w-[140px] mb-6">
              <span className="text-[var(--color-gold)] px-2 text-sm">◆</span>
            </div>
            <p className="text-[var(--color-text-muted-kal)] leading-relaxed mb-8">
              Notre équipe dédiée orchestre chaque détail — décoration florale,
              menu personnalisé, accord mets &amp; vins, musique live — pour que
              votre soirée soit exactement ce que vous imaginez.
            </p>

            {/* Types d'événements */}
            <div className="space-y-5 mb-8">
              {eventTypes.map((evt, i) => (
                <div key={evt.title}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl leading-none mt-0.5" aria-hidden="true">
                      {evt.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-[oklch(12%_0.005_60)] text-sm mb-1">
                        {evt.title}
                      </p>
                      <p className="text-[var(--color-text-muted-kal)] text-sm leading-relaxed">
                        {evt.desc}
                      </p>
                    </div>
                  </div>
                  {i < eventTypes.length - 1 && (
                    <Separator className="mt-5 bg-[var(--color-gold)]/15" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[var(--color-gold)] text-[oklch(8.5%_0_0)] hover:bg-[var(--color-gold-light)] font-semibold tracking-widest uppercase text-xs px-8 py-3.5 rounded-full transition-[background-color] duration-300"
                style={{ letterSpacing: '0.15em' }}
              >
                Demander un devis
              </Link>
              <a
                href="tel:+22377777477"
                className="inline-flex items-center justify-center border border-[oklch(12%_0.005_60)]/30 text-[oklch(12%_0.005_60)] hover:bg-[oklch(12%_0.005_60)]/5 tracking-widest uppercase text-xs px-8 py-3.5 rounded-full transition-[background-color,border-color] duration-300"
                style={{ letterSpacing: '0.15em' }}
              >
                Nous appeler
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
