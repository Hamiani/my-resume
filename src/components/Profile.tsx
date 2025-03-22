import { LanguageType } from "../types/common";
import image from "../assets/images/me.jpg";
interface ProfileProps {
  language: LanguageType;
}

const Profile = ({ language }: ProfileProps) => {
  return (
    <section className="cv-profile">
      <div className="profile-info">
        <div>
          <img src={image} alt="Mohammed HAMIANI AKBI" loading="lazy" />
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
            <strong>{language === "fr" ? "Profession" : "Profession"}:</strong>
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
            <strong>{language === "fr" ? "Âge" : "Age"}:</strong> 28
            {language === "fr" ? "ans" : "years old"}
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
  );
};

export default Profile;
