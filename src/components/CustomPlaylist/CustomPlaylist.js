import React from "react";

import './CustomPlaylist.css';
import Tracklist from "../Tracklist/Tracklist";

const CustomPlaylist = (props) => {

    const nameUpdate = (event) => {
        props.onNameChange(event.target.value);
    };

    return (
        <div className="CustomPlaylist">
            <input onChange={nameUpdate} id="playlistName" />
            <Tracklist tracks={props.newPlaylist} addOrRemove={false} addOrRemoveFn={props.removeFn}/>
            <button className="Save" onClick={props.onSave}>SAVE CREATION</button>
        </div>
    );
}

export default CustomPlaylist;