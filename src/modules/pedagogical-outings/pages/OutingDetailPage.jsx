import React from "react";
import { useParams } from "react-router-dom";
import OutingsCarousel from "../components/OutingsCarousel";
import OutingDetail from "../components/OutingDetail";
import { outingData } from "../data/outingData";

const OutingDetailPage = () => {
  const { id } = useParams();

  const outing = outingData.find((outing) => outing.id === parseInt(id));

  if (!outing) {
    return (
      <div
        style={{
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h2>Salida Pedagógica No Encontrada</h2>
        <p>La salida pedagógica que estás buscando no existe.</p>
        <a
          href="/salidas-pedagogicas"
          style={{
            color: "#007bff",
            textDecoration: "none",
            marginTop: "20px",
          }}
        >
          ← Volver a Salidas Pedagógicas
        </a>
      </div>
    );
  }

  // AQUÍ ESTÁ LA CLAVE: Crear datos específicos para el carrusel de esta salida
  const specificCarouselData = outing.carouselImages
    ? // Si tiene imágenes específicas, usarlas
      outing.carouselImages.map((img) => ({
        id: img.id,
        title: img.title,
        description: img.description,
        image: img.src,
      }))
    : // Si no, usar la imagen general de la salida con información personalizada
      [
        {
          id: outing.id,
          title: outing.carouselData.title,
          description: outing.carouselData.description,
          image: outing.carouselData.image,
        },
      ];

  console.log(`Mostrando salida ID ${id}: ${outing.title}`);
  console.log("Datos del carrusel para esta salida:", specificCarouselData);

  return (
    <div>
      {/* Carrusel con imágenes específicas de esta salida */}
      <OutingsCarousel
        data={specificCarouselData}
        autoplaySpeed={5000}
        fadeSpeed={1200}
        showDots={true}
        showArrows={true}
      />

      {/* Detalle de la salida */}
      <OutingDetail data={outing.detailData} />
    </div>
  );
};

export default OutingDetailPage;
