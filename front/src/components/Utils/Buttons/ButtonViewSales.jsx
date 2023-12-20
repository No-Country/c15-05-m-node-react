//import React from "react";
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
//import { useDispatch } from 'react-redux';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const ButtonViewSales = (props) => {
    //const dispatch = useDispatch();

    const handlerSales = () => {
        console.log("Veo detalle ventas del producto  id: ", props.id);
    }

    return (
        <Button variant="text"  startIcon={<QueryStatsIcon className= "text-gray-400"/>} onClick={handlerSales}            
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