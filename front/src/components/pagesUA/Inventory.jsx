import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsAction } from "../../redux/actionsProducts";
import { getCompanyAction } from "../../redux/actionsCompany";
import DashboardPage from "../dashboard/global/DashboardPage";
import InventarioHeader from "../Inventario/InventarioHeader";
import InventarioList from "../Inventario/InventarioList";

const Inventory = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);
    //const user = useSelector(state => state.user.user)
    const companyId = user.companyID;
    
    const [searchQuery, setSearchQuery] = useState("");
    
      useEffect(() => {
          dispatch(getAllProductsAction(companyId));
          dispatch(getCompanyAction(companyId))
      }, [dispatch, companyId]);


    return (
    <DashboardPage>
        <InventarioHeader setSearchQuery={setSearchQuery}/>
        <InventarioList searchQuery={searchQuery}/>
    </DashboardPage> );
}
 
export default Inventory;