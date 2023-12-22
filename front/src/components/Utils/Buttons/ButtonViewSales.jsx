//import React from "react";
import Button from '@mui/material/Button';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { sweetAlertsError } from '../alerts/sweetAlerts';

const ButtonViewSales = (props) => {

    const handlerSales = () => {
        sweetAlertsError('Página en desarrollo', `No podemos mostrar el análisis de ventas de ${props.name}`, "OK");
    }

    return (
        <Button variant="text"  startIcon={<QueryStatsIcon className= "text-gray-700"/>} onClick={handlerSales}            
            sx={{
                transition: 'transform 0.2s ease-in-out', 
                '&:hover': {
                    transform: 'scale(1.1)', 
                },
            }}
        />
      );    

}

export default ButtonViewSales;