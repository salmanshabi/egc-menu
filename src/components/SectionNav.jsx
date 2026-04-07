const sectionIcons = {
  breakfast: "🍳",
  salads: "🥗",
  toasts: "🥪",
  garden: "🌿",
  taboon: "🫓",
  pastries: "🥐",
  "hot-drinks": "☕",
  "cold-drinks": "🧃",
};

export default function SectionNav({ sections, lang, activeId, onSelect }) {
  return (
    <nav className="px-3 py-1.5 sm:px-4">
      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <div className="w-full max-w-lg sm:w-fit sm:max-w-full sm:overflow-x-auto sm:hide-scrollbar">
          <div className="grid w-full grid-cols-3 gap-2 px-2 py-2 sm:flex sm:w-max sm:gap-2.5 sm:px-3">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => onSelect(s.id)}
                aria-pressed={activeId === s.id}
                className={`flex h-[60px] w-full min-w-0 cursor-pointer flex-col items-center justify-center gap-0.5 rounded-xl px-2 text-center text-xs leading-snug font-extrabold transition-colors duration-200 sm:h-[68px] sm:w-[98px] sm:flex-shrink-0 sm:px-2.5 sm:text-xs ${
                  activeId === s.id
                    ? "bg-menu-red text-white shadow-md ring-2 ring-menu-red/15"
                    : "bg-menu-yellow text-menu-brown shadow-sm hover:bg-menu-yellow-warm"
                }`}
              >
                <span className="text-base leading-none sm:text-sm">{sectionIcons[s.id]}</span>
                <span className="whitespace-normal">{s.name[lang]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
