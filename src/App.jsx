import { useState } from "react";
import Header from "./components/Header";
import SectionNav from "./components/SectionNav";
import MenuSection from "./components/MenuSection";
import { menuData } from "./data/menu";

const fontClass = { ar: "font-arabic", he: "font-hebrew", en: "font-english" };

export default function App() {
  const [lang, setLang] = useState("ar");
  const [visible, setVisible] = useState(true);
  const [activeSectionId, setActiveSectionId] = useState(menuData.sections[0]?.id);

  const activeSection =
    menuData.sections.find((section) => section.id === activeSectionId) ??
    menuData.sections[0];

  const handleLangChange = (newLang) => {
    if (newLang === lang) return;
    setVisible(false);
    setTimeout(() => {
      setLang(newLang);
      setVisible(true);
    }, 200);
  };

  return (
    <div
      dir={lang === "en" ? "ltr" : "rtl"}
      className={`min-h-screen ${fontClass[lang]}`}
    >
      <Header lang={lang} setLang={handleLangChange} />
      <SectionNav
        sections={menuData.sections}
        lang={lang}
        activeId={activeSection?.id}
        onSelect={setActiveSectionId}
      />

      <main
        className={`max-w-lg mx-auto px-4 pb-16 pt-4 transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {activeSection ? <MenuSection section={activeSection} lang={lang} /> : null}

        <p className="text-center text-menu-brown/40 text-sm mt-8 font-semibold">
          Eman's Garden Cafe
        </p>
      </main>
    </div>
  );
}
