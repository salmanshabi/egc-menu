const languages = [
  { code: "ar", label: "عربي" },
  { code: "he", label: "עברית" },
  { code: "en", label: "English" },
];

export default function LanguageToggle({ lang, setLang }) {
  return (
    <div className="inline-flex rounded-2xl bg-white/80 p-1 shadow-lg backdrop-blur-sm">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
            lang === l.code
              ? "bg-menu-red text-white shadow-md"
              : "text-menu-brown/60 hover:text-menu-brown"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
