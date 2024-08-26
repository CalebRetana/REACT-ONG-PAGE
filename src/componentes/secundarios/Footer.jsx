import React from "react";
import "../../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div class="footer-contact">
          <h3>Contáctanos</h3>
          <ul>
            <li>
              <i class="fa-solid fa-location-dot"></i> Dirección: Calle
              Principal #123, Ciudad, País
            </li>
            <li>
              <i class="fa-solid fa-phone"></i> Teléfono: +503 456 7890
            </li>
            <li>
              <i class="fa-solid fa-envelope"></i> Correo Electrónico:
              contacto@reddeayuda.org
            </li>
          </ul>
        </div>
        <div class="footer-social">
          <h3>Síguenos</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/leomessi/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://x.com/leomessisite"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-solid fa-x"></i> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/leomessi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-about">
          <h3>Integrantes</h3>
          <ul>
            <li>Guillermo Asensio</li>
            <li>Jonathan Retana</li>
            <li>Jorge Pimentel</li>
            <li>Manuel Valdés</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          &copy; 2024 Red de Ayuda Humanitaria. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
