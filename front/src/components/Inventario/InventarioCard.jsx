import React from "react";
import { Link } from "react-router-dom";

const InventarioCard = (props) => {
    return(
        <div>
            {/* este icono es por el stock que hay: si hay OK (tilde verde)- si hay menos de 5 !(amarillo) -si no hay X (rojo) */}
            <h3>icono estado</h3>
            {props.category.length && props.category.map((c, index)=> <h3 key={index}>{c}</h3>)}
            <Link to={`/ua/product/detail/${props._id}`}>{props.name}</Link>
            <h3>{props.currency}</h3>
            <h3>{props.price}</h3>
            <h3>{props.stock}</h3>
            <h3>icono editar</h3>
            <h3>icono borrar</h3>
            {/* este icono enlaza a reporte de ventas de ese articulo *** no esta implementado aun*** */}
            <h3>NIY:</h3>
            <h3>icono grafico</h3>
        </div>
    )
}

export default InventarioCard;