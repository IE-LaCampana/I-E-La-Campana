// Importaciones de imágenes
import EventsImage from "../../../assets/banners/Artesanias.jpg";
import JornadaDeportiva from "../../../assets/banners/Jornada-Deportiva.jpeg";
import SemanaCultural from "../../../assets/banners/Semana-Cultural.jpg";
import LenguaMaterna from "../../../assets/banners/Lengua-Nativa.jpeg";
import MujerMisak from "../../../assets/banners/Mujer-Misak.jpg";
import DiaAgua from "../../../assets/banners/Dia-Agua.jpg";
import DiaNino from "../../../assets/banners/Dia-Nino.jpg";
import DiaMaestro from "../../../assets/banners/Dia-Maestro.png";
import DiaDelEstudiante from "../../../assets/banners/Dia-Del-Estudiante.jpg";
import DiaBandera from "../../../assets/banners/Dia-Bandera.jpeg";
import DiaTierra from "../../../assets/banners/Dia-Tierra.avif";
import MujerIndigena from "../../../assets/banners/MujerIndigena.jpg";
import DiaOfrendas from "../../../assets/banners/Día-Ofrendas.jpg";
import DiaInternacionalPueblosMisak from "../../../assets/banners/Dia-Internacional-Pueblos-Misak.jpg";
import PosesionCabildoEstudiantil from "../../../assets/banners/Posesion-Cabildo-Estudiantil.jpeg";
import PrimerPeriodo from "../../../assets/banners/Primer-Periodo-.jpg";
import EntregaBoletines from "../../../assets/banners/Entrega-Boletines.jpg";
import SegundoPeriodo from "../../../assets/banners/SegundoPeriodo.jpg";
import TecerPeriodo from "../../../assets/banners/TercerPeriodo.jpg";
import RecesoEstudiantil from "../../../assets/banners/Receso-Estudiantil.png";
import JornadaSalud from "../../../assets/banners/Jornada-Salud.jpg";

