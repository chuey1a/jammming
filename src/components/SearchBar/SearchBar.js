import React, { useState, useCallback } from "react";

import "./SearchBar.css";

const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const handleSearchChange = (event) => {
        setTerm(event.target.value);
    };

    const search = useCallback(() => {
        props.onSearch(term);
      }, [props.onSearch, term]);

    return (
        <div className="SearchBar">
            <input placeholder="Pick a song" onChange={handleSearchChange} />
            <button className="SearchButton" onClick={search}>search</button>
        </div>
    );
}

export default SearchBar;
