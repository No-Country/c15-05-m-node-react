import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsAction } from "../../redux/actionsProducts";
import { getCompanyAction } from "../../redux/actionsCompany";
import DashboardPage from "../dashboard/global/DashboardPage";
import InventarioHeader from "../Inventario/InventarioHeader";
import InventarioList from "../Inventario/InventarioList";
//import InventarioTable from "../Inventario/InventarioTable";
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
      <div className="flex flex-col">
      <div className="mt-10 ml-10">
        <ButtonBack />
      </div>
      {isLoading ? <Spinner/> :
      <div className="flex flex-col justify-center">
        <InventarioHeader setSearchQuery={setSearchQuery} />
      <div className="bg-white rounded-2xl w-auto mx-20"> 
        <InventarioList searchQuery={searchQuery} />
        {/* <InventarioTable searchQuery={searchQuery}/> */}
      </div>
      </div>}

      </div>
    </DashboardPage> );
}
 
export default Inventory;