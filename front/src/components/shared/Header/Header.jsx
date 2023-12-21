import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.component.css";
import { MdMenu } from "react-icons/md";
import Logo from "../../../assets/logo.png";

const Header = ({ showDown = true }) => {
  //false: elimina "registrarse" e "inciar sesion"(Para rutas registro y login)
  const headerDownRigthClass = showDown
    ? "header-down-rigth"
    : "header-down-rigth-none";

  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <div className="header-up"></div>
      <div className="header-down">
        <Link to="/">
          <div className="header-down-left">
            <img className="ipunto-icon" src={Logo} alt="logo de iPunto" />
            <p className="iPunto">iPunto</p>
          </div>
        </Link>

        <div className={headerDownRigthClass}>
          <Link className="none" to="/register-user">
            Registrarse
          </Link>
          <Link className="none" to="/login">
            Iniciar Sesión
          </Link>
        </div>
        <div className={showDown === false && "none"}>
          <MdMenu onClick={toggleMenu} className="menu-mobile-icon" />

          <div className={isActive ? "navbar-mobile" : "mobile"}>
            <Link to="/register-user">Registrarse</Link>
            <Link to="/login">Iniciar Sesión</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
