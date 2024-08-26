import React from "react";
import Cartas from "./secundarios/Cartas";
import Portada from "./secundarios/Portada";
import Principio from "./secundarios/Principio";
import "../css/Home.css";
import Cards from "./secundarios/Cards";
const Home = () => {
  return (
    <div>
      <section id="principio">
        <Principio />
      </section>
      <section id="portada">
        <Portada />
      </section>
      <section id="cartas">
        <Cartas />
      </section>
      <section id="misionVision">
        <Cards />
      </section>
      
    </div>
  );
};

export default Home;
