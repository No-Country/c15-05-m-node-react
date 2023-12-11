import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { sortByPriceAction } from "../../../redux/actionsProducts";

const SortByPrice = () => {
    const dispatch = useDispatch();
    const [orderValue, setOrderValue] = useState('');

    const handlerSortByPrice = (e) => {
        dispatch(sortByPriceAction(e.target.value));
        setOrderValue('');
    }


    return (
        <div>
        <select name="sortPrice" onChange={handlerSortByPrice} value={orderValue}>
            <option value='' readOnly hidden>Precio</option>
            <option value="Asc" > - a + </option>
            <option value="Desc"> + a - </option>
        </select>
    </div>
    )
};

export default SortByPrice