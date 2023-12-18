import React from "react";

import './Results.css';
import Tracklist from "../Tracklist/Tracklist";

const Results = (props: { SearchResults: any; addFn: any; }) => {

    return (
        <div className="Results">
            <h2>Results</h2>
            <Tracklist tracks={props.SearchResults} addOrRemove={true} addOrRemoveFn={props.addFn} />
        </div>
    );
}

export default Results;