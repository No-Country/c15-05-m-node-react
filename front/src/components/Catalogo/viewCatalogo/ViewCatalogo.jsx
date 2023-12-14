// import React from "react";
import ButtonBack from "../../Utils/Buttons/ButtonBack";
import HeaderCatalogo from "../header/HeaderCatalogo";
import CardsContainer from "../cardsContainer/CardsContainer";
import Paginado from "../paginado/Paginado";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import { useEffect } from "react";
import { getAllProductsAction } from "../../../redux/actionsProducts";

const ViewCatalogo = () =>{
   const { user } = useSelector(state => state.user);
   const { products} = useSelector(state => state.products);
    //const companyId = company._id;
    const companyId = user.companyID;
    const dispatch = useDispatch();
console.log("PRDOUCTS GET ALL en view CATALOGO", products);
    useEffect(() => {
        dispatch(getAllProductsAction(companyId))
    }, [dispatch, companyId]);

    
    return(
        <div>
            <div className="mt-10 ml-10">
                <ButtonBack />
            </div>
            <HeaderCatalogo />
            <CardsContainer/>
            <Paginado />
        </div>
    )
}

export default ViewCatalogo