import React, { useState } from "react";
import "../../css/CarruselEvents.css";

const eventos = [
  {
    titulo: 'Carrera Benéfica: "Corre por la Esperanza"',
    descripcion:
      "Una carrera benéfica de 5 km y 10 km para recaudar fondos destinados a programas de ayuda para niños en situación de pobreza.",
    imagen: require("../../imagenes/Carrusel-events/fondos/carreraBenefica.jpg"),
  },
  {
    titulo: 'Concierto Solidario: "Voces de la Esperanza"',
    descripcion:
      "Un concierto benéfico con la participación de artistas locales e internacionales.",
    imagen: require("../../imagenes/Carrusel-events/fondos/concierto.webp"),
  },
  {
    titulo: 'Feria de la Salud: "Cuidemos Nuestro Futuro"',
    descripcion:
      "Una feria de salud gratuita que ofrecerá consultas médicas, vacunaciones, y talleres de salud y nutrición para familias de escasos recursos.",
    imagen: require("../../imagenes/Carrusel-events/fondos/feriaSalud.webp"),
  },
  {
    titulo: 'Gala Benéfica: "Una Noche por los Niños"',
    descripcion:
      "Una gala elegante con cena, subasta silenciosa, y entretenimiento en vivo.",
    imagen: require("../../imagenes/Carrusel-events/fondos/galaBenefica.jpg"),
  },
  {
    titulo: 'Jornada de Voluntariado: "Manos que Ayudan"',
    descripcion:
      "Un día dedicado al voluntariado donde se llevarán a cabo actividades como la construcción de viviendas, la limpieza de áreas comunitarias, y talleres educativos para niños.",
    imagen: require("../../imagenes/Carrusel-events/fondos/JornadaVolu.jpg"),
  },
];

const cartaDatos = [
  {
    imagen: require("../../imagenes/Carrusel-events/cards/carrera-solidaria-bg2.jpg"),
    fecha: "17 de enero de 2025",
    lugar: "Comunidad El Espino, La Libertad",
    hora: "8:00 AM - 4:00 PM",
  },
  {
    imagen: require("../../imagenes/Carrusel-events/cards/taylor.webp"),
    fecha: "24 de febrero de 2025",
    lugar: "Auditorio Nacional, San Salvador",
    hora: "6:00 PM - 10:00 PM",
  },
  {
    imagen: require("../../imagenes/Carrusel-events/cards/salud.jpeg"),
    fecha: "15 de marzo de 2025",
    lugar: "Centro Comunitario, Santa Ana",
    hora: "9:00 AM - 3:00 PM",
  },
  {
    imagen: require("../../imagenes/Carrusel-events/cards/gala.jpg"),
    fecha: "30 de abril de 2025",
    lugar: "Hotel Intercontinental, San Salvador",
    hora: "7:00 PM - 11:00 PM",
  },
  {
    imagen: require("../../imagenes/Carrusel-events/cards/jornada.jpeg"),
    fecha: "10 de mayo de 2025",
    lugar: "Parque Central, San Miguel",
    hora: "8:00 AM - 2:00 PM",
  },
];

const CarruselEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === eventos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? eventos.length - 1 : prevIndex - 1
    );
  };

  const handleCircleClick = (index) => {
    setCurrentIndex(index);
  };

  const getActiveCards = () => {
    const totalCards = cartaDatos.length;
    const startIndex = currentIndex % totalCards;
    return [cartaDatos[startIndex], cartaDatos[(startIndex + 1) % totalCards]];
  };

  return (
    <div
      className="carrusel-container"
      style={{ backgroundImage: `url(${eventos[currentIndex].imagen})` }}
    >
      <div className="carrusel">
        <div className="carrusel-linea">
          <div className="linea">
            {eventos.map((_, index) => (
              <button
                key={index}
                className={`circulo ${currentIndex === index ? "marcado" : ""}`}
                onClick={() => handleCircleClick(index)}
                aria-label={`Seleccionar evento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="carrusel-container-informacion">
          {eventos.map((evento, index) => (
            <div
              key={index}
              className={`carrusel-informacion ${
                currentIndex === index ? "active" : ""
              }`}
            >
              <h1>{evento.titulo}</h1>
              <p>{evento.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="carrusel-container-muestreo">
          <div className="carrusel-container-cards">
            {getActiveCards().map((carta, index) => (
              <div
                key={index}
                className={`carrusel-cards ${
                  index === 0 ? "seleccionada" : ""
                }`}
                style={{
                  backgroundImage: `url(${carta.imagen})`,
                  objectFit: "cover",
                }}
              >
                <div className="carta-info">
                  <p>
                    <strong>Fecha:</strong> {carta.fecha}
                  </p>
                  <p>
                    <strong>Lugar:</strong> {carta.lugar}
                  </p>
                  <p>
                    <strong>Hora:</strong> {carta.hora}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="carrusel-selectores">
            <i
              className="fa-solid fa-caret-left icono"
              onClick={handlePrev}
            ></i>
            <i
              className="fa-solid fa-caret-right icono"
              onClick={handleNext}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarruselEvents;
