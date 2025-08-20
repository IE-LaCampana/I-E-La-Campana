// src/data/outingsData.js
import PrimeraImagen from "../../../assets/banners/salida-pedagogicas3.jpeg";
import SegundaImagen from "../../../assets/banners/salida-pedagogicas4.jpeg";
import TerceraImagen from "../../../assets/banners/salida-pedagogicas5.jpeg";
import CuartaImagen from "../../../assets/banners/salida-pedagogicas5.jpeg";


// Importar más imágenes para cada carrusel específico

import MuseoImg1 from "../../../assets/banners/parque-1.jpg";
import MuseoImg2 from "../../../assets/banners/parque-2.jpg";
import MuseoImg3 from "../../../assets/banners/parque-3.jpg";
import MuseoImg4 from "../../../assets/banners/parque-4.jpg";

// import MuseoImg4 from "../../../assets/salidas/museo/museo-4.jpeg";
import LabImg1 from "../../../assets/banners/parque-1.jpg";
import LabImg2 from "../../../assets/banners/parque-2.jpg";
import LabImg3 from "../../../assets/banners/parque-3.jpg";
import LabImg4 from "../../../assets/banners/parque-4.jpg";

// import LabImg1 from "../../../assets/salidas/laboratorio/lab-1.jpeg";


