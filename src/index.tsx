import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { startServiceWorker } from 'src/utils/startServiceWorker';

startServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
