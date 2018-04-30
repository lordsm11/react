import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ProductDetail from './components/ProductDetail';
import ProductList from "./components/productList";
import Home from './components/home.component.jsx'
import About from './components/about.component.jsx'

import { Link } from 'react-router-dom';
import Naviguation from "./components/Naviguation";

ReactDOM.render(
        <BrowserRouter>
            <div>
                <Naviguation/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/products' component={ProductList}/>
                <Route exact path="/product/:id" component={ProductDetail}/>
                <Route exact path="/about" component={About}/>
            </div>
        </BrowserRouter>,
        document.getElementById('root')
);


store.subscribe(function () {
    ReactDOM.render(<App/>, document.getElementById("root"));
});

registerServiceWorker();