export const outingData = [
  {
    // Datos para la tarjeta (OutingCard)
    id: 1,
    title: "Exploración Ecológica al Parque Natural",
    subtitle: "Descubre la biodiversidad local en un entorno natural único",
    location: "Parque Natural Municipal",
    backgroundImage: PrimeraImagen,
    temperature: "18°C",
    altitude: "2,240",
    duration: "360",
    
    // Datos para el carrusel - IMÁGENES ESPECÍFICAS DE ESTA SALIDA
    carouselImages: [
      {
        id: 1,
        src: PrimeraImagen
      },
      {
        id: 2,
        src: SegundaImagen
      },
      {
        id: 3,
        src: TerceraImagen
      },
      {
        id: 4,
        src: CuartaImagen
      }
    ],
    
    // Datos para el carrusel general (mantener compatibilidad)
    carouselData: {
      title: "Visita al Museo de Ciencias Naturales",
      description: "Exploramos la biodiversidad y los ecosistemas de nuestra región, fortaleciendo el aprendizaje sobre ciencias naturales de manera interactiva.",
      image: PrimeraImagen
    },
    
    // Datos detallados para OutingDetailPage
    detailData: {
      title: "Exploración Ecológica al Parque Natural Municipal",
      description: "Una experiencia educativa integral que busca fortalecer el aprendizaje de las ciencias naturales mediante la inmersión directa en la naturaleza. Durante la salida pedagógica, los estudiantes exploraron diferentes ecosistemas locales, observaron especies representativas de flora y fauna, y comprendieron de manera vivencial conceptos fundamentales de biodiversidad, sostenibilidad y conservación ambiental. Esta actividad fomentó la curiosidad científica, el trabajo colaborativo y la reflexión crítica sobre la importancia de proteger los recursos naturales como parte del compromiso con la comunidad y el entorno. Asimismo, permitió articular los contenidos académicos con la práctica en campo, promoviendo un aprendizaje significativo y una mayor conciencia ambiental que trasciende el aula y se proyecta hacia la formación de ciudadanos responsables.",
      
      basicInfo: {
        sede: "Sede Central - Campus Norte",
        ubicacion: "Parque Natural Municipal El Refugio, Sector La Cascada",
        grado: "9° Grado - Sección A",
        participantes: 32,
        duracion: "8:00 AM - 2:00 PM (6 horas)",
        fecha: "15 de Marzo, 2024"
      },
      
      teachers: [
        {
          id: 1,
          name: "Prof. María Elena Rodríguez",
          subject: "Biología",
          role: "Docente Principal"
        },
        {
          id: 2,
          name: "Prof. Carlos Mendoza",
          subject: "Química",
          role: "Docente de Apoyo"
        },
        {
          id: 3,
          name: "Prof. Ana Lucía Torres",
          subject: "Educación Ambiental",
          role: "Coordinadora de Actividades"
        }
      ],
      
      activities: [
        {
          id: 1,
          title: "Reconocimiento de Flora Nativa",
          description: "Identificación y catalogación de especies vegetales endémicas",
          time: "9:00 AM - 10:30 AM",
          participants: 32
        },
        {
          id: 2,
          title: "Observación de Fauna Silvestre",
          description: "Avistamiento y registro de aves y mamíferos pequeños",
          time: "10:45 AM - 12:00 PM",
          participants: 32
        },
        {
          id: 3,
          title: "Taller de Conservación",
          description: "Actividades prácticas sobre preservación del ecosistema",
          time: "1:00 PM - 1:45 PM",
          participants: 32
        }
      ],
      
      objectives: [
        "Desarrollar conciencia ambiental en los estudiantes",
        "Aplicar conocimientos teóricos en un entorno natural",
        "Fomentar el trabajo colaborativo y la observación científica",
        "Promover el respeto y cuidado del medio ambiente"
      ],
      
      resources: [
        "Guías de campo especializadas",
        "Lupas y material de observación",
        "Cuadernos de registro científico",
        "Cámaras fotográficas",
        "Kit de primeros auxilios"
      ]
    }
  },
  {
    id: 2,
    title: "Museo de Historia y Arqueología",
    subtitle: "Viaje a través del tiempo y las civilizaciones ancestrales",
    location: "Museo Nacional",
    backgroundImage: SegundaImagen,
    temperature: "22°C",
    altitude: "1,760",
    duration: "240",
    
    // Imágenes específicas del museo
    carouselImages: [
      {
        id: 1,
        src: MuseoImg1,
        title: "Culturas Precolombinas",
        description: "Estudiantes explorando artefactos de civilizaciones ancestrales"
      },
      {
        id: 2,
        src: MuseoImg2,
        title: "Taller de Arqueología",
        description: "Simulacro de excavación y clasificación de hallazgos arqueológicos"
      },
      {
        id: 3,
        src: MuseoImg3,
        title: "Análisis de Artefactos",
        description: "Examinando herramientas y objetos históricos con guías especializados"
      },
      {
        id: 4,
        src: MuseoImg4,
        title: "Aprendizaje Histórico",
        description: "Comprendiendo la evolución de las sociedades humanas"
      }
    ],
    
    carouselData: {
      title: "Visita al Museo de Historia y Arqueología",
      description: "Descubrimos fósiles y especies prehistóricas, conectando el pasado con el presente para comprender la evolución de la vida en la Tierra.",
      image: SegundaImagen
    },
    
    detailData: {
      title: "Exploración Histórica en el Museo de Arqueología",
      description: "Una experiencia educativa integral diseñada para fortalecer el aprendizaje de las ciencias naturales mediante la exploración directa de la naturaleza. Durante la salida pedagógica, los estudiantes recorrieron ecosistemas locales, identificaron especies de flora y fauna y comprendieron conceptos de biodiversidad y conservación ambiental. La jornada fomentó la investigación, el trabajo colaborativo y la reflexión crítica sobre la protección del entorno, generando aprendizajes significativos que trascienden el aula hacia la vida cotidiana y fortalecen la formación de ciudadanos responsables.",
      
      basicInfo: {
        sede: "Sede La Campana - Campus Principal",
        ubicacion: "Museo Nacional de Arqueología, Sala de Culturas Precolombinas",
        grado: "8° Grado - Sección B",
        participantes: 28,
        duracion: "9:00 AM - 1:00 PM (4 horas)",
        fecha: "22 de Abril, 2024"
      },
      
      teachers: [
        {
          id: 1,
          name: "Prof. Roberto Jiménez",
          subject: "Historia",
          role: "Docente Principal"
        },
        {
          id: 2,
          name: "Prof. Diana Castillo",
          subject: "Ciencias Sociales",
          role: "Docente de Apoyo"
        }
      ],
      
      activities: [
        {
          id: 1,
          title: "Recorrido por Culturas Ancestrales",
          description: "Exploración de artefactos y herramientas de civilizaciones precolombinas",
          time: "9:30 AM - 11:00 AM",
          participants: 28
        },
        {
          id: 2,
          title: "Taller de Arqueología Práctica",
          description: "Simulacro de excavación y clasificación de hallazgos arqueológicos",
          time: "11:15 AM - 12:30 PM",
          participants: 28
        }
      ],
      
      objectives: [
        "Valorar el patrimonio histórico y cultural",
        "Comprender la evolución de las sociedades humanas",
        "Desarrollar pensamiento crítico sobre el pasado",
        "Fomentar la identidad cultural regional"
      ],
      
      resources: [
        "Guías especializados del museo",
        "Material didáctico arqueológico",
        "Herramientas de excavación simulada",
        "Cuadernos de registro histórico"
      ]
    }
  },
  {
    id: 3,
    title: "Laboratorio de Ciencias Aplicadas",
    subtitle: "Experimentación y descubrimiento científico",
    location: "Universidad Nacional",
    backgroundImage: TerceraImagen,
    temperature: "20°C",
    altitude: "1,850",
    duration: "300",
    
    // Imágenes específicas del laboratorio
    carouselImages: [
      {
        id: 1,
        src: LabImg1,
        title: "Experimentos de Química",
        description: "Síntesis de compuestos y análisis de reacciones químicas en laboratorio"
      },
      {
        id: 2,
        src: LabImg2,
        title: "Análisis Microscópico",
        description: "Observación detallada de células y microorganismos"
      },
      {
        id: 3,
        src: LabImg3,
        title: "Metodología Científica",
        description: "Estudiantes aplicando el método científico en experimentos reales"
      },
      {
        id: 4,
        src: LabImg4,
        title: "Investigación Universitaria",
        description: "Charla sobre proyectos de investigación con investigadores especializados"
      }
    ],
    
    carouselData: {
      title: "Visita al Laboratorio de Ciencias",
      description: "Participamos en talleres prácticos donde los estudiantes pudieron observar especímenes y realizar experimentos científicos básicos.",
      image: TerceraImagen
    },
    
    detailData: {
      title: "Experiencia Científica en Laboratorio Universitario",
      description: "Una inmersión educativa que permitió a los estudiantes acercarse a la ciencia aplicada a través de experimentos guiados por investigadores universitarios. Durante la jornada, comprendieron la relevancia de la metodología científica, el rigor en la investigación y las aplicaciones prácticas de la tecnología en la vida diaria. La experiencia reforzó el aprendizaje académico, estimuló la vocación científica y consolidó competencias relacionadas con la observación, el análisis de resultados y la resolución de problemas. Asimismo, fomentó la participación activa y la motivación hacia futuros proyectos de innovación.",
      
      basicInfo: {
        sede: "Sede Manantial - Secundaria",
        ubicacion: "Laboratorio de Investigación, Facultad de Ciencias - Universidad Nacional",
        grado: "10° Grado - Sección A",
        participantes: 25,
        duracion: "8:30 AM - 1:30 PM (5 horas)",
        fecha: "10 de Mayo, 2024"
      },
      
      teachers: [
        {
          id: 1,
          name: "Prof. Andrea Morales",
          subject: "Física",
          role: "Docente Principal"
        },
        {
          id: 2,
          name: "Prof. Miguel Santos",
          subject: "Química",
          role: "Docente de Apoyo"
        },
        {
          id: 3,
          name: "Dr. Laura Vásquez",
          subject: "Investigación",
          role: "Investigadora Universitaria"
        }
      ],
      
      activities: [
        {
          id: 1,
          title: "Experimentos de Química Orgánica",
          description: "Síntesis de compuestos y análisis de reacciones químicas",
          time: "9:00 AM - 10:30 AM",
          participants: 25
        },
        {
          id: 2,
          title: "Análisis Microscópico",
          description: "Observación de células y microorganismos",
          time: "10:45 AM - 12:00 PM",
          participants: 25
        },
        {
          id: 3,
          title: "Conferencia sobre Investigación",
          description: "Charla sobre metodología científica y proyectos de investigación",
          time: "12:30 PM - 1:15 PM",
          participants: 25
        }
      ],
      
      objectives: [
        "Aplicar conocimientos científicos en práctica real",
        "Conocer metodologías de investigación universitaria",
        "Despertar vocaciones científicas y tecnológicas",
        "Comprender la importancia de la ciencia en el desarrollo social"
      ],
      
      resources: [
        "Equipment de laboratorio especializado",
        "Microscopios de alta resolución",
        "Reactivos y materiales de experimentación",
        "Batas de laboratorio y equipo de seguridad",
        "Material bibliográfico científico"
      ]
    }
  },
  {
    id: 4,
    title: "Reserva Natural La Montaña",
    subtitle: "Conservación y ecoturismo educativo",
    location: "Reserva La Montaña",
    backgroundImage: CuartaImagen,
    temperature: "16°C",
    altitude: "2,680",
    duration: "420",

    // Imágenes específicas del laboratorio
    carouselImages: [
      {
        id: 1,
        src: LabImg1,
        title: "Experimentos de Química",
        description: "Síntesis de compuestos y análisis de reacciones químicas en laboratorio"
      },
      {
        id: 2,
        src: LabImg2,
        title: "Análisis Microscópico",
        description: "Observación detallada de células y microorganismos"
      },
      {
        id: 3,
        src: LabImg3,
        title: "Metodología Científica",
        description: "Estudiantes aplicando el método científico en experimentos reales"
      },
      {
        id: 4,
        src: LabImg4,
        title: "Investigación Universitaria",
        description: "Charla sobre proyectos de investigación con investigadores especializados"
      }
    ],
    
    carouselData: {
      title: "Expedición a la Reserva Natural",
      description: "Conocimos la importancia de la conservación ambiental y el papel que juegan los museos en la preservación del patrimonio natural.",
      image: CuartaImagen
    },
    
    detailData: {
      title: "Expedición Ecológica a la Reserva Natural La Montaña",
      description: "Una actividad pedagógica en contacto directo con uno de los ecosistemas más representativos de la región, donde los estudiantes observaron especies endémicas, comprendieron las cadenas alimentarias y reflexionaron sobre el impacto humano en el medio ambiente. La expedición incentivó la conciencia ambiental, el compromiso con la sostenibilidad y el respeto por la biodiversidad. La experiencia, además de reforzar aprendizajes científicos, promovió la cooperación entre compañeros, el liderazgo juvenil y la valoración de los recursos naturales como patrimonio esencial que debe conservarse para las futuras generaciones.",
      
      basicInfo: {
        sede: "Sede Carmelo - Bachillerato",
        ubicacion: "Reserva Natural La Montaña, Sendero Ecológico Principal",
        grado: "11° Grado - Secciones A y B",
        participantes: 40,
        duracion: "7:00 AM - 4:00 PM (9 horas)",
        fecha: "18 de Junio, 2024"
      },
      
      teachers: [
        {
          id: 1,
          name: "Prof. Sandra Delgado",
          subject: "Ciencias Ambientales",
          role: "Docente Principal"
        },
        {
          id: 2,
          name: "Prof. Jaime Rivera",
          subject: "Biología",
          role: "Docente de Apoyo"
        },
        {
          id: 3,
          name: "Guía Fernando López",
          subject: "Ecoturismo",
          role: "Guía Especializado"
        }
      ],
      
      activities: [
        {
          id: 1,
          title: "Caminata Ecológica Guiada",
          description: "Recorrido por senderos naturales con identificación de especies",
          time: "8:00 AM - 11:00 AM",
          participants: 40
        },
        {
          id: 2,
          title: "Observación de Aves",
          description: "Avistamiento y registro de especies nativas de aves",
          time: "11:30 AM - 1:00 PM",
          participants: 40
        },
        {
          id: 3,
          title: "Taller de Conservación",
          description: "Actividades prácticas sobre protección del ecosistema",
          time: "2:00 PM - 3:30 PM",
          participants: 40
        }
      ],
      
      objectives: [
        "Experimentar la biodiversidad en su hábitat natural",
        "Comprender la importancia de los ecosistemas montañosos",
        "Desarrollar conciencia sobre conservación ambiental",
        "Promover el ecoturismo responsable"
      ],
      
      resources: [
        "Binoculares para observación",
        "Guías de identificación de especies",
        "Cámaras fotográficas",
        "Equipo de senderismo",
        "Material para muestras botánicas",
        "Kit de supervivencia y primeros auxilios"
      ]
    }
  },
  {
    id: 5,
    title: "Centro de Innovación Tecnológica",
    subtitle: "Tecnología y futuro digital",
    location: "Parque Tecnológico",
    backgroundImage: CuartaImagen,
    temperature: "24°C",
    altitude: "1,650",
    duration: "270",

    // Imágenes específicas del laboratorio
    carouselImages: [
      {
        id: 1,
        src: LabImg1,
        title: "Experimentos de Química",
        description: "Síntesis de compuestos y análisis de reacciones químicas en laboratorio"
      },
      {
        id: 2,
        src: LabImg2,
        title: "Análisis Microscópico",
        description: "Observación detallada de células y microorganismos"
      },
      {
        id: 3,
        src: LabImg3,
        title: "Metodología Científica",
        description: "Estudiantes aplicando el método científico en experimentos reales"
      },
      {
        id: 4,
        src: LabImg4,
        title: "Investigación Universitaria",
        description: "Charla sobre proyectos de investigación con investigadores especializados"
      }
    ],
    
    carouselData: {
      title: "Exploración Tecnológica",
      description: "Los estudiantes desarrollaron habilidades de observación científica y aprendieron sobre metodologías de investigación en ciencias naturales.",
      image: CuartaImagen
    },
    
    detailData: {
      title: "Inmersión en el Centro de Innovación Tecnológica",
      description: "Una experiencia académica orientada a explorar las tendencias actuales en innovación digital, programación y tecnologías de la información. A través de talleres prácticos y demostraciones en vivo, los estudiantes conocieron el impacto de la tecnología en la vida moderna y las oportunidades que ofrece en el ámbito profesional. La actividad fortaleció habilidades de pensamiento lógico, creatividad y trabajo colaborativo, motivando a los participantes a proyectarse en carreras relacionadas con las TIC. Asimismo, contribuyó al desarrollo de competencias digitales esenciales para afrontar los retos de la sociedad contemporánea.",
      
      basicInfo: {
        sede: "Sede Pueblito - Media Técnica",
        ubicacion: "Centro de Innovación y Desarrollo Tecnológico, Parque Empresarial",
        grado: "Grado 11° - Especialidad en Sistemas",
        participantes: 35,
        duracion: "9:00 AM - 1:30 PM (4.5 horas)",
        fecha: "5 de Agosto, 2024"
      },
      
      teachers: [
        {
          id: 1,
          name: "Prof. Carlos Mendoza",
          subject: "Informática",
          role: "Docente Principal"
        },
        {
          id: 2,
          name: "Prof. Alexandra Ruiz",
          subject: "Programación",
          role: "Docente Técnica"
        },
        {
          id: 3,
          name: "Ing. Patricia Gómez",
          subject: "Desarrollo de Software",
          role: "Especialista en Innovación"
        }
      ],
      
      activities: [
        {
          id: 1,
          title: "Taller de Programación Web",
          description: "Creación de aplicaciones web básicas usando HTML, CSS y JavaScript",
          time: "9:30 AM - 11:00 AM",
          participants: 35
        },
        {
          id: 2,
          title: "Demostración de Realidad Virtual",
          description: "Experiencia inmersiva con tecnologías de RV y RA",
          time: "11:15 AM - 12:15 PM",
          participants: 35
        },
        {
          id: 3,
          title: "Conferencia sobre Inteligencia Artificial",
          description: "Introducción a IA y sus aplicaciones en diferentes industrias",
          time: "12:30 PM - 1:15 PM",
          participants: 35
        }
      ],
      
      objectives: [
        "Familiarizarse con tecnologías emergentes",
        "Desarrollar habilidades en programación básica",
        "Comprender el impacto de la IA en el futuro laboral",
        "Inspirar vocaciones en el campo tecnológico"
      ],
      
      resources: [
        "Computadores con software especializado",
        "Equipos de realidad virtual",
        "Kits de desarrollo de aplicaciones",
        "Material didáctico de programación",
        "Acceso a plataformas de desarrollo online"
      ]
    }
  },
  {
  id: 6,
  title: "Cocora Valley",
  subtitle: "Camina entre las palmas de cera más altas del mundo",
  location: "Armenia - Quindío",
  backgroundImage: CuartaImagen,
  temperature: "16° a 22°C",
  altitude: "2,400 a 2,800 msnm",
  duration: "360",
  
  // Imágenes específicas del laboratorio
    carouselImages: [
      {
        id: 1,
        src: LabImg1,
        title: "Experimentos de Química",
        description: "Síntesis de compuestos y análisis de reacciones químicas en laboratorio"
      },
      {
        id: 2,
        src: LabImg2,
        title: "Análisis Microscópico",
        description: "Observación detallada de células y microorganismos"
      },
      {
        id: 3,
        src: LabImg3,
        title: "Metodología Científica",
        description: "Estudiantes aplicando el método científico en experimentos reales"
      },
      {
        id: 4,
        src: LabImg4,
        title: "Investigación Universitaria",
        description: "Charla sobre proyectos de investigación con investigadores especializados"
      }
    ],
  
  carouselData: {
    title: "Exploración en el Valle de Cocora",
    description: "Los estudiantes recorrieron senderos de montaña y aprendieron sobre la importancia ecológica de la palma de cera y la biodiversidad andina.",
    image: CuartaImagen
  },
  
  detailData: {
    title: "Expedición Educativa en el Valle de Cocora",
    description: "Ubicado en el corazón del Quindío, el Valle de Cocora ofrece una experiencia educativa única en medio de un paisaje emblemático de los Andes colombianos. Durante la salida pedagógica, los estudiantes recorrieron senderos rodeados por las palmas de cera más altas del mundo, símbolo nacional y especie protegida que representa la riqueza natural del país. La caminata permitió observar la diversidad de flora y fauna del valle alto andino, comprender las dinámicas de los ecosistemas de montaña y reflexionar sobre la importancia de conservar especies en riesgo. Además, la actividad fortaleció valores como el respeto por el medio ambiente, el trabajo en equipo y la conexión cultural con un entorno que combina belleza escénica, identidad y sostenibilidad.",
    
    basicInfo: {
      sede: "Sede La Campana - Secundaria",
      ubicacion: "Valle de Cocora, Parque Nacional Natural Los Nevados",
      grado: "9° Grado - Sección C",
      participantes: 32,
      duracion: "7:30 AM - 1:30 PM (6 horas)",
      fecha: "15 de Julio, 2024"
    },
    
    teachers: [
      {
        id: 1,
        name: "Prof. Juliana Torres",
        subject: "Ciencias Naturales",
        role: "Docente Principal"
      },
      {
        id: 2,
        name: "Prof. Andrés Ramírez",
        subject: "Biología",
        role: "Docente de Apoyo"
      },
      {
        id: 3,
        name: "Biól. Camilo Herrera",
        subject: "Ecología",
        role: "Guía Especialista en Biodiversidad"
      }
    ],
    
    activities: [
      {
        id: 1,
        title: "Caminata Ecológica",
        description: "Recorrido guiado por senderos del valle con observación de flora y fauna.",
        time: "8:00 AM - 10:00 AM",
        participants: 32
      },
      {
        id: 2,
        title: "Taller de Conservación",
        description: "Reflexión sobre la protección de la palma de cera y especies nativas.",
        time: "10:15 AM - 11:30 AM",
        participants: 32
      },
      {
        id: 3,
        title: "Registro de Observaciones",
        description: "Elaboración de bitácoras científicas con ilustraciones y notas de campo.",
        time: "11:45 AM - 12:45 PM",
        participants: 32
      }
    ],
    
    objectives: [
      "Reconocer la importancia ecológica del Valle de Cocora",
      "Observar y registrar especies de flora y fauna andina",
      "Reflexionar sobre la conservación de la palma de cera",
      "Fomentar el respeto y cuidado del medio ambiente"
    ],
    
    resources: [
      "Guías de campo ilustradas",
      "Cuadernos de bitácora",
      "Material didáctico sobre biodiversidad",
      "Equipo básico de observación (binoculares, lupas)",
      "Transporte especializado a la reserva"
    ]
  }
}
];

