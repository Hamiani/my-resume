import { useMemo } from "react";
import { LanguageType, Skill, SkillTitles } from "../types/common";

interface SkillsProps {
  language: LanguageType;
}

function Skills({ language }: SkillsProps) {
  const skills = useMemo<Skill>(
    () => ({
      frontend: [
        "TypeScript",
        "JavaScript",
        "React.js",
        "Vue.js",
        "React Native",
        "Next.js",
        "Hooks",
        "Redux",
        "TanStack Query"
      ],
      backend: ["Java/Spring Boot", "TypeScript/Express.js/NestJS", "Kafka"],
      database: ["MySQL", "PostgreSQL", "MongoDB"],
      testing: ["JUnit", "Jest","Cucumber"],
      management: ["Scrum", "Jira"],
      os: ["Linux (Ubuntu)", "Windows", "macOS"],
      cicd: [
        "Git",
        "GitHub",
        "GitLab",
        "GitHub Actions",
        "Jenkins",
        "Kubernetes",
      ],
    }),
    []
  );

  const titles = useMemo<SkillTitles>(
    () => ({
      frontend: { fr: "Front-end", en: "Front-end" },
      backend: { fr: "Back-end", en: "Back-end" },
      database: { fr: "Base de données", en: "Database" },
      testing: {
        fr: "Tests unitaires et d'intégration",
        en: "Unit and integration testing",
      },
      management: { fr: "Gestion de projet", en: "Project management" },
      os: { fr: "Systèmes d'exploitation", en: "Operating Systems" },
      cicd: { fr: "CI/CD", en: "CI/CD" },
    }),
    []
  );

  return (
    <section className="cv-skills">
      <h2>
        {language === "fr" ? "Compétences Techniques" : "Technical Skills"}
      </h2>

      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="skill-category">
          <h3>{titles[category as keyof SkillTitles][language]}</h3>
          <div className="skill-tags">
            {skillList.map((skill: string) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div className="soft-skills">
        <h3>
          {language === "fr" ? "Compétences comportementales" : "Soft Skills"}
        </h3>
        <ul>
          <li>{language === "fr" ? "Esprit d'équipe" : "Team spirit"}</li>
          <li>{language === "fr" ? "Gestion du temps" : "Time management"}</li>
          <li>
            {language === "fr" ? "Capacité d'adaptation" : "Adaptability"}
          </li>
          <li>
            {language === "fr"
              ? "Esprit d'analyse et d'innovation"
              : "Analytical and innovative thinking"}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
