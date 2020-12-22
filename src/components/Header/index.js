// == Imports

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './header.scss';

// == Component

const Header = ({ ready, turnCount }) => {
  const cssClassName = classNames('subheading', { undisplayed: ready || (!ready && turnCount > 0) });

  return (
    <header className="header">
      <h1><Link to="/">Tic Tac Toe</Link></h1>
      <p className={cssClassName}>You have probably ended up in some part of the galaxy where people only have one computer for the whole family...</p>
    </header>
  );
};

// PropTypes

Header.propTypes = {
  ready: PropTypes.bool.isRequired,
  turnCount: PropTypes.number.isRequired,
};

// == Export

export default Header;
