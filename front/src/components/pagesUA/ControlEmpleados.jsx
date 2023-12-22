import DashboardPage from "../dashboard/global/DashboardPage";
import FormEmployes from "./formEmployes";
import EmployesViews from "./EmployesViews";
import { getEmployesAction } from "../../redux/actionsCompany";
import { useEffect,useState } from "react"
import {useSelector } from "react-redux"
const ControlEmpleados = () => {
  const user = useSelector(state => state.user.user)
    const [employes,setEmployes] = useState([])
    
    useEffect(()=>{
        getEmployes()
    },[user.companyID])

    const getEmployes = async () => {
        const data = await  getEmployesAction(user.companyID)
        const newEployes = data.filter(employes => employes._id !== user.id )
        setEmployes(newEployes)
    }

  
  return (
    <DashboardPage>
      <section className="employes__container">
        <EmployesViews employes={employes} getEmployes={getEmployes }/>
        <FormEmployes getEmployes={getEmployes }/>
      </section>
    </DashboardPage>
  );
};

export default ControlEmpleados;