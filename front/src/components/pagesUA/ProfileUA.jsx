import DashboardPage from "../dashboard/global/DashboardPage";
import { useEffect } from "react";
import { sweetAlertsMessage } from "../Utils/alerts/sweetAlerts";
import { useNavigate } from "react-router-dom";

const ProfileUA = () => {
    const navigate = useNavigate();

    useEffect(()=> {
        sweetAlertsMessage('Página en desarrollo', 'Pronto podra ver aquí los datos de su perfil y editarlos',"OK");
        setTimeout(() => {
            navigate(-1);
        }, 2000);
    }, [])

    return ( 
     <DashboardPage></DashboardPage> 
    );
}
 
export default ProfileUA;