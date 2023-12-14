import React from "react";
import Card from "../card/Card"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CardsContainer = () => {
  const { products} = useSelector(state => state.products);
  const { company } = useSelector(state => state.company);
  const [ compañia, setCompañia ] = useState();
  // const products = [];
// const products = useSelector(state => state.products)
// const company = useSelector(state => state.company);
//const nameCompany = company.name;
console.log("company", company)
useEffect(() =>{
setCompañia(company)
},[company])

    return (
    <div className="flex flex-wrap mx-10">
        {!products.length ? 
        <div className="w-100vw bg-white rounded-2xl text-center py-40 px-96 mx-10">
          <h2 className="text-xl font-semibold">Uhh...</h2>
          <h3 className="text-sm">Aún no hay productos cargados para tu empresa</h3>
          <h1 className="text-2xl font-semibold">{nameCompany}</h1>
          <Link className="text-lg font-semibold text-blue-300 hover:text-blue-700" to="/ua/product/create">¡Carga el primero!</Link>
        </div> 
        : products.map((p) => (
            <Card
            id={p.id}
            image={p.image}
            name={p.name}
            category={p.category}
            price={p.price}
            currency={p.currency}
            key={p.id}
            />
        ))}
    </div>
    ) 
}

export default CardsContainer;