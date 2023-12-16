import React from "react";
import InventarioList from "./InventarioList";
import InventarioHeader from "./InventarioHeader";

const ViewInventario = () => {
    return(
        <div>
            <InventarioHeader setSearchQuery={setSearchQuery}/>
            <InventarioList searchQuery={searchQuery}/>
        </div>
    )
}

export default ViewInventario;