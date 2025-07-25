import SoporteTecnico from "../../../assets/backgrounds/solicitud-asistencia.png";
import SoporteTecnicoBack from "../../../assets/backgrounds/suporte-tecnico1.webp"
import MicrofonoInalambrico from "../../../assets/backgrounds/microfono-alambrico.jpg";
import CapacitacionAudiovisual from "../../../assets/backgrounds/solicitar-capacitacion-audiovisual.jpg";
import SalaHorario from "../../../assets/backgrounds/horarios.webp";
import SoftwareAulas from "../../../assets/backgrounds/software-aulas.jpg"
import SolicitudPtrestamo from "../../../assets/backgrounds/sofware-de-computadora.jpg";

export const audiovisualServices = [
  {
    id: 1,
    title: "Soporte Técnico",
    frontImage: SoporteTecnico,
    backImage: SoporteTecnicoBack,
    description:
      "Brindamos asistencia técnica inmediata para solucionar fallas en los equipos audiovisuales utilizados en aulas, salas y eventos. Si detectas un problema con proyectores, sistemas de sonido, pantallas o cualquier otro dispositivo, puedes reportarlo para recibir soporte especializado."
  },
  {
    id: 2,
    title: "Micrófono Inalámbrico",
    frontImage: MicrofonoInalambrico,
    backImage: "/images/microfono-back.jpg",
    description:
      "Disponibilidad de micrófonos inalámbricos de alta fidelidad para presentaciones, conferencias o actividades institucionales, garantizando una transmisión de audio clara y profesional."
  },
  {
    id: 3,
    title: "Capacitación Audiovisual",
    frontImage: CapacitacionAudiovisual,
    backImage: "/images/capacitacion-back.jpg",
    description:
      "Ofrecemos capacitaciones personalizadas para el uso eficiente de los equipos audiovisuales, orientadas a docentes, administrativos y personal de apoyo, con el fin de optimizar los recursos tecnológicos disponibles."
  },
  {
    id: 4,
    title: "Salas y Horarios",
    frontImage: SalaHorario,
    backImage: "/images/salas-back.jpg",
    description:
      "Consulta la disponibilidad de las salas audiovisuales y gestiona tus reservas de forma sencilla. La institución educativa atiende de lunes a viernes, en jornada continua de 8:00 a. m. a 4:00 p. m."
  },
  {
    id: 5,
    title: "Software en Aulas",
    frontImage: SoftwareAulas,
    backImage: "/images/software-back.jpg",
    description:
      "Acceso a software educativo y herramientas digitales instaladas en las aulas, diseñadas para facilitar exposiciones, clases interactivas y procesos pedagógicos multimedia."
  },
  {
    id: 6,
    title: "Solicitud de Préstamo Audiovisual",
    frontImage: SolicitudPtrestamo,
    backImage: "/images/prestamo-back.jpg",
    description:
      "Solicita en línea el préstamo temporal de equipos audiovisuales, como proyectores, micrófonos, parlantes o laptops, para actividades académicas dentro o fuera de la institución."
  }
];
