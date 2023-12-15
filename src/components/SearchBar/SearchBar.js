import React, { useState, useCallback } from "react";

import "./SearchBar.css";

const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const handleSearchChange = useCallback(
        (event) => {
            setTerm(event.target.value);
        },
        []
    );

    const search = useCallback(
        (event) => {
            props.onSearch(term);
        },
        [props.onSearch, term]
    );

    return (
        <div className="SearchBar">
            <input id='searchInput' placeholder="Pick a song" onChange={handleSearchChange} />
            <button className="SearchButton" onClick={search}>SEARCH!</button>
        </div>
    );
}

export default SearchBar;
