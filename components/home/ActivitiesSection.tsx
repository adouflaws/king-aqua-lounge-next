import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { activities } from '@/lib/data';

export default function ActivitiesSection() {
  return (
    <section
      className="section-cream py-20 lg:py-28"
      id="activites"
      aria-labelledby="act-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — aligné à gauche, sous-titre à droite */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 reveal-up">
          <div>
            <p
              className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-3"
              style={{ letterSpacing: '0.2em' }}
            >
              Notre univers
            </p>
            <h2
              id="act-title"
              className="font-serif text-4xl sm:text-5xl text-[oklch(12%_0.005_60)] leading-tight"
            >
              Activités<br />
              <span className="italic font-light">à Bamako</span>
            </h2>
          </div>
          <div className="hidden lg:block w-px h-16 bg-[var(--color-gold)]/20 mx-8" aria-hidden="true" />
          <p className="text-[var(--color-text-muted-kal)] max-w-xs leading-relaxed mt-4 lg:mt-0 text-sm">
            La meilleure adresse pour vos loisirs — billard, jet ski, balade en bateau
            et grillades au bord du fleuve Niger.
          </p>
        </div>

        {/* Bento grid — grand à gauche + 3 à droite */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:grid-rows-2 lg:h-[560px]">
          {activities.map((act, i) => {
            let sizeClass = '';
            if (i === 0) sizeClass = 'col-span-2 lg:row-span-2 h-80 sm:h-96 lg:h-full';
            else if (i === 1) sizeClass = 'col-span-2 h-52 lg:h-full';
            else sizeClass = 'col-span-1 h-52 lg:h-full';

            return (
              <article
                key={act.id}
                className={`img-card rounded-2xl group ${sizeClass}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <Image
                  src={act.image}
                  alt={act.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <Badge
                    className="self-start mb-2 bg-[var(--color-gold)]/20 text-[var(--color-gold)] border-[var(--color-gold)]/30 text-xs backdrop-blur-sm"
                    variant="outline"
                  >
                    {act.tag}
                  </Badge>
                  <h3 className={`font-serif text-white font-medium mb-1 ${i === 0 ? 'text-3xl' : 'text-xl'}`}>
                    {act.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {act.description}
                  </p>
                  <Link
                    href={act.link}
                    className="text-[var(--color-gold)] text-xs font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-[opacity,color] duration-300 hover:text-[var(--color-gold-light)]"
                    style={{ letterSpacing: '0.15em' }}
                  >
                    {act.linkLabel}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
