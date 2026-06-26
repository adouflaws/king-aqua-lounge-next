import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const eventTypes = [
  {
    num: '01',
    title: 'Célébrations & Anniversaires',
    desc: "Dîner romantique, anniversaire, demande en mariage — chaque instant rendu inoubliable.",
  },
  {
    num: '02',
    title: "Dîners d'Affaires",
    desc: "Salon privé, équipement audiovisuel, service discret — le cadre idéal pour vos rencontres professionnelles.",
  },
  {
    num: '03',
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

          {/* Visuel éditorial */}
          <div className="relative reveal-up">
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[oklch(8.5%_0_0)]"
              role="img"
              aria-label="Espace privatisable du King Aqua Lounge pour événements"
            >
              {/* Grille dorée subtile */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(oklch(72% 0.135 78 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(72% 0.135 78 / 0.04) 1px, transparent 1px)`,
                  backgroundSize: '44px 44px',
                }}
              />
              {/* Dégradé central */}
              <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-[var(--color-gold)]/8 via-transparent to-transparent" />

              {/* Cadres de coin */}
              <div className="absolute top-7 left-7 w-10 h-10 border-t border-l border-[var(--color-gold)]/25" aria-hidden="true" />
              <div className="absolute top-7 right-7 w-10 h-10 border-t border-r border-[var(--color-gold)]/25" aria-hidden="true" />
              <div className="absolute bottom-7 left-7 w-10 h-10 border-b border-l border-[var(--color-gold)]/25" aria-hidden="true" />
              <div className="absolute bottom-7 right-7 w-10 h-10 border-b border-r border-[var(--color-gold)]/25" aria-hidden="true" />

              {/* Contenu central */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <p className="font-serif text-[5rem] leading-none text-[var(--color-gold)]/12 select-none">K</p>
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <span className="w-8 h-px bg-[var(--color-gold)]/25" />
                    <p className="text-[var(--color-gold)]/40 text-[0.6rem] tracking-[0.35em] uppercase">
                      Espace privatisable
                    </p>
                    <span className="w-8 h-px bg-[var(--color-gold)]/25" />
                  </div>
                  <p className="text-white/15 text-xs mt-3 tracking-widest uppercase">King Aqua Lounge</p>
                </div>
              </div>
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
                    <span className="font-serif text-xs text-[var(--color-gold)]/60 tracking-widest mt-0.5 shrink-0 w-6" aria-hidden="true">
                      {evt.num}
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
