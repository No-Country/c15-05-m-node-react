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
    const userLocal = JSON.parse(localStorage.getItem('user'));

    const companyId = userLocal ? userLocal.companyID[0] : user.companyID;
    
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true)

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