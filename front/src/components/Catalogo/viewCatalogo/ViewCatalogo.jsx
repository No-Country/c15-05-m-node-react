
import React, {useEffect, useState}from "react";
import ButtonBack from "../../Utils/Buttons/ButtonBack";
import HeaderCatalogo from "../header/HeaderCatalogo";
import CardsContainer from "../cardsContainer/CardsContainer";
import Paginado from "../paginado/Paginado";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllProductsAction } from "../../../redux/actionsProducts";
import { getCompanyAction } from "../../../redux/actionsCompany";


const ViewCatalogo = () =>{
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  //const user = useSelector(state => state.user.user)
   //console.log("USER ", user);
  //  const { products} = useSelector(state => state.products);
  const companyId = user.companyID;
  
  const [searchQuery, setSearchQuery] = useState("");
//console.log("PRDOUCTS GET ALL en view CATALOGO", products);
    useEffect(() => {
        dispatch(getAllProductsAction(companyId));
        dispatch(getCompanyAction(companyId))
    }, [dispatch, companyId]);


  return (
    <div>
      <div className="mt-10 ml-10">
        <ButtonBack />
      </div>
      <HeaderCatalogo setSearchQuery={setSearchQuery} />
      <CardsContainer searchQuery={searchQuery} />
      <Paginado />
    </div>
  );
};

export default ViewCatalogo;
