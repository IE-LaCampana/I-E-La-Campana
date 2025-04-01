import { Routes, Route } from 'react-router-dom'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './pages/Home/Home'
import Header from './components/layouts/Header/Header'
import Navbar from './components/layouts/Navbar/Navbar'
import  Logo  from './components/layouts/Logo/Logo'

function App() {
  return (
    <>
      <Header> 
        <Logo />
        <Navbar/>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </>
  );
}

export default App
