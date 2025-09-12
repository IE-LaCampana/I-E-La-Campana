
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArtsHeroVideo from "../components/ArtsHeroVideo";
import { artsVideoMap, danza } from "../data/artsHeroVideoData";
import ArtsDescription from "../components/ArtsDecsription";
import { artsDescriptionMap, danzaDescription } from "../data/artsDescriptionData";
import ArtsExperience from "../components/ArtsExperience";
import { artsExperienceMap,  danzaExperience} from "../data/artsExperienceData";

const ArtsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 🔥 Obtener los datos específicos del arte
  const artData = artsVideoMap[id] || danza;
  const artDescriptionData = artsDescriptionMap[id] || danzaDescription;
  const artExperienceData = artsExperienceMap[id] || danzaExperience;

  // 🔍 DEBUGGING MEJORADO
  console.log("=== DEBUG ARTS DETAIL PAGE ===");
  console.log("ID recibido desde URL:", id);
  console.log("Keys disponibles en artsVideoMap:", Object.keys(artsVideoMap));
  console.log("¿Existe el ID en el mapa?", artsVideoMap.hasOwnProperty(id));
  console.log("Datos para mostrar:", artData);
  console.log("Video URL:", artData?.[0]?.videoUrl);
  console.log("================================");

  // Verificar si encontramos datos válidos
  if (!artData || artData.length === 0) {
    return (
      <div className="artsDetailPage">
        <h2>Arte no encontrado</h2>
        <p>El arte con ID "{id}" no existe.</p>
        <button onClick={() => navigate(-1)}>Volver atrás</button>
      </div>
    );
  }

  return (
    <div className="artsDetailPage">
      <ArtsHeroVideo data={artData} />
      <ArtsDescription data={artDescriptionData} />
      <ArtsExperience data={artExperienceData} />
    </div>
  );
};

export default ArtsDetailPage;