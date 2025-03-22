import { useState, useTransition } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Languages from "./components/Languages";
import { LanguageType } from "./types/common";

import "./assets/styles/global.css";

function App() {
  const [isPending, startTransition] = useTransition();
  const [language, setLanguage] = useState<LanguageType>("fr");

  const handleLanguageChange = (newLanguage: LanguageType) => {
    startTransition(() => {
      setLanguage(newLanguage);
    });
  };

  return (
    <Layout>
      {isPending && <div className="loading-indicator">Chargement...</div>}
      <Header
        name="Mohammed HAMIANI AKBI"
        title={
          language === "fr" ? "Développeur Full Stack" : "Full-Stack Developer"
        }
        language={language}
        setLanguage={handleLanguageChange}
      />
      <div className="cv-content">
        <div className="left-column">
          <Profile language={language} />
          <Contact language={language} />
          <Skills language={language} />
          <Languages language={language} />
        </div>
        <div className="right-column">
          <Experience language={language} />
          <Education language={language} />
        </div>
      </div>
    </Layout>
  );
}

export default App;
