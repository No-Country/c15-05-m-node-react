import React from 'react';
import image from "../../../assets/insert-image.png"
import "./AboutUs.component.css"

const AboutUs = () => {
  return (
    <div className="about">
      <div className='about-left'>
      <h2>¿QUIÉNES SOMOS?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut commodi nihil, explicabo esse ducimus aperiam ea, dolorum ipsa, tenetur error debitis accusantium distinctio deserunt veniam amet. Odio quis ex blanditiis, voluptas a velit? Dicta ea ipsum blanditiis error voluptates quae!</p>
      </div>

      <div className='about-right'>
      <h2>
        iPunto
      </h2>
      <img src={image} alt="" /> 


      </div>
    </div>
  )
}

export default AboutUs