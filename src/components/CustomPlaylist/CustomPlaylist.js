import React from "react";

import './CustomPlaylist.css';
import Tracklist from "../Tracklist/Tracklist";

const CustomPlaylist = (props) => {

    return (
        <div className="CustomPlaylist">
            <Tracklist tracks={props.newPlaylist} addOrRemove={false} />
            <button className="Save">SAVE CREATION</button>
        </div>
    );
}

export default CustomPlaylist;