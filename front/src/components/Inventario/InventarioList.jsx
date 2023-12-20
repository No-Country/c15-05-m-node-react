import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { useState, useEffect } from "react";
import InventarioCard from "./InventarioCard";
import ButtonEdit from "../Utils/Buttons/ButtonEdit";
import ButtonDelete from "../Utils/Buttons/ButtonDelete";
import ButtonViewSales from "../Utils/Buttons/ButtonViewSales";
import ConditionalState from "../Utils/ConditionalState";

const InventarioList = ({searchQuery}) => {
    const {products} = useSelector(state => state.products)
    
    const filteredProducts = products.length ? products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];
    
    const productsFormatted = filteredProducts.length ? filteredProducts.map((product, index) => {
        const name = product.name;
        const nameFormatted= name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        return {
          ...product,
          name: nameFormatted,
          key: index
        }
      }) : [];
  
    const {company} = useSelector(state => state.company);
    const nameCompany = company ? company.name : null;

    return (
        <div>
           {!productsFormatted.length ? (
        searchQuery !== "" && searchQuery !== products.name ? (
          <div className="w-100vw bg-white rounded-2xl text-center py-40 px-96 mx-10 font-roboto text-gray-500">
            <h2 className="text-xl font-semibold">Uhh...</h2>
            <h3 className="text-sm">
              No hay productos con ese nombre
            </h3>
          </div>
        ) : (
          <div className="w-100vw bg-white rounded-2xl text-center py-40 px-96 mx-10">
            <h2 className="text-xl font-semibold font-roboto text-gray-500">Uhh...</h2>
            <h3 className="text-sm font-roboto text-gray-500">
              Aún no hay productos cargados para tu empresa
            </h3>
            <h1 className="text-2xl font-semibold font-barlow-condensed text-gray-600">{nameCompany}</h1>
            <Link
              className="text-lg font-semibold font-roboto text-[#4DD0E1] hover:text-[#00bcd4]"
              to="/ua/product/create"
            >
              ¡Carga el primero!
            </Link>
          </div>
        )
      ) : (<ul>
          {productsFormatted.map((p, index) => (
            <li className="flex flex-row border-2 border-black">
              <ConditionalState stock={p.quantity} />
              <InventarioCard
                id={p._id}
                name={p.name}
                image={p.image}
                category={p.category}
                price={p.price}
                currency={p.currency}
                stock={p.quantity}
                key={index}                
                />
              <ButtonEdit />
              <ButtonDelete id={p._id} />
              <ButtonViewSales id={p._id} name={p.name}/>
            </li>
          ))}
          </ul>)}
        </div>
    )
}

export default InventarioList;