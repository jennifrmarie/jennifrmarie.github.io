import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faEllipsisH, faAngleLeft, faChevronRight, faEnvelopeOpenText, faGreaterThan, faLessThan, faAngleRight, faSlash, faArrowLeft, faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { HashRouter } from 'react-router-dom';
library.add(fab, faEllipsisH, faChevronRight, faEnvelopeOpenText , faGreaterThan, faLessThan, faAngleLeft, faSlash, faAngleRight, faArrowLeft, faArrowRight)

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);