// // Funciones auxiliares actualizadas
// export const getOutingById = (id) => {
//   return outingData.find(outing => outing.id === parseInt(id));
// };

// export const getCarouselImagesByOutingId = (id) => {
//   const outing = getOutingById(id);
//   return outing ? outing.carouselImages : [];
// };

// export const getCarouselData = () => {
//   return outingData.map(outing => ({
//     id: outing.id,
//     title: outing.carouselData.title,
//     description: outing.carouselData.description,
//     image: outing.carouselData.image
//   }));
// };

// export const getOutingCards = () => {
//   return outingData.map(outing => ({
//     id: outing.id,
//     title: outing.title,
//     subtitle: outing.subtitle,
//     location: outing.location,
//     backgroundImage: outing.backgroundImage,
//     temperature: outing.temperature,
//     altitude: outing.altitude,
//     duration: outing.duration
//   }));
// };

// src/data/outingsData.js
// import PrimeraImagen from "../../../assets/banners/salida-pedagogicas3.jpeg";
// import SegundaImagen from "../../../assets/banners/salida-pedagogicas4.jpeg";
// import TerceraImagen from "../../../assets/banners/salida-pedagogicas5.jpeg";
// import CuartaImagen from "../../../assets/banners/salida-pedagogicas5.jpeg";
// import QuintaImagen from "../../../assets/banners/salida-pedagogicas6.jpeg";
// import SextaImagen from "../../../assets/banners/salida-pedagogicas6.jpeg";

