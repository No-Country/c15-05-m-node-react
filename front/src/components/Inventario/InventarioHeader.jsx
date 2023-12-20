import React from "react";
import { useSelector } from "react-redux";
import FilterByCategory from "../Filters/FilterByCategory";
import SortByPrice from "../Sorts/SortByPrice";
import SortByStock from "../Sorts/SortByStock";
import SortByName from "../Sorts/SortByName";
import SearchBar from "../Search/SearchBar";
import logoFlecha from "../../assets/Imagenes/logoFlecha.png"
import ButtonReset from "../Utils/Buttons/ButtonReset";

 const InventarioHeader = ( {setSearchQuery} ) => {
    const company = useSelector(state => state.company.company);
    //console.log("COMPANY", company);
    const nameCompany = company ? company.name : null;
    const logo = company ? company.image.url : logoFlecha;

    return(
        <div>
            <div className="flex justify-center items-center gap-4">
                <h1 className="text-4xl text-center font-barlow-condensed text-gray-700 font-semibold">{nameCompany}</h1>
                <img className="w-14 h- rounded-full" src={logo} alt="logo" />
            </div>
                <SearchBar setSearchQuery={setSearchQuery}/>
                <ButtonReset />
            <div className="flex flex-row w-full">
            {/* este div contiene los titulos del listado */}
                <h1>Estado</h1>
                <FilterByCategory />
                <SortByName />
                <h1/>
                <h1>Moneda</h1>
                <SortByPrice />
                <SortByStock />
                <h1>Acciones</h1>
            </div>
        </div>
    )
 }

 export default InventarioHeader;