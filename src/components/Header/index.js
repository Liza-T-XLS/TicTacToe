// == Imports

import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

// == Component

const Header = () => (
  <header className="header">
    <h1><Link to="/">Tic Tac Toe</Link></h1>
    <p className="subheading">You have probably ended up in some part of the galaxy where people only have one computer for the whole family...</p>
  </header>
);

// == Export

export default Header;
