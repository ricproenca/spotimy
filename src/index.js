import 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import '@Services/i18n';
import startLocalApi from '@Services/server/start';

import App from './App';

startLocalApi(false);

ReactDOM.render(<App />, document.getElementById('root'));
