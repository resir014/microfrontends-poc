import 'normalize.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import * as singleSpa from 'single-spa';

import App from './App';
import registerLiveWindow from './loaders/live-window';
import registerChatWidget from './loaders/chat-window';

ReactDOM.render(<App />, document.getElementById('root'));

registerLiveWindow();
registerChatWidget();

singleSpa.start();
