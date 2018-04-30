import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import About from "./components/about";
import ProductList from "./components/productList";
import ProductDetail from "./components/ProductDetail";
import Home from "./components/home";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
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
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/products' component={ProductList}/>
                    <Route exact path="/product/:id" component={ProductDetail}/>
                    <Route exact path="/about" component={About}/>
                </div>
            </BrowserRouter>
        )
    }
}
export default App;
