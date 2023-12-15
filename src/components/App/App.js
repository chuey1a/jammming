import React, { useState, useCallback } from "react";

import Results from '../Results/Results';
import SearchBar from '../SearchBar/SearchBar';
import CustomPlaylist from '../CustomPlaylist/CustomPlaylist';
import Spotify from "../../utility/Spotify";

import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const search = (term) => {
    Spotify.search(term).then(setSearchResults);
  };

  return (
    <div>
      <h1>jammming</h1>
        <div className="App">
          <SearchBar onSearch={search} />
          <div className="Playlist">
            <Results SearchResults={searchResults} />
            <CustomPlaylist newPlaylist={playlist}/>
          </div>
      </div>
    </div>
  );
}

export default App;