// Datos de eventos
export const events = [
  {
    id: 1,
    title: "Jornada Deportiva",
    date: "2025-03-22 10:00:00",
    description:
      "Disfruta de una emocionante jornada deportiva con competencias entre cursos en disciplinas como fútbol, baloncesto y voleibol. También habrá actividades de integración para fortalecer la convivencia y el espíritu deportivo entre los participantes",
    image: JornadaDeportiva,
  },
  {
    id: 2,
    title: "Semana Cultural",
    date: "2025-04-05 08:00:00",
    description:
      "Celebra la diversidad cultural con una semana llena de presentaciones artísticas, musicales y talleres de expresión. Disfruta de actividades que resaltan las tradiciones, el arte y la creatividad de nuestra comunidad",
    image: SemanaCultural,
  },
  {
    id: 3,
    title: "Día de la Lengua Materna",
    date: "2025-02-21",
    description:
      "Jornada de reflexión sobre la importancia de preservar y promover el uso de la lengua materna en nuestra comunidad. Se realizarán actividades culturales, recitales y talleres de sensibilización para fortalecer nuestra identidad lingüística.",
    image: LenguaMaterna,
  },
  {
    id: 4,
    title: "Día de la Mujer",
    date: "2025-03-07",
    description:
      "Celebración dedicada al reconocimiento de los derechos, logros y aportes de las mujeres en nuestra sociedad. Habrá conferencias, foros y actividades artísticas para promover la igualdad y el respeto.",
    image: MujerMisak,
  },
  {
    id: 5,
    title: "Día del Agua",
    date: "2025-03-22",
    description:
      "Concientización sobre el uso sostenible del agua y su impacto en el planeta. Se llevarán a cabo charlas educativas, actividades ecológicas y una jornada de limpieza de fuentes hídricas cercanas.",
    image: DiaAgua,
  },
  {
    id: 6,
    title: "Día del Niño",
    date: "2025-04-25",
    description:
      "Día especial para los más pequeños con actividades recreativas, juegos, presentaciones artísticas y dinámicas para resaltar la importancia de la infancia y el derecho a la felicidad y educación.",
    image: DiaNino,
  },
  {
    id: 7,
    title: "Día del Maestro",
    date: "2025-05-16",
    description:
      "Agradecimiento y reconocimiento a la labor de los docentes. Se realizarán homenajes, actividades especiales y entrega de reconocimientos por su dedicación en la enseñanza.",
    image: DiaMaestro,
  },
  {
    id: 8,
    title: "Día del Estudiante",
    date: "2025-06-06",
    description:
      "El Día del Estudiante reconoce el esfuerzo y dedicación de los estudiantes en su formación académica. Se organizan encuentros, charlas motivacionales y eventos deportivos para incentivar la excelencia académica y el liderazgo estudiantil dentro de la comunidad educativa.",
    image: DiaDelEstudiante,
  },
  {
    id: 9,
    title: "Día de la Bandera Misak",
    date: "2025-06-28",
    description:
      "Ceremonia especial para rendir homenaje a la bandera nacional con izadas, discursos patrióticos y reflexiones sobre la importancia de los símbolos patrios. Se reforzarán los valores de la identidad y pertenencia cultural en toda la comunidad educativa.",
    image: DiaBandera,
  },
  {
    id: 10,
    title: "Día de la Tierra",
    date: "2025-07-19",
    description:
      "Jornada de reflexión sobre el respeto y la conservación de la Tierra con actividades ambientales, plantación de árboles y exposiciones sobre la historia y el significado de la recuperación de tierras ancestrales.",
    image: DiaTierra,
  },
  {
    id: 11,
    title: "Conmemoración de la Misak Educación",
    date: "2025-07-16",
    description:
      "Semana dedicada a la educación en la comunidad Misak, con eventos académicos, presentaciones culturales y talleres sobre la identidad y la historia de la comunidad.",
    image: EventsImage,
  },
  {
    id: 12,
    title: "Día de la Mujer Indígena",
    date: "2025-09-05",
    description:
      "Celebración en honor a la mujer indígena con encuentros, foros y muestras culturales que resaltan su importancia en la comunidad. Se compartirán experiencias y conocimientos sobre el rol de la mujer en la preservación de la tradición y la cultura indígena.",
    image: MujerIndigena,
  },
  {
    id: 13,
    title: "Día de las Ofrendas",
    date: "2025-10-31",
    description:
      "Evento en el que se realizan ofrendas en agradecimiento a la tierra y a los ancestros. Se llevarán a cabo rituales, danzas tradicionales y charlas sobre el significado de esta fecha en la cosmovisión indígena y cultural.",
    image: DiaOfrendas,
  },
  {
    id: 14,
    title: "Día Internacional de los Derechos de los Pueblos Indígenas",
    date: "2025-11-06",
    description:
      "Jornada de sensibilización y reflexión sobre los derechos de los pueblos indígenas con charlas, exposiciones y foros de discusión. Se promoverá el respeto, la inclusión y la valoración de la diversidad cultural en la sociedad.",
    image: DiaInternacionalPueblosMisak,
  },
  {
    id: 15,
    title: "Posesión del Cabildo Estudiantil",
    date: "2025-03-14",
    description:
      "Con gran entusiasmo y sentido de responsabilidad, los estudiantes de la Institución Educativa La Campana tomaron posesión de sus cargos como miembros del Cabildo Estudiantil. La ceremonia, que se llevó a cabo en el aula múltiple del colegio, contó con la presencia de la autoridad máxima del resguardo de Guambía, directivos, docentes y la comunidad estudiantil en general.",
    image: PosesionCabildoEstudiantil,
  },
  {
    id: 16,
    title: "Feria Artesanal ",
    date: "2025-03-14",
    description:
      "Descubre la creatividad en nuestra Feria Artesanal. Un evento donde encontrarás piezas únicas hechas a mano por talentosos artesanos. Explora tejidos y más, mientras apoyas el arte local. Ven con tu familia y disfruta de un día lleno de cultura, tradición y creatividad.",
    image: EventsImage,
  },
];

