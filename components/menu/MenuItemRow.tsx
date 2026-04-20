import type { MenuItem } from '@/lib/data';

export default function MenuItemRow({ name, description, price, tag }: MenuItem) {
  return (
    <div className="flex items-start justify-between gap-6 py-4 border-b border-white/[0.06]">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-serif text-white/90 text-base sm:text-lg leading-tight">{name}</h3>
          {tag && (
            <span className="shrink-0 text-[10px] text-[var(--color-gold)] border border-[var(--color-gold)]/30 px-1.5 py-0.5 rounded-full tracking-wider uppercase">
              {tag}
            </span>
          )}
        </div>
        <p className="text-white/38 text-xs sm:text-sm leading-relaxed">{description}</p>
      </div>
      <span className="font-serif text-[var(--color-gold)] text-sm sm:text-base whitespace-nowrap shrink-0 pt-0.5">
        {price}
      </span>
    </div>
  );
}
