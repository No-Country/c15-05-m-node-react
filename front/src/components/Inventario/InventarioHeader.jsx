import React from "react";
import FilterByCategory from "../Catalogo/filters/FilterByCategory";
import SortByPrice from "../Catalogo/Sort/SortByPrice";
import SortByStock from "../Catalogo/Sort/SortByStock";
import SearchBar from "../Catalogo/SearchBar/SearchBar";

 const InventarioHeader = ( {setSearchQuery} ) => {
    return(
        <div>
            <div className="flex justify-center items-center gap-4">
                <h1 className="text-4xl text-center font-barlow-condensed text-gray-700 font-semibold">{nameCompany}</h1>
                <img className="w-14 h- rounded-full" src={logo} alt="logo" />
            </div>
            <div className="grid grid-cols-11">
            {/* este div contiene los titulos del listado */}
                <h1>Estado</h1>
                <FilterByCategory/>
                <SearchBar setSearchQuery={setSearchQuery}/>
                <h1>Moneda</h1>
                <SortByPrice/>
                <SortByStock/>
                <h1 className="col-span-3">Acciones</h1>
            </div>
        </div>
    )
 }

 export default InventarioHeader;