import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { menuPreview } from '@/lib/data';

export default function MenuPreviewSection() {
  return (
    <section
      className="section-cream py-20 lg:py-28"
      id="menu"
      aria-labelledby="menu-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <p
            className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-3"
            style={{ letterSpacing: '0.2em' }}
          >
            Notre carte
          </p>
          <h2
            id="menu-title"
            className="font-serif text-4xl sm:text-5xl text-[oklch(12%_0.005_60)] mb-4"
          >
            Les Créations du Chef
          </h2>
          <div className="divider-gold max-w-xs mx-auto my-5">
            <span className="text-[var(--color-gold)] px-3 text-sm">◆</span>
          </div>
          <p className="text-[var(--color-text-muted-kal)] max-w-xl mx-auto leading-relaxed">
            Chaque assiette est une œuvre éphémère — produits d&apos;exception, techniques maîtrisées.
          </p>
        </div>

        {/* Grid 4 cartes image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {menuPreview.map((item, i) => (
            <article
              key={item.name}
              className="img-card h-72 lg:h-80 rounded-xl group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />

              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <Badge
                  className="self-start mb-2 bg-[var(--color-gold)]/20 text-[var(--color-gold)] border-[var(--color-gold)]/30 text-xs backdrop-blur-sm"
                  variant="outline"
                >
                  {item.tag}
                </Badge>
                <h3 className="font-serif text-xl text-white font-medium mb-1">
                  {item.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
