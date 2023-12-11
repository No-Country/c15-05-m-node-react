import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import FilterByCategory from "../filters/FilterByCategory";
import SortByName from "../Sort/SortByName";
import SortByPrice from "../Sort/SortByPrice";
import SortByStock from "../Sort/SortByStock";
//import {useSelector} from "react-redux";

const HeaderCatalogo = () => {
    // const company = useSelector(state => state.company);
    // const nameCompany = company.nameCompany;
    const nameCompany = 'Pet Shop'

    return(
        <div className="w-100vw m-6 flex flex-col">
            <h1 className="text-3xl text-center font-semibold">{nameCompany}</h1>
            <div className="p-4 border-2 border-gray-200 shadow shadow-gray-500 flex flex-row justify-between bg-white">
                <SearchBar />
                <FilterByCategory />
                <SortByName />
                <SortByPrice />
                <SortByStock />
            </div>
        </div>
    )
}

export default HeaderCatalogo;