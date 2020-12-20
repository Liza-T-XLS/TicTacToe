// ==  Imports

import React from 'react';
import { Link } from 'react-router-dom';

import './notFound.scss';

// == Component

const NotFound = () => (
  <div className="notFound">
    <p className="notFoundText">Oops! The page you are looking for doesn't exist.<br />
    </p>
    <button type="button" className="homeButton"><Link to="/">Go back to homepage</Link></button>
  </div>
);

// == Export

export default NotFound;
