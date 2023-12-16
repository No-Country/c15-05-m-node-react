import React, {useEffect, useState} from "react";
import DashboardPage from "../dashboard/global/DashboardPage";
import ButtonBack from "../Utils/Buttons/ButtonBack";
import HeaderCatalogo from "../Catalogo/header/HeaderCatalogo";
import CardsContainer from "../Catalogo/cardsContainer/CardsContainer";
import {useSelector, useDispatch} from "react-redux";
import { getAllProductsAction } from "../../redux/actionsProducts";
import { getCompanyAction } from "../../redux/actionsCompany";

function Catalogo() {
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
        <DashboardPage>
            <div>
                <div className="mt-10 ml-10">
                    <ButtonBack />
                </div>
                <HeaderCatalogo setSearchQuery={setSearchQuery} />
                <CardsContainer searchQuery={searchQuery} />
            </div>
        </DashboardPage>
    );
}
 
export default Catalogo;

