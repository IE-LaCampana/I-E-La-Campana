// ArtsExperienceData.js
import DanzaExperienceImg from "../../../assets/backgrounds/danza.jpeg";
import MusicaExperienceImg from "../../../assets/backgrounds/danza.jpeg";
import TeatroExperienceImg from "../../../assets/backgrounds/danza.jpeg";
import BandaExperienceImg from "../../../assets/backgrounds/danza.jpeg";
import TejidosExperienceImg from "../../../assets/backgrounds/danza.jpeg";
import DibujoExperienceImg from "../../../assets/backgrounds/danza.jpeg";

// Datos individuales para cada arte
export const danzaExperience = [
  {
    id: "danza",
    title: "La experiencia en el grupo de danza es enriquecedora y significativa. Los estudiantes trabajan en equipo, aprenden de artistas invitados y comparten vivencias que fortalecen la unión y el sentido de pertenencia. Cada presentación se convierte en una celebración de la cultura Misak, donde la música, el movimiento y la tradición convergen en solo lenguaje. El grupo de danza es más que un espacio de formación; es una familia unida por la pasión artística.",
    image: DanzaExperienceImg,
    category: "EXPERIENCIAS"
  }
];

export const musicaExperience = [
  {
    id: "musica",
    title: "La experiencia musical en nuestra institución trasciende las aulas. Los estudiantes viven cada nota como parte de su identidad, creando melodías que resuenan con la tradición ancestral Misak. Cada ensayo es un encuentro de generaciones, donde los saberes se comparten y la música se convierte en el puente que une pasado y presente. Los grupos musicales forman lazos inquebrantables, creando una familia sonora que representa con orgullo su territorio.",
    image: MusicaExperienceImg,
    category: "EXPERIENCIAS"
  }
];

export const teatroExperience = [
  {
    id: "teatro",
    title: "El teatro ofrece una experiencia transformadora donde los estudiantes descubren nuevas facetas de sí mismos. Cada obra es un viaje colectivo que explora emociones, tradiciones y reflexiones sobre la identidad Misak. Los participantes desarrollan confianza, creatividad y vínculos profundos con sus compañeros. El escenario se convierte en un espacio sagrado donde las historias cobran vida y la comunidad se reconoce en cada representación.",
    image: TeatroExperienceImg,
    category: "EXPERIENCIAS"
  }
];

export const bandaMarcialExperience = [
  {
    id: "banda-marcial",
    title: "La experiencia en la Banda Marcial forja carácter y disciplina en cada integrante. Los estudiantes aprenden el valor del trabajo coordinado, donde cada instrumento tiene su momento y su importancia. Los desfiles y presentaciones se convierten en momentos de orgullo colectivo, representando con honor los colores de su institución y comunidad. Es más que música; es un símbolo de unidad, respeto y tradición que marca el compás del crecimiento personal.",
    image: BandaExperienceImg,
    category: "EXPERIENCIAS"
  }
];

export const tejidosExperience = [
  {
    id: "tejidos",
    title: "La experiencia del tejido conecta a los estudiantes con la sabiduría ancestral de sus abuelas. Cada puntada es una oración, cada diseño una historia que se teje con paciencia y amor. Los talleres se convierten en círculos de aprendizaje donde se comparten secretos familiares y se preservan técnicas milenarias. El tejido no solo crea piezas hermosas; teje también los lazos de identidad que unen a la comunidad Misak con su legado cultural.",
    image: TejidosExperienceImg,
    category: "EXPERIENCIAS"
  }
];

export const dibujosPinturaExperience = [
  {
    id: "dibujos-pintura",
    title: "La experiencia artística del dibujo y la pintura permite a los estudiantes plasmar su visión del mundo Misak en cada trazo. Los colores del paisaje caucano cobran vida en sus lienzos, mientras que cada obra refleja la sensibilidad y creatividad juvenil. Los talleres son espacios de expresión libre donde las emociones se transforman en arte, creando un puente visual entre la tradición ancestral y las nuevas formas de interpretar la identidad cultural.",
    image: DibujoExperienceImg,
    category: "EXPERIENCIAS"
  }
];


export const artsExperienceMap = {
  "danza": danzaExperience,
  "musica": musicaExperience,
  "teatro": teatroExperience,
  "banda-marcial": bandaMarcialExperience,
  "tejidos": tejidosExperience,
  "dibujos-pintura": dibujosPinturaExperience,
};