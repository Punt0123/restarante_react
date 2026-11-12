import React from "react";
import aji_gallina from "../img/aji_gallina.png"
import arroz_con_pato from "../img/arroz_con_pato.png"
import ceviche from "../img/ceviche.png"
import lomo_saltado from "../img/lomo_saltado.png"


const platos = [
  {
    nombre: "Lomo Saltado",
    precio: "S/ 25.00",
    imagen: `${lomo_saltado}`
  },
  {
    nombre: "Ají de Gallina",
    precio: "S/ 22.00",
    imagen: `${aji_gallina}`
    
  },
  {
    nombre: "Arroz con Pato",
    precio: "S/ 28.00",
    imagen: `${arroz_con_pato}`
  },
  {
    nombre: "Ceviche Peruano",
    precio: "S/ 30.00",
    imagen: `${ceviche}`
  }
];

function Menu() {
  return (
    <section id="menu" className="menu">
      <h2>Nuestros platos criollos</h2>
      <p>Tradición y sabor en cada preparación</p>

      <div className="platos-container">
        {platos.map((plato, index) => (
          <div className="plato-card" key={index}>
            <img src={plato.imagen} alt={plato.nombre} />
            <h3>{plato.nombre}</h3>
            <p className="precio">{plato.precio}</p>
            <button>Ordenar</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
