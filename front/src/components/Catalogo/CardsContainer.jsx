// import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import arrayFormatted from "../../Utils/catalogo/arrayFormatted"
// import sortArray from "../../Utils/catalogo/sortArray"

const CardsContainer = ({ searchQuery }) => {

  const { products} = useSelector(state => state.products);
  //const products = useSelector(state => state.company.products)
  //console.log("PRODUCTS" + products);

  const filteredProducts = products.length ? products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];
//console.log("FILTERED" + filteredProducts);

  const productsFormatted = filteredProducts.length ? filteredProducts.map((product, index) => {
    const name = product.name;
    const nameFormatted= name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return {
      ...product,
      name: nameFormatted,
      key: index
    }
  }) : [];
  //console.log("FORMATED" + productsFormatted);

  const { company } = useSelector(state => state.company);
  const [ compañia, setCompañia ] = useState();

// const products = useSelector(state => state.products)
// const company = useSelector(state => state.company);
const nameCompany = company.name;
//console.log("company", company)
useEffect(() =>{
setCompañia(company)
},[company])


  return (
    <div className="flex flex-wrap mx-10">
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
      ) : (
        productsFormatted.map((p) => (
          <Card
            id={p.id}
            image={p.image}
            name={p.name}
            category={p.category}
            price={p.price}
            currency={p.currency}
            key={p.id}
          />
        ))
      )}
    </div>
  );
};

export default CardsContainer;
