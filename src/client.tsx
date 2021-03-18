import React from 'react';
import ReactDOM from 'react-dom';
import '@src/styles/App.css';
import App from 'src/App';
import 'babel-polyfill';
import { startServiceWorker } from 'src/utils/startServiceWorker';

isProd && startServiceWorker();

ReactDOM.hydrate(<App />, document.getElementById('root'));
