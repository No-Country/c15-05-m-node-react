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
            className="text-md font-roboto"
        />
    );
};

export default SearchBar;