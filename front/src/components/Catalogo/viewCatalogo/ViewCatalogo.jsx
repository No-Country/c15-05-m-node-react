import React, {useEffect, useState}from "react";
import ButtonBack from "../../Utils/Buttons/ButtonBack";
import HeaderCatalogo from "../header/HeaderCatalogo";
import CardsContainer from "../cardsContainer/CardsContainer";
import Paginado from "../paginado/Paginado";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllProductsAction } from "../../../redux/actionsProducts";

const ViewCatalogo = () => {
  // const company = useSelector(state => state.company);
  //const companyId = company._id;
  const companyId = "65667634dec160501d76e68a";
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getAllProductsAction(companyId));
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
