import React from "react";

const SortByStock = () => {
    return (
        <div>
            <select name="stockOrder">
                <option value='' readOnly hidden>Stock</option>
                <option value="Asc"> - a +</option>
                <option value="Desc">+ a -</option>
            </select>
        </div>
    )
};

export default SortByStock;