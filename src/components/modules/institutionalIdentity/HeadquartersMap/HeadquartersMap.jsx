import React, { useEffect, useState } from "react";
import "./HeadquartersMap.css";

const HeadquartersMap = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [itemsPerRow, setItemsPerRow] = useState(3);
  const [windowwidth, setWindowwidth] = useState(window.innerWidth);
  const headquarters = [
    {
      id: 1,
      name: "I.E. Principal",
      description: "Sede principal de la institución educativa La Campana.",
      coordinates: "2.6269446283033786, -76.29235526732549",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3985.6259701177128!2d-76.2951394!3d2.6268053!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3aa387211309b3%3A0x23702dbdd253da96!2sInstituci%C3%B3n%20educativa%20la%20campana!5e0!3m2!1ses-419!2sco!4v1745105001330!5m2!1ses-419!2sco",
    },
    {
      id: 2,
      name: "C.D. Piendamó Arriba",
      description: "Centro docente ubicado en el sector de Piendamó Arriba.",
      coordinates: "2.643889, -76.531389",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.6743086381794!2d-76.38012028960077!3d2.6116149973553404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3aa70015298ead%3A0x768aaecfc9d45a45!2sPiendamo%20arriba!5e0!3m2!1ses-419!2sco!4v1745108245402!5m2!1ses-419!2sco",
    },
    {
      id: 3,
      name: "C.D.R.M. Pueblito",
      description: "Centro docente ubicado en el sector de Piendamó Arriba.",
      coordinates: "2.643889, -76.531389",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.4051902304187!2d-76.30121995763369!3d2.628437045181374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3aa3eb3a913ab7%3A0x3908474f905520ae!2sEscuela%20Rural%20El%20Pueblito!5e0!3m2!1ses-419!2sco!4v1745106451344!5m2!1ses-419!2sco",
    },
    {
      id: 4,
      name: "C.D.R.M. Tulcán",
      description: "Centro Docente Rural Mixto Tulcán.",
      coordinates: "4.615000, -74.080000",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15943.680326243633!2d-76.33689562212155!3d2.532973556421638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3aafb5b2e524d5%3A0x19f2570e174c9396!2sEscuela%20Tulcan!5e0!3m2!1ses-419!2sco!4v1745268474330!5m2!1ses-419!2sco",
    },
    {
      id: 5,
      name: "E.R.M. Santa Lucía",
      description: "Escuela Rural Mixta Santa Lucía.",
      coordinates: "4.610000, -74.075000",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.8610051241126!2d-76.29790868960096!3d2.552097697415465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3aa53b5ef09db9%3A0x58aba18720205a3f!2sEscuela%20Rural%20mixta%20Santa%20lucia!5e0!3m2!1ses-419!2sco!4v1745268110081!5m2!1ses-419!2sco",
    },
    {
      id: 6,
      name: "E.R.M. Manantial",
      description:
        "Centro Docente Rural Mixto ubicado en el sector de Pueblito.",
      coordinates: "4.620000, -74.085000",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62803.0770169641!2d-74.07293255136719!3d10.326489199999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef565b9a04a4309%3A0xbc5cf46d961a1ecf!2sERM%20EL%20MANANTIAL!5e0!3m2!1ses-419!2sco!4v1745107853111!5m2!1ses-419!2sco",
    },
    {
      id: 7,
      name: "E.M.M. Carmelo",
      description: "Escuela Municipal Mixta Carmelo.",
      coordinates: "4.600000, -74.065000",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2040849.9170950816!2d-77.35897713591353!3d2.495354648109322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e253326d2b21f45%3A0x96414fa7667ad21b!2sInstituci%C3%B3n%20Educativa%20EL%20CARMELO!5e0!3m2!1ses-419!2sco!4v1745108046204!5m2!1ses-419!2sco",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowwidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowwidth <= 480) {
      setItemsPerRow(1);
    } else if (windowwidth <= 768) {
      setItemsPerRow(2);
    } else if (windowwidth <= 992) {
      setItemsPerRow(2);
    } else {
      setItemsPerRow(3);
    }
    const maxTab =
      Math.ceil(
        headquarters.length /
          (windowwidth <= 480 ? 1 : windowwidth <= 992 ? 2 : 3)
      ) - 1;

    if (activeTab > maxTab) {
      setActiveTab(maxTab);
    }
  }, [windowwidth, headquarters.length, activeTab]);

  const totalPages = Math.ceil(headquarters.length / itemsPerRow);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handlePrevClick = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleNextClick = () => {
    if (activeTab < totalPages - 1) {
      setActiveTab(activeTab + 1);
    }
  };

  return (
    <div className="headquarters-container">
      <h1 className="headquarters-title">
        <strong>UBICACIÓN DE NUESTRAS</strong> SEDES INSTITUCIONALES
      </h1>
      <div className="headquarters-grid">
        {headquarters
          .slice(activeTab * itemsPerRow, (activeTab + 1) * itemsPerRow)
          .map((headquarter, index) => (
            <div key={index} className="headquarters-item">
              <div className="map-container">
                <iframe
                  title={`Mapa de ${headquarter.name}`}
                  src={headquarter.mapUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <h2 className="headquarters-name">{headquarter.name}</h2>
              <p className="headquarters-description">
                {headquarter.description}
              </p>
            </div>
          ))}
      </div>
      <div className="headquarters-tabs">
        {Array.from(
          { length: Math.ceil(headquarters.length / itemsPerRow) },
          (_, index) => (
            <button
              key={index}
              className={`tabs-button ${activeTab === index ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {index + 1}
            </button>
          )
        )}
        <div className="headquarters-icon-container">
          <button onClick={handlePrevClick} disabled={activeTab === 0}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            onClick={handleNextClick}
            disabled={activeTab === totalPages - 1}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadquartersMap;
