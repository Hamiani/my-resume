import { LanguageType } from "../types/common";
import image from "../assets/images/me.jpg";
import { useState } from "react";
interface ProfileProps {
  language: LanguageType;
}
const calculateAge = (birthDate: string) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
};

const Profile = ({ language }: ProfileProps) => {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  console.log("isImageEnlarged :>> ", isImageEnlarged);
  const handleImageClick = () => {
    setIsImageEnlarged(true);
  };

  const handleCloseEnlargedImage = () => {
    setIsImageEnlarged(false);
  };

  const handleOverlayClick = (e) => {
    // Fermer si on clique sur l'overlay (pas sur l'image)
    if (e.target === e.currentTarget) {
      setIsImageEnlarged(false);
    }
  };
  return (
    <>
      <section className="cv-profile">
        <div className="profile-info">
          <div>
            <img
              src={image}
              onClick={handleImageClick}
              alt="Mohammed HAMIANI AKBI"
              loading="lazy"
            />
          </div>
          <h2>{language === "fr" ? "Profil" : "Profile"}</h2>
          <div className="profile-summary">
            <p>
              {language === "fr"
                ? "Développeur Full Stack expérimenté avec une forte expertise en Java/Spring Boot et JavaScript/React. Spécialisé dans le développement d'applications web performantes et d'APIs. Passionné par les solutions techniques innovantes et l'amélioration continue des processus de développement."
                : "Experienced Full Stack Developer with strong expertise in Java/Spring Boot and JavaScript/React. Specialized in developing high-performance web applications and APIs. Passionate about innovative technical solutions and continuous improvement of development processes."}
            </p>
          </div>
          <div className="profile-detail">
            <p>
              <strong>
                {language === "fr" ? "Profession" : "Profession"}:
              </strong>
              {language === "fr"
                ? "Développeur Full Stack"
                : "Full Stack Developer"}
            </p>
            <p>
              <strong>
                {language === "fr" ? "Situation Familiale" : "Family Status"}:
              </strong>
              {language === "fr" ? "Marié" : "Married"}
            </p>
            <p>
              <strong>{language === "fr" ? "Âge" : "Age"}:</strong>{" "}
              {calculateAge("1996-04-11")}
              {language === "fr" ? " ans" : " years old"}
            </p>
            <p>
              <strong>
                {language === "fr" ? "Permis de conduire" : "Driving License"}:
              </strong>
              B
            </p>
          </div>
        </div>
      </section>
      {/* Modal pour l'image agrandie */}
      {isImageEnlarged && (
        <div className="image-modal-overlay" onClick={handleOverlayClick}>
          <div className="image-modal-content">
            <button
              className="image-modal-close"
              onClick={handleCloseEnlargedImage}
              aria-label={language === "fr" ? "Fermer" : "Close"}
            >
              ×
            </button>
            <img
              src={image}
              alt="Mohammed HAMIANI AKBI"
              className="enlarged-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
