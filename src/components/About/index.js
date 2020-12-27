// == Imports

import React from 'react';
import { Helmet } from 'react-helmet';

import './about.scss';

// == Component

const About = () => (
  <div className="about">
    <Helmet>
      <title>TicTacToe | About</title>
    </Helmet>
    <p>Hello,<br /><br />
      I built this website for training purposes. If you like it, please check out my online <a href="https://liza-t-xls.netlify.app/index-eng.html" title="Liza-t-xls" target="_blank" rel="noopener noreferrer" className="resume">résumé</a> :)<br /><br />
      Enjoy!
    </p>
    <p className="tools">
      #javascript #react #redux #react-router-dom #scss
      <br /><br />
      <a href="http://www.freepik.com" title="Freepik" target="_blank" rel="noopener noreferrer">Background designed by pikisuperstar / Freepik</a>
    </p>
  </div>
);

// == Export

export default About;
