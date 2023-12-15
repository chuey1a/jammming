import React, { useState } from "react";

import "./Track.css";

const Track = (props) => {

    console.log(props.track)

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} - {props.track.album}</p>
            </div>
            <button className="Action">{props.addOrRemove ? "+" : "-"}</button>
        </div>
    );
}

export default Track;
