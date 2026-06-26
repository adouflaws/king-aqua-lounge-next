'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '22377777477';

const SUBJECTS = [
  { value: '', label: 'Sélectionner' },
  { value: 'Réservation de table', label: 'Réservation de table' },
  { value: 'Événement privé', label: 'Événement privé' },
  { value: 'Groupe (+8 personnes)', label: 'Groupe (+8 personnes)' },
  { value: 'Renseignements & disponibilités', label: 'Renseignements & disponibilités' },
  { value: 'Autre demande', label: 'Autre demande' },
];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const lines = [
      'Bonjour King Aqua Lounge !',
      '',
      `Nom : ${name}`,
      subject ? `Sujet : ${subject}` : '',
      '',
      message,
    ].filter((line) => line !== undefined);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-[var(--color-gold)]/20 bg-[var(--color-cream)] text-[oklch(12%_0.005_60)] placeholder-[var(--color-text-muted-kal)]/50 text-sm focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]/30 transition-all';

  const labelClass =
    'block text-xs tracking-widest uppercase text-[oklch(12%_0.005_60)] mb-2 font-medium';

  const canSubmit = name.trim().length > 0 && message.trim().length > 0;

  return (
    <div className="bg-white rounded-2xl p-8 border border-[var(--color-gold)]/10 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-full bg-[oklch(48%_0.18_145)]/10 flex items-center justify-center shrink-0">
          <MessageCircle size={15} className="text-[oklch(48%_0.18_145)]" strokeWidth={1.5} />
        </div>
        <h2 className="font-serif text-2xl text-[oklch(12%_0.005_60)]">Nous écrire</h2>
      </div>
      <p className="text-[var(--color-text-muted-kal)] text-sm mb-7">
        Remplissez le formulaire — vous serez redirigé vers WhatsApp pour envoyer votre message.
      </p>

      <form onSubmit={handleSubmit} noValidate aria-label="Formulaire de contact WhatsApp" className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="c-name" className={labelClass} style={{ letterSpacing: '0.12em' }}>
              Nom complet
            </label>
            <input
              type="text"
              id="c-name"
              placeholder="Votre nom…"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="c-subject" className={labelClass} style={{ letterSpacing: '0.12em' }}>
              Sujet
            </label>
            <select
              id="c-subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={`${inputClass} appearance-none`}
            >
              {SUBJECTS.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="c-message" className={labelClass} style={{ letterSpacing: '0.12em' }}>
            Votre message
          </label>
          <textarea
            id="c-message"
            placeholder="Décrivez votre demande ici…"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full inline-flex items-center justify-center gap-2 bg-[oklch(48%_0.18_145)] text-white hover:bg-[oklch(43%_0.18_145)] font-semibold tracking-widest uppercase text-xs py-3.5 rounded-full transition-[background-color] duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ letterSpacing: '0.15em' }}
        >
          <MessageCircle size={14} strokeWidth={2} />
          Envoyer sur WhatsApp
        </button>

        <p className="text-[var(--color-text-muted-kal)] text-xs text-center">
          Vous serez redirigé vers WhatsApp pour confirmer l&apos;envoi.
        </p>
      </form>
    </div>
  );
}
