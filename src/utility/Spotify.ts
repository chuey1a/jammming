const clientId = '12bd948d073f474b8f1878033b1fb896'; // client ID
const redirectUri = 'https://chuey1a.github.io/jammming/';
// const redirectUri = 'http://localhost:3000/';
let accessToken: string;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', '', '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location.href = accessUrl;
    }
  },

  async search(term: any) {
    const accessToken = Spotify.getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const jsonResponse = await response.json();
    if (!jsonResponse.tracks) {
      return [];
    }
    return jsonResponse.tracks.items.map((track: { id: any; name: any; artists: { name: any; }[]; album: { name: any; }; uri: any; }) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri
    }));
  },

  savePlaylist(name: string, trackUris: string[]) {
    if (!name || !trackUris.length) {
      return;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId: any;

    return fetch('https://api.spotify.com/v1/me', { headers: headers }
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ name: name })
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({ uris: trackUris })
        });
      });
    });
  }
};

export default Spotify;