// export const outingData = [
//   {
//     // Datos para la tarjeta (OutingCard)
//     id: 1,
//     title: "Exploración Ecológica al Parque Natural",
//     subtitle: "Descubre la biodiversidad local en un entorno natural único",
//     location: "Parque Natural Municipal",
//     backgroundImage: PrimeraImagen,
//     temperature: "18°C",
//     altitude: "2,240",
//     duration: "360",
    
//     // Datos para el carrusel
//     carouselData: {
//       title: "Visita al Museo de Ciencias Naturales",
//       description: "Exploramos la biodiversidad y los ecosistemas de nuestra región, fortaleciendo el aprendizaje sobre ciencias naturales de manera interactiva.",
//       image: PrimeraImagen
//     },
    
//     // Datos detallados para OutingDetailPage
//     detailData: {
//       title: "Exploración Ecológica al Parque Natural Municipal",
//       description: "Una experiencia educativa integral que busca fortalecer el aprendizaje de las ciencias naturales mediante la inmersión directa en la naturaleza. Durante la salida pedagógica, los estudiantes exploraron diferentes ecosistemas locales, observaron especies representativas de flora y fauna, y comprendieron de manera vivencial conceptos fundamentales de biodiversidad, sostenibilidad y conservación ambiental. Esta actividad fomentó la curiosidad científica, el trabajo colaborativo y la reflexión crítica sobre la importancia de proteger los recursos naturales como parte del compromiso con la comunidad y el entorno. Asimismo, permitió articular los contenidos académicos con la práctica en campo, promoviendo un aprendizaje significativo y una mayor conciencia ambiental que trasciende el aula y se proyecta hacia la formación de ciudadanos responsables.",
      
