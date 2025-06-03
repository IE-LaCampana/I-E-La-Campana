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
        <Route
          path="/sedes/la-campana"
          element={<LaCampanaMainHeadquarter />}
        />
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
