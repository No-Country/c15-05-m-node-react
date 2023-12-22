import React from "react";
import "./LandingCard.component.css";
import Frame from "../../../../assets/LandingNew/Frame.png";
import Frame2 from "../../../../assets/LandingNew/Frame2.png";
import Frame3 from "../../../../assets/LandingNew/Frame3.png";

const LandingCard = () => {
  const cardsData = [
    {
      title: "REGISTRO",
      text: "Puedes registrar tus productos y agregar detalles como el nombre del producto, la descripción, el precio, la cantidad, etc.",
      imageSrc: Frame,
    },
    {
      title: "INVENTARIO",
      text: "Puedes monitorear el movimiento de tus productos, incluyendo la entrada y salida de los mismos, y estar al día cuando los niveles de tu inventario son bajos.",
      imageSrc: Frame2,
    },
    {
      title: "VENTAS",
      text: "Todo en un solo lugar, una solución integral de gestión de inventario y ventas.",
      imageSrc: Frame3, // Reemplaza con la URL de tu imagen
    },
  ];

  return (
    <div className="landingcard-container">
        <h2>¿Que ofrece <span>iPunto</span>?</h2>
    <div className="landingcard">
          {cardsData.map((card, index) => (
        <div key={index} className="landingcard-card">
         
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default LandingCard;
