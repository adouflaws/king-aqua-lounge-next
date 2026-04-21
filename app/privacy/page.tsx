import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — King Aqua Lounge, Bamako',
  description: 'Politique de confidentialité et traitement des données personnelles du site King Aqua Lounge à Baco-Djicoroni, Bamako.',
  alternates: { canonical: 'https://www.king-aqualounge.com/privacy' },
  robots: { index: true, follow: false },
};

export default function PrivacyPage() {
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
            Politique de confidentialité
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
            <h2 className="font-serif text-2xl text-[oklch(12%_0.005_60)] mb-4">Responsable du traitement</h2>
            <p>
              <strong>King Aqua Lounge</strong><br />
              Baco-Djicoroni, Bamako, Mali<br />
              Email : <a href="mailto:adouflaws@gmail.com" className="text-[var(--color-gold)]">adouflaws@gmail.com</a>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[oklch(12%_0.005_60)] mb-4">Données collectées</h2>
            <p>
              Lorsque vous utilisez le formulaire de contact, nous collectons les informations suivantes :
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Votre nom</li>
              <li>Votre adresse email</li>
              <li>Votre message</li>
            </ul>
            <p className="mt-3">
              Ces données sont uniquement utilisées pour répondre à votre demande. Elles ne sont pas revendues ni partagées avec des tiers, à l&apos;exception de notre prestataire de formulaire (<a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-[var(--color-gold)]">Formspree</a>).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[oklch(12%_0.005_60)] mb-4">Cookies</h2>
            <p>
              Ce site utilise un cookie fonctionnel (<code>cookie-consent</code>) pour mémoriser votre choix relatif au bandeau de cookies. Ce cookie ne collecte aucune donnée personnelle et expire au bout de 365 jours.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[oklch(12%_0.005_60)] mb-4">Services tiers</h2>
            <p>Ce site intègre les services suivants, qui peuvent déposer des cookies :</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>Google Maps</strong> — affichage de la carte (page Contact)</li>
              <li><strong>Google Fonts</strong> — chargement des polices de caractères</li>
              <li><strong>Formspree</strong> — traitement du formulaire de contact</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[oklch(12%_0.005_60)] mb-4">Vos droits</h2>
            <p>
              Conformément à la réglementation applicable, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à{' '}
              <a href="mailto:adouflaws@gmail.com" className="text-[var(--color-gold)]">
                adouflaws@gmail.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[oklch(12%_0.005_60)] mb-4">Contact</h2>
            <p>
              Pour toute question relative à cette politique, vous pouvez également consulter nos{' '}
              <Link href="/legal" className="text-[var(--color-gold)] hover:underline">
                mentions légales
              </Link>.
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