//       basicInfo: {
//         sede: "Sede Central - Campus Norte",
//         ubicacion: "Parque Natural Municipal El Refugio, Sector La Cascada",
//         grado: "9° Grado - Sección A",
//         participantes: 32,
//         duracion: "8:00 AM - 2:00 PM (6 horas)",
//         fecha: "15 de Marzo, 2024"
//       },
      
//       teachers: [
//         {
//           id: 1,
//           name: "Prof. María Elena Rodríguez",
//           subject: "Biología",
//           role: "Docente Principal"
//         },
//         {
//           id: 2,
//           name: "Prof. Carlos Mendoza",
//           subject: "Química",
//           role: "Docente de Apoyo"
//         },
//         {
//           id: 3,
//           name: "Prof. Ana Lucía Torres",
//           subject: "Educación Ambiental",
//           role: "Coordinadora de Actividades"
//         }
//       ],
      
//       activities: [
//         {
//           id: 1,
//           title: "Reconocimiento de Flora Nativa",
//           description: "Identificación y catalogación de especies vegetales endémicas",
//           time: "9:00 AM - 10:30 AM",
//           participants: 32
//         },
//         {
//           id: 2,
//           title: "Observación de Fauna Silvestre",
//           description: "Avistamiento y registro de aves y mamíferos pequeños",
//           time: "10:45 AM - 12:00 PM",
//           participants: 32
//         },
//         {
//           id: 3,
//           title: "Taller de Conservación",
//           description: "Actividades prácticas sobre preservación del ecosistema",
//           time: "1:00 PM - 1:45 PM",
//           participants: 32
//         }
//       ],
      
//       objectives: [
//         "Desarrollar conciencia ambiental en los estudiantes",
//         "Aplicar conocimientos teóricos en un entorno natural",
//         "Fomentar el trabajo colaborativo y la observación científica",
//         "Promover el respeto y cuidado del medio ambiente"
//       ],
      
