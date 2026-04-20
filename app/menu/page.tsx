import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MenuItemRow from '@/components/menu/MenuItemRow';
import {
  entreesFroides,
  entreesChaudes,
  brochettes,
  grillades,
  volailles,
  spaghettis,
  accompagnements,
  pizza,
  fastFood,
  desserts,
  boissonsChaudes,
  mocktails,
  cocktails,
  boissons,
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'La Carte — King Aqua Lounge, Grillades & Restaurant à Baco-Djicoroni, Bamako',
  description:
    'Découvrez la carte officielle du King Aqua Lounge à Baco-Djicoroni, Bamako : entrées, grillades, brochettes, pizzas, fast-food, desserts, cocktails et boissons.',
  alternates: { canonical: 'https://www.king-aqualounge.com/menu' },
  openGraph: {
    title: 'La Carte — King Aqua Lounge à Baco-Djicoroni',
    description: 'Entrées, grillades, brochettes, pizzas, cocktails et desserts au King Aqua Lounge, Baco-Djicoroni Bamako.',
    url: 'https://www.king-aqualounge.com/menu',
  },
};

function SubHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mt-10 mb-1 first:mt-0">
      <p className="text-[var(--color-gold)] text-[10px] sm:text-xs tracking-[0.2em] uppercase font-sans font-semibold whitespace-nowrap">
        {title}
      </p>
      <div className="flex-1 h-px bg-[var(--color-gold)]/15" />
    </div>
  );
}

type ImgData = { src: string; alt: string };

