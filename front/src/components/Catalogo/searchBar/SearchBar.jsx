import React from "react";

const SearchBar = ({ setSearchQuery }) => {
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Buscar productos..."
            onChange={handleInputChange}
        />
    );
};

export default SearchBar;