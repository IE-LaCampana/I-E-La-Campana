import React from 'react'
import "../../styles/aboutUsCard.css";
import bannerImage from "../../../../assets/banners/quienes-somos1.jpg";
import imageHeroContent from "../../../../assets/backgrounds/orange-stripes.png";
const AboutUsCard = () => {
  return (
    <div className="about-us-container">
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div
          className="hero-content"
          style={{ backgroundImage: `url(${imageHeroContent})` }}
        >
          <div className="hero-text">
            <h1 className="hero-title">QUIÉNES SOMOS</h1>
          </div>
        </div>
      </div>
      <div className="about-us-wrapper">
        <div className="about-us-content">
          <div className="about-us-text">
            <div className="text-content">
              <h1 className="about-us-title">¿QUIÉNES SOMOS?</h1>
              <div className="about-us-description">
                <p>
                  Somos una institución educativa comprometida con la formación
                  integral de nuestros estudiantes. Con más de 20 años de
                  experiencia, hemos construido una sólida reputación basada en
                  la excelencia académica, los valores humanos y el desarrollo
                  del potencial de cada uno de nuestros alumnos.
                </p>

                <p>
                  Nuestro equipo está conformado por profesionales altamente
                  calificados, educadores apasionados y personal administrativo
                  dedicado que trabaja en conjunto para crear un ambiente de
                  aprendizaje estimulante y seguro. Creemos en la educación
                  personalizada que respeta los ritmos y estilos de aprendizaje
                  de cada estudiante.
                </p>

                <p>
                  Nos distinguimos por nuestro enfoque en la innovación
                  educativa, integrando tecnología de vanguardia con
                  metodologías pedagógicas probadas. Formamos líderes del
                  mañana, ciudadanos responsables y personas íntegras que
                  contribuirán positivamente a la sociedad. Nuestra misión es
                  ser el puente entre el conocimiento y el futuro de nuestros
                  estudiantes.
                </p>
              </div>
            </div>
          </div>
          <div className="about-us-image">
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Equipo educativo trabajando en colaboración"
                className="main-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsCard