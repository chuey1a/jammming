import React, { useState } from "react";

import Results from '../Results/Results';
import SearchBar from '../SearchBar/SearchBar';
import CustomPlaylist from '../CustomPlaylist/CustomPlaylist';
import './App.css';

const testTrack1 = {
  title: 'somestring',
  artist: 'me',
  album: 'BBTM',
  id: 0
};

const testTrack2 = {
  title: 'somestring',
  artist: 'you',
  album: '1989',
  id: 1
};

const tracks = [testTrack1, testTrack2];


function App() {
  const [playlist, setPlaylist] = useState([]);

  return (
    <div>
      <h1>jammming</h1>
        <div className="App">
          <SearchBar />
          <div className="Playlist">
            <Results SearchResults={tracks} />
            <CustomPlaylist newPlaylist={tracks}/>
          </div>
      </div>
    </div>
  );
}

export default App;
