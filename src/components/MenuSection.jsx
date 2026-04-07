import MenuItem from "./MenuItem";
import {
  UtensilsCrossed,
  Salad,
  Sandwich,
  Flower,
  Wheat,
  Croissant,
  Coffee,
  GlassWater,
} from "lucide-react";

const sectionIcons = {
  breakfast: UtensilsCrossed,
  salads: Salad,
  toasts: Sandwich,
  garden: Flower,
  taboon: Wheat,
  pastries: Croissant,
  "hot-drinks": Coffee,
  "cold-drinks": GlassWater,
};

export default function MenuSection({ section, lang }) {
  return (
    <section id={section.id} className="mb-6 scroll-mt-20">
      {/* Section header */}
      <div className="flex items-center gap-2 mb-3 px-1">
        {(() => { const Icon = sectionIcons[section.id]; return <Icon size={24} strokeWidth={2.5} className="text-menu-red" />; })()}
        <h2 className="text-xl font-bold text-menu-red">
          {section.name[lang]}
        </h2>
        <div className="flex-1 h-px bg-menu-red/20" />
      </div>

      {/* Items card */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden border border-white/50">
        {section.items.map((item, i) => (
          <MenuItem
            key={i}
            item={item}
            lang={lang}
            isLast={i === section.items.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
