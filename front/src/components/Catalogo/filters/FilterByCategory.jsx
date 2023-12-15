import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { filterByCategoryAction } from "../../../redux/actionsProducts"

const FilterByCategory = () => {
    const products = useSelector(state => state.company.products)
    //console.log("PRODUCTOS", products);
    
    //genero el array que contenga todas las categorias, estandarizadas, sin repetir, ordenadas alfabticamente
    const concatCategories = products.length ? products.flatMap(product => product.category).flat() : [];
    const capitalLetterArray = concatCategories.length ? concatCategories.map(category => category[0].toUpperCase() + category.slice(1).toLowerCase()) : [];
    const notRepeatCategories = capitalLetterArray.length ? capitalLetterArray.filter((category, index) => capitalLetterArray.indexOf(category) === index) : [];
    const allCategoriesSort = notRepeatCategories.length ? notRepeatCategories.sort((a, b) => a.localeCompare(b)) : [];

    const dispatch = useDispatch();

    const filterHandler = (e) => {
        dispatch(filterByCategoryAction(e.target.value));
        //console.log("despacha la action");
        //console.log("value enviado: ", e.target.value);
    }


    return(
        <div className="text-md font-roboto text-gray-400">
            <select name="categoryFilter" onChange={filterHandler}>
                {/* <option value='' readOnly hidden> Categorías</option> */}
                <option value='all'>Categorías</option>
                {allCategoriesSort && allCategoriesSort.map((category, index) => {
                    return(
                        <option key={index} value={category}>{category}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default FilterByCategory;
