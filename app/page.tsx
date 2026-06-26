import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/home/HeroSection';
import ActivitiesSection from '@/components/home/ActivitiesSection';
import AboutSection from '@/components/home/AboutSection';
import MenuPreviewSection from '@/components/home/MenuPreviewSection';
import GallerySection from '@/components/home/GallerySection';
import EventsSection from '@/components/home/EventsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata: Metadata = {
  title: 'King Aqua Lounge — Billard, Jet Ski & Grillades à Bamako',
  description:
    'Billard, jet ski, balade en bateau et grillades au bord du fleuve Niger — King Aqua Lounge à Baco-Djicoroni, Bamako. Ouvert 7j/7, 12h–04h.',
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
            email: 'kingaqualounge1@gmail.com',
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
            openingHours: 'Mo-Su 12:00-04:00',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '12:00',
                closes: '04:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday', 'Sunday'],
                opens: '12:00',
                closes: '04:00',
              },
            ],
            servesCuisine: ['Grillades', 'Cuisine africaine', 'Cocktails'],
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
                name: 'Quelles activités propose King Aqua Lounge à Bamako ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'King Aqua Lounge propose du jet ski sur le fleuve Niger, des balades en bateau, une salle de billard, des grillades à la braise et des cocktails — tout au bord du fleuve à Baco-Djicoroni, Bamako. Ouvert 7j/7 de 12h à 04h.',
                },
              },
              {
                '@type': 'Question',
                name: 'Où faire du jet ski à Bamako ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'King Aqua Lounge est l\'adresse de référence pour le jet ski à Bamako. Situé à Baco-Djicoroni au bord du fleuve Niger, nous proposons des sessions encadrées. Contactez-nous au +223 77 77 74 77 pour réserver.',
                },
              },
              {
                '@type': 'Question',
                name: 'Que faire à Bamako le week-end ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'King Aqua Lounge est la sortie idéale le week-end à Bamako : jet ski, balade en bateau sur le fleuve Niger, billard, grillades et cocktails dans un cadre unique à Baco-Djicoroni. Ouvert samedi et dimanche de 12h à 04h.',
                },
              },
              {
                '@type': 'Question',
                name: 'Où jouer au billard à Bamako ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La salle de billard de King Aqua Lounge à Baco-Djicoroni est ouverte 7j/7. Tables professionnelles, ambiance lounge et cocktails — la meilleure adresse pour le billard à Bamako.',
                },
              },
              {
                '@type': 'Question',
                name: 'Où manger des grillades à Bamako ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'King Aqua Lounge propose les meilleures grillades à Bamako : viandes et poissons braisés à la braise, marinades maison et épices du terroir malien, servis au bord du fleuve Niger à Baco-Djicoroni.',
                },
              },
              {
                '@type': 'Question',
                name: 'Où faire une balade en bateau sur le fleuve Niger à Bamako ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Depuis King Aqua Lounge à Baco-Djicoroni, Bamako, vous embarquez pour une balade en bateau sur le fleuve Niger. Couchers de soleil exceptionnels, excursions privatisables sur demande.',
                },
              },
              {
                '@type': 'Question',
                name: 'Peut-on privatiser une salle pour un événement à Bamako ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Oui. King Aqua Lounge propose la privatisation totale ou partielle pour anniversaires, mariages, événements d\'entreprise et soirées privées à Bamako. Contactez-nous pour un devis sur mesure.',
                },
              },
              {
                '@type': 'Question',
                name: 'Quels sont les horaires et l\'adresse de King Aqua Lounge ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'King Aqua Lounge est situé à Baco-Djicoroni, au bord du fleuve Niger, à Bamako (Mali). Ouvert 7 jours sur 7 de 12h00 à 04h00 du matin. Tél. : +223 77 77 74 77.',
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
      <FaqSection />

      {/* FAB flottant */}
      <Link href="/contact" className="fab" aria-label="Nous contacter">
        Contact
      </Link>
    </>
  );
}
