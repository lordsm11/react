import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import App from './App';

import React from 'react';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();
