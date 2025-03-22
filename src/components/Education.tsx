// components/Education.tsx
import { useMemo } from 'react';
import { Education as EducationType, LanguageType } from '../types/common';

interface EducationProps {
  language: LanguageType;
}

function Education({ language }: EducationProps) {
  // Using useMemo to optimize performance
  const educations = useMemo<EducationType[]>(() => [
    {
      id: 1,
      school: {
        fr: "Université de Bretagne Occidentale, Brest, France (UBO-DOSI)",
        en: "University of Western Brittany, Brest, France (UBO-DOSI)"
      },
      degree: {
        fr: "Master 2 Informatique",
        en: "Master's Degree in Computer Science"
      },
      field: {
        fr: "Filière : Développement Logiciel des systèmes d'information",
        en: "Specialization: Software Development for Information Systems"
      },
      period: "2021-2022"
    },
    {
      id: 2,
      school: {
        fr: "Faculté des Sciences et Techniques de Tanger, Maroc (FSTT)",
        en: "Faculty of Sciences and Technologies of Tangier, Morocco (FSTT)"
      },
      degree: {
        fr: "Diplôme d'Ingénieur d'État",
        en: "State Engineering Degree"
      },
      field: {
        fr: "Filière : Logiciels et systèmes informatiques (LSI)",
        en: "Specialization: Software and Computer Systems"
      },
      period: "2016-2019"
    },
    {
      id: 3,
      school: {
        fr: "Centre de Classes Préparatoires aux Grandes Écoles (CPGE)",
        en: "Preparatory Classes for Engineering Schools (CPGE)"
      },
      degree: {
        fr: "Classes Préparatoires",
        en: "Preparatory Classes"
      },
      field: {
        fr: "Filière : Technologies et sciences industrielles",
        en: "Specialization: Industrial Technologies and Sciences"
      },
      period: "2014-2016"
    },
    {
      id: 4,
      school: {
        fr: "Lycée Ibn Al-Haytham, Fès, Maroc",
        en: "Ibn Al-Haytham High School, Fes, Morocco"
      },
      degree: {
        fr: "Baccalauréat",
        en: "High School Diploma"
      },
      field: {
        fr: "Filière : Sciences et technologies mécaniques",
        en: "Specialization: Mechanical Sciences and Technologies"
      },
      period: "2014"
    }
  ], []);

  return (
    <section className="cv-education">
      <h2>{language === 'fr' ? 'Formation' : 'Education'}</h2>
      
      {educations.map(edu => (
        <div key={edu.id} className="education-item">
          <h3>{edu.school[language]}</h3>
          <p className="degree">{edu.degree[language]}</p>
          <p className="field">{edu.field[language]}</p>
          <p className="period">{edu.period}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;