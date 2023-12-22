import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import FilterByCategory from "../filters/FilterByCategory";
import SortByName from "../Sort/SortByName";
import SortByPrice from "../Sort/SortByPrice";
import SortByStock from "../Sort/SortByStock";
//import {useSelector} from "react-redux";

const HeaderCatalogo = ({ setSearchQuery }) => {
    // const company = useSelector(state => state.company);
    // const nameCompany = company.nameCompany;
    const nameCompany = 'Pet Shop'

    return(
        <div className="mb-6 mt-1 flex flex-col">
            <h1 className="text-3xl text-center font-semibold">{nameCompany}</h1>
            <div className="p-4 border-2 border-gray-200 shadow shadow-gray-500 flex flex-row justify-between bg-white">
                <SearchBar setSearchQuery={setSearchQuery}  className="w-1/5"/>
                <FilterByCategory />
                <SortByName />
                <SortByPrice />
                <SortByStock />
            </div>
        </div>
    )
}

export default HeaderCatalogo;