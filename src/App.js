
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Menu from "./components/Menu";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Registro from "./pages/Registro";

import "./App.css";

function PaginaPrincipal() {
  return (
    <>
      <Navbar />
      <Inicio />
      <Menu />
      <Nosotros />
      <Contacto />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
