import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <App />
 // </React.StrictMode> //2 api calls are there because of this, just uncomment this if deploying on prod.
);

