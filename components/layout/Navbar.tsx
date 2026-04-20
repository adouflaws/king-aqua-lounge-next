'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/',           label: 'Accueil'    },
  { href: '/#a-propos',  label: 'À propos'   },
  { href: '/#activites', label: 'Activités'  },
  { href: '/menu',       label: 'Menu'       },
  { href: '/contact',    label: 'Contact'    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const pathname = usePathname();

  /* Fond navbar au scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Ferme le menu au changement de route */
  useEffect(() => { setOpen(false); }, [pathname]);

  /* Bloque le scroll body pendant que le menu est ouvert */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.replace('/#', '/'));

  return (
    <>
      {/* ── Barre de navigation ── */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300',
          scrolled
            ? 'bg-[oklch(8.5%_0_0)]/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          role="navigation"
          aria-label="Navigation principale"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group" aria-label="King Aqua Lounge — Accueil">
            <Image
              src="/images/logo.jpg"
              alt=""
              width={44}
              height={44}
              className="rounded-full object-cover ring-1 ring-[var(--color-gold)]/30 group-hover:ring-[var(--color-gold)] transition-[box-shadow] duration-300"
              aria-hidden="true"
            />
            <span
              className="font-serif text-sm sm:text-lg font-semibold text-white whitespace-nowrap"
              style={{ letterSpacing: '0.06em' }}
            >
              King Aqua Lounge
            </span>
          </Link>

          {/* Liens desktop */}
          <ul className="hidden md:flex items-center gap-8" role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  role="menuitem"
                  className={cn(
                    'text-sm tracking-widest uppercase font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/60 focus-visible:rounded',
                    isActive(link.href)
                      ? 'text-[var(--color-gold)]'
                      : 'text-white/80 hover:text-[var(--color-gold)]'
                  )}
                  style={{ letterSpacing: '0.15em', fontSize: '0.72rem' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Bouton hamburger — visible uniquement sur mobile (<768 px) */}
          <button
            type="button"
            className="md:hidden text-white p-3 -mr-2 rounded-md hover:bg-white/10 active:bg-white/20 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            style={{ touchAction: 'manipulation' }}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* ── Menu mobile (rendu conditionnel, z-[60] > header z-50) ── */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Panneau drawer */}
          <div className="absolute top-0 right-0 h-full w-[280px] bg-[oklch(8.5%_0_0)] border-l border-[var(--color-gold)]/20 flex flex-col shadow-2xl">

            {/* En-tête drawer */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-gold)]/15">
              <span className="font-serif text-white text-base tracking-widest">
                King Aqua Lounge
              </span>
              <button
                type="button"
                className="text-white/60 hover:text-white transition-colors p-1 -mr-1"
                aria-label="Fermer le menu"
                onClick={() => setOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Liens */}
            <nav className="flex flex-col py-6 px-4 gap-1 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'py-3.5 px-4 rounded-lg text-sm tracking-widest uppercase font-medium transition-colors duration-200',
                    isActive(link.href)
                      ? 'text-[var(--color-gold)] bg-[var(--color-gold)]/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  )}
                  style={{ letterSpacing: '0.12em' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA bas de drawer */}
            <div className="px-6 pb-8">
              <div className="h-px bg-[var(--color-gold)]/15 mb-5" />
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-3.5 rounded-full bg-[var(--color-gold)] text-[oklch(8.5%_0_0)] font-semibold text-sm tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-[background-color] duration-200"
              >
                Réserver
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
