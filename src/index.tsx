import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Comps/Home/App';
import Routing from './Routing/Route';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);


