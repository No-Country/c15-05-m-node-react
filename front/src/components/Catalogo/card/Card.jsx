import React from "react";

const Card = (props) => {
    return (
    <div>
        <img src={props.image.url} alt={`imagen de ${props.name}`}/> 
        <h1>{props.name}</h1>
        {props.category.length && props.category.map((c)=> <h3>{c}</h3>)}
        <div>
            <h3>Precio</h3>
            <h3>{props.price}$</h3>
        </div>
    </div>
    )
};

export default Card;