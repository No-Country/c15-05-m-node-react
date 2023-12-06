import React from "react";
import HeaderCatalogo from "../header/HeaderCatalogo";
import CardsContainer from "../cardsContainer/CardsContainer";
import Paginado from "../paginado/Paginado";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import { useEffect } from "react";
import { getAllProductsAction } from "../../../redux/actionsProducts";

const ViewCatalogo = () =>{
   // const company = useSelector(state => state.company);
    //const companyId = company._id;
    const companyId = "65667634dec160501d76e68a";
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProductsAction(companyId))
    }, [dispatch]);

    
    return(
        <div>
            <HeaderCatalogo />
            <CardsContainer/>
            <Paginado />
        </div>
    )
}

export default ViewCatalogo