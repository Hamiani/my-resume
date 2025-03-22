export type LanguageType = "fr" | "en";

export type TranslatedField = {
  fr: string;
  en: string;
};

export type Education = {
  id: number;
  school: TranslatedField;
  degree: TranslatedField;
  field: TranslatedField;
  period: string;
};

export type Language = {
  name: TranslatedField;
  level: TranslatedField;
};

export type ExperienceType = {
  id: number;
  title: TranslatedField;
  company: string;
  client?: string;
  period: TranslatedField;
  location?: TranslatedField;
  context?: TranslatedField;
  responsibilities?: {
    fr: string[];
    en: string[];
  };
  technical_environment?: string[];
  description: TranslatedField;
};

export type Skill = {
  frontend: string[];
  backend: string[];
  database: string[];
  testing: string[];
  management: string[];
  os: string[];
  cicd: string[];
};

export type SkillTitles = {
  frontend: TranslatedField;
  backend: TranslatedField;
  database: TranslatedField;
  testing: TranslatedField;
  management: TranslatedField;
  os: TranslatedField;
  cicd: TranslatedField;
};