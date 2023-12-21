// import React from "react";
import { Link } from "react-router-dom";
import "./Hero.component.css"

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-h1">Gestiona tu inventario y ventas un 120% más rápido con iPunto</h1>
      <h2 className="hero-h2">
        Está comprobado que los negocios que utilzan los servicios de iPunto
        aumentan hasta un 120% el rendimiento de su empresa.
      </h2>
      <div className="btns">
        <button>
          <Link className="btn-registrate" to="/register-user">Registrarse</Link>
        </button>
        <button>
        <Link className="btn-login" to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
