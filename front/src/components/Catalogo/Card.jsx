import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    
    return (
        <Link to={`/ua/product/detail/${props._id}`}>
    <div className="w-64 h-auto m-4 bg-white rounded-xl flex flex-col justify-center items-center">
        <img className="w-52 max-h-36 pt-6 pb-2" src={props.image.url} alt={`imagen de ${props.name}`}/> 
        <div className="w-full text-left ml-14">
            <h1 className="text-lg font-semibold font-barlow-condensed" >{props.name}</h1>
        </div>
        <div className="w-44 h-auto m-4 mt-0 font-roboto">
            <div className="flex flex-row justify-evenly text-sm">
                {props.category.length && props.category.map((c, index)=> <h3 key={index}>{c}</h3>)}
            </div>
            <div className="flex flex-row justify-between text-[#00bcd4]">
                <h3>Precio</h3>
                <h3>{props.price}{props.currency}</h3>
            </div>
        </div>
    </div>
    </Link>
    )
};

export default Card;