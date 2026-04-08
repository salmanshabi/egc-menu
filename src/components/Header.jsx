import LanguageToggle from "./LanguageToggle";

export default function Header({ lang, setLang }) {
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

  return (
    <header className="pt-6 pb-4 px-4 flex flex-col items-center">
      <img
        src={logoSrc}
        alt="Eman's Garden Cafe"
        className="w-44 h-44 object-contain mb-4"
      />
      <LanguageToggle lang={lang} setLang={setLang} />
    </header>
  );
}
