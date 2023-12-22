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
<h1>PERFIL UA</h1>
    );
}
 
export default ProfileUA;