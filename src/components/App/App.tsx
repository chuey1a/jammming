import React, { useState, useCallback, useEffect } from "react";

import Results from '../Results/Results';
import SearchBar from '../SearchBar/SearchBar';
import CustomPlaylist from '../CustomPlaylist/CustomPlaylist';
import Spotify from "../../utility/Spotify";

import './App.css';

export interface iTrack {
  id: string;
  uri: string;
  name: string;
  artist: string;
  album: string;
}

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState<iTrack[]>([]);
  const [playlistName, setPlaylistName] = useState("");

  useEffect(() => {
    Spotify.getAccessToken()
  }, []);
  const search = useCallback(
    (term: any) => {
      Spotify.search(term).then((results) => {
        results.length = 12;
        setSearchResults(results);
      });
    }, []);

  const addFn = useCallback(
    (track: iTrack) => {
      if (playlist.some((existingTracks: iTrack) => existingTracks.id === track.id))
        return;

      setPlaylist((existingTracks) => [...existingTracks, track]);
    },
    [playlist]
  );

  const removeFn = useCallback(
    (track: { id: string; }) => {
      setPlaylist((existingTracks) => existingTracks.filter((currentTrack: iTrack) => currentTrack.id !== track.id));
    },
    []
  );

  const updatePlaylistName = useCallback((name: React.SetStateAction<string>) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlist.map((track: iTrack) => track.uri);
    const savePromise = Spotify.savePlaylist(playlistName, trackUris);

    if (savePromise) {
      savePromise.then(() => {
        setPlaylistName("New Playlist");
        setPlaylist([]);
      }).catch((error) => {
        // Handle errors if necessary
        console.error("Save playlist error:", error);
      });
    } else {
      // Handle the case where the promise is undefined
      console.warn("Save playlist promise is undefined");
    }
  }, [playlistName, playlist]);

  return (
    <div>
      <h1>jammming</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="Playlist">
          <Results SearchResults={searchResults} addFn={addFn} />
          <CustomPlaylist
            newPlaylist={playlist}
            removeFn={removeFn}
            onSave={savePlaylist}
            onNameChange={updatePlaylistName} />
        </div>
      </div>
    </div>
  );
}

export default App;
