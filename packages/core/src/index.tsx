import 'normalize.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import * as singleSpa from 'single-spa';

import App from './App';
import registerLiveWindow from './loaders/live-window';

ReactDOM.render(<App />, document.getElementById('root'));

registerLiveWindow();

singleSpa.start();
