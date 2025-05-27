import RestauranteEscolar from "../../../assets/institutional/restaurante-escolar.jpg";
import AtencionPsicologica from "../../../assets/institutional/atencion-psicologica.jpg";
import EducacionInclusiva from "../../../assets/institutional/educacion-inclusiva.jpg";
import AtencionPadres from "../../../assets/institutional/atencion-padres.jpg";


const studentServicesData = [
  {
    id: 1,
    title: "Restaurante Escolar",
    image: RestauranteEscolar, 
    description: "Servicio de alimentación para estudiantes",
    detailedInfo: {
      description:
        "Ofrecemos comidas nutritivas y balanceadas para todos los estudiantes durante el horario escolar.",
      features: [
        "Menús balanceados y nutritivos",
        "Precios accesibles para estudiantes",
        "Horarios flexibles de atención",
        "Opciones vegetarianas disponibles",
        "Ambiente limpio y seguro",
      ],
    },
    category: "Servicios Estudiantiles",
  },
  {
    id: 2,
    title: "Atención Psicológica",
    image: AtencionPsicologica, 
    description: "Apoyo psicológico y emocional profesional",
    detailedInfo: {
      description:
        "Brindamos apoyo emocional y psicológico especializado a estudiantes que necesiten acompañamiento en su desarrollo personal y académico.",
      features: [
        "Consultas psicológicas individuales",
        "Terapia grupal especializada",
        "Orientación y apoyo familiar",
        "Programas de prevención",
        "Seguimiento personalizado",
      ],
    },
    category: "Servicios Estudiantiles",
  },
  {
    id: 3,
    title: "Educación Inclusiva",
    image: EducacionInclusiva,
    description: "Programas especializados de inclusión educativa",
    detailedInfo: {
      description:
        "Desarrollamos programas especializados para estudiantes con necesidades educativas especiales, garantizando una educación de calidad para todos.",
      features: [
        "Adaptaciones curriculares personalizadas",
        "Apoyo especializado individualizado",
        "Tecnología asistiva moderna",
        "Capacitación docente continua",
        "Acompañamiento familiar integral",
      ],
    },
    category: "Servicios Estudiantiles",
  },
  {
    id: 4,
    title: "Atención a Padres",
    image: AtencionPadres,
    description: "Orientación y apoyo integral para familias",
    detailedInfo: {
      description:
        "Ofrecemos servicios de orientación y apoyo especializado para padres de familia, fortaleciendo el vínculo escuela-hogar en el proceso educativo.",
      features: [
        "Talleres formativos para padres",
        "Orientación familiar especializada",
        "Comunicación efectiva escuela-hogar",
        "Recursos educativos para el hogar",
        "Seguimiento del progreso estudiantil",
      ],
    },
    category: "Servicios Estudiantiles",
  },
];

export default studentServicesData;
