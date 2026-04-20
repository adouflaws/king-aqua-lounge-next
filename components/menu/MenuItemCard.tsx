import { Badge } from '@/components/ui/badge';
import type { MenuItem } from '@/lib/data';

export default function MenuItemCard({ name, description, price, tag }: MenuItem) {
  return (
    <article className="bg-white rounded-xl p-4 sm:p-6 border border-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/30 hover:shadow-md hover:shadow-[var(--color-gold)]/5 transition-all duration-300 flex flex-col justify-between gap-4">
      <div>
        <div className="flex items-start justify-between gap-3 mb-2 min-w-0">
          <h3 className="font-serif text-lg sm:text-xl text-[oklch(12%_0.005_60)] leading-tight min-w-0">
            {name}
          </h3>
          {tag && (
            <Badge
              variant="outline"
              className="shrink-0 border-[var(--color-gold)]/40 text-[var(--color-gold)] bg-[var(--color-gold)]/5 text-xs"
            >
              {tag}
            </Badge>
          )}
        </div>
        <p className="text-[var(--color-text-muted-kal)] text-sm leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-[var(--color-gold)]/10">
        <span className="text-[var(--color-gold)] font-serif text-lg font-medium">
          {price}
        </span>
      </div>
    </article>
  );
}
