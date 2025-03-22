import { useMemo } from "react";
import { Language as LanguageItem, LanguageType } from "../types/common";

interface LanguagesProps {
  language: LanguageType;
}

function Languages({ language }: LanguagesProps) {
  const languages = useMemo<LanguageItem[]>(
    () => [
      {
        name: { fr: "Arabe", en: "Arabic" },
        level: { fr: "Maternelle", en: "Native" },
      },
      {
        name: { fr: "Français", en: "French" },
        level: { fr: "Avancé (Niveau B2)", en: "Advanced (Level B2)" },
      },
      {
        name: { fr: "Anglais", en: "English" },
        level: { fr: "Avancé", en: "Advanced" },
      },
    ],
    []
  );

  return (
    <section className="cv-languages">
      <h2>{language === "fr" ? "Langues" : "Languages"}</h2>

      <ul className="languages-list">
        {languages.map((lang, index) => (
          <li key={index} className="language-item">
            <span className="language-name">{lang.name[language]}</span>
            <span className="language-level">{lang.level[language]}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Languages;
