import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokeFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokeFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user,
        });
      });
      spotify.getUserPlaylists().then(playlists => {
        console.log(playlists);
        dispatch({
          type: 'SET_PLAYLIST',
          playlists,
        });
       
      });
      // spotify.play().then(res => console.log(res))
    }
  }, []);
  return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
