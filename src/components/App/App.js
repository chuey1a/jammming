import React, { useState, useCallback } from "react";

import Results from '../Results/Results';
import SearchBar from '../SearchBar/SearchBar';
import CustomPlaylist from '../CustomPlaylist/CustomPlaylist';
import Spotify from "../../utility/Spotify";

import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const search = useCallback(
    (term) => {
      Spotify.search(term).then(setSearchResults);
    },[]);

  const addFn = useCallback(
    (track) => {
      if (playlist.some((existingTracks) => existingTracks.id === track.id))
        return;

      setPlaylist((existingTracks) => [...existingTracks, track]);
    },
    [playlist]
  );

  const removeFn = useCallback(
    (track) => {
      setPlaylist((existingTracks) => existingTracks.filter((currentTrack) => currentTrack.id !== track.id));
    },
    []
  );

  return (
    <div>
      <h1>jammming</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="Playlist">
          <Results SearchResults={searchResults} addFn={addFn} />
          <CustomPlaylist newPlaylist={playlist} removeFn={removeFn} />
        </div>
      </div>
    </div>
  );
}

export default App;
