import React from 'react'
import Imagen from "../../../assets/registrate.flecha.png"
import "./Registrate.component.css"

const Registrate = () => {
  return (
    <div className='registrate'>
   <h2>REGISTRATE AQUI</h2>

   <div className='registrate-right'>
    <h2>iPunto</h2>
  <a href=""><img src={Imagen} alt="" /></a>
    </div>
    </div>
  )
}

export default Registrate