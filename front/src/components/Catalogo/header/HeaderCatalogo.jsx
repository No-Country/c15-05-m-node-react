import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import FilterByCategory from "../filters/FilterByCategory";
import SortByPrice from "../Sort/SortByPrice";
import SortByStock from "../Sort/SortByStock";
import { useSelector } from "react-redux";


const HeaderCatalogo = ({ setSearchQuery }) => {

    const company = useSelector(state => state.company.company);
    console.log("COMPANY", company);
    const nameCompany = company.name;
    //const nameCompany = 'Pet Shop'

    return(
        <div className="w-100vw m-6 flex flex-col">
            <div className="flex justify-center items-center gap-4">
                <h1 className="text-3xl text-center font-semibold">{nameCompany}</h1>
                <img className="w-14 h- rounded-full" src={company.image} alt="logo" />
            </div>
            <div className="p-4 border-2 border-gray-200 shadow shadow-gray-500 flex flex-row justify-between bg-white">
                <SearchBar setSearchQuery={setSearchQuery} />
                <FilterByCategory />
                <SortByPrice />
                <SortByStock />
            </div>
        </div>
    )
}

export default HeaderCatalogo;