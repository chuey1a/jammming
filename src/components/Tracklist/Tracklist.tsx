import React from "react";

import "./Tracklist.css";
import Track from "../Track/Track";
import { iTrack } from "../App/App";

const Tracklist = (props: { tracks: iTrack[]; addOrRemove: boolean; addOrRemoveFn: Function; }) => {

    return (
        <div className="Tracklist">
            {props.tracks.map((track: iTrack) => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                        addOrRemove={props.addOrRemove}
                        addOrRemoveFn={props.addOrRemoveFn} id={""}                    />
                );
            })}
        </div>
    );
}

export default Tracklist;
