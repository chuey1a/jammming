import React, { useState } from "react";

import './CustomPlaylist.css';
import Tracklist from "../Tracklist/Tracklist";

const CustomPlaylist = (props) => {

    const [playlistName, setPlaylistName] = useState("");

    const nameUpdate = (event) => {
        setPlaylistName(event.target.value);
    };

    return (
        <div className="CustomPlaylist">
            <input onChange={nameUpdate} id="playlistName" />
            <Tracklist tracks={props.newPlaylist} addOrRemove={false} addOrRemoveFn={props.removeFn}/>
            <button className="Save">SAVE CREATION</button>
        </div>
    );
}

export default CustomPlaylist;