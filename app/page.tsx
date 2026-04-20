import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/home/HeroSection';
import ActivitiesSection from '@/components/home/ActivitiesSection';
import AboutSection from '@/components/home/AboutSection';
import MenuPreviewSection from '@/components/home/MenuPreviewSection';
import GallerySection from '@/components/home/GallerySection';
import EventsSection from '@/components/home/EventsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export const metadata: Metadata = {
  title: 'King Aqua Lounge — Activités & Restaurant à Bamako | Billard, Jet Ski, Grillades',
  description:
    'Meilleure adresse pour vos activités à Bamako : billard, jet ski, balade en bateau et grillades au bord du fleuve Niger. King Aqua Lounge à Baco-Djicoroni — sortie et loisirs à Bamako.',
  alternates: { canonical: 'https://www.king-aqualounge.com/' },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Restaurant',
            name: 'King Aqua Lounge',
            description:
              'Activités et restaurant à Bamako : billard, jet ski, balade en bateau et grillades au bord du fleuve Niger à Baco-Djicoroni. La meilleure sortie loisirs à Bamako.',
            url: 'https://www.king-aqualounge.com',
            telephone: '+223-77-77-74-77',
            email: 'kingaqualoune1@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Baco-Djicoroni',
              addressLocality: 'Bamako',
              addressCountry: 'ML',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '12.600141253488838',
              longitude: '-8.032088474221514',
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '12:00',
                closes: '04:00',
              },
            ],
            servesCuisine: ['Grillades', 'Cuisine africaine', 'Cocktails'],
            priceRange: '€€',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '480',
            },
            amenityFeature: [
              { '@type': 'LocationFeatureSpecification', name: 'Billard', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Salle de billard', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Jet Ski', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Balade en bateau', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Activités nautiques', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Loisirs Bamako', value: true },
            ],
            keywords: 'activités Bamako, billard Bamako, billard Baco-Djicoroni, jet ski Bamako, que faire à Bamako, loisirs Bamako, sortie Bamako, grillades Bamako',
            hasMap: 'https://maps.google.com/?q=King+Aqua+Lounge+Baco-Djicoroni+Bamako',
            image: 'https://www.king-aqualounge.com/images/og-image.jpg',
            sameAs: [
              'https://www.tiktok.com/@kingaqualounge',
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Quels sont les horaires du King Aqua Lounge ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'King Aqua Lounge est ouvert 7 jours sur 7, de 12h00 à 04h00 du matin.',
                },
              },
              {
                '@type': 'Question',
                name: 'Quelles activités propose King Aqua Lounge ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'King Aqua Lounge propose du billard, du jet ski, des balades en bateau sur le fleuve Niger, ainsi qu\'un restaurant avec grillades et cocktails.',
                },
              },
              {
                '@type': 'Question',
                name: 'Comment réserver une table ou une activité au King Aqua Lounge ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Vous pouvez réserver en appelant le +223 77 77 74 77, par email à kingaqualoune1@gmail.com, ou via le formulaire de contact sur notre site.',
                },
              },
              {
                '@type': 'Question',
                name: 'Où se trouve King Aqua Lounge à Bamako ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'King Aqua Lounge est situé à Baco-Djicoroni, au bord du fleuve Niger, à Bamako, Mali.',
                },
              },
            ],
          }),
        }}
      />

      <HeroSection />
      <ActivitiesSection />
      <AboutSection />
      <MenuPreviewSection />
      <GallerySection />
      <EventsSection />
      <TestimonialsSection />

      {/* FAB flottant */}
      <Link href="/contact" className="fab" aria-label="Nous contacter">
        <span aria-hidden="true">✦</span>
        Contact
      </Link>
    </>
  );
}