//       resources: [
//         "Guías de campo especializadas",
//         "Lupas y material de observación",
//         "Cuadernos de registro científico",
//         "Cámaras fotográficas",
//         "Kit de primeros auxilios"
//       ]
//     }
//   },
//   {
//     id: 2,
//     title: "Museo de Historia y Arqueología",
//     subtitle: "Viaje a través del tiempo y las civilizaciones ancestrales",
//     location: "Museo Nacional",
//     backgroundImage: SegundaImagen,
//     temperature: "22°C",
//     altitude: "1,760",
//     duration: "240",
    
//     carouselData: {
//       title: "Visita al Museo de Historia y Arqueología",
//       description: "Descubrimos fósiles y especies prehistóricas, conectando el pasado con el presente para comprender la evolución de la vida en la Tierra.",
//       image: SegundaImagen
//     },
    
//     detailData: {
//       title: "Exploración Histórica en el Museo de Arqueología",
//       description: "Una experiencia educativa integral diseñada para fortalecer el aprendizaje de las ciencias naturales mediante la exploración directa de la naturaleza. Durante la salida pedagógica, los estudiantes recorrieron ecosistemas locales, identificaron especies de flora y fauna y comprendieron conceptos de biodiversidad y conservación ambiental. La jornada fomentó la investigación, el trabajo colaborativo y la reflexión crítica sobre la protección del entorno, generando aprendizajes significativos que trascienden el aula hacia la vida cotidiana y fortalecen la formación de ciudadanos responsables.",
      
//       basicInfo: {
//         sede: "Sede La Campana - Campus Principal",
//         ubicacion: "Museo Nacional de Arqueología, Sala de Culturas Precolombinas",
//         grado: "8° Grado - Sección B",
//         participantes: 28,
//         duracion: "9:00 AM - 1:00 PM (4 horas)",
//         fecha: "22 de Abril, 2024"
//       },
      
//       teachers: [
//         {
//           id: 1,
//           name: "Prof. Roberto Jiménez",
//           subject: "Historia",
//           role: "Docente Principal"
//         },
//         {
//           id: 2,
//           name: "Prof. Diana Castillo",
//           subject: "Ciencias Sociales",
//           role: "Docente de Apoyo"
//         }
//       ],
      
//       activities: [
//         {
//           id: 1,
//           title: "Recorrido por Culturas Ancestrales",
//           description: "Exploración de artefactos y herramientas de civilizaciones precolombinas",
//           time: "9:30 AM - 11:00 AM",
//           participants: 28
//         },
//         {
//           id: 2,
//           title: "Taller de Arqueología Práctica",
//           description: "Simulacro de excavación y clasificación de hallazgos arqueológicos",
//           time: "11:15 AM - 12:30 PM",
//           participants: 28
//         }
//       ],
      
//       objectives: [
//         "Valorar el patrimonio histórico y cultural",
//         "Comprender la evolución de las sociedades humanas",
//         "Desarrollar pensamiento crítico sobre el pasado",
//         "Fomentar la identidad cultural regional"
//       ],
      
//       resources: [
//         "Guías especializados del museo",
//         "Material didáctico arqueológico",
//         "Herramientas de excavación simulada",
//         "Cuadernos de registro histórico"
//       ]
//     }
//   },
//   {
//     id: 3,
//     title: "Laboratorio de Ciencias Aplicadas",
//     subtitle: "Experimentación y descubrimiento científico",
//     location: "Universidad Nacional",
//     backgroundImage: TerceraImagen,
//     temperature: "20°C",
//     altitude: "1,850",
//     duration: "300",
    
//     carouselData: {
//       title: "Visita al Laboratorio de Ciencias",
//       description: "Participamos en talleres prácticos donde los estudiantes pudieron observar especímenes y realizar experimentos científicos básicos.",
//       image: TerceraImagen
//     },
    
//     detailData: {
//       title: "Experiencia Científica en Laboratorio Universitario",
//       description: "Una inmersión educativa que permitió a los estudiantes acercarse a la ciencia aplicada a través de experimentos guiados por investigadores universitarios. Durante la jornada, comprendieron la relevancia de la metodología científica, el rigor en la investigación y las aplicaciones prácticas de la tecnología en la vida diaria. La experiencia reforzó el aprendizaje académico, estimuló la vocación científica y consolidó competencias relacionadas con la observación, el análisis de resultados y la resolución de problemas. Asimismo, fomentó la participación activa y la motivación hacia futuros proyectos de innovación.",
      
//       basicInfo: {
//         sede: "Sede Manantial - Secundaria",
//         ubicacion: "Laboratorio de Investigación, Facultad de Ciencias - Universidad Nacional",
//         grado: "10° Grado - Sección A",
//         participantes: 25,
//         duracion: "8:30 AM - 1:30 PM (5 horas)",
//         fecha: "10 de Mayo, 2024"
//       },
      
//       teachers: [
//         {
//           id: 1,
//           name: "Prof. Andrea Morales",
//           subject: "Física",
//           role: "Docente Principal"
//         },
//         {
//           id: 2,
//           name: "Prof. Miguel Santos",
//           subject: "Química",
//           role: "Docente de Apoyo"
//         },
//         {
//           id: 3,
//           name: "Dr. Laura Vásquez",
//           subject: "Investigación",
//           role: "Investigadora Universitaria"
//         }
//       ],
      
//       activities: [
//         {
//           id: 1,
//           title: "Experimentos de Química Orgánica",
//           description: "Síntesis de compuestos y análisis de reacciones químicas",
//           time: "9:00 AM - 10:30 AM",
//           participants: 25
//         },
//         {
//           id: 2,
//           title: "Análisis Microscópico",
//           description: "Observación de células y microorganismos",
//           time: "10:45 AM - 12:00 PM",
//           participants: 25
//         },
//         {
//           id: 3,
//           title: "Conferencia sobre Investigación",
//           description: "Charla sobre metodología científica y proyectos de investigación",
//           time: "12:30 PM - 1:15 PM",
//           participants: 25
//         }
//       ],
      
