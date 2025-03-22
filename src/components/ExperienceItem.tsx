// components/ExperienceItem.tsx
import { useState } from "react";
import { ExperienceType, LanguageType } from "../types/common";

interface ExperienceItemProps {
  experience: ExperienceType;
  language: LanguageType;
}

function ExperienceItem({ experience: exp, language }: ExperienceItemProps) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="experience-item">
      <div className="experience-header">
        <h3>{exp.title[language]}</h3>
        <h4>
          {exp.company}
          {exp.client && <span> - {exp.client}</span>}
        </h4>
        <p className="period">{exp.period[language]}</p>
      </div>
      
      <div className="experience-content">
        {expanded && exp.context ? (
          <div className="context">
            <p>{exp.context[language]}</p>
          </div>
        ) : (
          <p className="description">{exp.description[language]}</p>
        )}
        
        {expanded && exp.responsibilities && (
          <div className="responsibilities">
            <h5>{language === "fr" ? "Responsabilités" : "Responsibilities"}</h5>
            <ul>
              {exp.responsibilities[language].map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="tech-stack">
          <p>
            <strong>
              {language === "fr" ? "Technologies" : "Technologies"}:
            </strong>{" "}
            {exp.technical_environment ? exp.technical_environment.join(", ") : ""}
          </p>
        </div>
        
        <button 
          className="expand-button" 
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded 
            ? (language === "fr" ? "Voir moins" : "Show less") 
            : (language === "fr" ? "Voir plus" : "Show more")}
        </button>
      </div>
    </div>
  );
}

export default ExperienceItem;