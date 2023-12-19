import React from "react";
import { Link } from "react-router-dom";
import "./Header.component.css";
import { FaCircle, FaUserCircle } from "react-icons/fa";
// import logo from "../../../assets/logo.svg"
import Logo from "../../../assets/logo.png";

const Header = ({ showDown = true }) => {
  //false: elimina "registrarse" e "inciar sesion"(Para rutas registro y login)
  const headerDownRigthClass = showDown ? "header-down-rigth" : "header-down-rigth-none";

  return (
    <header className="header">
      <div className="header-up"></div>
              <div className="header-down">
          <Link to="/" >
          <div className="header-down-left">
            <img className="ipunto-icon" src={Logo} alt="logo de iPunto" />
            <p className="iPunto">iPunto</p>
          </div>
          </Link>
          
          <div className={headerDownRigthClass}>
            
            {/* <Link to="/ua/landing" >UA</Link> */}
            <Link to="/">Home</Link>
            <Link to="/register-user" >Registrarse</Link>
            <Link to="/register-company" >Registrar Compañía</Link>
            <Link to="/login" >Iniciar Sesión</Link>
            {/* <Link to="/EUA" >EUA</Link> */}

            <FaUserCircle className="icono-usuario" />
          </div>
        </div>
      
    </header>
  );
};

export default Header;

//Codigo viejo//

// import {React} from "react";
// import "./Header.component.css";
// import { FaCircle } from "react-icons/fa";
// import { FaUserCircle } from "react-icons/fa";

// const Header = () => {
//   return (
//    <header className="header">
//     <div className="header-up">

//     </div>
//      <div className="header-down">
//         <div className="header-down-left">
//         <FaCircle className="ipunto-icon"/>
//           <h1>iPunto</h1>
//         </div>

//         <div className="header-down-rigth">
//           <a href="">registrarse</a>
//           <a href="">iniciar sesion</a>
//           <FaUserCircle className=""/>
//         </div>
//     </div>
//    </header>
//   );
// };

// export default Header;
