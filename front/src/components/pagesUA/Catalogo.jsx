import React, {useEffect, useState} from "react";
import DashboardPage from "../dashboard/global/DashboardPage";
import ButtonBack from "../Utils/Buttons/ButtonBack";
import HeaderCatalogo from "../Catalogo/HeaderCatalogo";
import CardsContainer from "../Catalogo/CardsContainer";
import {useSelector, useDispatch} from "react-redux";
import { getAllProductsAction } from "../../redux/actionsProducts";
import { getCompanyAction } from "../../redux/actionsCompany";
import Spinner from "../Utils/Spinner";
import { sweetAlertsError } from "../Utils/alerts/sweetAlerts";
import { useNavigate } from "react-router-dom";

function Catalogo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.user);
    //const user = useSelector(state => state.user.user)
    //const { products} = useSelector(state => state.products.products);
    const companyId = user.companyID;
    
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);

  //console.log("PRDOUCTS GET ALL en view CATALOGO", products);
      useEffect(() => {
        if(user) {
            dispatch(getAllProductsAction(companyId));
            dispatch(getCompanyAction(companyId));
            setTimeout(() => {
              setIsLoading(false)
            }, 3000);
        }
        // sweetAlertsError(
        //     "¡Primero debes loguearte!",
        //     "Antes no podemos mostrar tus productos",
        //     "Ok"
        //   );
        // navigate("/login");
        }, [dispatch, companyId]); 

    return (
        <DashboardPage>
            <div className="w-full">
                <div className="mt-10 ml-10">
                    <ButtonBack />
                </div>
                {isLoading ? <Spinner/> : 
                <div>
                    <HeaderCatalogo setSearchQuery={setSearchQuery} />
                    <CardsContainer searchQuery={searchQuery} />
                </div>}
            </div>
        </DashboardPage>
    );
}
 
export default Catalogo;

