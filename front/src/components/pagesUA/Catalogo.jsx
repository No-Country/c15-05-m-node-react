import React, {useEffect, useState} from "react";
import DashboardPage from "../dashboard/global/DashboardPage";
import ButtonBack from "../Utils/Buttons/ButtonBack";
import HeaderCatalogo from "../Catalogo/HeaderCatalogo";
import CardsContainer from "../Catalogo/CardsContainer";
import {useSelector, useDispatch} from "react-redux";
import { getAllProductsAction } from "../../redux/actionsProducts";
import { getCompanyAction } from "../../redux/actionsCompany";
import Spinner from "../Utils/Spinner";


function Catalogo() {
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.user);
    const userLocal = JSON.parse(localStorage.getItem('user'));

    const companyId = userLocal ? userLocal.companyID[0] : user.companyID;
    
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('user'));
        const dataUser = localUser ? localUser : user;
        if(dataUser) {
            dispatch(getAllProductsAction(companyId));
            dispatch(getCompanyAction(companyId));
            setTimeout(() => {
              setIsLoading(false)
            }, 2000);
        }
        }, [dispatch, companyId, user, isLoading]); 

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

