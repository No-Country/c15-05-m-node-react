import React from 'react';
import Slider from 'react-slick';
import Imagen from "../../../assets/insert-image.png"
import './Carousel.component.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    { id: 1, imageSrc: Imagen, text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ad dolorem facilis accusamus exercitationem unde tota" },
    { id: 2, imageSrc: Imagen, text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ad dolorem facilis accusamus exercitationem unde total" },
    { id: 3, imageSrc: Imagen, text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ad dolorem facilis accusamus exercitationem unde total" },
    { id: 1, imageSrc: Imagen, text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ad dolorem facilis accusamus exercitationem unde total" },
    { id: 2, imageSrc: Imagen, text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ad dolorem facilis accusamus exercitationem unde total" },
    { id: 3, imageSrc: Imagen, text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ad dolorem facilis accusamus exercitationem unde total" }
  ];

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