function PhotoStrip({ images }: { images: ImgData[] }) {
  const [main, secondary] = images;
  return (
    <>
      {/* Mobile : photo unique en banner */}
      <div
        className="lg:hidden relative rounded-2xl overflow-hidden mb-6 shadow-xl shadow-black/50 ring-1 ring-[var(--color-gold)]/15"
        role="img"
        aria-label={main.alt}
        style={{
          height: '200px',
          backgroundImage: `url(${main.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Desktop : deux photos en colonne sticky */}
      <div
        className="hidden lg:flex lg:flex-col lg:w-[30%] lg:shrink-0 lg:gap-3"
        style={{ position: 'sticky', top: '6rem', alignSelf: 'flex-start' }}
      >
        <div
          className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/50 ring-1 ring-[var(--color-gold)]/15"
          role="img"
          aria-label={main.alt}
          style={{
            height: '280px',
            backgroundImage: `url(${main.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {secondary && (
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/50 ring-1 ring-[var(--color-gold)]/15"
            role="img"
            aria-label={secondary.alt}
            style={{
              height: '190px',
              backgroundImage: `url(${secondary.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        )}
      </div>
    </>
  );
}

export default function MenuPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Restaurant',
            name: 'King Aqua Lounge',
            telephone: '+223-77-77-74-77',
            url: 'https://www.king-aqualounge.com',
            servesCuisine: ['Grillades', 'Cuisine malienne', 'Pizza', 'Cocktails', 'Fast-Food'],
            hasMenu: 'https://www.king-aqualounge.com/menu',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '12:00',
                closes: '04:00',
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: 'https://www.king-aqualounge.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'La Carte',
                item: 'https://www.king-aqualounge.com/menu',
              },
            ],
          }),
        }}
      />

      {/* Banner hero */}
      <div className="gold-bg-center pt-32 pb-16 text-center relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4">
          <p
            className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-4"
            style={{ letterSpacing: '0.2em' }}
          >
            King Aqua Lounge — Restaurant à Baco-Djicoroni, Bamako
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl sm:text-6xl text-white font-light">
            Notre Carte
          </h1>
          <div className="divider-gold max-w-xs mx-auto my-6">
            <span className="text-[var(--color-gold)] px-3 text-sm">◆</span>
          </div>
          <p className="text-white/60 text-sm font-sans max-w-md mx-auto">
            Entrées · Grillades · Pizza · Desserts · Cocktails &amp; Boissons
          </p>
        </div>
        {/* Transition vers fond sombre */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" fill="oklch(8.5% 0 0)" />
          </svg>
        </div>
      </div>

      {/* Menu — fond sombre, layout deux colonnes */}
      <section className="section-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="entrees" className="w-full">

            {/* Onglets */}
            <TabsList className="flex flex-wrap gap-2 h-auto bg-transparent mb-16 justify-center">
              {[
                { value: 'entrees',   label: 'Entrées',   labelFull: 'Entrées' },
                { value: 'grillades', label: 'Grillades', labelFull: 'Grillades & Plats' },
                { value: 'pizza',     label: 'Pizza',     labelFull: 'Pizza & Fast-Food' },
                { value: 'desserts',  label: 'Desserts',  labelFull: 'Desserts & Cafés' },
                { value: 'boissons',  label: 'Boissons',  labelFull: 'Cocktails & Boissons' },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="px-3 py-2 sm:px-5 sm:py-2.5 rounded-full border border-[var(--color-gold)]/20 text-xs tracking-widest uppercase font-medium data-[state=active]:bg-[var(--color-gold)] data-[state=active]:text-[oklch(8.5%_0_0)] data-[state=active]:border-[var(--color-gold)] text-white/40 hover:text-[var(--color-gold)] transition-all duration-200"
                  style={{ letterSpacing: '0.1em' }}
                >
                  <span className="sm:hidden">{tab.label}</span>
                  <span className="hidden sm:inline">{tab.labelFull}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* ── ENTRÉES ─────────────────────────────────────────────────── */}
            <TabsContent value="entrees">
              <div className="lg:flex lg:gap-16 lg:items-start">
                <PhotoStrip images={[
                  {
                    src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=90',
                    alt: 'Salade fraîche au King Aqua Lounge',
                  },
                  {
                    src: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=90',
                    alt: 'Entrée chaude au King Aqua Lounge',
                  },
                ]} />
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif text-2xl sm:text-3xl text-white mb-8 lg:hidden">Nos Entrées</h2>
                  <SubHeader title="Entrées Froides" />
                  {entreesFroides.map((item) => (
                    <MenuItemRow key={item.name} {...item} />
                  ))}
                  <SubHeader title="Entrées Chaudes" />
                  {entreesChaudes.map((item) => (
                    <MenuItemRow key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* ── GRILLADES & PLATS ────────────────────────────────────────── */}
            <TabsContent value="grillades">
              <div className="lg:flex lg:gap-16 lg:items-start">
                <PhotoStrip images={[
                  {
                    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=90',
                    alt: 'Brochette de gambas grillées — King Aqua Lounge',
                  },
                  {
                    src: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=90',
                    alt: 'Côte de bœuf grillée — King Aqua Lounge',
                  },
                ]} />
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif text-2xl sm:text-3xl text-white mb-8 lg:hidden">Grillades &amp; Plats</h2>
                  <SubHeader title="Brochettes" />
                  {brochettes.map((item) => (
                    <MenuItemRow key={item.name} {...item} />
                  ))}
                  <SubHeader title="Grillades & Spécialités" />
                  {grillades.map((item) => (
                    <MenuItemRow key={item.name} {...item} />
                  ))}
                  <SubHeader title="Volailles" />
                  {volailles.map((item) => (
                    <MenuItemRow key={item.name} {...item} />
                  ))}
                  <SubHeader title="Spaghettis" />
                  {spaghettis.map((item) => (
                    <MenuItemRow key={item.name} {...item} />
                  ))}
                  <SubHeader title="Accompagnements" />
                  {accompagnements.map((item) => (
                    <MenuItemRow key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* ── PIZZA & FAST-FOOD ─────────────────────────────────────────── */}
            <TabsContent value="pizza">
              <div className="lg:flex lg:gap-16 lg:items-start">
                <PhotoStrip images={[
                  {
                    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=90',
                    alt: 'Pizza artisanale — King Aqua Lounge',
                  },
                  {
                    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90',
                    alt: 'Hamburger — King Aqua Lounge',
                  },
                ]} />
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif text-2xl sm:text-3xl text-white mb-8 lg:hidden">Pizza &amp; Fast-Food</h2>
                  <SubHeader title="Pizzas" />
                  {pizza.map((item) => (
                    <MenuItemRow key={item.name} {...item} />
                  ))}
                  <SubHeader title="Fast-Food" />
                  {fastFood.map((item) => (
                    <MenuItemRow key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* ── DESSERTS & CAFÉS ─────────────────────────────────────────── */}
            <TabsContent value="desserts">
              <div className="lg:flex lg:gap-16 lg:items-start">
                <PhotoStrip images={[
                  {
                    src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=90',
                    alt: 'Dessert au chocolat — King Aqua Lounge',
                  },
                  {
                    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=90',
                    alt: 'Café et boissons chaudes — King Aqua Lounge',
                  },
                ]} />
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif text-2xl sm:text-3xl text-white mb-8 lg:hidden">Desserts &amp; Cafés</h2>
                  <SubHeader title="Desserts" />
                  {desserts.map((item) => (
                    <MenuItemRow key={item.name} {...item} />
                  ))}
                  <SubHeader title="Boissons Chaudes" />
                  {boissonsChaudes.map((item) => (
                    <MenuItemRow key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* ── COCKTAILS & BOISSONS ──────────────────────────────────────── */}
            <TabsContent value="boissons">
              <div className="lg:flex lg:gap-16 lg:items-start">
                <PhotoStrip images={[
                  {
                    src: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=90',
                    alt: 'Tropic King mocktail signature — King Aqua Lounge',
                  },
                  {
                    src: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=900&q=90',
                    alt: 'Cocktails artisanaux — King Aqua Lounge',
                  },
                ]} />
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif text-2xl sm:text-3xl text-white mb-8 lg:hidden">Cocktails &amp; Boissons</h2>
                  <SubHeader title="Mocktails" />
                  {mocktails.map((item) => (
                    <MenuItemRow key={item.name} {...item} />
                  ))}
                  <SubHeader title="Cocktails" />
                  {cocktails.map((item) => (
                    <MenuItemRow key={item.name} {...item} />
                  ))}
                  <SubHeader title="Boissons Fraîches" />
                  {boissons.map((item) => (
                    <MenuItemRow key={item.name} {...item} />
                  ))}

                  {/* CTA */}
                  <div className="text-center mt-14 pb-4">
                    <p className="font-serif text-xl sm:text-2xl text-white/80 mb-6 italic">
                      Prêt à vivre l&apos;expérience King Aqua ?
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-[var(--color-gold)] text-[oklch(8.5%_0_0)] hover:bg-[var(--color-gold-light)] font-semibold tracking-widest uppercase text-xs px-8 py-3.5 rounded-full transition-[background-color] duration-300"
                      style={{ letterSpacing: '0.15em' }}
                    >
                      Réserver une table
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </section>

      {/* FAB */}
      <Link href="/contact" className="fab" aria-label="Nous contacter">
        <span aria-hidden="true">✦</span>
        Contact
      </Link>
    </>
  );
}
