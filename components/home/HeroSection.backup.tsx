import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-[oklch(8.5%_0_0)] flex items-center overflow-hidden"
      aria-label="Présentation King Aqua Lounge"
    >
      {/* Fond Marlboro-Gold style — halo radial + rayons dorés */}
      <div className="absolute inset-0 gold-bg pointer-events-none" aria-hidden="true">
        {/* Barres lumineuses diagonales */}
        <div
          className="absolute bg-gradient-to-r from-transparent via-[var(--color-gold)]/[0.10] to-transparent"
          style={{ top: '18%', left: '-10%', width: '75%', height: '1px', transform: 'rotate(14deg)', filter: 'blur(2px)' }}
        />
        <div
          className="absolute bg-gradient-to-r from-transparent via-[var(--color-gold)]/[0.06] to-transparent"
          style={{ top: '38%', left: '-5%', width: '55%', height: '1px', transform: 'rotate(14deg)', filter: 'blur(1.5px)' }}
        />
        <div
          className="absolute bg-gradient-to-r from-transparent via-[var(--color-gold)]/[0.07] to-transparent"
          style={{ top: '62%', left: '5%', width: '45%', height: '1px', transform: 'rotate(14deg)', filter: 'blur(2px)' }}
        />
        {/* Transition bas vers section crème */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[oklch(8.5%_0_0)] to-transparent" />
      </div>

      {/* Particules dorées (CSS) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[
          { top: '12%', left: '6%',   delay: '0s',   dur: '4s'   },
          { top: '68%', left: '4%',   delay: '1s',   dur: '5s'   },
          { top: '28%', left: '14%',  delay: '2s',   dur: '3.5s' },
          { top: '52%', left: '10%',  delay: '0.5s', dur: '6s'   },
          { top: '82%', left: '18%',  delay: '1.5s', dur: '4.5s' },
          { top: '22%', left: '88%',  delay: '0.8s', dur: '5.5s' },
          { top: '45%', left: '92%',  delay: '2.2s', dur: '4s'   },
          { top: '72%', left: '82%',  delay: '1.2s', dur: '3.8s' },
          { top: '8%',  left: '55%',  delay: '3s',   dur: '5s'   },
          { top: '90%', left: '48%',  delay: '0.3s', dur: '4.2s' },
        ].map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              top: p.top,
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.dur,
              width: i % 3 === 0 ? '2px' : i % 3 === 1 ? '4px' : '3px',
              height: i % 3 === 0 ? '2px' : i % 3 === 1 ? '4px' : '3px',
              opacity: i % 2 === 0 ? 0.7 : 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Texte */}
          <div className="reveal-up">
            <p
              className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-6"
              style={{ letterSpacing: '0.2em' }}
            >
              Restaurant &amp; Loisirs à Baco-Djicoroni, Bamako
            </p>
            <h1
              className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-tight mb-3"
              style={{ letterSpacing: '0.04em' }}
            >
              King Aqua Lounge
            </h1>
            <p
              className="font-serif text-xl sm:text-2xl lg:text-3xl text-[var(--color-gold)] italic mb-6"
              style={{ letterSpacing: '0.02em' }}
            >
              L&apos;Art de Vivre à Bamako
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
              Au bord du fleuve à Baco-Djicoroni, nous vous invitons à savourer
              nos grillades, profiter du jet ski, d&apos;une balade en bateau et d&apos;une partie de billard.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/#activites"
                className="inline-flex items-center justify-center bg-[var(--color-gold)] text-[oklch(8.5%_0_0)] font-semibold tracking-widest uppercase text-xs px-8 py-3.5 rounded-full transition-[background-color,box-shadow] duration-300 hover:bg-[var(--color-gold-light)] hover:shadow-[0_0_24px_rgba(201,168,76,0.4)]"
                style={{ letterSpacing: '0.15em' }}
              >
                Nos Activités
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 hover:border-white/60 tracking-widest uppercase text-xs px-8 py-3.5 rounded-full transition-[background-color,border-color] duration-300"
                style={{ letterSpacing: '0.15em' }}
              >
                Voir la carte
              </Link>
            </div>

            {/* Trust metrics */}
            <div className="flex flex-row flex-wrap items-center gap-5 sm:gap-6">
              <div className="text-center">
                <div className="text-[var(--color-gold)] font-serif text-2xl font-semibold">10+</div>
                <div className="text-white/40 text-xs tracking-wide mt-0.5">Ans d&apos;expérience</div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-[var(--color-gold)]/25" aria-hidden="true" />
              <div className="text-center">
                <div className="text-[var(--color-gold)] font-serif text-2xl font-semibold">★ 4.9</div>
                <div className="text-white/40 text-xs tracking-wide mt-0.5">Google Reviews</div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-[var(--color-gold)]/25" aria-hidden="true" />
              <div className="text-center">
                <div className="text-[var(--color-gold)] font-serif text-2xl font-semibold">120+</div>
                <div className="text-white/40 text-xs tracking-wide mt-0.5">Références vins</div>
              </div>
            </div>
          </div>

          {/* Image hero */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[520px] h-[300px] sm:h-[420px] lg:h-[620px]"
            >
              {/* Cadre décoratif doré */}
              <div
                className="absolute -inset-3 border border-[var(--color-gold)]/20 pointer-events-none"
                style={{ borderRadius: '20px 20px 160px 20px' }}
                aria-hidden="true"
              />

              {/* Photo hero.jpg */}
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  borderRadius: '16px 16px 160px 16px',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(201,168,76,0.12)',
                }}
              >
                <Image
                  src="/images/hero.jpg"
                  alt="King Aqua Lounge au bord du fleuve Niger à Baco-Djicoroni, Bamako"
                  fill
                  className="object-cover object-center"
                  style={{ opacity: 0.9 }}
                  priority
                />
              </div>

              {/* Badge rating flottant */}
              <div className="absolute bottom-10 left-2 sm:-left-8 bg-white rounded-xl px-4 py-3 shadow-2xl z-10">
                <div className="text-[var(--color-gold)] text-sm tracking-widest">★★★★★</div>
                <div className="text-[oklch(12%_0.005_60)] text-xs font-semibold mt-0.5">Avis clients</div>
                <div className="text-[oklch(45%_0.02_60)] text-xs">+480 avis Google</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vague basse : transition vers la section crème */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 sm:h-14">
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="oklch(97.5% 0.008 85)"
          />
        </svg>
      </div>
      {/* Note : la section Activités ci-dessous a section-cream comme fond */}
    </section>
  );
}
