import DanzaVideo from "../../../assets/videos/banda-marcial.mp4";
import MusicaVideo from "../../../assets/videos/Video-I-E-La-Campana.mp4";
import TeatroVideo from "../../../assets/videos/banda-marcial.mp4";
import BandaMarcialVideo from "../../../assets/videos/Video-I-E-La-Campana.mp4";
import TejidosVideo from "../../../assets/videos/banda-marcial.mp4";
import DibujosPinturaVideo from "../../../assets/videos/Video-I-E-La-Campana.mp4";

export const danza = [
  { 
    id: "danza", 
    videoUrl: DanzaVideo
  }
];

export const musica = [
  { 
    id: "musica", 
    videoUrl: MusicaVideo
  }
];

export const teatro = [
  { 
    id: "teatro", 
    videoUrl: TeatroVideo
  }
];

export const bandaMarcial = [
  { 
    id: "banda-marcial", 
    videoUrl: BandaMarcialVideo
  }
];

export const tejidos = [
  { 
    id: "tejidos", 
    videoUrl: TejidosVideo
  }
];

export const dibujosPintura = [
  { 
    id: "dibujos-pintura", 
    videoUrl: DibujosPinturaVideo
  }
];

export const artsVideoMap = {
  danza: danza,
  musica: musica,
  teatro: teatro,
  "banda-marcial": bandaMarcial,
  tejidos: tejidos,
  "dibujos-pintura": dibujosPintura,
};

export const artsHeroVideoData = [
  ...danza,
  ...musica,
  ...teatro,
  ...bandaMarcial,
  ...tejidos,
  ...dibujosPintura,
];