import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { menuPreview } from '@/lib/data';

export default function MenuPreviewSection() {
  return (
    <section
      className="bg-[oklch(8.5%_0_0)] py-20 lg:py-28"
      id="menu"
      aria-labelledby="menu-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — centré sur fond sombre */}
        <div className="text-center mb-12 reveal-up">
          <p
            className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-3"
            style={{ letterSpacing: '0.2em' }}
          >
            Notre carte
          </p>
          <h2
            id="menu-title"
            className="font-serif text-4xl sm:text-5xl text-white font-light mb-4"
          >
            Les Créations <span className="italic">du Chef</span>
          </h2>
          <div className="divider-gold max-w-xs mx-auto my-5">
            <span className="text-[var(--color-gold)] px-3 text-sm">◆</span>
          </div>
          <p className="text-white/50 max-w-md mx-auto leading-relaxed text-sm">
            Chaque assiette est une œuvre éphémère — produits d&apos;exception, techniques maîtrisées.
          </p>
        </div>

        {/* Grid : 1 grande (2/5) + 3 portraits (1/5 chacune) */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:h-[480px]">

          {/* Grande carte mise en avant */}
          <article className="img-card col-span-2 lg:col-span-2 h-72 lg:h-full rounded-2xl group">
            <Image
              src={menuPreview[0].image}
              alt={menuPreview[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <Badge
                className="self-start mb-3 bg-[var(--color-gold)]/20 text-[var(--color-gold)] border-[var(--color-gold)]/30 text-xs backdrop-blur-sm"
                variant="outline"
              >
                {menuPreview[0].tag}
              </Badge>
              <h3 className="font-serif text-2xl text-white font-medium mb-1.5">
                {menuPreview[0].name}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {menuPreview[0].description}
              </p>
            </div>
          </article>

          {/* 3 cartes portrait */}
          {menuPreview.slice(1).map((item, i) => (
            <article
              key={item.name}
              className="img-card col-span-1 lg:col-span-1 h-60 lg:h-full rounded-2xl group"
              style={{ animationDelay: `${(i + 1) * 80}ms` }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <Badge
                  className="self-start mb-2 bg-[var(--color-gold)]/20 text-[var(--color-gold)] border-[var(--color-gold)]/30 text-xs backdrop-blur-sm"
                  variant="outline"
                >
                  {item.tag}
                </Badge>
                <h3 className="font-serif text-lg text-white font-medium mb-1">
                  {item.name}
                </h3>
                <p className="text-white/65 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal-up">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[oklch(8.5%_0_0)] tracking-widest uppercase text-xs px-10 py-3.5 rounded-full transition-all duration-300"
            style={{ letterSpacing: '0.15em' }}
          >
            Consulter la carte complète
          </Link>
        </div>
      </div>
    </section>
  );
}