// Datos de noticias
export const news = [
  {
    id: 1,
    title: "Inicio del Primer Periodo Académico",
    date: "2025-01-22 al 2025-04-11",
    description:
      "El primer periodo académico inicia el 22 de enero y finaliza el 11 de abril de 2025. Durante estos meses, los estudiantes avanzarán en su proceso de aprendizaje, desarrollando nuevas habilidades y conocimientos. Al finalizar, se entregarán informes académicos y se dará un breve receso antes del segundo periodo.",
    image: PrimerPeriodo,
  },
  {
    id: 2,
    title: "Entrega de Boletines del Primer Periodo",
    date: "2025-04-18",
    description:
      "Se realizará la entrega de boletines académicos correspondientes al primer periodo. Este informe permitirá a los estudiantes y sus familias conocer el desempeño académico alcanzado, identificar áreas de mejora y reforzar estrategias de estudio de cara al segundo periodo.",
    image: EntregaBoletines,
  },
  {
    id: 3,
    title: "Inicio del Segundo Periodo Académico",
    date: "2025-04-21 al 2025-08-15",
    description:
      "El segundo periodo académico comienza el 21 de abril y se extenderá hasta el 15 de agosto de 2025. En esta fase, los estudiantes continuarán con su formación académica, enfrentando nuevas evaluaciones y consolidando sus aprendizajes. Además, se entregarán reportes de desempeño a mitad del periodo.",
    image: SegundoPeriodo,
  },
  {
    id: 4,
    title: "Entrega de Boletines del Segundo Periodo",
    date: "2025-07-02",
    description:
      "Se llevará a cabo la entrega oficial de boletines académicos a padres de familia y estudiantes. Este momento será clave para analizar el desempeño escolar, recibir observaciones y fortalecer estrategias de aprendizaje para lo que resta del año. Se recomienda a los estudiantes reflexionar sobre su progreso y establecer metas de mejora.",
    image: EntregaBoletines,
  },
  {
    id: 5,
    title: "Inicio del Tercer Periodo Académico",
    date: "2025-08-19 al 2025-11-28",
    description:
      "El tercer y último periodo académico del año dará inicio el 19 de agosto y finalizará el 28 de noviembre de 2025. Durante este tiempo, los estudiantes reforzarán sus conocimientos y se prepararán para las evaluaciones finales, consolidando lo aprendido en las etapas previas del año escolar.",
    image: TecerPeriodo,
  },
  {
    id: 6,
    title: "Entrega de Boletines Finales",
    date: "2025-12-05",
    description:
      "Se realizará la última entrega de boletines académicos del año, proporcionando a los estudiantes y sus familias un balance detallado del desempeño escolar. Esta información será fundamental para planificar el siguiente ciclo educativo y reconocer los logros alcanzados.",
    image: EntregaBoletines,
  },
  {
    id: 7,
    title: "Receso Estudiantil",
    date: "2025-06-09",
    description:
      "Los estudiantes disfrutarán de un merecido descanso entre el 9 y el 30 de junio. Durante este tiempo podrán relajarse. compartir con sus familias y prepararsepara el inicio del próximo periodo, aprobechando el tiempo libre para las actividades recreativas.",
    image: RecesoEstudiantil,
  },
  {
    id: 8,
    title: "Jornada de Salud",
    date: "2025-23-04",
    description:
      "El 10 de septiembre de 2025, se llevará a cabo la Jornada de Salud, una iniciativa conjunta con las EPS Mamá Dominga y San Carlos Pig. Este programa busca garantizar el bienestar de los estudiantes mediante la administración de vacunas esenciales, promoviendo la salud y prevención de enfermedades.",
    image: JornadaSalud,
  },
];

// También puedes exportar las imágenes individualmente si necesitas acceder a ellas directamente
export const images = {
  EventsImage,
  JornadaDeportiva,
  SemanaCultural,
  LenguaMaterna,
  MujerMisak,
  DiaAgua,
  DiaNino,
  DiaMaestro,
  DiaDelEstudiante,
  DiaBandera,
  DiaTierra,
  MujerIndigena,
  DiaOfrendas,
  DiaInternacionalPueblosMisak,
  PosesionCabildoEstudiantil,
  PrimerPeriodo,
  EntregaBoletines,
  SegundoPeriodo,
  TecerPeriodo,
  RecesoEstudiantil,
  JornadaSalud,
};
