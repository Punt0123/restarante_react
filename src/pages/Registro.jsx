
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const registrar = (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    const usuarioExistente = JSON.parse(
      localStorage.getItem("usuario")
    );

    if (
      usuarioExistente &&
      usuarioExistente.correo === correo
    ) {
      setError("Este correo ya está registrado");
      return;
    }

    const nuevoUsuario = {
      nombre,
      correo,
      password
    };

    localStorage.setItem(
      "usuario",
      JSON.stringify(nuevoUsuario)
    );

    alert("¡Registro exitoso!");
    navigate("/login");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🇵🇪 Sabor Criollo</h1>
        <h2>Crear una cuenta</h2>
        <p>Regístrate y disfruta de nuestra gastronomía.</p>

        <form onSubmit={registrar}>
          <label>Nombre completo</label>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="Ingrese su correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error">{error}</p>}

          <button type="submit" className="login-button">
            Registrarme
          </button>
        </form>

        <p>
          ¿Ya tienes una cuenta?
          <Link to="/login"> Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default Registro;
