// import React from "react";
import ButtonBack from "../../Utils/Buttons/ButtonBack";
import HeaderCatalogo from "../header/HeaderCatalogo";
import CardsContainer from "../cardsContainer/CardsContainer";
import Paginado from "../paginado/Paginado";

const ViewCatalogo = () => {
  return (
    <div>
      <div className="mt-10 ml-10">
        <ButtonBack />
      </div>
      <HeaderCatalogo />
      <CardsContainer />
      <Paginado />
    </div>
  );
};

export default ViewCatalogo;
