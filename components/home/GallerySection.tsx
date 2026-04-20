import Image from 'next/image';
import { galleryImages } from '@/lib/data';

export default function GallerySection() {
  return (
    <section
      className="gold-bg py-20 lg:py-28"
      aria-labelledby="gallery-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 reveal-up">
          <p
            className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-3"
            style={{ letterSpacing: '0.2em' }}
          >
            Notre cadre
          </p>
          <h2
            id="gallery-title"
            className="font-serif text-4xl sm:text-5xl text-white mb-4"
          >
            L&apos;Atmosphère King Aqua
          </h2>
          <div className="divider-gold max-w-xs mx-auto mt-5">
            <span className="text-[var(--color-gold)] px-3 text-sm">◆</span>
          </div>
        </div>

        {/* Layout éditorial : grande photo gauche + 3 photos empilées droite */}
        <div className="flex flex-col lg:flex-row gap-2">

          {/* Photo 1 — grande portrait (gauche) */}
          <div
            className="relative overflow-hidden rounded-2xl group h-72 lg:h-[560px] lg:w-[55%] shrink-0"
            style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,168,76,0.14)' }}
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-[var(--color-gold)]/0 group-hover:ring-[var(--color-gold)]/35 transition-all duration-500" />
            <div className="absolute bottom-5 left-6 flex items-center gap-3">
              <span className="text-[var(--color-gold)]/60 text-[10px] tracking-[0.25em] uppercase font-semibold">01</span>
              <span className="w-6 h-px bg-[var(--color-gold)]/40" />
              <span className="text-white/70 text-xs tracking-widest uppercase group-hover:text-[var(--color-gold)] transition-colors duration-300">
                {galleryImages[0].caption}
              </span>
            </div>
          </div>

          {/* Colonne droite : 3 photos empilées */}
          <div className="flex flex-col gap-2 lg:flex-1">
            {[galleryImages[1], galleryImages[2], galleryImages[3]].map((img, i) => (
              <div
                key={img.src}
                className="relative overflow-hidden rounded-2xl group h-52 lg:flex-1"
                style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,168,76,0.14)' }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-[var(--color-gold)]/0 group-hover:ring-[var(--color-gold)]/35 transition-all duration-500" />
                <div className="absolute bottom-4 left-5 flex items-center gap-3">
                  <span className="text-[var(--color-gold)]/60 text-[10px] tracking-[0.25em] uppercase font-semibold">0{i + 2}</span>
                  <span className="w-5 h-px bg-[var(--color-gold)]/40" />
                  <span className="text-white/70 text-xs tracking-widest uppercase group-hover:text-[var(--color-gold)] transition-colors duration-300">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
