import React from "react";
import Card from "../card/Card"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const CardsContainer = ({ searchQuery }) => {

  //const { products} = useSelector(state => state.products);
  const products = useSelector(state => state.company.products)
  //console.log("PRODUCTS" + products);

  const filteredProducts = products.length ? products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];
//console.log("FILTERED" + filteredProducts);

  const productsFormatted = filteredProducts.length ? filteredProducts.map((product, index) => {
    const name = product.name.toLowerCase();
    const nameFormatted= name.charAt(0).toUpperCase() + name.slice(1);
    return {
      ...product,
      name: nameFormatted,
      key: index
    }
  }) : [];
  //console.log("FORMATED" + productsFormatted);

  const sortProducts = productsFormatted.length ? productsFormatted.sort((a, b) => {
    if(a.name > b.name) {return 1}
    if(b.name > a.name) {return -1}
    return 0 
  }) : [];
  //console.log("SORTPRODUCTS" + sortProducts);

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
      {!sortProducts.length ? (
        searchQuery !== "" && searchQuery !== products.name ? (
          <div className="w-100vw bg-white rounded-2xl text-center py-40 px-96 mx-10">
            <h2 className="text-xl font-semibold">Uhh...</h2>
            <h3 className="text-sm">
              No hay productos con ese nombre
            </h3>
          </div>
        ) : (
          <div className="w-100vw bg-white rounded-2xl text-center py-40 px-96 mx-10">
            <h2 className="text-xl font-semibold">Uhh...</h2>
            <h3 className="text-sm">
              Aún no hay productos cargados para tu empresa
            </h3>
            <h1 className="text-2xl font-semibold">{nameCompany}</h1>
            <Link
              className="text-lg font-semibold text-blue-300 hover:text-blue-700"
              to="/ua/product/create"
            >
              ¡Carga el primero!
            </Link>
          </div>
        )
      ) : (
        sortProducts.map((p) => (
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
