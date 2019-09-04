import React from 'react';
// import {AppContext} from '../../Context/AppContext';
import pin from '../../assets/i/pin.svg';
import link from '../../assets/i/link.svg';
import cal from '../../assets/i/date.svg';

const UserBio = (props) => {


  //destructure app state
  const { url, date, location} = props;

  return (
    <ul className="user __bio">
      <li>
        <img src={pin} alt="Location" />
        <p>{location}</p>
      </li>
      <li>
        <img src={link} alt="Location" />
        <a href={url} title={url} target='_blank' rel="noopener noreferrer">Link</a>
      </li>
      <li>
        <img src={cal} alt="Location" />
        <p>{date}</p>
      </li>
    </ul>
  )
}

export default UserBio
