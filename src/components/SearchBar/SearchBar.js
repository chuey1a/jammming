import React, { useState } from "react";

import "./SearchBar.css";

const SearchBar = () => {
    const [term, setTerm] = useState("");

    const handleSearchChange = (event) => {
        setTerm(event.target.value);
        console.log(event.target.value)
    };

    const handleSearch = () => {

    };

    return (
        <div className="SearchBar">
            <input placeholder="Pick a song" onChange={handleSearchChange} />
            <button className="SearchButton" onClick={handleSearch}>search</button>
        </div>
    );
}

export default SearchBar;
