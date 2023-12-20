import React from "react";
import { Link } from "react-router-dom";
import WarningIcon from '@mui/icons-material/Warning';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const InventarioCard = (props) => {
    return(
        <div>
            {/* este icono es por el stock que hay: si hay OK (tilde verde)- si hay menos de 5 !(amarillo) -si no hay X (rojo) */}
            {props.stock <= 5 ? <WarningIcon className="text-yellow-500"/>: props.stock === 0 ? <CancelIcon className="text-red-600"/> : <CheckCircleIcon className="text-green-600"/>}
            {props.category.length && props.category.map((c, index)=> <h3 key={index}>{c}</h3>)}
            <Link to={`/ua/product/detail/${props.id}`}>{props.name}</Link>
            <h3>{props.currency}</h3>
            <h3>{props.price}</h3>
            <h3>{props.stock}</h3>         
        </div>
    )
}

export default InventarioCard;