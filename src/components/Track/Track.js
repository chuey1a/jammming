import React, { useState } from "react";

import "./Track.css";

const Track = (props) => {

    console.log(props.addOrRemove)

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.title}</h3>
                <p>{props.track.artist} - {props.track.album}</p>
            </div>
            <button className="Action">{props.addOrRemove ? "+" : "-"}</button>
        </div>
    );
}

export default Track;
