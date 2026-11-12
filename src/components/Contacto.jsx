
import React from "react";

function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <h2>Contáctanos</h2>
      <p>¡Estamos listos para atenderte!</p>

      <form onSubmit={(e) => {
        e.preventDefault();
        alert("¡Gracias por contactarnos!");
      }}>
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo" required />
        <textarea placeholder="Escribe tu mensaje" required />
        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
}

export default Contacto;
