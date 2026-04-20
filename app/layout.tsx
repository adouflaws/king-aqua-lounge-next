import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.king-aqualounge.com'),
  title: 'King Aqua Lounge — Restaurant, Grillades & Loisirs, Bamako',
  description:
    'King Aqua Lounge à Baco-Djicoroni, Bamako : restaurant ouvert 7j/7 de 12h à 04h — grillades, jet ski, balade en bateau et billard au bord du fleuve Niger.',
  keywords:
    'activités Bamako, que faire à Bamako, loisirs Bamako, billard Bamako, billard Baco-Djicoroni, salle de billard Bamako, jet ski Bamako, balade bateau Bamako, activités bord du fleuve Niger, restaurant activités Bamako, sortie Bamako, grillades Bamako, restaurant Baco-Djicoroni, King Aqua Lounge, réservation Bamako',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.king-aqualounge.com/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.king-aqualounge.com/',
    siteName: 'King Aqua Lounge',
    title: 'King Aqua Lounge — Grillades, Jet Ski & Lounge à Baco-Djicoroni',
    description:
      'Restaurant lounge, grillades, jet ski, bateau et billard à Baco-Djicoroni, Bamako. Une expérience unique au bord du fleuve Niger.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'King Aqua Lounge — Restaurant & Loisirs à Baco-Djicoroni',
    description: 'Grillades, jet ski, bateau et billard au bord du fleuve à Baco-Djicoroni, Bamako',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#0d0d0d" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'King Aqua Lounge',
              url: 'https://www.king-aqualounge.com',
              inLanguage: 'fr',
              description: 'Restaurant, grillades et loisirs à Baco-Djicoroni, Bamako — billard, jet ski, balade en bateau au bord du fleuve Niger.',
            }),
          }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Raleway:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
