// == Imports

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'src/store';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'src/containers/App';

// Component

const rootReactElement = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
