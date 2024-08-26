import React from "react";
import "../../css/Cards.css";
import mision from "../../imagenes/mision.jpg";
import vision from "../../imagenes/vision.jpg";
import valor from "../../imagenes/valor.png";

const Cards = () => {
  return (
    <div class="card-container">
      <div class="card">
        <div class="face front">
          <img src={mision} alt="" />
          <h3>Misión</h3>
        </div>

        <div class="face back mision">
          <h3>Misión</h3>
          <p>
            Nuestra misión es proporcionar apoyo integral a los niños
            necesitados, asegurando su bienestar, educación y desarrollo.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="face front">
          <img src={vision} alt="" />
          <h3>Visión</h3>
        </div>
        <div class="face back vision">
          <h3>Visión</h3>
          <p>
            Aspiramos a un mundo donde todos los niños tengan las mismas
            oportunidades para crecer en un ambiente seguro, saludable y
            amoroso.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="face front">
          <img src={valor} alt="" />
          <h3>Valores</h3>
        </div>

        <div class="face back valor">
          <h3>Valores</h3>
          <ul>
            <li>
              <strong>Compromiso:</strong> Dedicación y entrega para mejorar la
              vida de los niños.
            </li>
            <li>
              <strong>Transparencia:</strong> Gestión honesta y abierta de
              nuestros recursos.
            </li>
            <li>
              <strong>Inclusión:</strong> Trabajamos para todos los niños, sin
              distinción alguna.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Cards;
