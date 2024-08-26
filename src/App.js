import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/secundarios/Header";
import Footer from "./componentes/secundarios/Footer";
import Home from "./componentes/Home";
import About from "./componentes/About";
import Projects from "./componentes/Projects";
import Events from "./componentes/Events";
import DonateForm from "./componentes/DonateForm";
import VolunteerForm from "./componentes/VolunteerForm";

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/acerca-de" element={<About />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/donaciones" element={<DonateForm />} />
        <Route path="/voluntariado" element={<VolunteerForm />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);



export default App;
