'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xjgjkqpr', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="bg-white rounded-2xl p-8 border border-[var(--color-gold)]/10 shadow-sm">
      <h2 className="font-serif text-2xl text-[oklch(12%_0.005_60)] mb-2">
        Nous écrire
      </h2>
      <p className="text-[var(--color-text-muted-kal)] text-sm mb-7">
        Pour un événement privé, un groupe ou toute autre demande.
      </p>

      <form
        onSubmit={handleSubmit}
        id="contactForm"
        noValidate
        aria-label="Formulaire de contact"
        className="space-y-5"
      >
        {/* Champs Formspree */}
        <input type="hidden" name="_subject" value="Nouvelle demande — King Aqua Lounge" />
        <input type="hidden" name="_language" value="fr" />
        <input type="text" name="_gotcha" className="hidden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Nom */}
          <div>
            <label
              htmlFor="c-name"
              className="block text-xs tracking-widest uppercase text-[oklch(12%_0.005_60)] mb-2 font-medium"
              style={{ letterSpacing: '0.12em' }}
            >
              Nom complet
            </label>
            <input
              type="text"
              id="c-name"
              name="name"
              placeholder="Jean Dupont…"
              autoComplete="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-gold)]/20 bg-[var(--color-cream)] text-[oklch(12%_0.005_60)] placeholder-[var(--color-text-muted-kal)]/50 text-sm focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]/30 transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="c-email"
              className="block text-xs tracking-widest uppercase text-[oklch(12%_0.005_60)] mb-2 font-medium"
              style={{ letterSpacing: '0.12em' }}
            >
              Email
            </label>
            <input
              type="email"
              id="c-email"
              name="email"
              placeholder="jean@email.com…"
              autoComplete="email"
              spellCheck={false}
              required
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-gold)]/20 bg-[var(--color-cream)] text-[oklch(12%_0.005_60)] placeholder-[var(--color-text-muted-kal)]/50 text-sm focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]/30 transition-all"
            />
          </div>
        </div>

        {/* Sujet */}
        <div>
          <label
            htmlFor="c-subject"
            className="block text-xs tracking-widest uppercase text-[oklch(12%_0.005_60)] mb-2 font-medium"
            style={{ letterSpacing: '0.12em' }}
          >
            Sujet
          </label>
          <select
            id="c-subject"
            name="subject"
            required
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-gold)]/20 bg-[var(--color-cream)] text-[oklch(12%_0.005_60)] text-sm focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]/30 transition-all appearance-none"
          >
            <option value="">Sélectionner</option>
            <option value="renseignements">Renseignements &amp; disponibilités</option>
            <option value="event">Événement privé</option>
            <option value="groupe">Groupe (+8 personnes)</option>
            <option value="autre">Autre demande</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="c-message"
            className="block text-xs tracking-widest uppercase text-[oklch(12%_0.005_60)] mb-2 font-medium"
            style={{ letterSpacing: '0.12em' }}
          >
            Votre message
          </label>
          <textarea
            id="c-message"
            name="message"
            placeholder="Décrivez votre demande ici…"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-gold)]/20 bg-[var(--color-cream)] text-[oklch(12%_0.005_60)] placeholder-[var(--color-text-muted-kal)]/50 text-sm focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]/30 transition-all resize-none"
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-[var(--color-gold)] text-[oklch(8.5%_0_0)] hover:bg-[var(--color-gold-light)] font-semibold tracking-widest uppercase text-xs py-3 rounded-full transition-all duration-300 disabled:opacity-60"
          style={{ letterSpacing: '0.15em' }}
        >
          {status === 'loading' ? 'Envoi en cours…' : 'Envoyer le message'}
        </Button>

        {/* Feedback */}
        {status === 'success' && (
          <p className="text-green-600 text-sm font-medium text-center" role="alert">
            ✓ Message envoyé ! Nous vous répondrons sous 24h.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm font-medium text-center" role="alert">
            Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
          </p>
        )}
      </form>
    </div>
  );
}