//       objectives: [
//         "Aplicar conocimientos científicos en práctica real",
//         "Conocer metodologías de investigación universitaria",
//         "Despertar vocaciones científicas y tecnológicas",
//         "Comprender la importancia de la ciencia en el desarrollo social"
//       ],
      
//       resources: [
//         "Equipment de laboratorio especializado",
//         "Microscopios de alta resolución",
//         "Reactivos y materiales de experimentación",
//         "Batas de laboratorio y equipo de seguridad",
//         "Material bibliográfico científico"
//       ]
//     }
//   },
//   {
//     id: 4,
//     title: "Reserva Natural La Montaña",
//     subtitle: "Conservación y ecoturismo educativo",
//     location: "Reserva La Montaña",
//     backgroundImage: CuartaImagen,
//     temperature: "16°C",
//     altitude: "2,680",
//     duration: "420",
    
//     carouselData: {
//       title: "Expedición a la Reserva Natural",
//       description: "Conocimos la importancia de la conservación ambiental y el papel que juegan los museos en la preservación del patrimonio natural.",
//       image: CuartaImagen
//     },
    
//     detailData: {
//       title: "Expedición Ecológica a la Reserva Natural La Montaña",
//       description: "Una actividad pedagógica en contacto directo con uno de los ecosistemas más representativos de la región, donde los estudiantes observaron especies endémicas, comprendieron las cadenas alimentarias y reflexionaron sobre el impacto humano en el medio ambiente. La expedición incentivó la conciencia ambiental, el compromiso con la sostenibilidad y el respeto por la biodiversidad. La experiencia, además de reforzar aprendizajes científicos, promovió la cooperación entre compañeros, el liderazgo juvenil y la valoración de los recursos naturales como patrimonio esencial que debe conservarse para las futuras generaciones.",
      
//       basicInfo: {
//         sede: "Sede Carmelo - Bachillerato",
//         ubicacion: "Reserva Natural La Montaña, Sendero Ecológico Principal",
//         grado: "11° Grado - Secciones A y B",
//         participantes: 40,
//         duracion: "7:00 AM - 4:00 PM (9 horas)",
//         fecha: "18 de Junio, 2024"
//       },
      
//       teachers: [
//         {
//           id: 1,
//           name: "Prof. Sandra Delgado",
//           subject: "Ciencias Ambientales",
//           role: "Docente Principal"
//         },
//         {
//           id: 2,
//           name: "Prof. Jaime Rivera",
//           subject: "Biología",
//           role: "Docente de Apoyo"
//         },
//         {
//           id: 3,
//           name: "Guía Fernando López",
//           subject: "Ecoturismo",
//           role: "Guía Especializado"
//         }
//       ],
      
//       activities: [
//         {
//           id: 1,
//           title: "Caminata Ecológica Guiada",
//           description: "Recorrido por senderos naturales con identificación de especies",
//           time: "8:00 AM - 11:00 AM",
//           participants: 40
//         },
//         {
//           id: 2,
//           title: "Observación de Aves",
//           description: "Avistamiento y registro de especies nativas de aves",
//           time: "11:30 AM - 1:00 PM",
//           participants: 40
//         },
//         {
//           id: 3,
//           title: "Taller de Conservación",
//           description: "Actividades prácticas sobre protección del ecosistema",
//           time: "2:00 PM - 3:30 PM",
//           participants: 40
//         }
//       ],
      
//       objectives: [
//         "Experimentar la biodiversidad en su hábitat natural",
//         "Comprender la importancia de los ecosistemas montañosos",
//         "Desarrollar conciencia sobre conservación ambiental",
//         "Promover el ecoturismo responsable"
//       ],
      
//       resources: [
//         "Binoculares para observación",
//         "Guías de identificación de especies",
//         "Cámaras fotográficas",
//         "Equipo de senderismo",
//         "Material para muestras botánicas",
//         "Kit de supervivencia y primeros auxilios"
//       ]
//     }
//   },
//   {
//     id: 5,
//     title: "Centro de Innovación Tecnológica",
//     subtitle: "Tecnología y futuro digital",
//     location: "Parque Tecnológico",
//     backgroundImage: QuintaImagen,
//     temperature: "24°C",
//     altitude: "1,650",
//     duration: "270",
    
//     carouselData: {
//       title: "Exploración Tecnológica",
//       description: "Los estudiantes desarrollaron habilidades de observación científica y aprendieron sobre metodologías de investigación en ciencias naturales.",
//       image: QuintaImagen
//     },
    
//     detailData: {
//       title: "Inmersión en el Centro de Innovación Tecnológica",
//       description: "Una experiencia académica orientada a explorar las tendencias actuales en innovación digital, programación y tecnologías de la información. A través de talleres prácticos y demostraciones en vivo, los estudiantes conocieron el impacto de la tecnología en la vida moderna y las oportunidades que ofrece en el ámbito profesional. La actividad fortaleció habilidades de pensamiento lógico, creatividad y trabajo colaborativo, motivando a los participantes a proyectarse en carreras relacionadas con las TIC. Asimismo, contribuyó al desarrollo de competencias digitales esenciales para afrontar los retos de la sociedad contemporánea.",
      
//       basicInfo: {
//         sede: "Sede Pueblito - Media Técnica",
//         ubicacion: "Centro de Innovación y Desarrollo Tecnológico, Parque Empresarial",
//         grado: "Grado 11° - Especialidad en Sistemas",
//         participantes: 35,
//         duracion: "9:00 AM - 1:30 PM (4.5 horas)",
//         fecha: "5 de Agosto, 2024"
//       },
      
