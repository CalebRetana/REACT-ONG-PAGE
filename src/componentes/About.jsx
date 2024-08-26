import React from "react";
import "../css/About.css"
import Usp2 from "./secundarios/UsP2";



const About = () => (
  <div>
    <div className="Cuerpo">
      <div className="Container">
        <div className="Card">
          <div className="ImgBx">
            <img src= "RedDeauyuda.jpg" alt="Red de Ayuda Humanitaria" />
          </div>
          <div className="ContentBx">
            <h3>Apoyando a los Niños<br/><span>Red de Ayuda Humanitaria</span></h3>
            <p>
              En la Red de Ayuda Humanitaria, nos dedicamos a mejorar las vidas de los niños en situación de vulnerabilidad. 
              Creemos que cada niño merece la oportunidad de crecer en un entorno seguro, con acceso a educación y recursos esenciales.
            </p>
            <p>
              Nuestro equipo trabaja incansablemente para proporcionar apoyo emocional, nutricional y educativo a aquellos que más lo necesitan. 
            
            </p>
          </div>
          <ul className="sci">
            <li><a href="https://facebook.com/yourpage"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com/yourpage"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://linkedin.com/yourpage"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>

      <div className="Container">
        <div className="Card">
          <div className="ImgBx">
            <img src="education.jpg" alt="Programas Educativos" />
          </div>
          <div className="ContentBx">
            <h3>Programas Educativos<br/><span>Empoderando a las Futuras Generaciones</span></h3>
            <p>
              La educación es una de nuestras principales prioridades. A través de nuestros programas educativos, ofrecemos clases de refuerzo, 
              talleres vocacionales y becas para garantizar que cada niño tenga las herramientas necesarias para un futuro exitoso.
            </p>
            <p>
              Colaboramos con escuelas y comunidades locales para crear entornos de aprendizaje
            </p>
          </div>
          <ul className="sci">
            <li><a href="https://facebook.com/yourpage"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com/yourpage"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://linkedin.com/yourpage"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>

      <div className="Container">
        <div className="Card">
          <div className="ImgBx">
            <img src="salud.jpg" alt="Programas de Salud" />
          </div>
          <div className="ContentBx">
            <h3>Programas de Salud<br/><span>Cuidando el Bienestar de los Niños</span></h3>
            <p>
              Además de la educación, el bienestar físico es fundamental. Ofrecemos programas de salud que incluyen chequeos médicos, 
              campañas de vacunación y educación en higiene, asegurando que los niños puedan crecer fuertes y sanos.
            </p>
            <p>
              Nuestras brigadas médicas visitan regularmente comunidades remotas, llevando atención sanitaria donde las personas más la necesitan.
            </p>
          </div>
          <ul className="sci">
            <li><a href="https://facebook.com/yourpage"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com/yourpage"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://linkedin.com/yourpage"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>

      <div className="Container">
        <div className="Card">
          <div className="ImgBx">
            <img src="Comuniti.jpg" alt="Iniciativas Comunitarias" />
          </div>
          <div className="ContentBx">
            <h3>Iniciativas Comunitarias<br/><span>Fortaleciendo la Comunidad</span></h3>
            <p>
              Creemos en el poder de la comunidad para cambiar vidas. Nuestras iniciativas comunitarias incluyen la construcción de centros comunitarios, 
              organización de eventos y campañas de sensibilización para fomentar la solidaridad y el apoyo mutuo.
            </p>
            <p>
              Invitamos a todos a unirse a nuestros esfuerzos, ya sea a través del voluntariado, donaciones, o simplemente compartiendo nuestra misión con otros.
            </p>
          </div>
          <ul className="sci">
            <li><a href="https://facebook.com/yourpage"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com/yourpage"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://linkedin.com/yourpage"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>

    </div>
    <Usp2/>
  </div>
);

  


export default About;
