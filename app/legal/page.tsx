import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions légales — King Aqua Lounge, Bamako',
  description: 'Mentions légales du site King Aqua Lounge, restaurant et loisirs à Baco-Djicoroni, Bamako, Mali.',
  alternates: { canonical: 'https://www.king-aqualounge.com/legal' },
  robots: { index: true, follow: false },
};

export default function LegalPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="gold-bg-center pt-32 pb-16 text-center relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4">
          <p
            className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-4"
            style={{ letterSpacing: '0.2em' }}
          >
            King Aqua Lounge
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl text-white font-light">
            Mentions légales
          </h1>
          <div className="divider-gold max-w-xs mx-auto my-6">
            <span className="text-[var(--color-gold)] px-3 text-sm">◆</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" fill="white" />
          </svg>
        </div>
      </div>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm text-[oklch(20%_0.005_60)] leading-relaxed space-y-8">

          <div>
            <h2 className="font-serif text-2xl text-[oklch(12%_0.005_60)] mb-4">Éditeur du site</h2>
            <p>
              <strong>King Aqua Lounge</strong><br />
              Baco-Djicoroni, Bamako, Mali<br />
              Téléphone : <a href="tel:+22377777477" className="text-[var(--color-gold)]">+223 77 77 74 77</a><br />
              Email : <a href="mailto:kingaqualoune1@gmail.com" className="text-[var(--color-gold)]">kingaqualoune1@gmail.com</a>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[oklch(12%_0.005_60)] mb-4">Hébergement</h2>
            <p>
              Ce site est hébergé par <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-gold)]">vercel.com</a>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[oklch(12%_0.005_60)] mb-4">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo) est la propriété exclusive de King Aqua Lounge, sauf mentions contraires. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[oklch(12%_0.005_60)] mb-4">Limitation de responsabilité</h2>
            <p>
              King Aqua Lounge s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce site. Toutefois, nous ne saurions être tenus responsables des erreurs, omissions ou des résultats qui pourraient être obtenus par un mauvais usage de ces informations.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[oklch(12%_0.005_60)] mb-4">Cookies</h2>
            <p>
              Ce site utilise des cookies fonctionnels nécessaires à son bon fonctionnement. En poursuivant votre navigation, vous en acceptez l&apos;utilisation. Consultez notre{' '}
              <Link href="/privacy" className="text-[var(--color-gold)] hover:underline">
                politique de confidentialité
              </Link>{' '}
              pour plus d&apos;informations.
            </p>
          </div>

          <p className="text-xs text-[oklch(50%_0.005_60)] pt-4 border-t border-[var(--color-gold)]/15">
            Dernière mise à jour : avril 2026
          </p>
        </div>
      </section>
    </div>
  );
}
