'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('kal_cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('kal_cookie_consent', 'accepted');
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem('kal_cookie_consent', 'refused');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[oklch(8.5%_0_0)]/97 backdrop-blur-md border-t border-[var(--color-gold)]/20 px-4 py-4 sm:px-6"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-live="polite"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p
          className="text-white/70 text-sm leading-relaxed"
          id="cookie-title"
        >
          Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre{' '}
          <a href="#" className="text-[var(--color-gold)] underline underline-offset-2 hover:text-[var(--color-gold-light)]">
            politique de confidentialité
          </a>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={refuse}
            className="border-white/20 text-white/70 hover:bg-white/10 hover:text-white"
          >
            Refuser
          </Button>
          <Button
            size="sm"
            onClick={accept}
            className="bg-[var(--color-gold)] text-[oklch(8.5%_0_0)] hover:bg-[var(--color-gold-light)] font-semibold"
          >
            Accepter
          </Button>
        </div>
      </div>
    </div>
  );
}
