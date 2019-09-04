import React from 'react';
import UserImg from './UserImg';
import UserBio from './UserBio';
// import { AppConsumer } from '../../Context/AppContext';

const Sidebar = ({user, info}) => {

  return (
    
      <aside className="sidebar __global">
        <UserImg name={user} {...info} />
        <UserBio {...info} />
      </aside>
    
  )
}

export default Sidebar;
