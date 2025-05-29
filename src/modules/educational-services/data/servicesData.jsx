import BibliotecaEscolar from "../../../assets/institutional/biblioteca-escolar.jpg";
import SalaInformatica from "../../../assets/institutional/sala-informatica.jpg";
import SalaMedios from "../../../assets/institutional/sala-audiovisuales.jpg";
import LaboratorioQuimica from "../../../assets/institutional/laboratorio-quimica.jpg";
import ComedorEscolar from "../../../assets/institutional/comedor-escolar.jpg";
import ProgramaAlimentacion from "../../../assets/institutional/programa-alimentacion.jpg";
import EnfermeriaEscolar from "../../../assets/institutional/enfermeria-escolar.jpg";
import OrientacionEscolar from "../../../assets/institutional/orientacion-escolar.jpg";
import SeguroEscolar from "../../../assets/institutional/seguro-escolar.jpg";
import KitsEscolares from "../../../assets/institutional/kits-escolares.jpg";
import ActividadesExtracurriculares from "../../../assets/institutional/actividades-extracurriculares.jpg";
import SalidasPedagogicas from "../../../assets/institutional/salidas-pedagogicas.jpg";

const servicesData = [
  {
    id: 1,
    title: "Biblioteca Escolar",
    image: BibliotecaEscolar,
    description:
      "Espacio destinado a la consulta y préstamo de libros y materiales educativos.",
    detailedInfo: {
      description:
        "Fomentamos el hábito de la lectura y el acceso a recursos académicos que complementan el aprendizaje.",
      features: [
        "Colección actualizada de libros y revistas",
        "Ambiente tranquilo para el estudio",
        "Asesoría en búsqueda de información",
        "Acceso a recursos digitales",
      ],
    },
    category: "Servicios Académicos",
  },
  {
    id: 2,
    title: "Sala de Informática",
    image: SalaInformatica,
    description:
      "Espacio equipado con computadores para el desarrollo de habilidades digitales básicas.",
    detailedInfo: {
      description:
        "Facilitamos el aprendizaje de informática y el uso responsable de tecnologías digitales.",
      features: [
        "Computadores modernos con software educativo",
        "Acceso a internet seguro",
        "Talleres y capacitaciones tecnológicas",
      ],
    },
    category: "Servicios Académicos",
  },
  {
    id: 3,
    title: "Sala de Audiovisuales",
    image: SalaMedios,
    description:
      "Espacio equipado con proyectores y sistemas de sonido para apoyar actividades pedagógicas.",
    detailedInfo: {
      description:
        "Apoyamos el proceso educativo mediante recursos audiovisuales que facilitan la comprensión de contenidos.",
      features: [
        "Proyectores de alta calidad",
        "Sistemas de audio y video",
        "Material didáctico audiovisual",
      ],
    },
    category: "Servicios Académicos",
  },
  {
    id: 6,
    title: "Laboratorio de Química",
    image: LaboratorioQuimica,
    description:
      "Instalaciones para la realización de experimentos científicos en química.",
    detailedInfo: {
      description:
        "Promovemos el aprendizaje práctico y experimental para el entendimiento de fenómenos químicos.",
      features: [
        "Equipos y materiales para prácticas seguras",
        "Guías y protocolos de laboratorio",
        "Apoyo de docentes especializados",
      ],
    },
    category: "Servicios Académicos",
  },
  {
    id: 7,
    title: "Comedor Escolar",
    image: ComedorEscolar,
    description:
      "Servicio de alimentación balanceada para los estudiantes durante la jornada escolar.",
    detailedInfo: {
      description:
        "Garantizamos comidas nutritivas y adecuadas para el bienestar y desarrollo de los estudiantes.",
      features: [
        "Menús balanceados y variados",
        "Opciones para necesidades especiales",
        "Ambiente higiénico y acogedor",
      ],
    },
    category: "Servicios de Bienestar",
  },
  {
    id: 8,
    title: "Programa de Alimentación Escolar",
    image: ProgramaAlimentacion,
    description:
      "Iniciativa gubernamental que asegura alimentación gratuita o subsidiada para estudiantes.",
    detailedInfo: {
      description:
        "Contribuimos a la nutrición adecuada de nuestros estudiantes a través de este programa oficial.",
      features: [
        "Alimentos de calidad y supervisados",
        "Apoyo a familias en situación vulnerable",
        "Promoción de hábitos alimenticios saludables",
      ],
    },
    category: "Servicios de Bienestar",
  },
  {
    id: 9,
    title: "Enfermería Escolar",
    image: EnfermeriaEscolar,
    description:
      "Atención básica en salud y primeros auxilios para los estudiantes.",
    detailedInfo: {
      description:
        "Brindamos cuidado inmediato y seguimiento a la salud de la comunidad educativa.",
      features: [
        "Atención en casos de emergencia",
        "Control de medicamentos y vacunas",
        "Educación en salud preventiva",
      ],
    },
    category: "Servicios de Bienestar",
  },
  {
    id: 10,
    title: "Orientación Escolar",
    image: OrientacionEscolar,
    description: "Apoyo psicológico y académico para estudiantes y familias.",
    detailedInfo: {
      description:
        "Ofrecemos acompañamiento para el bienestar emocional y el desarrollo integral del estudiante.",
      features: [
        "Asesoría en temas académicos y vocacionales",
        "Talleres de habilidades socioemocionales",
        "Intervención en casos de conflicto o crisis",
      ],
    },
    category: "Servicios de Bienestar",
  },
  {
    id: 11,
    title: "Seguro Escolar",
    image: SeguroEscolar,
    description:
      "Cobertura para accidentes y emergencias durante la jornada escolar.",
    detailedInfo: {
      description:
        "Protegemos a nuestros estudiantes para que puedan desarrollarse en un ambiente seguro.",
      features: [
        "Atención médica en caso de accidentes",
        "Cobertura de gastos médicos",
        "Apoyo en situaciones de emergencia",
      ],
    },
    category: "Servicios de Bienestar",
  },
  {
    id: 12,
    title: "Kits Escolares",
    image: KitsEscolares,
    description:
      "Entrega de útiles escolares básicos para apoyar el proceso educativo.",
    detailedInfo: {
      description:
        "Facilitamos los recursos necesarios para que los estudiantes puedan cumplir con sus actividades académicas.",
      features: [
        "Material didáctico completo y actualizado",
        "Entrega anual o según necesidad",
        "Apoyo a estudiantes en condiciones vulnerables",
      ],
    },
    category: "Servicios de Bienestar",
  },
  {
    id: 13,
    title: "Actividades Extracurriculares",
    image: ActividadesExtracurriculares,
    description:
      "Programas adicionales como clubes, talleres, deportes y artes.",
    detailedInfo: {
      description:
        "Fomentamos el desarrollo integral a través de actividades que complementan la formación académica.",
      features: [
        "Clubes deportivos y artísticos",
        "Talleres de habilidades y talentos",
        "Eventos culturales y recreativos",
      ],
    },
    category: "Servicios Complementarios",
  },
  {
    id: 14,
    title: "Salidas Pedagógicas",
    image: SalidasPedagogicas,
    description:
      "Actividades educativas fuera del aula para promover el aprendizaje experiencial.",
    detailedInfo: {
      description:
        "Potenciamos el aprendizaje práctico mediante visitas y convivencias que enriquecen la formación.",
      features: [
        "Visitas a museos, parques y empresas",
        "Convivencias y actividades de integración",
        "Apoyo en el desarrollo de competencias sociales",
      ],
    },
    category: "Servicios Complementarios",
  },
];

export default servicesData;
