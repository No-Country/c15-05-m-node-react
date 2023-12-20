import React from "react";
import { Link } from "react-router-dom";


const InventarioCard = (props) => {
    return(
        <div> 
            {props.category.length && props.category.map((c, index)=> <h3 key={index}>{c}</h3>)}
            <Link to={`/ua/product/detail/${props.id}`}>{props.name}</Link>
            <img src={props.image.url} alt={props.name} className="w-14 h-10"/>
            <h3>{props.currency}</h3>
            <h3>{props.price}</h3>
            <h3>{props.stock}</h3>         
        </div>
    )
}

export default InventarioCard;