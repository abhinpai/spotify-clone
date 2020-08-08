import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokeFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';


const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokeFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, []);
  return <div className='app'>{token ? <h2>I logged</h2> : <Login />}</div>;
}

export default App;
