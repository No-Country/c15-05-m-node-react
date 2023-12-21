import React, { useEffect, useState } from "react";
import ButtonBack from "../../Utils/Buttons/ButtonBack";
import HeaderCatalogo from "../header/HeaderCatalogo";
import CardsContainer from "../cardsContainer/CardsContainer";
import Paginado from "../paginado/Paginado";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllProductsAction } from "../../../redux/actionsProducts";

const ViewCatalogo = () => {
  const { user } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);

  // Check if user and user.companyID exist, if not set companyId to null or some default value
  const companyId = user?.companyID || null;

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  console.log("PRODUCTS GET ALL in view CATALOGO", products);

  useEffect(() => {
    // Check if companyId is not null before dispatching the action
    if (companyId !== null) {
      dispatch(getAllProductsAction(companyId));
    }
  }, [dispatch, companyId]);

  return (
    <div className="mx-10" style={{width: "100vw"}}>
      <div className="mt-10 ml-10">
        <ButtonBack />
      </div>
      <HeaderCatalogo setSearchQuery={setSearchQuery} />
      <CardsContainer searchQuery={searchQuery}/>
      <Paginado />
    </div>
  );
};

export default ViewCatalogo;