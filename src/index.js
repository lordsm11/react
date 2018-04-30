import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import App from './App';

import React from 'react';

ReactDOM.render(<App/>,document.getElementById('root'));
store.subscribe(function () {
    ReactDOM.render(<App/>, document.getElementById("root"));
});

registerServiceWorker();
