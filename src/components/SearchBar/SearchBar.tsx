import React, { useState, useCallback } from "react";

import "./SearchBar.css";

const SearchBar = (props: { onSearch: Function; }) => {
    const [term, setTerm] = useState("");

    const handleSearchChange = useCallback(
        (event: { target: { value: React.SetStateAction<string>; }; }) => {
            setTerm(event.target.value);
        },
        []
    );

    const search = useCallback(
        (event: any) => {
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
