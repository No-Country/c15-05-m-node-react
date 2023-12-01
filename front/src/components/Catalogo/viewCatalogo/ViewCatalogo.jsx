import React from "react";
import HeaderCatalogo from "../header/HeaderCatalogo";
import CardsContainer from "../cardsContainer/CardsContainer";
import Paginado from "../paginado/Paginado";

const ViewCatalogo = () =>{
    return(
        <div>
            <HeaderCatalogo />
            <CardsContainer/>
            <Paginado />
        </div>
    )
}

export default ViewCatalogo