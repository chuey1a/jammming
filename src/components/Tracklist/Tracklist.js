import React, { useState } from "react";

import "./Tracklist.css";
import Track from "../Track/Track";

const Tracklist = (props) => {

    console.log(props.tracks);

    return (
        <div className="Tracklist">
            {props.tracks.map((track) => {
                return (
                    <Track 
                      track={track}
                      key={track.id}
                    />
                );
            })}
        </div>
    );
}

export default Tracklist;
