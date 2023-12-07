import React from "react";
import { Link } from "react-router-dom";
import "./Hero.component.css"

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-h1">Gestiona tu inventario y ventas 120% mas rapido con Ipunto</h1>
      <h2 className="hero-h2">
        Esta comprobado que los negocios que utilizan estes tipos de servicio
        aumentan hasta un 120% el rendimiento de su negocio
      </h2>
      <div className="btns">
        <button>
          <Link className="btn-registrate" to="/">Registrarse</Link>
        </button>
        <button>
        <Link className="btn-login" to="">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
