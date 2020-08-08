import React from 'react';
import './BodyHeader.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';

function BodyHeader() {
  const [{ user }] = useDataLayerValue();
  console.log(useDataLayerValue());
  return (
    <div className='bodyHeader'>
      <div className='bodyHeader__left'>
        <SearchIcon />
        <input placeholder='Search for Artists, Songs, or Albums' type='text' />
      </div>
      <div className='bodyHeader__right'>
        <Avatar src={user?.images[0]?.url} alt='avatar' />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default BodyHeader;
