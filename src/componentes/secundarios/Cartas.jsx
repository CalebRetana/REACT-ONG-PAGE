import React, { useEffect, useRef } from "react";
import "../../css/Cartas.css";

const Cartas = () => {
  const countersRef = useRef([]);

  function animateCounter(element, end, duration) {
    const start = 0;
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
      current += increment;
      element.textContent = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const end = parseInt(element.getAttribute("data-end"), 10);
            animateCounter(element, end, 5);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.5, // Adjust the threshold as needed
      }
    );

    countersRef.current.forEach((counter) => {
      if (counter) {
        observer.observe(counter);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="cartas-container">
      <div className="features">
        <div className="feature contruidas">
          <h2
            className="counter"
            ref={(el) => (countersRef.current[0] = el)}
            data-end="1000"
          >
            0
          </h2>
          <div className="icon"></div>
          <h3>
            <b>VIVIENDAS CONSTRUIDAS</b>
          </h3>
          <p>
            Con la construcción de más de mil viviendas, hemos mejorado las
            condiciones de vida de innumerables familias, proporcionando un
            entorno estable y lleno de esperanza para el futuro de estos niños.
            Trabajamos en equipo en tiempo real, permitiendo la colaboración y
            el establecimiento de permisos individuales para maximizar nuestra
            eficiencia y alcance.
          </p>
        </div>

        <div className="feature educandose">
          <h2
            className="counter"
            ref={(el) => (countersRef.current[1] = el)}
            data-end="800"
          >
            0
          </h2>
          <div className="icon"></div>
          <h3>NIÑOS EDUCÁNDOSE</h3>
          <p>
            Red de Ayuda Humanitaria ha facilitado el acceso a la educación para
            más de 800 niños en comunidades vulnerables. A través de programas
            educativos personalizados y apoyo continuo, hemos abierto puertas
            hacia un futuro brillante, donde cada niño tiene la oportunidad de
            alcanzar su máximo potencial.
          </p>
        </div>

        <div className="feature apoyadas">
          <h2
            className="counter"
            ref={(el) => (countersRef.current[2] = el)}
            data-end="500"
          >
            0
          </h2>
          <div className="icon"></div>
          <h3>FAMILIAS APOYADAS</h3>
          <p>
            Hemos proporcionado apoyo integral a 500 familias, ofreciéndoles no
            solo viviendas, sino también servicios esenciales como salud,
            educación y bienestar social. Nuestro compromiso es garantizar un
            entorno seguro y estable para cada familia, promoviendo el
            desarrollo y la autosuficiencia.
          </p>
        </div>

        <div className="feature capacitados">
          <h2
            className="counter"
            ref={(el) => (countersRef.current[3] = el)}
            data-end="300"
          >
            0
          </h2>
          <div className="icon"></div>
          <h3>VOLUNTARIOS CAPACITADOS</h3>
          <p>
            Contamos con un equipo de 300 voluntarios dedicados y capacitados
            que trabajan incansablemente para mejorar las condiciones de vida de
            los niños y sus familias. Con formación continua y un enfoque en la
            empatía y la eficacia, nuestros voluntarios son el corazón de
            nuestra misión, llevando esperanza y recursos a quienes más lo
            necesitan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cartas;
