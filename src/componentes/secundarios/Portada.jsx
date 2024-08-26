import React from "react";
import "../../css/Portada.css";
import fondo from "../../imagenes/principal.png";
const Portada = () => {
  return (
    <div className="portada-container">
      <img src={fondo} alt="" className="portada-img" />
      <div className="textH1">
        <h1>
          <b>BIENVENIDOS AYUDADORES </b>
          <span className="highlight">HUMANITARIOS</span>
        </h1>
        <p className="pTextPortada">
          Bienvenidos a Red de Ayuda Humanitaria Bienvenidos a la Red de Ayuda
          Humanitaria, una organización dedicada a mejorar la vida de los niños
          en situación de vulnerabilidad. Nos esforzamos por brindar apoyo,
          educación y oportunidades para que los niños puedan tener un futuro
          mejor. Únete a nosotros y sé parte del cambio.
        </p>
      </div>
    </div>
  );
};

export default Portada;
