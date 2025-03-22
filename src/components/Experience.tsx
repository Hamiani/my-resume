import { useMemo } from "react";
import { ExperienceType, LanguageType } from "../types/common";
import getExperiences from "../services/dataService";
import ExperienceItem from "./ExperienceItem";

interface ExperienceProps {
  language: LanguageType;
}

function Experience({ language }: ExperienceProps) {
  const experiences = useMemo<ExperienceType[]>(
    () => getExperiences(language),
    [language]
  );
  return (
    <section className="cv-experience">
      <h2>
        {language === "fr"
          ? "Expériences Professionnelles"
          : "Professional Experience"}
      </h2>
      {experiences.map((exp) => (
        <ExperienceItem key={exp.id} experience={exp} language={language} />
      ))}
    </section>
  );
}

export default Experience;
