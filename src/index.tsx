import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { startServiceWorker } from 'src/utils/startServiceWorker';

isProd && startServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
