import React from "react";
import "../css/Proyectos.css"
import proyecto1 from "../imagenes/proyecto1.jpg"
import proyecto2 from "../imagenes/proyecto2.jpg"
import proyecto3 from "../imagenes/proyecto3.jpg"


const Projects = () => (
  <><>



    <div className="titulo">Proximos Proyectos...</div>
    <div className="containerrr">

      <div className="inner">
        <h1 className="h11"><i className="fa-solid fa-eye fa-xs"></i></h1>
        <img className="imagenPro" src={proyecto1} alt="imagen proyecto 1" />
        <h2>Proyecto "Futuro Sostenible": Programas de Capacitación en Oficios</h2>
        <p><b>Descripción:</b> Desarrollar programas de capacitación en oficios para adolescentes y jóvenes en comunidades vulnerables. Estos programas podrían incluir formación en carpintería, albañilería, costura, tecnología, o agricultura sostenible.</p>
        <p><b>Objetivo:</b> Empoderar a 200 jóvenes con las habilidades necesarias para acceder a oportunidades laborales y contribuir al bienestar de sus familias.</p>
      </div>

      <div className="inner">
        <h1 className="h11"><i className="fa-solid fa-eye fa-xs"></i></h1>
        <img className="imagenPro" src={proyecto2} alt="imagen proyecto 2" />
        <h2>Proyecto "Salud Integral": Clínicas Móviles en Comunidades Rurales</h2>
        <p><b>Descripción:</b> Implementar clínicas móviles que brinden servicios médicos y odontológicos en áreas rurales y de difícil acceso. Las clínicas podrían ofrecer chequeos de salud regulares, vacunas, atención prenatal, y educación sobre higiene y nutrición. Además, se podrían incluir talleres sobre salud mental y emocional, enfocándose en los niños y sus familias.</p>
        <p><b>Objetivo:</b>Proporcionar atención médica esencial a 1,000 niños y familias en comunidades vulnerables, mejorando su calidad de vida y bienestar general.</p>
      </div>

      <div className="inner">
        <h1 className="h11"><i className="fa-solid fa-eye fa-xs"></i></h1>
        <img className="imagenPro" src={proyecto3} alt="imagen proyecto 3" />
        <h2>Proyecto "Educación Digital": Acceso a la Tecnología para el Aprendizaje</h2>
        <p><b>Descripción:</b> Crear un programa de educación digital que proporcione tablets, laptops, y acceso a internet en escuelas rurales. Junto con esto, desarrollar contenidos educativos interactivos y plataformas de aprendizaje en línea que los niños puedan utilizar para mejorar sus habilidades en lectura, matemáticas, y ciencias. Incluir formación para maestros en el uso de tecnología educativa.</p>
        <p><b>Objetivo:</b> Equipar a 500 niños con herramientas tecnológicas y recursos educativos que amplíen sus oportunidades de aprendizaje y preparen para un futuro en un mundo digital.</p>
      </div>
    </div></><section className="proyectos">
      <div class="containerInfo">
        <h1 className="h11">Construyendo Sueños: Escuela Infantil</h1>
        <div class="info">
          <p><strong>Nombre del Proyecto:</strong> Construyendo Sueños: Escuela Infantil</p>
          <p><strong>Descripción:</strong> Este proyecto busca construir y equipar una escuela infantil en una comunidad desfavorecida de Ciudad de México. La escuela proporcionará educación básica, materiales escolares y un entorno seguro para que los niños puedan aprender y crecer.</p>
          <p><strong>Fecha:</strong> Marzo 2024</p>
          <p><strong>Lugar:</strong> Ciudad de México, México</p>
          <p><strong>Número de Beneficiarios:</strong> 150 niños</p>
        </div>
      </div>
      <div class="containerInfo">
        <h1 className="h11">Educación para el Futuro</h1>
        <div class="info">
          <p><strong>Nombre del Proyecto:</strong> Educación para el Futuro</p>
          <p><strong>Descripción:</strong> El proyecto “Educación para el Futuro” se enfoca en ofrecer becas educativas y recursos a niños en situación de vulnerabilidad en Lima. Incluye programas de tutorías, talleres extracurriculares y apoyo psicológico para fomentar el desarrollo integral de los menores.</p>
          <p><strong>Fecha:</strong> Junio 2024</p>
          <p><strong>Lugar:</strong> Lima, Perú</p>
          <p><strong>Número de Beneficiarios:</strong> 200 niños</p>
        </div>
      </div>
      <div class="containerInfo">
        <h1 className="h11">Sonrisas Brillantes</h1>
        <div class="info">
          <p><strong>Nombre del Proyecto:</strong> Sonrisas Brillantes</p>
          <p><strong>Descripción:</strong> “Sonrisas Brillantes” tiene como objetivo proporcionar servicios de salud dental gratuitos a niños en comunidades marginadas de Bogotá. El proyecto incluye revisiones dentales, tratamientos y educación sobre higiene bucal para asegurar una salud dental óptima.</p>
          <p><strong>Fecha:</strong> Septiembre 2024</p>
          <p><strong>Lugar:</strong> Bogotá, Colombia</p>
          <p><strong>Número de Beneficiarios:</strong> 100 niños</p>
        </div>
      </div>
    </section></>
);

export default Projects;
