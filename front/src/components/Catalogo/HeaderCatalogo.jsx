import React from "react";
import SearchBar from "../Search/SearchBar";
import FilterByCategory from "../Filters/FilterByCategory";
import SortByName from "../Sorts/SortByName";
import SortByPrice from "../Sorts/SortByPrice";
import SortByStock from "../Sorts/SortByStock";
import { useSelector } from "react-redux";
import logoFlecha from "../../assets/Imagenes/logoFlecha.png"
import ButtonReset from "../Utils/Buttons/ButtonReset";

const HeaderCatalogo = ({ setSearchQuery }) => {

    const company = useSelector(state => state.company.company);
    //console.log("COMPANY", company);
    const nameCompany = company.name;
    const logo = company.image.url ? company.image.url : logoFlecha

    return(
        <div className="w-100vw m-6 flex flex-col">
            <div className="flex justify-center items-center gap-4">
                <h1 className="text-4xl text-center font-barlow-condensed text-gray-700 font-semibold">{nameCompany}</h1>
                <img className="w-14 h- rounded-full" src={logo} alt="logo" />
            </div>
            <div className="py-4  px-8 border-2 border-gray-200 shadow shadow-gray-500 flex flex-row justify-between bg-white">
                <SearchBar setSearchQuery={setSearchQuery} />
                <FilterByCategory />
                <SortByName />
                <SortByPrice />
                <SortByStock />
                <ButtonReset />
            </div>
        </div>
    )
}

export default HeaderCatalogo;