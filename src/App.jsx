import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home/Home";
import Header from "./components/layouts/Header/Header";
import Navbar from "./components/layouts/Navbar/Navbar";
import Logo from "./components/layouts/Logo/Logo";
import Footer from "./components/layouts/Footer/Footer";
import NewsAndEventsList from "./components/modules/communication/NewsEvents/NewsAndEventsList/NewsAndEventsList";
import NewsEventDetail from "./components/modules/communication/NewsEvents/NewsEventDetail/NewsEventDetail"

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
