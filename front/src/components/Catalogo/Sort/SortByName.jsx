import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { sortByNameAction } from "../../../redux/actionsProducts";

const SortByName = () => {
    const dispatch = useDispatch();
    const [orderValue, setOrderValue] = useState('');

    const handlerSortByName = (e) => {
        dispatch(sortByNameAction(e.target.value));
        setOrderValue('');
    }

    return (
        <div>
            <select name="sortName" onChange={handlerSortByName} value={orderValue}>
                <option value='' readOnly hidden>Producto</option>
                <option value="Asc"> A a Z</option>
                <option value="Desc">Z a A</option>
            </select>
        </div>
    )
};

export default SortByName