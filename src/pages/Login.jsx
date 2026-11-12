
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const iniciarSesion = (e) => {
    e.preventDefault();
    setError("");

    const usuarioGuardado = JSON.parse(
      localStorage.getItem("usuario")
    );

    if (
      usuarioGuardado &&
      usuarioGuardado.correo === correo &&
      usuarioGuardado.password === password
    ) {
      localStorage.setItem("sesionActiva", "true");
      navigate("/");
    } else {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          <span>🍽️</span>
          <h1>Sabor Criollo</h1>
          <p>TRADICIÓN Y SABOR PERUANO</p>
        </div>

        <div className="login-heading">
          <h2>¡Bienvenido!</h2>
          <p>Ingresa a tu cuenta y disfruta de nuestros sabores.</p>
        </div>

        <form onSubmit={iniciarSesion}>

          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type={mostrar ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="show-password">
            <input
              type="checkbox"
              checked={mostrar}
              onChange={(e) => setMostrar(e.target.checked)}
            />
            <span>Mostrar contraseña</span>
          </div>

          {error && (
            <div className="login-error">{error}</div>
          )}

          <button type="submit" className="login-button">
            Iniciar sesión
          </button>

        </form>

        <div className="login-register">
          ¿No tienes una cuenta?
          <Link to="/registro"> Regístrate aquí</Link>
        </div>

        <Link to="/" className="login-back">
          ← Volver al inicio
        </Link>

        <div className="login-footer">
          © 2026 Sabor Criollo - Gastronomía Peruana 🇵🇪
        </div>

      </div>
    </div>
  );
}

export default Login;
