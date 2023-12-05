import React from 'react';
import Slider from 'react-slick';
import './Carousel.component.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel1 from "../../../assets/carousel1.png"
import Carousel2 from "../../../assets/carousel2.png"
import Carousel3 from "../../../assets/carousel3.png"

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  // Array de datos para cada tarjeta
  const cardData = [
    { id: 1, imageSrc: Carousel1, text: "Puedes registrar tus productos y agregar detalles como el nombre del producto, la descripción, el precio, la cantidad, etc." },
    { id: 2, imageSrc: Carousel2, text: "Puedes monitorear el movimiento de tus productos, incluyendo la entrada y salida de los mismos. y estar al día cuando los niveles de tu inventario son bajos.." },
    { id: 3, imageSrc: Carousel3, text: "Integración con otros sistemas, como sistemas de punto de venta, para proporcionar una solución completa de gestión de inventario.." }
  ]

  return (
    <div>
      <h2>¿QUÉ OFRECEMOS?</h2>
    <Slider className='slider'{...settings}>
      {cardData.map(card => (
    
          <div key={card.id}>
          <div className="card">
            <img src={card.imageSrc} alt={`Imagen ${card.id}`} />
            <p>{card.text}</p>
          </div>
        </div>
   
      ))}
    </Slider>
    </div>
  );
}
