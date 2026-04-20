'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number>(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  const visibleCount = 3;
  const visible = Array.from({ length: visibleCount }, (_, i) =>
    testimonials[(current + i) % testimonials.length]
  );

  return (
    <section
      className="section-cream py-20 lg:py-28"
      aria-labelledby="reviews-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal-up">
          <p
            className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-3"
            style={{ letterSpacing: '0.2em' }}
          >
            Ce que nos hôtes disent
          </p>
          <h2
            id="reviews-title"
            className="font-serif text-4xl sm:text-5xl text-[oklch(12%_0.005_60)] mb-4"
          >
            Avis &amp; Témoignages
          </h2>
          <div className="divider-gold max-w-xs mx-auto my-5">
            <span className="text-[var(--color-gold)] px-3 text-sm">◆</span>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {visible.map((t, i) => (
              <div
                key={t.id}
                className={cn(
                  'bg-white rounded-2xl p-7 shadow-sm border border-[var(--color-gold)]/10 transition-all duration-300',
                  i === 0 ? 'opacity-100 scale-100' : 'opacity-80 scale-[0.98]',
                  'md:block',
                  i >= 2 ? 'hidden md:block' : i >= 1 ? 'hidden sm:block' : ''
                )}
              >
                {/* Étoiles */}
                <div className="text-[var(--color-gold)] text-base mb-4">
                  {'★'.repeat(t.rating)}
                </div>

                {/* Texte */}
                <blockquote className="text-[var(--color-text-muted-kal)] leading-relaxed text-sm italic font-serif text-base mb-6">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                {/* Auteur */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--color-gold)]/15 flex items-center justify-center text-[var(--color-gold)] font-serif font-medium text-base">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[oklch(12%_0.005_60)] text-sm">{t.name}</p>
                    <p className="text-[var(--color-text-muted-kal)] text-xs">{t.location} · {t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contrôles */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              style={{ touchAction: 'manipulation' }}
              className="w-11 h-11 rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[oklch(8.5%_0_0)] active:bg-[var(--color-gold)] active:text-[oklch(8.5%_0_0)] transition-[background-color,color] duration-200"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{ touchAction: 'manipulation' }}
                  className="p-3 flex items-center justify-center"
                  aria-label={`Témoignage ${i + 1}`}
                >
                  <span className={cn(
                    'rounded-full block transition-[width,background-color] duration-200',
                    i === current
                      ? 'w-6 h-2 bg-[var(--color-gold)]'
                      : 'w-2 h-2 bg-[var(--color-gold)]/30'
                  )} />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              style={{ touchAction: 'manipulation' }}
              className="w-11 h-11 rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[oklch(8.5%_0_0)] active:bg-[var(--color-gold)] active:text-[oklch(8.5%_0_0)] transition-[background-color,color] duration-200"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
