import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./modules/home/pages/Home";
import Header from "./layouts/Header/Header";
import Navbar from "./layouts/Navbar/Navbar";
import Logo from "./layouts/Logo/Logo";
import Footer from "./layouts/Footer/Footer";
import NewsAndEventsList from "./modules/news-events/components/NewsAndEventsList/NewsAndEventsList";
import NewsEventDetail from "./modules/news-events/components/NewsEventDetail/NewsEventDetail";
import TestimonialsList from "./modules/testimonials/components/TestimonialsList/TestimonialsList";
import TestimonialDetails from "./modules/testimonials/components/TestimonialDetails/TestimonialDetails";
import WhatsAppHelp from "./modules/core/design-system/WhatsAppHelp/WhatsAppHelp";
import BackToTop from "./modules/core/design-system/BackToTop/BackToTop";
import LaCampanaMainHeadquarter from "./modules/Headquarters/pages/LaCampana/LaCampana";
import Manantial from "./modules/Headquarters/pages/Manantial/Manantial"
import Carmelo from "./modules/Headquarters/pages/Carmelo/Carmelo";
import PiendamoArriba from "./modules/Headquarters/pages/PiendamoArriba/PiendamoArriba";
import Pueblito from "./modules/Headquarters/pages/Pueblito/Pueblito";
import SantaLucia from "./modules/Headquarters/pages/SantaLucia/SantaLucia";
import Tulcan from "./modules/Headquarters/pages/Tulcan/Tulcan";
import AboutUsPage from "./modules/about-us/pages/AboutUsPage/AboutUsPage";
import PhilosophyPage from "./modules/philosophy-institutional/pages/PhilosophyPage/PhilosophyPage"
import SymbolsPage from "./modules/institutional-symbols/pages/SymbolsPage/SymbolsPage";
import InscriptionsPages from "./modules/inscriptions/pages/InscriptionsPages/InscriptionsPages"
import LibraryPage from "./modules/library/pages/LibraryPage";
import SystemsLabPage from "./modules/systems-lab";
import AudiovisualRoomPage from "./modules/audiovisual-room";
import ChemistryLabPage from "./modules/chemistry-lab/pages/ChemistryLabPage";
import SchoolDiningPages from "./modules/school-dining/pages/SchoolDiningPages";
import MenuPages from "./modules/school-dining/pages/MenuPages";
import ExtracurricularPage from "./modules/extracurricular-activities/pages/ExtracurricularPage";
import PedagogicalOutings from "./modules/pedagogical-outings/pages/PedagogicalOutings";
import OutingDetailPage from "./modules/pedagogical-outings/pages/OutingDetailPage";
import GardenPage from "./modules/school-garden/pages/GardenPage";
import RecyclingHero from "./modules/school-recycling/components/RecyclingHero";
import CompostPage from "./modules/school-compost/pages/CompostPage";
import CompostablesPage from "./modules/school-compost/pages/CompostablesPage";
import PraePage from "./modules/prae/pages/PraePage";
import YatulPage from "./modules/yatul/pages/YatulPage";

function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navbar />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news-events" element={<NewsAndEventsList />} />
        <Route path="/news-events/:type/:id" element={<NewsEventDetail />} />
        <Route path="/testimonios" element={<TestimonialsList />} />
        <Route path="/testimonios/:id" element={<TestimonialDetails />} />
        <Route path="/sede/la-campana" element={<LaCampanaMainHeadquarter />} />
        <Route path="/sede/manantial" element={<Manantial />} />
        <Route path="/sede/carmelo" element={<Carmelo />} />
        <Route path="/sede/piendamo-arriba" element={<PiendamoArriba />} />
        <Route path="/sede/pueblito" element={<Pueblito />} />
        <Route path="/sede/santa-lucia" element={<SantaLucia />} />
        <Route path="/sede/tulcan" element={<Tulcan />} />
        <Route path="/quienes-somos" element={<AboutUsPage />} />
        <Route path="/filosofia" element={<PhilosophyPage />} />
        <Route path="/simbolos" element={<SymbolsPage />} />
        <Route path="/inscripciones" element={<InscriptionsPages />} />
        <Route path="/biblioteca" element={<LibraryPage />} />
        <Route path="/sala-de-sistemas" element={<SystemsLabPage />} />
        <Route path="/sala-de-audiovisuales" element={<AudiovisualRoomPage />} />
        <Route path="/laboratorio-de-quimica" element={<ChemistryLabPage />} />
        <Route path="/comedor-escolar" element={<SchoolDiningPages />} />
        <Route path="/nuestro-menu" element={<MenuPages />} />
        <Route path="/actividades-extracurriculares" element={<ExtracurricularPage />} />
        <Route path="/salidas-pedagogicas" element={<PedagogicalOutings />} />
        <Route path="/salidas-pedagogicas/:id" element={<OutingDetailPage />} />
        <Route path="/huerta-escolar" element={<GardenPage />} />
        <Route path="/reciclaje" element={<RecyclingHero />} />
        <Route path="/abonos-organicos" element={<CompostPage />} />
        <Route path="/organics" element={<CompostablesPage />} />
        <Route path="/prae" element={<PraePage />} />
        <Route path="/yatul" element={<YatulPage />} />
      </Routes>
      <Footer />
      <WhatsAppHelp
        phoneNumber="3503560227"
        mensaje="Hola, necesito informacion sobre la Institución Educativa La La Campana"
      />
      <BackToTop />
    </>
  );
}

export default App;