//       teachers: [
//         {
//           id: 1,
//           name: "Prof. Carlos Mendoza",
//           subject: "Informática",
//           role: "Docente Principal"
//         },
//         {
//           id: 2,
//           name: "Prof. Alexandra Ruiz",
//           subject: "Programación",
//           role: "Docente Técnica"
//         },
//         {
//           id: 3,
//           name: "Ing. Patricia Gómez",
//           subject: "Desarrollo de Software",
//           role: "Especialista en Innovación"
//         }
//       ],
      
//       activities: [
//         {
//           id: 1,
//           title: "Taller de Programación Web",
//           description: "Creación de aplicaciones web básicas usando HTML, CSS y JavaScript",
//           time: "9:30 AM - 11:00 AM",
//           participants: 35
//         },
//         {
//           id: 2,
//           title: "Demostración de Realidad Virtual",
//           description: "Experiencia inmersiva con tecnologías de RV y RA",
//           time: "11:15 AM - 12:15 PM",
//           participants: 35
//         },
//         {
//           id: 3,
//           title: "Conferencia sobre Inteligencia Artificial",
//           description: "Introducción a IA y sus aplicaciones en diferentes industrias",
//           time: "12:30 PM - 1:15 PM",
//           participants: 35
//         }
//       ],
      
//       objectives: [
//         "Familiarizarse con tecnologías emergentes",
//         "Desarrollar habilidades en programación básica",
//         "Comprender el impacto de la IA en el futuro laboral",
//         "Inspirar vocaciones en el campo tecnológico"
//       ],
      
//       resources: [
//         "Computadores con software especializado",
//         "Equipos de realidad virtual",
//         "Kits de desarrollo de aplicaciones",
//         "Material didáctico de programación",
//         "Acceso a plataformas de desarrollo online"
//       ]
//     }
//   },
//   {
//   id: 6,
//   title: "Cocora Valley",
//   subtitle: "Camina entre las palmas de cera más altas del mundo",
//   location: "Armenia - Quindío",
//   backgroundImage: SextaImagen,
//   temperature: "16° a 22°C",
//   altitude: "2,400 a 2,800 msnm",
//   duration: "360",
  
//   carouselData: {
//     title: "Exploración en el Valle de Cocora",
//     description: "Los estudiantes recorrieron senderos de montaña y aprendieron sobre la importancia ecológica de la palma de cera y la biodiversidad andina.",
//     image: SextaImagen
//   },
  
//   detailData: {
//     title: "Expedición Educativa en el Valle de Cocora",
//     description: "Ubicado en el corazón del Quindío, el Valle de Cocora ofrece una experiencia educativa única en medio de un paisaje emblemático de los Andes colombianos. Durante la salida pedagógica, los estudiantes recorrieron senderos rodeados por las palmas de cera más altas del mundo, símbolo nacional y especie protegida que representa la riqueza natural del país. La caminata permitió observar la diversidad de flora y fauna del valle alto andino, comprender las dinámicas de los ecosistemas de montaña y reflexionar sobre la importancia de conservar especies en riesgo. Además, la actividad fortaleció valores como el respeto por el medio ambiente, el trabajo en equipo y la conexión cultural con un entorno que combina belleza escénica, identidad y sostenibilidad.",
    
//     basicInfo: {
//       sede: "Sede La Campana - Secundaria",
//       ubicacion: "Valle de Cocora, Parque Nacional Natural Los Nevados",
//       grado: "9° Grado - Sección C",
//       participantes: 32,
//       duracion: "7:30 AM - 1:30 PM (6 horas)",
//       fecha: "15 de Julio, 2024"
//     },
    
//     teachers: [
//       {
//         id: 1,
//         name: "Prof. Juliana Torres",
//         subject: "Ciencias Naturales",
//         role: "Docente Principal"
//       },
//       {
//         id: 2,
//         name: "Prof. Andrés Ramírez",
//         subject: "Biología",
//         role: "Docente de Apoyo"
//       },
//       {
//         id: 3,
//         name: "Biól. Camilo Herrera",
//         subject: "Ecología",
//         role: "Guía Especialista en Biodiversidad"
//       }
//     ],
    
//     activities: [
//       {
//         id: 1,
//         title: "Caminata Ecológica",
//         description: "Recorrido guiado por senderos del valle con observación de flora y fauna.",
//         time: "8:00 AM - 10:00 AM",
//         participants: 32
//       },
//       {
//         id: 2,
//         title: "Taller de Conservación",
//         description: "Reflexión sobre la protección de la palma de cera y especies nativas.",
//         time: "10:15 AM - 11:30 AM",
//         participants: 32
//       },
//       {
//         id: 3,
//         title: "Registro de Observaciones",
//         description: "Elaboración de bitácoras científicas con ilustraciones y notas de campo.",
//         time: "11:45 AM - 12:45 PM",
//         participants: 32
//       }
//     ],
    
//     objectives: [
//       "Reconocer la importancia ecológica del Valle de Cocora",
//       "Observar y registrar especies de flora y fauna andina",
//       "Reflexionar sobre la conservación de la palma de cera",
//       "Fomentar el respeto y cuidado del medio ambiente"
//     ],
    
//     resources: [
//       "Guías de campo ilustradas",
//       "Cuadernos de bitácora",
//       "Material didáctico sobre biodiversidad",
//       "Equipo básico de observación (binoculares, lupas)",
//       "Transporte especializado a la reserva"
//     ]
//   }
// }

// ];

// // Funciones auxiliares para obtener datos específicos
// export const getOutingById = (id) => {
//   return outingData.find(outing => outing.id === parseInt(id));
// };

// export const getCarouselData = () => {
//   return outingData.map(outing => ({
//     id: outing.id,
//     title: outing.carouselData.title,
//     description: outing.carouselData.description,
//     image: outing.carouselData.image
//   }));
// };

// export const getOutingCards = () => {
//   return outingData.map(outing => ({
//     id: outing.id,
//     title: outing.title,
//     subtitle: outing.subtitle,
//     location: outing.location,
//     backgroundImage: outing.backgroundImage,
//     temperature: outing.temperature,
//     altitude: outing.altitude,
//     duration: outing.duration
//   }));
// };