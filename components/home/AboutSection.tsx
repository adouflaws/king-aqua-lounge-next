import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const features = [
  'Grillades à la braise',
  'Jet ski & sports nautiques',
  'Balades en bateau',
  'Espace billard & lounge',
];

export default function AboutSection() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      id="a-propos"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative reveal-up">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/apropos.jpg"
                alt="Terrasse du restaurant King Aqua Lounge à Baco-Djicoroni, Bamako"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Badge flottant */}
            <div className="absolute -bottom-5 right-0 sm:-right-5 lg:-right-6 bg-[oklch(8.5%_0_0)] text-white rounded-xl px-5 py-4 shadow-xl border border-[var(--color-gold)]/20">
              <div className="font-serif text-4xl text-[var(--color-gold)] font-light leading-none">10</div>
              <div className="text-white/60 text-xs mt-1 leading-tight">ans<br />d&apos;excellence</div>
            </div>

            {/* Cadre doré */}
            <div className="absolute -inset-3 border border-[var(--color-gold)]/15 rounded-2xl -z-10" />
          </div>

          {/* Texte */}
          <div className="reveal-up">
            <p
              className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-4"
              style={{ letterSpacing: '0.2em' }}
            >
              Notre histoire
            </p>
            <h2
              id="about-title"
              className="font-serif text-4xl sm:text-5xl text-[oklch(12%_0.005_60)] leading-tight mb-5"
            >
              King Aqua Lounge —<br />
              <span className="italic font-light">Restaurant &amp; Loisirs</span>
            </h2>
            <div className="divider-gold max-w-[140px] mb-6">
              <span className="text-[var(--color-gold)] px-2 text-sm">◆</span>
            </div>
            <p className="text-[var(--color-text-muted-kal)] leading-relaxed mb-5">
              Fondé au bord du fleuve Niger à Baco-Djicoroni, Bamako, King Aqua Lounge est
              bien plus qu&apos;un restaurant — c&apos;est un espace de vie unique alliant gastronomie,
              détente et sports nautiques dans un cadre naturel exceptionnel.
            </p>
            <p className="text-[var(--color-text-muted-kal)] leading-relaxed mb-8">
              Nos grillades préparées à la braise, nos jets skis sur le fleuve, nos balades
              en bateau au coucher du soleil et notre espace billard font de chaque visite
              une expérience complète et inoubliable au cœur de Bamako.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-8">
              {features.map((feat) => (
                <Badge
                  key={feat}
                  variant="outline"
                  className="border-[var(--color-gold)]/40 text-[oklch(12%_0.005_60)] bg-[var(--color-gold)]/5 px-3 py-1.5 text-xs"
                >
                  {feat}
                </Badge>
              ))}
            </div>

            <Link
              href="/menu"
              className="inline-flex items-center justify-center bg-[var(--color-gold)] text-[oklch(8.5%_0_0)] hover:bg-[var(--color-gold-light)] font-semibold tracking-widest uppercase text-xs px-8 py-3.5 rounded-full transition-all duration-300"
              style={{ letterSpacing: '0.15em' }}
            >
              Voir la carte
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
