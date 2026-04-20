import { Badge } from '@/components/ui/badge';
import type { WineItem } from '@/lib/data';

const typeColors: Record<WineItem['type'], string> = {
  Champagne: 'border-amber-300/50 text-amber-700 bg-amber-50',
  Blanc:     'border-yellow-300/50 text-yellow-700 bg-yellow-50',
  Rouge:     'border-red-300/50 text-red-700 bg-red-50',
  Rosé:      'border-pink-300/50 text-pink-700 bg-pink-50',
};

export default function WineCard({ region, name, year, description, price, type }: WineItem) {
  return (
    <article className="bg-white rounded-xl border border-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/30 hover:shadow-md hover:shadow-[var(--color-gold)]/5 transition-all duration-300 overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <p className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-1" style={{ letterSpacing: '0.12em' }}>
              {region}
            </p>
            <h3 className="font-serif text-lg text-[oklch(12%_0.005_60)] leading-tight">
              {name}
            </h3>
          </div>
          <span className="shrink-0 font-serif text-lg text-[var(--color-text-muted-kal)] font-light">
            {year}
          </span>
        </div>

        {/* Description */}
        <p className="text-[var(--color-text-muted-kal)] text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-[var(--color-gold)]/10">
          <span className="text-[var(--color-gold)] font-serif text-xl font-medium">
            {price}
          </span>
          <Badge
            variant="outline"
            className={`text-xs ${typeColors[type]}`}
          >
            {type}
          </Badge>
        </div>
      </div>
    </article>
  );
}
