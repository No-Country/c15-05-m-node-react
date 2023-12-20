import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsAction } from "../../redux/actionsProducts";
import { getCompanyAction } from "../../redux/actionsCompany";
import DashboardPage from "../dashboard/global/DashboardPage";
import InventarioHeader from "../Inventario/InventarioHeader";
import InventarioList from "../Inventario/InventarioList";
import Spinner from "../Utils/Spinner";
import ButtonBack from "../Utils/Buttons/ButtonBack";


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
      <div className="mt-10 ml-10">
        <ButtonBack />
      </div>
      {isLoading ? <Spinner/> :
      <div>
        <InventarioHeader setSearchQuery={setSearchQuery} />
        <InventarioList searchQuery={searchQuery} />
      </div>}
    </DashboardPage> );
}
 
export default Inventory;