import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import logo from '../../assets/i/logo.svg';

const Header = () => {
  return (    
      <header className="header --global">
        <div className="logo">
          <h1 className="shake">
            <Link to='/'>
              <img src={logo} alt="Welcome to Chrrp" title="Welcome to Chrrp" />
              <span>chrrp</span>
            </Link>
          </h1>
        </div>
        <Search />      

      </header>
  )
}

export default Header
