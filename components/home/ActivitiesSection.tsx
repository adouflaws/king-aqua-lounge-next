import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { activities } from '@/lib/data';

export default function ActivitiesSection() {
  return (
    <section
      className="section-cream py-20 lg:py-28"
      id="activites"
      aria-labelledby="act-title"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-up">
          <p
            className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-3"
            style={{ letterSpacing: '0.2em' }}
          >
            Notre univers
          </p>
          <h2 id="act-title" className="font-serif text-4xl sm:text-5xl text-[oklch(12%_0.005_60)] mb-4">
            Activités à Bamako
          </h2>
          <div className="divider-gold max-w-xs mx-auto my-5">
            <span className="text-[var(--color-gold)] px-3 text-sm">◆</span>
          </div>
          <p className="text-[var(--color-text-muted-kal)] max-w-xl mx-auto leading-relaxed">
            La meilleure adresse pour vos loisirs à Bamako — billard, jet ski, balade en bateau
            et grillades au bord du fleuve Niger à Baco-Djicoroni.
          </p>
        </div>

        {/* Grid 4 cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {activities.map((act, i) => (
            <article
              key={act.id}
              className="img-card h-64 sm:h-80 lg:h-96 rounded-xl group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Image
                src={act.image}
                alt={act.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />

              {/* Contenu overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <Badge
                  className="self-start mb-2 bg-[var(--color-gold)]/20 text-[var(--color-gold)] border-[var(--color-gold)]/30 text-xs backdrop-blur-sm"
                  variant="outline"
                >
                  {act.tag}
                </Badge>
                <h3 className="font-serif text-2xl text-white font-medium mb-1">
                  {act.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-3 line-clamp-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  {act.description}
                </p>
                <Link
                  href={act.link}
                  className="text-[var(--color-gold)] text-xs font-semibold tracking-widest uppercase md:opacity-0 md:group-hover:opacity-100 transition-[opacity,color] duration-300 hover:text-[var(--color-gold-light)]"
                  style={{ letterSpacing: '0.15em' }}
                >
                  {act.linkLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
