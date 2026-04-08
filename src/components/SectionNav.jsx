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

export default function SectionNav({ sections, lang, activeId, onSelect }) {
  return (
    <nav className="px-3 py-1.5 sm:px-4">
      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <div className="w-full max-w-lg sm:w-fit sm:max-w-full sm:overflow-x-auto sm:hide-scrollbar">
          <div className="grid w-full grid-cols-3 gap-1.5 px-2 py-2 sm:flex sm:w-max sm:gap-2 sm:px-3">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => onSelect(s.id)}
                aria-pressed={activeId === s.id}
                className={`flex h-[48px] w-full min-w-0 cursor-pointer flex-col items-center justify-center gap-0.5 rounded-xl px-1.5 text-center text-xs leading-snug font-extrabold transition-colors duration-200 sm:h-[54px] sm:w-[84px] sm:flex-shrink-0 sm:px-2 sm:text-xs ${
                  activeId === s.id
                    ? "bg-menu-red text-white shadow-md ring-2 ring-menu-red/15"
                    : "bg-menu-yellow text-menu-brown shadow-sm hover:bg-menu-yellow-warm"
                }`}
              >
                {(() => { const Icon = sectionIcons[s.id]; return <Icon size={18} strokeWidth={2.5} />; })()}
                <span className="whitespace-normal">{s.name[lang]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
