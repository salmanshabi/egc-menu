import LanguageToggle from "./LanguageToggle";

export default function Header({ lang, setLang }) {
  return (
    <header className="pt-6 pb-4 px-4 flex flex-col items-center">
      <img
        src="/logo.png"
        alt="Eman's Garden Cafe"
        className="w-44 h-44 object-contain mb-4"
      />
      <LanguageToggle lang={lang} setLang={setLang} />
    </header>
  );
}
