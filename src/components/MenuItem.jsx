export default function MenuItem({ item, lang, isLast }) {
  return (
    <div
      className={`px-4 py-3.5 transition-colors hover:bg-menu-yellow-light/30 ${
        !isLast ? "border-b border-menu-yellow/20" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-base font-bold text-menu-dark leading-snug">
            {item.name[lang]}
          </h3>
          {item.description?.[lang] && (
            <p className="text-[13px] text-menu-brown/50 mt-1 leading-relaxed">
              {item.description[lang]}
            </p>
          )}
          {item.note?.[lang] && (
            <p className="text-xs text-menu-red/60 mt-0.5 font-semibold">
              ({item.note[lang]})
            </p>
          )}
        </div>
        <div className="bg-menu-red text-white text-sm font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap mt-0.5">
          ₪{item.price}
        </div>
      </div>
    </div>
  );
}
