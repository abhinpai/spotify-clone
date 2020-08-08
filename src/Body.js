import React from 'react';
import './Body.css';
import BodyHeader from './BodyHeader';

function Body({ spotify }) {
  return (
    <div className='body'>
      <BodyHeader spotify={spotify} />
      <div className='body__info'>
        <img src='https://avatars0.githubusercontent.com/u/15942876' alt='body-info'></img>

        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekely</h2>
          <p>Description....</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
