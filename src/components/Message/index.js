// ==  Imports

import React from 'react';
import PropTypes from 'prop-types';

import './message.scss';

// == Component

const Message = ({ content }) => (
  <div className="message">
    <p>{content}</p>
  </div>
);

// PropTypes

Message.propTypes = {
  content: PropTypes.string.isRequired,
};

// == Export

export default Message;
