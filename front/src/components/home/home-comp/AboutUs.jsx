import React from 'react';
import Logo from "../../../assets/logo.png"
import "./AboutUs.component.css"

const AboutUs = () => {
  return (
    <div className="about">
      <div className='about-left'>
      <h2>¿QUIÉNES SOMOS?</h2>
      <p>Somos tu solución a la gestión de tu tienda, o emprendimiento. Registra todos tus movimientos y empoderate como todo un empresario. Nosotros te ayudamos a hacerlo!</p>
      </div>

      <div className='about-right'>
      <h2>
        iPunto
      </h2>
      <img src={Logo} alt="" /> 


      </div>
    </div>
  )
}

export default AboutUs