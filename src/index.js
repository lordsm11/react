import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Product from './components/Product';

ReactDOM.render(
        <BrowserRouter>
            <div>
                <Route path='/' component={App}/>
                <Route path='/contact' component={Product}/>
            </div>
        </BrowserRouter>,
        document.getElementById('root')
);


store.subscribe(function () {
    ReactDOM.render(<App/>, document.getElementById("root"));
});

registerServiceWorker();
