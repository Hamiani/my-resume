import { memo } from 'react';
import { LanguageType } from '../types/common';

interface HeaderProps {
  name: string;
  title: string;
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
}

const Header = memo(function Header({ name, title, language, setLanguage }: HeaderProps) {
  return (
    <header className="cv-header">
      <div className="header-content">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div className="language-switcher">
        <button 
          onClick={() => setLanguage('fr')}
          className={language === 'fr' ? 'active' : ''}
          aria-pressed={language === 'fr'}
        >
          FR
        </button>
        <button 
          onClick={() => setLanguage('en')}
          className={language === 'en' ? 'active' : ''}
          aria-pressed={language === 'en'}
        >
          EN
        </button>
      </div>
    </header>
  );
});

export default Header;