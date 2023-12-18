import React from "react";

import "./Track.css";

const Track = (props) => {

    const handleAddOrRemove = () => {
        props.addOrRemoveFn(props.track)
    };

    return (
        <div className="Track">
            <div className="Track-info">
                <h4>{props.track.name}</h4>
                <p>{props.track.artist} - {props.track.album}</p>
            </div>
            <button className="Action" onClick={handleAddOrRemove}>{props.addOrRemove ? "+" : "-"}</button>
        </div>
    );
}

export default Track;
