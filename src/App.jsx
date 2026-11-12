
import { useState } from "react";
import "./App.css";

const platos = [
  { id: 1, nombre: "Lomo saltado", precio: 25, categoria: "Carnes", emoji: "🥩", imagen: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600" },
  { id: 2, nombre: "Ají de gallina", precio: 22, categoria: "Tradicionales", emoji: "🍗", imagen: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600" },
  { id: 3, nombre: "Arroz con pollo", precio: 20, categoria: "Tradicionales", emoji: "🍚", imagen: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600" },
  { id: 4, nombre: "Ceviche peruano", precio: 28, categoria: "Pescados", emoji: "🐟", imagen: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600" },
  { id: 5, nombre: "Seco de res", precio: 26, categoria: "Carnes", emoji: "🍖", imagen: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600" },
  { id: 6, nombre: "Papa a la huancaína", precio: 15, categoria: "Entradas", emoji: "🥔", imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600" }
];

function App() {
  const [categoria, setCategoria] = useState("Todos");
  const [carrito, setCarrito] = useState([]);

  const agregar = (plato) => {
    setCarrito([...carrito, plato]);
  };

  const quitar = (id) => {
    const index = carrito.findIndex(p => p.id === id);
    if (index !== -1) {
      const nuevo = [...carrito];
      nuevo.splice(index, 1);
      setCarrito(nuevo);
    }
  };

  const total = carrito.reduce((suma, p) => suma + p.precio, 0);

  const filtrados = categoria === "Todos"
    ? platos
    : platos.filter(p => p.categoria === categoria);

  return (
    <div>
      <header>
        <a className="logo" href="#">🍲 Sazón Criollo</a>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#menu">Menú</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a href="#pedido" className="cart">
          🛒 {carrito.length}
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <span className="tag">EL AUTÉNTICO SABOR PERUANO</span>
          <h1>Tradición y sabor<br />en cada plato</h1>
          <p>Disfruta de los mejores platos criollos,
          preparados con ingredientes frescos y mucho amor.</p>
          <a href="#menu" className="btn">Ver nuestro menú</a>
        </div>
      </section>

      <section className="about" id="nosotros">
        <div>
          <span className="tag">NUESTRA HISTORIA</span>
          <h2>El sabor de nuestra tierra</h2>
          <p>
            En Sazón Criollo mantenemos viva la tradición
            gastronómica peruana. Preparamos cada receta
            respetando los sabores de nuestra cultura,
            ofreciendo calidad, cariño y una experiencia única.
          </p>
        </div>
        <div className="about-icon">🇵🇪</div>
      </section>

      <section className="menu" id="menu">
        <span className="tag">DESCUBRE NUESTROS SABORES</span>
        <h2>Nuestro menú</h2>
        <div className="filters">
          {["Todos", "Carnes", "Tradicionales", "Pescados", "Entradas"].map(c => (
            <button
              key={c}
              className={categoria === c ? "active" : ""}
              onClick={() => setCategoria(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="dishes">
          {filtrados.map(plato => (
            <article className="dish" key={plato.id}>
              <img src={plato.imagen} alt={plato.nombre} />
              <div className="dish-info">
                <h3>{plato.emoji} {plato.nombre}</h3>
                <p>Preparado con ingredientes frescos.</p>
                <div className="dish-bottom">
                  <strong>S/ {plato.precio.toFixed(2)}</strong>
                  <button onClick={() => agregar(plato)}>
                    Agregar +
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="order" id="pedido">
        <h2>Tu pedido 🛒</h2>
        {carrito.length === 0 ? (
          <p>Aún no has agregado platos a tu pedido.</p>
        ) : (
          <>
            {carrito.map((p, i) => (
              <div className="order-item" key={`${p.id}-${i}`}>
                <span>{p.nombre} - S/ {p.precio.toFixed(2)}</span>
                <button onClick={() => quitar(p.id)}>Quitar</button>
              </div>
            ))}
            <h3>Total: S/ {total.toFixed(2)}</h3>
          </>
        )}
      </section>

      <section className="contact" id="contacto">
        <h2>¡Te esperamos!</h2>
        <p>Ven y disfruta del verdadero sabor de la comida peruana.</p>
        <p>📍 Perú | 📞 999 999 999</p>
        <p>🕒 Lunes a domingo: 9:00 a. m. - 10:00 p. m.</p>
      </section>

      <footer>
        © 2026 Sazón Criollo | El sabor de nuestra tradición 🇵🇪
      </footer>
    </div>
  );
}

export default App;
