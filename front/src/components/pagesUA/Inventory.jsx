import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsAction } from "../../redux/actionsProducts";
import { getCompanyAction } from "../../redux/actionsCompany";
import DashboardPage from "../dashboard/global/DashboardPage";
import InventarioHeader from "../Inventario/InventarioHeader";
import InventarioList from "../Inventario/InventarioList";
import Spinner from "../Utils/Spinner";


const Inventory = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);
    //const user = useSelector(state => state.user.user)
    const companyId = user.companyID;
    
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true)

      useEffect(() => {
          dispatch(getAllProductsAction(companyId));
          dispatch(getCompanyAction(companyId));
          setTimeout(() => {
            setIsLoading(false)
          }, 3000);
      }, [dispatch, companyId, isLoading]);


    return (
    <DashboardPage>
        <InventarioHeader setSearchQuery={setSearchQuery}/>
        {isLoading ? <Spinner/> : <InventarioList searchQuery={searchQuery}/>}
    </DashboardPage> );
}
 
export default Inventory;