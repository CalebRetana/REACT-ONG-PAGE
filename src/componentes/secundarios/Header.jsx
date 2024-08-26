import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/Header.css";
import logo from "../../imagenes/RAH.png";

const Header = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveIndex(0);
        break;
      case "/acerca-de":
        setActiveIndex(1);
        break;
      case "/proyectos":
        setActiveIndex(2);
        break;
      case "/eventos":
        setActiveIndex(3);
        break;
      case "/donaciones":
        setActiveIndex(4);
        break;
      case "/voluntariado":
        setActiveIndex(5);
        break;
      default:
        setActiveIndex(0);
        break;
    }
  }, [location.pathname]);

  const handleActiveLink = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      <div className="navigation">
        <img
          src={logo}
          alt="Logo"
          className={`logo ${location.pathname === "/" ? "animate-logo" : ""}`}
        />
        <ul>
          <li className={`list ${activeIndex === 0 ? "active" : ""}`}>
            <Link to="/" onClick={() => handleActiveLink(0)}>
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
              <span className="text">Inicio</span>
              <span className="circle"></span>
            </Link>
          </li>
          <li className={`list ${activeIndex === 1 ? "active" : ""}`}>
            <Link to="/acerca-de" onClick={() => handleActiveLink(1)}>
              <span className="icon">
                <i className="fas fa-user"></i>
              </span>
              <span className="text">Nosotros</span>
              <span className="circle"></span>
            </Link>
          </li>
          <li className={`list ${activeIndex === 2 ? "active" : ""}`}>
            <Link to="/proyectos" onClick={() => handleActiveLink(2)}>
              <span className="icon">
                <i className="fas fa-project-diagram"></i>
              </span>
              <span className="text">Proyectos</span>
              <span className="circle"></span>
            </Link>
          </li>
          <li className={`list ${activeIndex === 3 ? "active" : ""}`}>
            <Link to="/eventos" onClick={() => handleActiveLink(3)}>
              <span className="icon">
                <i className="fas fa-calendar-alt"></i>
              </span>
              <span className="text">Eventos</span>
              <span className="circle"></span>
            </Link>
          </li>
          <li className={`list ${activeIndex === 4 ? "active" : ""}`}>
            <Link to="/donaciones" onClick={() => handleActiveLink(4)}>
              <span className="icon">
                <i className="fas fa-donate"></i>
              </span>
              <span className="text">Donaciones</span>
              <span className="circle"></span>
            </Link>
          </li>
          <li className={`list ${activeIndex === 5 ? "active" : ""}`}>
            <Link to="/voluntariado" onClick={() => handleActiveLink(5)}>
              <span className="icon">
                <i className="fas fa-hands-helping"></i>
              </span>
              <span className="text">Voluntariado</span>
              <span className="circle"></span>
            </Link>
          </li>
          <div
            className="indicator"
          ></div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
