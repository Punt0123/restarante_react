
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const sesion = localStorage.getItem("sesionActiva");
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("sesionActiva");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>🇵🇪 Sabor Criollo</h2>

      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#menu">Menú</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>

      <div className="nav-login">
        {sesion === "true" ? (
          <button onClick={cerrarSesion}>
            Cerrar sesión
          </button>
        ) : (
          <Link to="/login" className="btn-login">
            Iniciar sesión
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
