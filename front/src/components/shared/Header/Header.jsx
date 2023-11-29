import React from "react";
import "./Header.component.css";
import { FaCircle, FaUserCircle } from "react-icons/fa";

const Header = ({ showDown = true }) => {
  const headerDownClass = showDown ? "header-down" : "header-down-none";

  return (
    <header className="header">
      <div className="header-up"></div>
      {showDown && (
        <div className={headerDownClass}>
          <div className="header-down-left">
            <FaCircle className="ipunto-icon" />
            <h1>iPunto</h1>
          </div>
          <div className="header-down-rigth">
            <a href="">registrarse</a>
            <a href="">iniciar sesion</a>
            <FaUserCircle className="" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;



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
