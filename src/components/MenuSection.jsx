import MenuItem from "./MenuItem";

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

export default function MenuSection({ section, lang }) {
  return (
    <section id={section.id} className="mb-6 scroll-mt-20">
      {/* Section header */}
      <div className="flex items-center gap-2 mb-3 px-1">
        <span className="text-2xl">{sectionIcons[section.id]}</span>
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
