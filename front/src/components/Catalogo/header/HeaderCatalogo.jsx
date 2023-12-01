import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import FiltroCategoria from "../filtros/filtroCategoria";

const HeaderCatalogo = () => {
    return(
        <div>
            <SearchBar />
            <FiltroCategoria />
        </div>
    )
}

export default HeaderCatalogo;