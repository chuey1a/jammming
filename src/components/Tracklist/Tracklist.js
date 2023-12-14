import React, { useState } from "react";

import "./Tracklist.css";
import Track from "../Track/Track";

const Tracklist = (props) => {

    return (
        <div className="Tracklist">
            {props.tracks.map((track) => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                        addOrRemove={props.addOrRemove}
                    />
                );
            })}
        </div>
    );
}

export default Tracklist;
