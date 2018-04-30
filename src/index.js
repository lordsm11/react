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

ReactDOM.render(
        <BrowserRouter>
            <div>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">List of products</div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/products">Products</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <Route path='/home' component={Home}/>
                <Route path='/products' component={ProductList}/>
                <Route path="/products/:id" component={ProductDetail}/>
                <Route path="/about" component={About}/>
            </div>
        </BrowserRouter>,
        document.getElementById('root')
);


store.subscribe(function () {
    ReactDOM.render(<App/>, document.getElementById("root"));
});

registerServiceWorker();
